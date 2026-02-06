"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function NewBlogPost() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateSlug = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const handleTitleChange = (e) => {
    const val = e.target.value;
    setTitle(val);
    setSlug(generateSlug(val));
  };

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("Title and content required");
      return;
    }

    setLoading(true);

    try {
      let imageURL = "";

      if (imageFile) {
        const imageRef = ref(storage, `blog/${Date.now()}-${imageFile.name}`);
        await uploadBytes(imageRef, imageFile);
        imageURL = await getDownloadURL(imageRef);
      }

      await addDoc(collection(db, "blogPosts"), {
        title,
        slug,
        excerpt,
        content,
        coverImage: imageURL,
        published,
        createdAt: new Date(),
      });

      router.push("/admin/blog");
    } catch (err) {
      console.error(err);
      alert("Failed to publish post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-120px)] flex justify-center items-start pt-16 px-6">

      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-12 space-y-8 border border-gray-100">

        {/* HEADER */}
        <div>
          <span className="text-[#26C6DA] text-xs font-black uppercase tracking-[0.35em]">
            Azcon CMS
          </span>
          <h1 className="text-4xl font-black text-[#0A192F] uppercase tracking-tight mt-3">
            New Blog Post
          </h1>
        </div>

        {/* TITLE */}
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-[0.25em] text-[#0A192F]">
            Title
          </label>
          <input
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#43597b] focus:outline-none focus:border-[#26C6DA]"
            placeholder="Post title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        {/* SLUG */}
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-[0.25em] text-[#0A192F]">
            URL Slug
          </label>
          <input
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#43597b] bg-gray-50 text-gray-500"
            value={slug}
            disabled
          />
        </div>

        {/* EXCERPT */}
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-[0.25em] text-[#0A192F]">
            Short Description
          </label>
          <textarea
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#43597b] focus:outline-none focus:border-[#26C6DA]"
            rows={2}
            placeholder="Brief summary of the article"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
          />
        </div>

        {/* IMAGE */}
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-[0.25em] text-[#0A192F]">
            Cover Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-600 file:bg-[#0A192F] file:text-white file:border-0 file:px-6 file:py-2.5 file:rounded-lg file:cursor-pointer hover:file:bg-[#26C6DA]"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-[0.25em] text-[#0A192F]">
            Article Content
          </label>
          <textarea
            className="w-full border border-gray-200 rounded-xl px-4 text-[#43597b] py-4 min-h-[320px] focus:outline-none focus:border-[#26C6DA]"
            placeholder="Write your article here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* PUBLISH TOGGLE */}
        <div className="flex items-center gap-4 pt-2">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="w-5 h-5 accent-[#26C6DA]"
          />
          <span className="text-sm font-black uppercase tracking-widest text-[#0A192F]">
            Publish Immediately
          </span>
        </div>

        {/* ACTION BAR */}
        <div className="flex justify-between items-center pt-8 border-t">

          <span className="text-xs text-gray-500 uppercase tracking-widest">
            {published ? "Will go live" : "Saved as draft"}
          </span>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-[#0A192F] text-white px-12 py-3 rounded-xl font-black uppercase tracking-widest hover:bg-[#26C6DA] hover:text-[#0A192F] transition-all disabled:opacity-60"
          >
            {loading ? "Publishing..." : "Create Post"}
          </button>
        </div>

      </div>
    </div>
  );
}
