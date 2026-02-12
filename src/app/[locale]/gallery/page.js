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

export default function PublicGalleryPage() {
  const { language } = useLanguage();

  const [galleryItems, setGalleryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // ===== HERO TRANSLATION STATE =====
  const [heroText, setHeroText] = useState({
    title: "Project Gallery",
    desc: "A live showcase of Azcon’s latest infrastructure and installations.",
    projectLabel: "Project",
    emptyTitle: "Gallery is empty",
    emptyDesc:
      "New project images will appear here as soon as they are published.",
  });

  // ===== FIREBASE LISTENER =====
  useEffect(() => {
    const q = collection(db, "gallery");
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        setGalleryItems(
          snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data(),
          }))
        );
        setIsLoading(false);
      },
      () => setIsLoading(false)
    );

    return () => unsub();
  }, []);

  // ===== TRANSLATE HERO + STATIC TEXTS =====
  useEffect(() => {
    let active = true;

    const runTranslation = async () => {
      if (language !== "ar") {
        setHeroText({
          title: "Project Gallery",
          desc: "A live showcase of Azcon’s latest infrastructure and installations.",
          projectLabel: "Project",
          emptyTitle: "Gallery is empty",
          emptyDesc:
            "New project images will appear here as soon as they are published.",
        });
        return;
      }

      const [tTitle, tDesc, tProject, tEmptyTitle, tEmptyDesc] =
        await Promise.all([
          translateText("Project Gallery", "ar"),
          translateText(
            "A live showcase of Azcon’s latest infrastructure and installations.",
            "ar"
          ),
          translateText("Project", "ar"),
          translateText("Gallery is empty", "ar"),
          translateText(
            "New project images will appear here as soon as they are published.",
            "ar"
          ),
        ]);

      if (!active) return;

      setHeroText({
        title: tTitle,
        desc: tDesc,
        projectLabel: tProject,
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
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[70vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#0A192F]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/29470794/pexels-photo-29470794.jpeg"
            alt="Azcon Project Gallery"
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
            <h1 className="text-3xl md:text-6xl font-semibold text-white tracking-tighter mb-8 leading-[0.9]">
              {heroText.title.split(" ")[0]}{" "}
              <span className="text-[#26C6DA]">
                {heroText.title.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p className="text-gray-200 text-lg md:text-2xl max-w-3xl mx-auto font-light tracking-tight opacity-90">
              {heroText.desc}
            </p>
          </motion.div>
        </div>

        <div className="absolute top-12 left-12 w-24 h-24 border-t-2 border-l-2 border-[#26C6DA]/20 hidden md:block" />
        <div className="absolute bottom-12 right-12 w-24 h-24 border-b-2 border-r-2 border-[#26C6DA]/20 hidden md:block" />
      </section>

      {/* ===== GALLERY CONTENT ===== */}
      <SectionWrapper className="bg-[#f8fafc] min-h-screen py-24">
        <div
          className="container mx-auto px-6 max-w-7xl"
          dir="ltr"   // keep layout stable
        >
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/5] bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 animate-pulse"
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
                </div>
              ))}
            </div>
          ) : galleryItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <AnimatePresence mode="popLayout">
                {galleryItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="group relative aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  >
                    <img
                      src={item.url}
                      alt={item.name || "Azcon gallery image"}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="flex justify-between items-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex-1 min-w-0 mr-4">
                          {/* <p className="text-white text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">
                            {heroText.projectLabel}
                          </p> */}
                       
                        </div>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                        >
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50/50">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <FiImage className="text-3xl text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-[#0A192F]">
                {heroText.emptyTitle}
              </h3>
              <p className="text-gray-500 mt-2">{heroText.emptyDesc}</p>
            </div>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
