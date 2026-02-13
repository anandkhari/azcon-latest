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
import CTA from "@/components/CTA";

export default function HomeClient() {
  const t = useTranslations("HomePage");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Stats />

      {/* --- SECTION 3: WHY CHOOSE US --- */}
      <SectionWrapper className="bg-[#0A192F] text-white relative overflow-hidden !py-24">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="flex flex-col  lg:flex-row justify-between items-start lg:items-end mb-20 gap-10 relative z-10">
            <div className="max-w-3xl">
              <span className="text-[#26C6DA] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-8 px-4 py-2 bg-white/5 border border-white/10 w-fit rounded-sm">
                {t("Advantage.Label")}
              </span>
              <h2 className="text-4xl md:text-6xl text-white lg:text-6xl text-start font-semibold leading-[0.95] tracking-tighter ">
                {t.rich("Advantage.Title", {
                  italic: (chunks) => (
                    <span className="text-[#26C6DA] ">{chunks}</span>
                  ),
                  br: () => <br className="hidden md:block" />,
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
                        d={
                          idx === "0"
                            ? "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            : idx === "1"
                              ? "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              : "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        }
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
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white relative overflow-hidden py-24">
        {/* Background Blueprint Grid */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#0A192F 1px, transparent 1px), linear-gradient(90deg, #0A192F 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-10">
            <div className="max-w-2xl">
              <span className="inline-block bg-[#0A192F] text-white font-black uppercase tracking-[0.3em] text-[10px] px-4 py-2 mb-5 rounded-sm">
                {t("Validation.Label")}
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-[#0A192F] tracking-tight leading-tight ">
                {t.rich("Validation.Title", {
                  italic: (chunks) => (
                    <span className="text-[#26C6DA]">{chunks}</span>
                  ),
                })}
              </h2>
            </div>

            {/* Navigation Controls */}
            <div className="flex gap-3">
              <button
                onClick={scrollPrev}
                className="group w-12 h-12 border border-gray-200 flex items-center justify-center hover:bg-[#0A192F] hover:border-[#0A192F] transition-all duration-300"
              >
                <span className="text-[#0A192F] group-hover:text-[#26C6DA] text-lg transition-colors">
                  ←
                </span>
              </button>
              <button
                onClick={scrollNext}
                className="group w-12 h-12 bg-[#0A192F] flex items-center justify-center hover:bg-[#26C6DA] transition-all duration-300"
              >
                <span className="text-white group-hover:text-[#0A192F] text-lg transition-colors">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Carousel Viewport */}
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={emblaRef}
          >
            <div className="flex gap-6">
              {["0", "1", "2", "3", "4", "5"].map((idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0"
                >
                  <div className="h-full bg-gray-50/60 backdrop-blur-sm p-8 md:p-10 border border-gray-100 hover:border-[#26C6DA]/30 transition-all duration-500 group relative flex flex-col">
                    {/* Index */}
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-25 transition-opacity">
                      <span className="text-4xl font-black text-[#0A192F]">
                        0{parseInt(idx) + 1}
                      </span>
                    </div>

                    {/* Testimonial */}
                    <p className="text-[#486581] text-sm md:text-base leading-relaxed mb-10 relative z-10 font-medium">
                      “{t(`Validation.Testimonials.${idx}.q`)}”
                    </p>

                    {/* Author */}
                    <div className="mt-auto flex items-center gap-5 pt-6 border-t border-gray-100">
                      <div className="relative">
                        <div className="w-12 h-12 bg-[#0A192F] flex items-center justify-center text-[#26C6DA] font-black text-base rounded-sm group-hover:bg-[#26C6DA] group-hover:text-[#0A192F] transition-all duration-300">
                          {t(`Validation.Testimonials.${idx}.n`)[0]}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#26C6DA] rounded-full border-2 border-white" />
                      </div>

                      <div>
                        <p className="font-black text-xs text-[#0A192F] uppercase tracking-widest mb-1">
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

          {/* Progress Indicator */}
          <div className="mt-14 w-full h-px bg-gray-100 relative">
            <motion.div
              className="absolute top-0 left-0 h-[2px] bg-[#26C6DA]"
              style={{ width: "20%" }}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* --- SECTION 5: FAQ --- */}
      <SectionWrapper className="bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="mb-20">
            <span className="inline-block text-[#26C6DA] font-black uppercase tracking-[0.3em] text-[10px] mb-4">
              Support
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-[#0A192F]  tracking-tight leading-tight">
              Frequently Asked{" "}
              <span className="text-[#26C6DA]"> Questions</span>
            </h2>

            <p className="mt-4 text-gray-500 text-sm md:text-base max-w-2xl">
              Clear, concise answers to common technical, operational, and
              service-related questions to help you make informed decisions.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Visual (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-32">
              <div className="relative h-[380px] w-full overflow-hidden rounded-sm shadow-xl group">
                <Image
                  src="https://images.pexels.com/photos/7709198/pexels-photo-7709198.jpeg"
                  alt="Technical Support"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/50 to-transparent" />
              </div>
            </div>

            {/* FAQ List */}
            <div className="lg:col-span-8 space-y-4">
              {["0", "1", "2", "3", "4"].map((idx) => (
                <details
                  key={idx}
                  className="group bg-white border border-gray-200 open:border-[#26C6DA] transition-all duration-300"
                >
                  <summary className="list-none cursor-pointer p-6 flex justify-between items-center group-open:bg-[#0A192F] transition-colors">
                    <span className="flex items-start gap-4 font-black text-xs uppercase tracking-[0.18em] text-[#0A192F] group-open:text-white">
                      <span className="text-[#26C6DA]">
                        {parseInt(idx) + 1}.
                      </span>
                      {t(`Assistance.FAQ.${idx}.q`)}
                    </span>

                    <div className="w-6 h-6 flex items-center justify-center border border-gray-200 group-open:border-[#26C6DA] transition-all group-open:rotate-45">
                      <span className="text-[#26C6DA] font-bold text-lg">
                        +
                      </span>
                    </div>
                  </summary>

                  <div className="px-6 md:px-8 py-6 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed max-w-2xl font-medium">
                      {t(`Assistance.FAQ.${idx}.a`)}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTA />
    </>
  );
}
