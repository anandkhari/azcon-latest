"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import SectionWrapper from "@/components/SectionWrapper";
import { ArrowUpRight } from "lucide-react";
import { translateText } from "@/lib/translate";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogPostPage() {
  const router = useRouter();
  const params = useParams();
  const slug = useMemo(() => params?.slug, [params]);
  const { language } = useLanguage();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [translated, setTranslated] = useState({
    title: "",
    excerpt: "",
    content: "",
  });
  const [translating, setTranslating] = useState(false);

  useEffect(() => {
    if (!slug || typeof slug !== "string") return;

    const fetchPost = async () => {
      setLoading(true);
      setError("");

      try {
        const q = query(
          collection(db, "blogPosts"),
          where("slug", "==", slug),
          where("published", "==", true),
          limit(1)
        );

        const snap = await getDocs(q);

        if (snap.empty) {
          setPost(null);
          return;
        }

        const docSnap = snap.docs[0];
        setPost({ id: docSnap.id, ...docSnap.data() });
      } catch (err) {
        console.error("Blog fetch error:", err);
        setError("Failed to load this article.");
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  useEffect(() => {
    let isActive = true;

    const runTranslation = async () => {
      if (language !== "ar" || !post) return;
      setTranslating(true);

      const [tTitle, tExcerpt, tContent] = await Promise.all([
        translateText(post.title || "", "ar"),
        translateText(post.excerpt || "", "ar"),
        translateText(post.content || "", "ar"),
      ]);

      if (!isActive) return;
      setTranslated({
        title: tTitle,
        excerpt: tExcerpt,
        content: tContent,
      });
      setTranslating(false);
    };

    runTranslation();
    return () => {
      isActive = false;
    };
  }, [language, post]);

  const displayDate = useMemo(() => {
    if (!post?.createdAt?.toDate) return "Recent";
    try {
      return new Intl.DateTimeFormat(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }).format(post.createdAt.toDate());
    } catch {
      return post.createdAt?.toDate?.().toDateString?.() || "Recent";
    }
  }, [post]);

  const displayTitle =
    language === "ar" ? translated.title || post?.title : post?.title;
  const displayExcerpt =
    language === "ar" ? translated.excerpt || post?.excerpt : post?.excerpt;
  const displayContent =
    language === "ar" ? translated.content || post?.content : post?.content;

  if (loading || !slug) {
    return (
      <SectionWrapper className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-sm uppercase tracking-widest">
          Loading article...
        </p>
      </SectionWrapper>
    );
  }

  if (error) {
    return (
      <SectionWrapper className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-red-500 text-sm uppercase tracking-widest">
            {error}
          </p>
          <button
            onClick={() => router.push("/blog")}
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#0A192F]"
          >
            Back to Blog
            <ArrowUpRight size={14} className="text-[#26C6DA]" />
          </button>
        </div>
      </SectionWrapper>
    );
  }

  if (!post) {
    return (
      <SectionWrapper className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-gray-400 text-sm uppercase tracking-widest">
            Article not found
          </p>
          <button
            onClick={() => router.push("/blog")}
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#0A192F]"
          >
            Back to Blog
            <ArrowUpRight size={14} className="text-[#26C6DA]" />
          </button>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper className="bg-white min-h-screen py-24">
      <div
        className="max-w-4xl mx-auto px-6"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        {translating && language === "ar" && (
          <p className="mb-8 text-right text-[10px] uppercase tracking-[0.3em] text-gray-400">
            Translating...
          </p>
        )}

        {/* COVER IMAGE */}
        {post.coverImage && (
          <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-[420px] object-cover"
            />
          </div>
        )}

        {/* META */}
        <p className="text-[#26C6DA] text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          Azcon Insights
        </p>

        <h1 className="text-4xl md:text-5xl font-black text-[#0A192F] uppercase tracking-tight leading-tight mb-6">
          {displayTitle}
        </h1>

        <p className="text-gray-500 mb-12 text-sm">{displayDate}</p>

        {/* EXCERPT */}
        {displayExcerpt && (
          <p className="text-lg text-gray-600 leading-relaxed mb-12 border-l-4 border-[#26C6DA] pl-6 italic">
            {displayExcerpt}
          </p>
        )}

        {/* CONTENT */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed whitespace-pre-line">
          {displayContent}
        </div>
      </div>
    </SectionWrapper>
  );
}
