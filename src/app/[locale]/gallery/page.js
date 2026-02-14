"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiImage } from "react-icons/fi";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import { translateText } from "@/lib/translate";
import { useLanguage } from "@/context/LanguageContext";
import { SERVICE_CATEGORIES } from "@/data/serviceCategories";

export default function PublicGalleryPage() {
  const { language } = useLanguage();

  const [galleryItems, setGalleryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /* ⭐ NEW FILTER STATE */
  const [activeCategory, setActiveCategory] = useState("all");

  /* ⭐ AUTO-DETECT CATEGORIES FROM FIRESTORE */
 const categories = ["all", ...SERVICE_CATEGORIES.map((s) => s.value)];


  /* ⭐ FILTERED ITEMS */
  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const [heroText, setHeroText] = useState({
    title: "Engineering Project Gallery",
    desc: "Explore Azcon’s engineering projects, building maintenance works, infrastructure installations, and technical service executions delivered across UAE industries.",
    emptyTitle: "Gallery is empty",
    emptyDesc:
      "New engineering project visuals will appear here once published.",
  });

  /* ================= FIREBASE LISTENER ================= */
  useEffect(() => {
    const q = collection(db, "gallery");
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        setGalleryItems(
          snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data(),
          })),
        );
        setIsLoading(false);
      },
      () => setIsLoading(false),
    );

    return () => unsub();
  }, []);

  /* ================= TRANSLATIONS ================= */
  useEffect(() => {
    let active = true;

    const runTranslation = async () => {
      if (language !== "ar") {
        setHeroText({
          title: "Engineering Project Gallery",
          desc: "Explore Azcon’s engineering projects, building maintenance works, infrastructure installations, and technical service executions delivered across UAE industries.",
          emptyTitle: "Gallery is empty",
          emptyDesc:
            "New engineering project visuals will appear here once published.",
        });
        return;
      }

      const [tTitle, tDesc, tEmptyTitle, tEmptyDesc] = await Promise.all([
        translateText("Engineering Project Gallery", "ar"),
        translateText(
          "Explore Azcon’s engineering projects, building maintenance works, infrastructure installations, and technical service executions delivered across UAE industries.",
          "ar",
        ),
        translateText("Gallery is empty", "ar"),
        translateText(
          "New engineering project visuals will appear here once published.",
          "ar",
        ),
      ]);

      if (!active) return;

      setHeroText({
        title: tTitle,
        desc: tDesc,
        emptyTitle: tEmptyTitle,
        emptyDesc: tEmptyDesc,
      });
    };

    runTranslation();

    return () => {
      active = false;
    };
  }, [language]);

  return (
    <>
      {/* ================= HERO ================= */}
      <header className="relative h-[70vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#0A192F]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/29470794/pexels-photo-29470794.jpeg"
            alt="Azcon engineering project gallery UAE infrastructure works"
            fill
            className="object-cover scale-105 opacity-50"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-transparent to-[#0A192F]" />

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-3xl md:text-6xl font-semibold text-white tracking-tighter mb-8 leading-[0.9]">
            {heroText.title.split(" ")[0]}{" "}
            <span className="text-[#26C6DA]">
              {heroText.title.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="text-gray-200 text-lg md:text-2xl mx-auto font-light tracking-tight opacity-90">
            {heroText.desc}
          </p>

          <p className="sr-only">
            Azcon delivers engineering, MEP installation, infrastructure
            maintenance, and technical service solutions across Dubai, Abu
            Dhabi, and the wider UAE.
          </p>
        </div>
      </header>

      {/* ================= GALLERY ================= */}
      <SectionWrapper className="bg-[#f8fafc] min-h-screen py-24">
        <section className="container mx-auto px-6 max-w-7xl" dir="ltr">
          {/* ⭐ CATEGORY FILTER BAR */}
          <div className="flex justify-center gap-6 flex-wrap mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-black tracking-widest uppercase transition-colors ${
                  activeCategory === cat
                    ? "text-red-500"
                    : "text-gray-500 hover:text-[#26C6DA]"
                }`}
              >
                {cat === "all"
                  ? "All"
                  : SERVICE_CATEGORIES.find((s) => s.value === cat)?.label ||
                    cat}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/5] bg-white rounded-xl animate-pulse"
                />
              ))}
            </div>
          ) : filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.figure
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="group relative aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                  >
                    <img
                      src={item.url}
                      alt={
                        item.name
                          ? `${item.name} engineering project UAE - Azcon`
                          : "Azcon engineering infrastructure project UAE"
                      }
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      loading="lazy"
                    />

                    <figcaption className="sr-only">
                      Engineering project completed by Azcon UAE.
                    </figcaption>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex justify-end items-end p-6">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                      >
                        <FiExternalLink />
                      </a>
                    </div>
                  </motion.figure>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32">
              <FiImage className="text-3xl text-gray-400 mb-4" />
              <h2 className="text-xl font-bold text-[#0A192F]">
                {heroText.emptyTitle}
              </h2>
              <p className="text-gray-500 mt-2">{heroText.emptyDesc}</p>
            </div>
          )}
        </section>
      </SectionWrapper>
    </>
  );
}
