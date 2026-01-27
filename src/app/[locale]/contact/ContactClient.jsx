"use client";

import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ContactClient = () => {
  const t = useTranslations('ContactPage');

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[70vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#0A192F]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/8960241/pexels-photo-8960241.jpeg"
            alt="Azcon UAE Support Center"
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

      {/* CONTACT INFO CARDS */}
      <SectionWrapper className="bg-white">
        <div className="grid md:grid-cols-3 gap-1">
          {[
            { key: 'Hotline', icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
            { key: 'Email', icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
            { key: 'Office', icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" }
          ].map((item, i) => (
            <div key={i} className="p-12 border border-gray-100 bg-gray-50/30 hover:bg-[#0A192F] group transition-all duration-500">
              <div className="w-14 h-14 rounded-full bg-[#26C6DA]/10 flex items-center justify-center mb-8 group-hover:bg-[#26C6DA]/20 transition-colors">
                <svg className="w-6 h-6 text-[#26C6DA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                </svg>
              </div>
              <h3 className="text-[#0A192F] group-hover:text-white text-xl font-black uppercase mb-4 tracking-tighter">
                {t(`Cards.${item.key}.Title`)}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-loose whitespace-pre-line">
                {t(`Cards.${item.key}.Detail`)}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CONTACT FORM SECTION */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#26C6DA] font-black uppercase tracking-[0.4em] text-[10px] bg-[#0A192F] px-4 py-1 mb-6 inline-block">
              {t('Form.Inquiry')}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0A192F] tracking-tighter uppercase italic">
              {t.rich('Form.Title', {
                italic: (chunks) => <span className="text-[#26C6DA] not-italic">{chunks}</span>
              })}
            </h2>
          </div>

          <form className="grid md:grid-cols-2 gap-8 bg-white p-12 shadow-2xl border-t-4 border-[#26C6DA]">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('Form.FullName')}</label>
              <input 
                type="text" 
                placeholder={t('Form.Placeholder.Name')}
                className="w-full bg-gray-50 border border-transparent focus:border-[#26C6DA] focus:bg-white p-4 outline-none transition-all font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('Form.Email')}</label>
              <input 
                type="email" 
                placeholder={t('Form.Placeholder.Email')}
                className="w-full bg-gray-50 border border-transparent focus:border-[#26C6DA] focus:bg-white p-4 outline-none transition-all font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('Form.Phone')}</label>
              <input 
                type="tel" 
                placeholder={t('Form.Placeholder.Phone')}
                className="w-full bg-gray-50 border border-transparent focus:border-[#26C6DA] focus:bg-white p-4 outline-none transition-all font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('Form.Service')}</label>
              <select className="w-full bg-gray-50 border border-transparent focus:border-[#26C6DA] focus:bg-white p-4 outline-none transition-all font-medium appearance-none">
                <option>{t('Form.Categories.Maintenance')}</option>
                <option>{t('Form.Categories.FitOut')}</option>
                <option>{t('Form.Categories.HVAC')}</option>
                <option>{t('Form.Categories.Infrastructure')}</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('Form.Requirements')}</label>
              <textarea 
                rows="5"
                placeholder={t('Form.Placeholder.Description')}
                className="w-full bg-gray-50 border border-transparent focus:border-[#26C6DA] focus:bg-white p-4 outline-none transition-all font-medium resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 pt-4">
              <button 
                type="submit"
                className="w-full bg-[#0A192F] text-[#26C6DA] font-black uppercase tracking-[0.3em] py-6 text-xs hover:bg-[#26C6DA] hover:text-[#0A192F] transition-all duration-500 shadow-xl"
              >
                {t('Form.Submit')}
              </button>
            </div>
          </form>
        </div>
      </SectionWrapper>
    </>
  );
};

export default ContactClient;
