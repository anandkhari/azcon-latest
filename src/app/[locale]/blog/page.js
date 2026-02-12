"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { translateText } from "@/lib/translate";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogSection() {
  const { language } = useLanguage();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [translatedById, setTranslatedById] = useState({});
  const [translating, setTranslating] = useState(false);

  useEffect(() => {
    const q = collection(db, "blogPosts");
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        const items = snapshot.docs
          .map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data(),
          }))
          .filter((post) => post.published === true);

        setPosts(items);
        setLoading(false);
      },
      () => {
        setPosts([]);
        setLoading(false);
      }
    );

    return () => unsub();
  }, []);

  useEffect(() => {
    let isActive = true;

    const runTranslation = async () => {
      if (language !== "ar" || posts.length === 0) return;
      setTranslating(true);

      const nextMap = { ...translatedById };

      for (const post of posts) {
        if (nextMap[post.id]) continue;

        const [tTitle, tExcerpt] = await Promise.all([
          translateText(post.title || "", "ar"),
          translateText(post.excerpt || "", "ar"),
        ]);

        if (!isActive) return;
        nextMap[post.id] = { title: tTitle, excerpt: tExcerpt };
        setTranslatedById({ ...nextMap });
      }

      if (isActive) setTranslating(false);
    };

    runTranslation();
    return () => {
      isActive = false;
    };
  }, [language, posts, translatedById]);

  const formattedPosts = useMemo(() => {
    const formatter = new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });

    return [...posts]
      .sort((a, b) => {
        const aDate = a.createdAt?.toDate?.() || new Date(0);
        const bDate = b.createdAt?.toDate?.() || new Date(0);
        return bDate - aDate;
      })
      .map((post) => ({
        ...post,
        displayDate: post.createdAt?.toDate?.()
          ? formatter.format(post.createdAt.toDate())
          : "Recent",
        displayImage:
          post.coverImage ||
          "https://images.unsplash.com/photo-1581094794329-c8112a4e5190?auto=format&fit=crop&q=80",
        displayCategory: post.category || "Azcon Insights",
        displayTitle:
          language === "ar"
            ? translatedById[post.id]?.title || post.title
            : post.title,
        displayExcerpt:
          language === "ar"
            ? translatedById[post.id]?.excerpt || post.excerpt
            : post.excerpt,
      }));
  }, [posts, language, translatedById]);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[70vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#0A192F]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/29470794/pexels-photo-29470794.jpeg"
            alt="Azcon Insights"
            fill
            className="object-cover scale-105 opacity-50"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-transparent to-[#0A192F]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="h-[2px] bg-[#26C6DA] mx-auto mb-10 shadow-[0_0_20px_rgba(38,198,218,0.8)]"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-6xl font-semibold text-white tracking-tight  mb-8 leading-[0.9]">
              Blogs
            </h1>

            <p className="text-gray-200 text-lg md:text-2xl max-w-3xl mx-auto font-light tracking-tight opacity-90">
              Find expert tips and home care insights with new articles added
              regularly.
            </p>
          </motion.div>
        </div>

        <div className="absolute top-12 left-12 w-24 h-24 border-t-2 border-l-2 border-[#26C6DA]/20 hidden md:block" />
        <div className="absolute bottom-12 right-12 w-24 h-24 border-b-2 border-r-2 border-[#26C6DA]/20 hidden md:block" />
      </section>

      {/* ===== BLOG GRID ===== */}
      <SectionWrapper className="bg-[#F8FAFC] py-32">
        <div
          className="container max-w-7xl mx-auto px-6"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {loading
              ? Array.from({ length: 6 }).map((_, idx) => (
                  <article key={idx} className="group">
                    <div className="relative aspect-[4/3] mb-8 overflow-hidden bg-slate-200 rounded-lg animate-pulse">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300" />
                    </div>
                    <div className="space-y-4">
                      <div className="h-3 w-32 bg-slate-200 rounded animate-pulse" />
                      <div className="h-7 w-3/4 bg-slate-200 rounded animate-pulse" />
                      <div className="h-4 w-full bg-slate-200 rounded animate-pulse" />
                      <div className="h-4 w-5/6 bg-slate-200 rounded animate-pulse" />
                    </div>
                  </article>
                ))
              : formattedPosts.length === 0
              ? (
                <div className="col-span-full border border-dashed rounded-xl p-14 text-center text-gray-400 text-sm">
                  No published posts yet. Check back soon.
                </div>
              )
              : formattedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug || post.id}`}
                    className="group cursor-pointer"
                  >
                    <article>
                      {/* ✅ Taller horizontal-friendly image */}
                      <div className="relative aspect-[4/3] mb-8 overflow-hidden bg-slate-200 rounded-lg">
                        <img
                          src={post.displayImage}
                          alt={post.title}
                          className="w-full h-full object-cover  group-hover:scale-105 transition-all duration-700"
                          loading="lazy"
                        />

                        <div className="absolute top-0 left-0 bg-[#0A192F] text-white px-4 py-2 text-[8px] font-mono uppercase tracking-widest">
                          {post.displayCategory}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-400">
                          <Clock size={12} />
                          <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                            {post.displayDate}
                          </span>
                        </div>

                        <h3 className="text-xl font-black text-[#0A192F] leading-tight uppercase  group-hover:text-[#26C6DA] transition-colors">
                          {post.displayTitle}
                        </h3>

                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                          {post.displayExcerpt}
                        </p>

                        <div className="pt-4 flex items-center gap-2 group/link">
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0A192F]">
                            Review Report
                          </span>
                          <ArrowUpRight
                            size={14}
                            className="text-[#26C6DA] group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                          />
                        </div>

                        <div className="w-full h-[1px] bg-slate-100 mt-6 relative overflow-hidden">
                          <div className="absolute inset-0 bg-[#26C6DA] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
          </div>
          {translating && language === "ar" && (
            <p className="mt-8 text-center text-[10px] uppercase tracking-[0.3em] text-gray-400">
              Translating...
            </p>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
