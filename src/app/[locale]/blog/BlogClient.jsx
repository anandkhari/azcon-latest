"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { translateText } from "@/lib/translate";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogClient({ initialPosts }) {
  const { language } = useLanguage();

  const [translatedById, setTranslatedById] = useState({});
  const [heroText, setHeroText] = useState({
    title: "Blogs",
    desc: "Find expert tips and home care insights with new articles added regularly.",
  });

  // 🔥 TRANSLATE POSTS
  useEffect(() => {
    let active = true;

    const runTranslation = async () => {
      if (language !== "ar") return;

      const nextMap = {};

      for (const post of initialPosts) {
        const [tTitle, tExcerpt] = await Promise.all([
          translateText(post.title || "", "ar"),
          translateText(post.excerpt || "", "ar"),
        ]);

        if (!active) return;

        nextMap[post.id] = {
          title: tTitle,
          excerpt: tExcerpt,
        };
      }

      setTranslatedById(nextMap);
    };

    runTranslation();
    return () => (active = false);
  }, [language, initialPosts]);

  // 🔥 TRANSLATE HERO
  useEffect(() => {
    let active = true;

    const translateHero = async () => {
      if (language !== "ar") {
        setHeroText({
          title: "Blogs",
          desc: "Find expert tips and home care insights with new articles added regularly.",
        });
        return;
      }

      const [tTitle, tDesc] = await Promise.all([
        translateText("Blogs", "ar"),
        translateText(
          "Find expert tips and home care insights with new articles added regularly.",
          "ar"
        ),
      ]);

      if (!active) return;

      setHeroText({
        title: tTitle,
        desc: tDesc,
      });
    };

    translateHero();
    return () => (active = false);
  }, [language]);

  const formattedPosts = useMemo(() => {
    const formatter = new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });

    return [...initialPosts]
      .sort((a, b) => {
        const aDate = a.createdAt?.seconds
          ? new Date(a.createdAt.seconds * 1000)
          : new Date(0);

        const bDate = b.createdAt?.seconds
          ? new Date(b.createdAt.seconds * 1000)
          : new Date(0);

        return bDate - aDate;
      })
      .map((post) => ({
        ...post,
        displayDate: post.createdAt?.seconds
          ? formatter.format(new Date(post.createdAt.seconds * 1000))
          : "Recent",
        displayImage:
          post.coverImage ||
          "https://images.unsplash.com/photo-1581094794329-c8112a4e5190",
        displayTitle:
          language === "ar"
            ? translatedById[post.id]?.title || post.title
            : post.title,
        displayExcerpt:
          language === "ar"
            ? translatedById[post.id]?.excerpt || post.excerpt
            : post.excerpt,
      }));
  }, [initialPosts, language, translatedById]);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0A192F]">
        <Image
          src="https://images.pexels.com/photos/29470794/pexels-photo-29470794.jpeg"
          alt="Azcon Insights"
          fill
          className="object-cover opacity-50"
          priority
        />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl md:text-6xl text-white mb-6">
            {heroText.title}
          </h1>
          <p className="text-gray-200">{heroText.desc}</p>
        </div>
      </section>

      {/* BLOG GRID */}
      <SectionWrapper className="bg-[#F8FAFC] py-32">
        <div
          className="container max-w-7xl mx-auto px-6"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {formattedPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug || post.id}`}
                className="group"
              >
                <article>
                  <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-lg">
                    <img
                      src={post.displayImage}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-400">
                      <Clock size={12} />
                      <span className="text-[9px] uppercase">
                        {post.displayDate}
                      </span>
                    </div>

                    <h3 className="text-xl font-black">
                      {post.displayTitle}
                    </h3>

                    <p className="text-slate-500 line-clamp-2">
                      {post.displayExcerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
