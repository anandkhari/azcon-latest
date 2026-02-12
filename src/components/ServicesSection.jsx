"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import SectionWrapper from "@/components/SectionWrapper";
import { useTranslations } from "next-intl";
import useTranslatedServices from "@/hooks/useTranslatedServices";
import { servicesIconMap } from "@/data/servicesIconMap";
import { motion } from "framer-motion";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

export default function ServicesSection() {
  const t = useTranslations("Services");
  const services = useTranslatedServices();

  return (
    <SectionWrapper className="bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-[-10%] w-64 h-64 md:w-96 md:h-96 bg-[#26C6DA] rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 right-[-10%] w-64 h-64 md:w-96 md:h-96 bg-[#0A192F] rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 md:px-0">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="text-[#26C6DA] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs bg-[#0A192F]/5 px-4 py-2 rounded-full mb-4 inline-block">
            {t("Subtitle")}
          </span>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#0A192F] mt-2 mb-6 tracking-tight leading-tight">
            {t.rich("Title", {
              span: (chunks) => (
                <span className="text-[#26C6DA]">{chunks}</span>
              ),
            })}
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            {t("Description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon =
              servicesIconMap[service.slug] ?? (
                <HiOutlineWrenchScrewdriver />
              );

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group relative flex flex-col bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-[#26C6DA]/50"
              >
                {/* Image */}
                <div className="relative h-56 md:h-72 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/20 to-transparent opacity-70" />

                  {/* React Icon */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl group-hover:bg-[#26C6DA] transition-colors duration-300 text-white text-2xl md:text-3xl">
                    {Icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col bg-white/40 backdrop-blur-md flex-grow relative">
                  <div className="absolute -top-4 left-6 md:left-8 bg-gradient-to-r from-[#0A192F] to-[#26C6DA] text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-lg md:text-xl font-black text-[#0A192F] mb-3 uppercase mt-2 group-hover:text-[#26C6DA] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="relative w-full h-[1px] bg-gray-100 mb-6 overflow-hidden">
                    <div className="absolute h-full w-0 bg-gradient-to-r from-[#26C6DA] to-[#0A192F] group-hover:w-full transition-all duration-700" />
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="group mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#0A192F] hover:text-[#26C6DA]"
                  >
                    {t("TechnicalSpecification")}
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
