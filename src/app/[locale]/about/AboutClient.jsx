"use client";

import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ValueCard = ({ number, title, desc, label }) => (
  <div className="group p-8 border border-gray-100 bg-white hover:bg-[#0A192F] transition-all duration-500">
    <span className="text-[#26C6DA] font-black text-xs tracking-widest block mb-4 uppercase group-hover:text-white">
      {label}
    </span>
    <h3 className="text-[#0A192F] group-hover:text-[#26C6DA] text-xl font-black uppercase mb-4 transition-colors tracking-tighter italic">
      {title}
    </h3>
    <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed">
      {desc}
    </p>
  </div>
);

const AboutClient = () => {
  const t = useTranslations('AboutPage');

  return (
    <>
      <section className="relative h-[70vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#0A192F]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/29470794/pexels-photo-29470794.jpeg"
            alt="Azcon Technical Infrastructure"
            fill
            className="object-cover scale-105"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/30 via-[#0A192F]/20 to-[#0A192F]/40" />

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
              {t.rich('Hero.Title', {
                italic: (chunks) => <span className="text-[#26C6DA]">{chunks}</span>
              })}
            </h1>

            <p className="text-gray-100 text-lg md:text-2xl max-w-4xl mx-auto font-medium leading-relaxed tracking-wide italic opacity-95 drop-shadow-md">
              {t('Hero.Subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-white/10 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-white/10 pointer-events-none" />
      </section>

      <SectionWrapper className="bg-white overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#F7F9FC] -z-10 rounded-full blur-3xl opacity-50" />
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] w-full shadow-2xl overflow-hidden rounded-sm border-white border-[12px]"
            >
              <Image
                src="https://images.pexels.com/photos/8482823/pexels-photo-8482823.jpeg"
                alt="Azcon Technical Leadership"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-12 -right-6 md:-right-12 bg-[#0A192F] p-10 md:p-14 shadow-[20px_20px_60px_rgba(0,0,0,0.3)] border-b-4 border-[#26C6DA]"
            >
              <div className="relative">
                <p className="text-[#26C6DA] font-black text-6xl mb-1 italic leading-none tracking-tighter">
                  {t('Edge.StatsPrefix')}
                </p>
                <p className="text-white text-[10px] font-bold uppercase tracking-[0.4em] leading-relaxed">
                  {t('Edge.StatsLabel')}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-10 lg:pl-10">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-10 h-[1px] bg-[#26C6DA]"></span>
                <span className="text-[#26C6DA] text-[11px] font-extrabold uppercase tracking-[0.5em]">
                  {t('Edge.Label')}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-[#0A192F] tracking-tighter uppercase leading-[0.9] italic">
                {t.rich('Edge.Title', {
                  italic: (chunks) => <span className="not-italic text-[#26C6DA] drop-shadow-sm">{chunks}</span>
                })}
              </h2>
            </div>

            <div className="space-y-8 text-gray-500 text-lg leading-relaxed max-w-lg">
              <p>{t('Edge.Description')}</p>
            </div>

            <div className="pt-4">
              <button className="text-[#0A192F] font-black text-xs uppercase tracking-[0.3em] hover:text-[#26C6DA] transition-colors border-b border-[#0A192F] pb-2">
                {t('Edge.Methodology')}
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-[#0A192F] tracking-tighter uppercase italic">
            {t.rich('Protocols.Title', {
              italic: (chunks) => <span className="text-[#26C6DA] not-italic">{chunks}</span>
            })}
          </h2>
          <div className="h-1 w-20 bg-[#26C6DA] mx-auto mt-6"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-0">
          <ValueCard
            label={t('Protocols.P1.Label')}
            title={t('Protocols.P1.Title')}
            desc={t('Protocols.P1.Description')}
          />
          <ValueCard
            label={t('Protocols.P2.Label')}
            title={t('Protocols.P2.Title')}
            desc={t('Protocols.P2.Description')}
          />
          <ValueCard
            label={t('Protocols.P3.Label')}
            title={t('Protocols.P3.Title')}
            desc={t('Protocols.P3.Description')}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className="!p-0 bg-[#0A192F] overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="p-16 md:p-24 flex flex-col justify-center space-y-12">
            <div>
              <h3 className="text-[#26C6DA] text-3xl font-black uppercase italic tracking-tighter mb-4">
                {t('VisionMission.VisionTitle')}
              </h3>
              <p className="text-gray-400 text-sm leading-loose max-w-md">
                {t('VisionMission.VisionText')}
              </p>
            </div>
            <div>
              <h3 className="text-[#26C6DA] text-3xl font-black uppercase italic tracking-tighter mb-4">
                {t('VisionMission.MissionTitle')}
              </h3>
              <p className="text-gray-400 text-sm leading-loose max-w-md">
                {t('VisionMission.MissionText')}
              </p>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-auto min-h-[500px]">
            <Image
              src="/service_5.jpg"
              alt="Engineering blueprint"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0A192F]/40 mix-blend-multiply"></div>
          </div>
        </div>
      </SectionWrapper>

      <div className="bg-[#26C6DA] py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-[#0A192F] text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8 italic">
            {t('FinalCTA.Title')}
          </h2>
          <Link
            href="/contact"
            className="bg-[#0A192F] text-white px-12 py-5 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-[#0A192F] transition-all duration-500 shadow-2xl"
          >
            {t('FinalCTA.Button')}
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutClient;
