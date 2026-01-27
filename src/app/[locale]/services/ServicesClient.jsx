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
  const t = useTranslations('Services');
  const tp = useTranslations('ServicesPage');

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[70vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#0A192F]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/29470794/pexels-photo-29470794.jpeg"
            alt="Azcon Technical Services"
            fill
            className="object-cover scale-105"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/35 via-[#0A192F]/20 to-[#0A192F]/45" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="h-[3px] bg-[#26C6DA] mx-auto mb-10 shadow-[0_0_15px_rgba(38,198,218,0.5)]"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase mb-8 drop-shadow-2xl">
              {tp.rich('Hero.Title', {
                italic: (chunks) => <span className="text-[#26C6DA]">{chunks}</span>
              })}
            </h1>

            <p className="text-gray-100 text-lg md:text-2xl max-w-4xl mx-auto font-medium leading-relaxed tracking-wide italic opacity-95 drop-shadow-md">
              {tp('Hero.Subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-white/10 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-white/10 pointer-events-none" />
      </section>

      {/* SERVICES GRID SECTION */}
      <SectionWrapper className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {azconServices.map((service) => (
            <ServiceCard 
              key={service.slug} 
              service={{
                ...service,
                title: t(`${service.slug}.title`),
                description: t(`${service.slug}.shortDescription`)
              }} 
            />
          ))}
        </div>
      </SectionWrapper>

      {/* CALL TO ACTION */}
      <CTA
        title="Ready to Enhance Your Infrastructure?"
        subtitle="Contact the trusted contractor of choice for high-performing and aesthetically refined facilities across the UAE."
      />
    </>
  );
};

export default ServicesClient;
