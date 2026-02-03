"use client";

import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { LuEye, LuTarget } from "react-icons/lu";
import CTA from "@/components/CTA";

const ValueCard = ({ title, desc, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group p-10 md:p-14 bg-white hover:bg-[#0A192F] transition-all duration-700 relative overflow-hidden"
  >
    {/* Liquid Fill Hover Effect */}
    <div className="absolute inset-0 bg-[#0A192F] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

    <div className="relative z-10">
      <span className="text-[#26C6DA] font-black text-[10px] tracking-[0.3em] block mb-6 uppercase">
        {label}
      </span>
      <h3 className="text-[#0A192F] group-hover:text-[#26C6DA] text-2xl font-black uppercase mb-6 transition-colors tracking-tighter italic">
        {title}
      </h3>
      <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed font-medium transition-colors">
        {desc}
      </p>
    </div>
  </motion.div>
);

const AboutClient = () => {
  const t = useTranslations("AboutPage");

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-[#0A192F]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/29470794/pexels-photo-29470794.jpeg"
            alt="Azcon Technical Infrastructure"
            fill
            className="object-cover scale-105 opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/60 via-transparent to-[#0A192F]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="h-[2px] bg-[#26C6DA] mx-auto mb-12 shadow-[0_0_20px_rgba(38,198,218,0.8)]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl md:text-6xl lg:text-6xl font-black text-white tracking-tighter uppercase mb-8 leading-[0.9]">
              {t.rich("Hero.Title", {
                italic: (chunks) => (
                  <span className="text-[#26C6DA] italic">{chunks}</span>
                ),
              })}
            </h1>

            <p className="text-gray-200 text-lg md:text-2xl max-w-4xl mx-auto font-light tracking-tight opacity-90 ">
              {t("Hero.Subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Architectural Framing */}
        <div className="absolute top-12 left-12 w-24 h-24 border-t-2 border-l-2 border-[#26C6DA]/20 hidden md:block" />
        <div className="absolute bottom-12 right-12 w-24 h-24 border-b-2 border-r-2 border-[#26C6DA]/20 hidden md:block" />
      </section>

      {/* --- THE EDGE SECTION --- */}
      <SectionWrapper className="bg-white">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <div className="relative h-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-full shadow-2xl overflow-hidden rounded-sm border border-white"
            >
              <Image
                src="https://images.pexels.com/photos/8482823/pexels-photo-8482823.jpeg"
                alt="Azcon Technical Leadership"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </motion.div>

            {/* Smaller 18 Years badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute -bottom-6 -right-6 bg-primary p-6 md:p-8 shadow-xl border-b-4 border-accent z-20"
            >
              <p className="text-accent font-bold text-4xl italic leading-none">
                {t("Edge.StatsPrefix")}
              </p>
              <p className="text-white text-[10px] font-semibold uppercase tracking-widest">
                {t("Edge.StatsLabel")}
              </p>
            </motion.div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-12 h-[2px] bg-[#26C6DA]"></span>
                <span className="text-[#26C6DA] text-xs font-black uppercase tracking-[0.4em]">
                  {t("Edge.Label")}
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-[#0A192F] tracking-tighter uppercase leading-[0.9]">
                {t.rich("Edge.Title", {
                  italic: (chunks) => (
                    <span className="text-[#26C6DA] italic">{chunks}</span>
                  ),
                })}
              </h2>
            </div>

            <p className="text-[#486581] text-lg leading-relaxed font-medium">
              {t("Edge.Description")}
            </p>

            <button className="group flex items-center gap-4 text-[#0A192F] font-black text-xs uppercase tracking-[0.3em] transition-all">
              <span className="border-b-2 border-[#0A192F] pb-1 group-hover:text-[#26C6DA] group-hover:border-[#26C6DA] transition-all">
                {t("Edge.Methodology")}
              </span>
              <span className="text-[#26C6DA] text-xl group-hover:translate-x-2 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>
      </SectionWrapper>

    <SectionWrapper className="bg-gray-50 overflow-hidden !py-24">
  <div className="max-w-6xl mx-auto space-y-24">

    {/* --- VISION BLOCK --- */}
    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-20 items-center">

      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative w-40 h-40 md:w-48 md:h-48 rounded-xl border border-[#26C6DA]/20 bg-[#0D2137] flex items-center justify-center group"
      >
        <div
          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
          style={{
            backgroundImage: "radial-gradient(#26C6DA 1px, transparent 1px)",
            backgroundSize: "15px 15px",
          }}
        />
        <LuEye className="w-16 h-16 md:w-20 md:h-20 text-[#26C6DA] relative z-10 transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-[#26C6DA]" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h3 className="text-4xl md:text-5xl font-black text-[#26C6DA] uppercase tracking-tighter ">
          {t("VisionMission.VisionTitle")}
        </h3>
        <p className="text-lg md:text-xl leading-relaxed font-medium max-w-4xl">
          {t("VisionMission.VisionText")}
        </p>
      </motion.div>
    </div>

    {/* --- MISSION BLOCK --- */}
    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-20 items-center">

      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative w-40 h-40 md:w-48 md:h-48 rounded-xl border border-[#26C6DA]/20 bg-[#0D2137] flex items-center justify-center group"
      >
      
        <LuTarget className="w-16 h-16 md:w-20 md:h-20 text-[#26C6DA] relative z-10 transition-transform duration-500 group-hover:rotate-12" />
        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-[#26C6DA]" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h3 className="text-4xl md:text-5xl font-black text-[#26C6DA] uppercase tracking-tighter ">
          {t("VisionMission.MissionTitle")}
        </h3>
        <p className=" text-lg md:text-xl leading-relaxed font-medium max-w-4xl">
          {t("VisionMission.MissionText")}
        </p>
      </motion.div>
    </div>

  </div>
</SectionWrapper>


      <CTA/>
    </>
  );
};

export default AboutClient;
