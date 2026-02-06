"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { db, storage } from "@/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function EditBlogPost() {
  const router = useRouter();
  const params = useParams();
  const postId = useMemo(() => params?.id, [params]);

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [published, setPublished] = useState(false);

  useEffect(() => {
    if (!postId) return;

    const fetchPost = async () => {
      setLoading(true);
      setNotFound(false);

      try {
        const snap = await getDoc(doc(db, "blogPosts", postId));
        if (!snap.exists()) {
          setNotFound(true);
          return;
        }

        const data = snap.data();
        setTitle(data.title || "");
        setSlug(data.slug || "");
        setExcerpt(data.excerpt || "");
        setContent(data.content || "");
        setCoverImage(data.coverImage || "");
        setPublished(Boolean(data.published));
      } catch (err) {
        console.error("Failed to load post:", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const handleSave = async () => {
    if (!title || !content) {
      alert("Title and content required");
      return;
    }

    setSaving(true);

    try {
      let nextCoverImage = coverImage;

      if (imageFile) {
        const imageRef = ref(storage, `blog/${Date.now()}-${imageFile.name}`);
        await uploadBytes(imageRef, imageFile);
        nextCoverImage = await getDownloadURL(imageRef);
      }

      await updateDoc(doc(db, "blogPosts", postId), {
        title,
        slug,
        excerpt,
        content,
        coverImage: nextCoverImage,
        published,
        updatedAt: new Date(),
      });

      router.push("/admin/blog");
    } catch (err) {
      console.error("Failed to update post:", err);
      alert("Failed to update post");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-120px)] flex items-center justify-center text-sm text-gray-400">
        Loading post...
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center text-center gap-4">
        <h1 className="text-2xl font-black text-[#0A192F]">Post not found</h1>
        <p className="text-gray-500 text-sm">
          The post you are trying to edit does not exist.
        </p>
        <button
          onClick={() => router.push("/admin/blog")}
          className="bg-[#0A192F] text-white px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-[#26C6DA] hover:text-[#0A192F] transition-all"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-120px)] flex justify-center items-start pt-16 px-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-12 space-y-8 border border-gray-100">
        <div>
          <span className="text-[#26C6DA] text-xs font-black uppercase tracking-[0.35em]">
            Azcon CMS
          </span>
          <h1 className="text-4xl font-black text-[#0A192F] uppercase tracking-tight mt-3">
            Edit Blog Post
          </h1>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-[0.25em] text-[#0A192F]">
            Title
          </label>
          <input
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#43597b] focus:outline-none focus:border-[#26C6DA]"
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

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

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-[0.25em] text-[#0A192F]">
            Cover Image
          </label>
          {coverImage && (
            <img
              src={coverImage}
              alt="Cover"
              className="w-full max-h-64 object-cover rounded-xl border border-gray-100"
            />
          )}
          <input
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-600 file:bg-[#0A192F] file:text-white file:border-0 file:px-6 file:py-2.5 file:rounded-lg file:cursor-pointer hover:file:bg-[#26C6DA]"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </div>

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

        <div className="flex items-center gap-4 pt-2">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="w-5 h-5 accent-[#26C6DA]"
          />
          <span className="text-sm font-black uppercase tracking-widest text-[#0A192F]">
            Published
          </span>
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <span className="text-xs text-gray-500 uppercase tracking-widest">
            {published ? "Visible to public" : "Draft only"}
          </span>
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-[#0A192F] text-white px-12 py-3 rounded-xl font-black uppercase tracking-widest hover:bg-[#26C6DA] hover:text-[#0A192F] transition-all disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
