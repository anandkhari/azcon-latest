"use client";

import React, { useCallback } from "react";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Image from "next/image";
import Link from "next/link";
import Stats from "@/components/Stats";
import services from "@/data/services"; 
import useEmblaCarousel from "embla-carousel-react"; 
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";


export default function HomeClient() {
  const t = useTranslations("HomePage");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);


  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Stats />

      {/* --- SECTION 3: WHY CHOOSE US --- */}
      <SectionWrapper className="bg-[#0A192F] text-white relative overflow-hidden !py-24">
  {/* Header Section */}
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10 relative z-10">
    <div className="max-w-3xl">
      <span className="text-[#26C6DA] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-6 px-4 py-2 bg-white/5 border border-white/10 w-fit rounded-sm">
        {t("Advantage.Label")}
      </span>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter uppercase">
        {t.rich("Advantage.Title", {
          italic: (chunks) => <span className="text-[#26C6DA] italic">{chunks}</span>,
          br: () => <br className="hidden md:block" />
        })}
      </h2>
    </div>

    <div className="lg:max-w-xs border-l-2 border-[#26C6DA] pl-8 pb-2">
      <p className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.15em] font-bold leading-relaxed">
        {t("Advantage.Description")}
      </p>
    </div>
  </div>

  {/* Advantage Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 bg-white/10 gap-px border border-white/10 relative z-10">
    {["0", "1", "2"].map((idx) => (
      <div
        key={idx}
        className="group relative bg-[#0D2137] p-10 md:p-14 lg:p-16 overflow-hidden transition-all duration-500"
      >
        {/* Liquid Fill Hover Effect */}
        <div className="absolute inset-0 bg-[#26C6DA] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.76, 0, 0.24, 1]" />

        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-10 inline-block">
            <svg
              className="w-12 h-12 text-[#26C6DA] group-hover:text-[#0A192F] transition-colors duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.25"
                d={idx === "0" ? "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" : 
                   idx === "1" ? "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" :
                   "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}
              />
            </svg>
          </div>

          {/* Large Background Index Number */}
          <span className="absolute top-0 right-0 text-white group-hover:text-[#0A192F]/10 text-7xl font-black transition-colors pointer-events-none">
            0{parseInt(idx) + 1}
          </span>

          <h3 className="text-xl md:text-2xl font-black text-white uppercase mb-6 tracking-tighter group-hover:text-[#0A192F] transition-colors duration-500">
            {t(`Advantage.Cards.${idx}.title`)}
          </h3>
          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-[#0A192F]/90 font-medium transition-colors duration-500">
            {t(`Advantage.Cards.${idx}.desc`)}
          </p>
        </div>

        {/* Decorative Bottom Bar */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0A192F]/20 group-hover:w-full transition-all duration-700" />
      </div>
    ))}
  </div>
</SectionWrapper>

      <SectionWrapper className="bg-white relative overflow-hidden !py-24">
      {/* Background Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0A192F 1px, transparent 1px), linear-gradient(90deg, #0A192F 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10">
          <div className="max-w-2xl">
            <span className="text-white bg-[#0A192F] font-black uppercase tracking-[0.4em] text-[10px] px-4 py-2 mb-6 inline-block rounded-sm">
              {t("Validation.Label")}
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0A192F] tracking-tighter leading-[0.9] uppercase">
              {t.rich("Validation.Title", {
                italic: (chunks) => (
                  <span className="text-[#26C6DA] italic underline decoration-2 underline-offset-8">
                    {chunks}
                  </span>
                ),
              })}
            </h2>
          </div>

          {/* Precision Navigation Controls */}
          <div className="flex gap-4">
            <button
              onClick={scrollPrev}
              className="group w-14 h-14 border border-gray-200 flex items-center justify-center hover:bg-[#0A192F] hover:border-[#0A192F] transition-all duration-500"
            >
              <span className="text-[#0A192F] group-hover:text-[#26C6DA] transition-colors text-xl">←</span>
            </button>
            <button
              onClick={scrollNext}
              className="group w-14 h-14 bg-[#0A192F] flex items-center justify-center hover:bg-[#26C6DA] transition-all duration-500"
            >
              <span className="text-white group-hover:text-[#0A192F] transition-colors text-xl">→</span>
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6">
            {["0", "1", "2", "3", "4", "5"].map((idx) => (
              <div
                key={idx}
                className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0"
              >
                <div className="h-full bg-gray-50/50 backdrop-blur-sm p-8 md:p-12 border border-gray-100 hover:border-[#26C6DA]/30 transition-all duration-500 group relative flex flex-col">
                  {/* Technical ID Corner */}
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                    <span className="text-4xl font-black text-[#0A192F]">0{parseInt(idx) + 1}</span>
                  </div>

                  <p className="text-[#486581] text-base md:text-lg leading-relaxed mb-10 italic relative z-10">
                    "{t(`Validation.Testimonials.${idx}.q`)}"
                  </p>

                  <div className="mt-auto flex items-center gap-5 pt-8 border-t border-gray-100">
                    {/* Visual Avatar with Brand Accent */}
                    <div className="relative">
                      <div className="w-14 h-14 bg-[#0A192F] flex items-center justify-center text-[#26C6DA] font-black text-lg rounded-sm overflow-hidden group-hover:bg-[#26C6DA] group-hover:text-[#0A192F] transition-all duration-500">
                        {t(`Validation.Testimonials.${idx}.n`)[0]}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#26C6DA] rounded-full border-2 border-white" />
                    </div>

                    <div>
                      <p className="font-black text-sm text-[#0A192F] uppercase tracking-widest leading-none mb-1">
                        {t(`Validation.Testimonials.${idx}.n`)}
                      </p>
                      <p className="text-[#26C6DA] text-[10px] uppercase font-black tracking-widest opacity-80">
                        {t(`Validation.Testimonials.${idx}.s`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blueprint Progress Track */}
        <div className="mt-16 w-full h-px bg-gray-100 relative">
          <motion.div 
            className="absolute top-0 left-0 h-[2px] bg-[#26C6DA]" 
            style={{ width: "20%" }} // You can sync this with embla scroll progress
          />
        </div>
      </div>
    </SectionWrapper>

     {/* --- SECTION 5: FAQ --- */}
<SectionWrapper className="bg-[#F8FAFC]">
  <div className="grid lg:grid-cols-12 gap-16 items-start">
    {/* --- LEFT VISUAL SIDE (Hidden on Mobile) --- */}
    <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-32">
      <div className="relative h-[400px] w-full group overflow-hidden rounded-sm shadow-2xl">
        <Image
          src="https://images.pexels.com/photos/7709198/pexels-photo-7709198.jpeg" // Industrial engineering visual
          alt="Technical Support"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Dark Overlay with Branding */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
        
        

        
      </div>
    </div>

    {/* --- RIGHT FAQ SIDE --- */}
    <div className="lg:col-span-8 space-y-4">
      {/* Mobile-only header (appears since the image box is hidden) */}
      <div className="lg:hidden mb-10">
         <span className="text-[#51888f] font-black uppercase tracking-[0.2em] text-[10px] mb-2 block">{t("Assistance.Label")}</span>
         <h2 className="text-3xl font-black text-[#0A192F] uppercase tracking-tighter">{t("Assistance.Title")}</h2>
      </div>

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
<SectionWrapper className="bg-primary py-20 sm:py-24 lg:py-32 relative overflow-hidden">
  <div className="relative z-10 text-center max-w-4xl mx-auto border-y border-white/10 py-16 sm:py-20">

    {/* Tagline */}
    <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-6 sm:mb-8 block italic">
      {t("FinalCTA.Tagline")}
    </span>

    {/* Title */}
    <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
      {t.rich("FinalCTA.Title", {
        italic: (chunks) => <span className="text-accent italic">{chunks}</span>,
        br: () => <br />
      })}
    </h2>

    {/* Description */}
    <p className="mt-6 sm:mt-8 text-white/70 font-poppins text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
      {t("FinalCTA.Description")}
    </p>

    {/* CTA Buttons */}
    <div className="mt-10 sm:mt-12 flex justify-center gap-4 sm:gap-6 flex-wrap">
      <Link
        href="/contact"
        className="bg-accent text-primary font-semibold uppercase tracking-wider py-3.5 sm:py-4 px-6 sm:px-10 rounded-lg hover:bg-white transition-all duration-300 shadow-lg text-sm"
      >
        {t("FinalCTA.RequestQuote")}
      </Link>

      <Link
        href="https://wa.me/yournumber"
        className="border border-white/30 text-white font-semibold uppercase tracking-wider py-3.5 sm:py-4 px-6 sm:px-10 rounded-lg hover:border-accent hover:text-accent transition-all duration-300 text-sm"
      >
        {t("FinalCTA.WhatsApp")}
      </Link>
    </div>

  </div>
</SectionWrapper>

    </>
  );
}
