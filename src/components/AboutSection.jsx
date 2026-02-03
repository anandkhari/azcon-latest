"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const SectionWrapper = ({ children, className = "" }) => (
  // Reduced padding for mobile (py-16) while keeping it spacious for desktop (py-24)
  <section className={`py-16 px-5 md:py-24 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const AboutSection = () => {
  const t = useTranslations("About");
  
  return (
    <SectionWrapper className="bg-[#F7F9FC] overflow-hidden">
      <motion.div
        className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-40 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }} // Adjusted margin for mobile triggers
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {/* --- CONTENT SIDE (Appears first on mobile for better UX) --- */}
        <motion.div
          className="order-2 lg:order-2 lg:pl-4"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          {/* Small Label */}
          <motion.div className="flex items-center gap-3 mb-4 md:mb-6">
            <motion.span
              className="w-8 h-[2px] bg-[#26C6DA]"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              transition={{ duration: 0.8 }}
            />
            <span className="text-[#26C6DA] font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
              {t("Subtitle")}
            </span>
          </motion.div>

          {/* Headline - Optimized for small screens */}
          <motion.h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#102A43] leading-tight tracking-tight mb-6">
            {t.rich("Title", {
              br: () => <br className="hidden md:block" />,
              italic: (chunks) => <span className="text-[#26C6DA] italic">{chunks}</span>
            })}
          </motion.h2>

          {/* Description */}
          <div className="space-y-6 mb-8 md:mb-10">
            <motion.p className="text-[#486581] text-base md:text-lg leading-relaxed max-w-xl">
              {t("Description")}
            </motion.p>
          </div>

          {/* CTA Button - Full width on tiny screens, auto on larger */}
          <motion.div>
            <Link href="/about" className="inline-block w-full md:w-auto">
              <motion.button
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex w-full md:w-auto items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#0A192F] px-8 py-4 text-white font-bold transition-all"
              >
                <span className="relative z-10">{t("LearnMore")}</span>
                <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#26C6DA] to-[#0A192F] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* --- VISUAL SIDE --- */}
        <motion.div
          className="order-1 lg:order-1 relative w-full"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
          }}
        >
          {/* Decorative accents - hidden on mobile for cleanliness */}
          <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-[#26C6DA]/30 z-0 hidden md:block" />
          
          <motion.div
            className="relative aspect-[4/5] md:h-[600px] w-full rounded-2xl overflow-hidden z-10 shadow-xl border border-white/50"
          >
            <Image
              src="/about2.jpg"
              alt="Azcon Engineering"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 to-transparent opacity-50" />
          </motion.div>

          {/* Floating Card - Repositioned for Tablet/Mobile Visibility */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute -bottom-4 -right-2 md:-bottom-8 md:-right-8 bg-white p-5 md:p-8 rounded-xl shadow-2xl z-20 border-b-4 border-[#26C6DA]"
          >
            <p className="text-[#0A192F] font-black text-2xl md:text-3xl italic">15+</p>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Years Experience</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default AboutSection;