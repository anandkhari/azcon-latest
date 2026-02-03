"use client";

import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { services as azconServices } from "@/data/services";

const ServicesClient = () => {
  // Use 't' for the general service data
  const t = useTranslations("Services");
  // Use 'tp' for specific page-level content (Titles/Subtitles)
  const tp = useTranslations("ServicesPage");

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[100vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#0A192F]">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/29470794/pexels-photo-29470794.jpeg"
            alt="Azcon Infrastructure Services"
            fill
            className="object-cover scale-105 opacity-50"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-transparent to-[#0A192F]" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Accent Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="h-[2px] bg-[#26C6DA] mx-auto mb-10 shadow-[0_0_20px_rgba(38,198,218,0.8)]"
          />

          {/* Corrected logic: using 'tp' for the Hero content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
         <h1 className="text-3xl md:text-6xl lg:text-6xl font-black text-white tracking-tighter uppercase mb-8 leading-[0.9]">
  {tp.rich("Hero.Title", {
    italic: (chunks) => (
      <span className="text-[#26C6DA] ">{chunks}</span>
    ),
  })}
</h1>


            <p className="text-gray-200 text-lg md:text-2xl max-w-3xl mx-auto font-light tracking-tight  opacity-90">
              {tp("Hero.Subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Architectural Framing */}
        <div className="absolute top-12 left-12 w-24 h-24 border-t-2 border-l-2 border-[#26C6DA]/20 hidden md:block" />
        <div className="absolute bottom-12 right-12 w-24 h-24 border-b-2 border-r-2 border-[#26C6DA]/20 hidden md:block" />
      </section>

      {/* SERVICES GRID SECTION */}
      <SectionWrapper className="bg-gray-50 !py-24">
        {/* Blueprint Grid Background for the wrapper */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {azconServices.map((service) => (
            <ServiceCard
              key={service.slug}
              service={{
                ...service,
                title: t(`${service.slug}.title`),
                description: t(`${service.slug}.shortDescription`),
              }}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* CALL TO ACTION */}
      <CTA />
    </>
  );
};

export default ServicesClient;