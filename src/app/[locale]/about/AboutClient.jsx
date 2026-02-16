"use client";

import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { LuEye, LuTarget } from "react-icons/lu";
import CTA from "@/components/CTA";
import {
  LuShieldCheck,
  LuUsers,
  LuRocket,
  LuHeartHandshake,
  LuAward,
} from "react-icons/lu";

const icons = [
  <LuAward />,
  <LuHeartHandshake />,
  <LuUsers />,
  <LuRocket />,
  <LuShieldCheck />,
];

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
  const valuesT = useTranslations("Values");

  const cards = valuesT.raw("cards");

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative h-[70vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-[#0A192F]">
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
            <h1 className="text-3xl md:text-6xl lg:text-6xl font-semibold text-white tracking-tighter  mb-8 leading-[0.9]">
              {t.rich("Hero.Title", {
                italic: (chunks) => (
                  <span className="text-[#26C6DA] ">{chunks}</span>
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
      <SectionWrapper className="bg-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* IMAGE COLUMN */}
          <div className="relative px-4 md:px-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              /* Crucial Fix: aspect-[4/5] ensures the image has height on mobile 
           while md:h-[600px] maintains the grand scale on desktop.
        */
              className="relative aspect-[4/5] md:aspect-auto md:h-[650px] shadow-2xl overflow-hidden rounded-2xl border border-gray-100"
            >
              <Image
                src="https://images.pexels.com/photos/8482823/pexels-photo-8482823.jpeg"
                alt="Azcon Technical Leadership"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
              {/* Subtle overlay for text legibility if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 to-transparent md:hidden" />
            </motion.div>

            {/* 18+ Years Badge - Re-positioned for mobile thumb-zones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 right-2 md:-bottom-8 md:-right-8 bg-[#0A192F] p-5 md:p-8 shadow-2xl border-b-4 border-[#26C6DA] z-20 min-w-[140px]"
            >
              <p className="text-[#26C6DA] font-bold text-3xl md:text-5xl leading-none">
                {t("Edge.StatsPrefix")}
              </p>
              <p className="text-white text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] mt-2">
                {t("Edge.StatsLabel")}
              </p>
            </motion.div>
          </div>

          {/* CONTENT COLUMN */}
          <div className="space-y-8 md:space-y-12 px-6 md:px-0">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-10 md:w-12 h-[2px] bg-[#26C6DA]" />
                <span className="text-[#26C6DA] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">
                  {t("Edge.Label")}
                </span>
              </div>

              {/* Responsive Typography: text-4xl on mobile prevents awkward 
           single-word wrapping, text-7xl on desktop stays premium.
        */}
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[#0A192F] tracking-tighter leading-[1.1] md:leading-[1.2]">
                {t.rich("Edge.Title", {
                  italic: (chunks) => (
                    <span className="text-[#26C6DA]">{chunks}</span>
                  ),
                })}
              </h2>
            </div>

            <p className="text-[#486581] text-base md:text-lg leading-relaxed max-w-xl">
              {t("Edge.Description")}
            </p>

            {/* CTA → CONTACT */}
            <div className="pt-4 md:pt-0">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 text-[#0A192F] font-black text-[11px] md:text-xs uppercase tracking-[0.3em] transition-all"
              >
                <span className="border-b-2 border-[#0A192F] pb-1 group-hover:text-[#26C6DA] group-hover:border-[#26C6DA] transition-all">
                  {t("Edge.Methodology")}
                </span>
                <span className="text-[#26C6DA] text-xl group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50 overflow-hidden py-24">
        <div className="max-w-7xl mx-auto space-y-28 px-4">
          {/* ================= VISION ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-12 lg:gap-20 items-start">
            {/* Icon Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-36 h-36 md:w-44 md:h-44  bg-[#0A192F] border border-[#26C6DA]/30 flex items-center rounded-3xl justify-center"
            >
              <LuEye className="w-14 h-14 md:w-16 md:h-16 text-[#26C6DA]" />
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,#26C6DA_1px,transparent_1px)] opacity-10 bg-[length:14px_14px]" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-[#26C6DA] text-xs font-bold tracking-[0.3em] uppercase">
                Vision
              </span>

              <h3 className="text-3xl md:text-4xl font-bold text-[#0A192F] tracking-tight">
                {t("VisionMission.VisionTitle")}
              </h3>

              <p className="text-[#486581] text-base md:text-lg leading-relaxed max-w-4xl font-light">
                {t("VisionMission.VisionText")}
              </p>
            </motion.div>
          </div>

          {/* ================= MISSION ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-12 lg:gap-20 items-start">
            {/* Icon Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-36 h-36 md:w-44 md:h-44  bg-[#0A192F] border border-[#26C6DA]/30 rounded-3xl flex items-center justify-center"
            >
              <LuTarget className="w-14 h-14 md:w-16 md:h-16 text-[#26C6DA]" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-[#26C6DA] text-xs font-bold tracking-[0.3em] uppercase">
                Mission
              </span>

              <h3 className="text-3xl md:text-4xl font-bold text-[#0A192F] tracking-tight">
                {t("VisionMission.MissionTitle")}
              </h3>

              <p className="text-[#486581] text-base md:text-lg leading-relaxed max-w-4xl font-light">
                {t("VisionMission.MissionText")}
              </p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {/* ===== HEADER ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <span className="text-[#26C6DA] text-xs font-black tracking-[0.4em] uppercase">
              {valuesT("label")}
            </span>

            <h2 className="text-4xl md:text-6xl font-semibold text-[#0A192F] tracking-tight">
              {valuesT.rich("title", {
                highlight: (chunks) => (
                  <span className="text-[#26C6DA]">{chunks}</span>
                ),
              })}
            </h2>

            <p className="text-[#486581] text-base md:text-lg leading-relaxed font-light">
              {valuesT("description")}
            </p>
          </motion.div>

          {/* ===== GRID ===== */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cards.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-3xl bg-gray-50 hover:bg-[#0A192F] transition-all duration-700 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#0A192F] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />

                <div className="relative z-10 space-y-6">
                  {/* ICON */}
                  <div className="w-14 h-14 rounded-xl bg-[#0A192F]/5 group-hover:bg-[#26C6DA]/20 flex items-center justify-center text-[#26C6DA] text-2xl transition-all">
                    {icons[i]}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[#0A192F] group-hover:text-[#26C6DA] text-xl font-black uppercase tracking-tight transition-colors">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-[#486581] group-hover:text-gray-400 text-sm leading-relaxed font-medium transition-colors">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTA />
    </>
  );
};

export default AboutClient;
