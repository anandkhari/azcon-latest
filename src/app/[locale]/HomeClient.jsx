"use client";

import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Image from "next/image";
import Link from "next/link";
import Stats from "@/components/Stats";
import services from "@/data/services"; 

import { useTranslations } from "next-intl";


export default function HomeClient() {
  const t = useTranslations("HomePage");


  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Stats />

      {/* --- SECTION 3: WHY CHOOSE US --- */}
      <SectionWrapper className="bg-[#0A192F] text-white overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#26C6DA] font-black uppercase tracking-[0.3em] text-xs block mb-4">
              {t("Advantage.Label")}
            </span>
            <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter">
              {t.rich("Advantage.Title", {
                italic: (chunks) => <span className="text-[#26C6DA]">{chunks}</span>,
                br: () => <br />
              })}
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm mb-2 text-xs uppercase tracking-[0.2em] font-bold border-l-2 border-[#26C6DA] pl-6">
            {t("Advantage.Description")}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-1">
          {["0", "1", "2"].map((idx) => (
            <div
              key={idx}
              className="bg-white/5 p-16 border border-white/5 hover:bg-[#26C6DA] group transition-all duration-700"
            >
              <svg
                className="w-14 h-14 text-[#26C6DA] group-hover:text-[#0A192F] mb-10 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d={idx === "0" ? "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" : 
                     idx === "1" ? "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" :
                     "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}
                />
              </svg>
              <h3 className="text-xl font-black uppercase mb-6 group-hover:text-[#0A192F] tracking-widest">
                {t(`Advantage.Cards.${idx}.title`)}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-[#0A192F]/80 font-medium">
                {t(`Advantage.Cards.${idx}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* --- SECTION 4: TESTIMONIALS --- */}
      <SectionWrapper className="bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#0A192F 1px, transparent 1px), linear-gradient(90deg, #0A192F 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-[#26C6DA] font-black uppercase tracking-[0.3em] text-[10px] bg-[#0A192F] px-3 py-1 mb-4 inline-block">
                {t("Validation.Label")}
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0A192F] tracking-tighter italic leading-none">
                {t.rich("Validation.Title", {
                  italic: (chunks) => <span className="text-[#26C6DA] not-italic underline decoration-1 underline-offset-8">{chunks}</span>,
                  br: () => <br />
                })}
              </h2>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-[#0A192F] font-black text-6xl opacity-5 italic select-none">
                {t("Validation.Trusted")}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {["0", "1", "2", "3", "4", "5"].map((idx) => (
              <div
                key={idx}
                className="bg-gray-50/50 backdrop-blur-sm p-10 border border-gray-100 hover:bg-white hover:shadow-[0_20px_50px_rgba(38,198,218,0.1)] transition-all duration-500 group relative"
              >
                <p className="text-gray-600 text-sm leading-relaxed mb-8 relative z-10 italic">
                  "{t(`Validation.Testimonials.${idx}.q`)}"
                </p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="w-12 h-12 bg-[#0A192F] flex items-center justify-center text-[#26C6DA] font-black text-xs shrink-0 rounded-sm">
                    {t(`Validation.Testimonials.${idx}.n`)[0]}
                  </div>
                  <div>
                    <p className="font-black text-xs text-[#0A192F] uppercase tracking-widest">
                      {t(`Validation.Testimonials.${idx}.n`)}
                    </p>
                    <p className="text-[#26C6DA] text-[10px] uppercase font-black tracking-tighter">
                      {t(`Validation.Testimonials.${idx}.s`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* --- SECTION 5: FAQ --- */}
      <SectionWrapper className="bg-[#F8FAFC]">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="bg-[#0A192F] p-10 rounded-sm shadow-2xl relative overflow-hidden">
              <span className="text-[#26C6DA] font-black uppercase tracking-[0.3em] text-[10px] block mb-4">
                {t("Assistance.Label")}
              </span>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                {t.rich("Assistance.Title", {
                  italic: (chunks) => <span className="text-[#26C6DA]">{chunks}</span>,
                  br: () => <br />
                })}
              </h2>
              <p className="text-gray-400 text-xs leading-relaxed mb-8">
                {t("Assistance.Description")}
              </p>
              <Link
                href="/contact"
                className="block text-center bg-[#26C6DA] text-[#0A192F] font-black uppercase tracking-widest py-4 text-[10px] hover:bg-white transition-all"
              >
                {t("Assistance.Button")}
              </Link>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-4">
            {["0", "1", "2", "3", "4"].map((idx) => (
              <details
                key={idx}
                className="group bg-white border border-gray-200 open:border-[#26C6DA] transition-all duration-300"
              >
                <summary className="list-none p-6 cursor-pointer flex justify-between items-center select-none group-open:bg-[#0A192F] transition-all">
                  <span className="font-black text-xs uppercase tracking-[0.2em] text-[#0A192F] group-open:text-white">
                    <span className="text-[#26C6DA] mr-4">{parseInt(idx) + 1}.</span>{" "}
                    {t(`Assistance.FAQ.${idx}.q`)}
                  </span>
                  <div className="w-6 h-6 border border-gray-200 flex items-center justify-center group-open:border-[#26C6DA] group-open:rotate-45 transition-all">
                    <span className="text-[#26C6DA] font-bold text-lg">+</span>
                  </div>
                </summary>
                <div className="p-8 border-t border-gray-100">
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    {t(`Assistance.FAQ.${idx}.a`)}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* --- SECTION 7: FINAL CTA --- */}
      <SectionWrapper className="bg-[#0A192F] pt-64 pb-32 relative overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl mx-auto border-y border-white/5 py-24">
          <span className="text-[#26C6DA] font-black tracking-[0.5em] uppercase text-[10px] mb-8 block italic">
            {t("FinalCTA.Tagline")}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
            {t.rich("FinalCTA.Title", {
              italic: (chunks) => <span className="text-[#26C6DA]">{chunks}</span>,
              br: () => <br />
            })}
          </h2>
          <p className="mt-10 text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto uppercase text-xs tracking-widest">
            {t("FinalCTA.Description")}
          </p>
          <div className="mt-14 flex justify-center gap-6 flex-wrap">
            <Link
              href="/contact"
              className="bg-[#26C6DA] text-[#0A192F] font-black uppercase tracking-widest py-5 px-12 rounded-sm hover:bg-white transition-all duration-500 shadow-2xl text-xs"
            >
              {t("FinalCTA.RequestQuote")}
            </Link>
            <Link
              href="https://wa.me/yournumber"
              className="border-2 border-white/10 text-white font-black uppercase tracking-widest py-5 px-12 rounded-sm hover:border-[#26C6DA] hover:text-[#26C6DA] transition-all duration-500 text-xs"
            >
              {t("FinalCTA.WhatsApp")}
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
