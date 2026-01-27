"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";


const SectionWrapper = ({ children, className = "" }) => (
  <section className={`py-24 px-6 md:px-12 lg:px-24 ${className}`}>
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
        className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* --- LEFT VISUAL SIDE --- */}
        <motion.div
          className="relative group"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          {/* Decorative geometric accent (Brochure Style) */}
          <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-[#26C6DA]/30 z-0 hidden md:block" />
          
          <motion.div
            className="relative h-[500px] md:h-[600px] w-full rounded-2xl overflow-hidden z-10 shadow-2xl border border-white/50"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/about2.jpg" // Ensure this image exists in your public folder
              alt="Azcon Engineering Infrastructure"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            {/* Soft Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
          </motion.div>

          {/* Floating Experience Card (Optional Highlight) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="absolute -bottom-8 -right-8 bg-white p-8 rounded-xl shadow-xl z-20 hidden xl:block border-b-4 border-[#26C6DA]"
          >
            <p className="text-[#0A192F] font-black text-3xl italic">15+</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Years of Excellence</p>
          </motion.div>
        </motion.div>

        {/* --- RIGHT CONTENT SIDE --- */}
        <motion.div
          className="lg:pl-4"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          {/* Small Label */}
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="w-10 h-[2px] bg-[#26C6DA]"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span className="text-[#26C6DA] font-bold uppercase tracking-[0.25em] text-xs">
              {t("Subtitle")}
            </span>
          </motion.div>

          {/* Big Headline */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#102A43] leading-[1.1] tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.rich("Title", {
              br: () => <br />,
              italic: (chunks) => <span className="text-[#26C6DA] italic">{chunks}</span>
            })}
          </motion.h2>

          {/* Description */}
          <div className="space-y-6 mb-10">
            <motion.p
              className="text-[#486581] text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t("Description")}
            </motion.p>
            {/* <motion.p
              className="text-[#486581] text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              With a strong presence across the UAE, we combine technical expertise and strict quality standards to execute projects from concept to completion—ensuring safety and long-term operational excellence.
            </motion.p> */}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/about">
              <motion.button
                whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex items-center gap-3 overflow-hidden rounded-xl bg-[#0A192F] px-8 py-4 text-white font-bold transition-all"
              >
                <span className="relative z-10">{t("LearnMore")}</span>
                <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">→</span>
                
                {/* Button Hover Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#26C6DA] to-[#0A192F] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default AboutSection;