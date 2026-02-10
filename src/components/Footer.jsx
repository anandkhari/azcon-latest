'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const sectors = t.raw("Sectors");
  const services = t.raw("ServiceNames");

  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedinIn size={18} />, href: '#' },
 
    { name: 'Gmail', icon: <IoMailOutline size={20} />, href: `mailto:${t("Contact.Email")}` },
  ];

  return (
    <>
      <footer className="bg-[#0A192F] text-white pt-20 pb-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-black tracking-tighter mb-6 uppercase">
                AZCON <span className="text-[#26C6DA]">INFRA</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-sm font-medium">
                {t("Description")}
              </p>
              
              {/* SOCIAL MEDIA ICONS - REACT ICONS VERSION */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link 
                    key={social.name} 
                    href={social.href} 
                    className="w-11 h-11 border border-white/10 flex items-center justify-center hover:bg-[#26C6DA] hover:border-[#26C6DA] transition-all duration-500 group relative overflow-hidden"
                  >
                    <div className="text-gray-400 group-hover:text-[#0A192F] z-10 transition-colors duration-300">
                      {social.icon}
                    </div>
                    {/* Hover Slide Effect */}
                    <div className="absolute inset-0 bg-[#26C6DA] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Section */}
            <div>
              <h4 className="text-[#26C6DA] text-[10px] uppercase tracking-[0.3em] font-black mb-8 italic">
                {t("OurServices")}
              </h4>
              <ul className="space-y-3 text-[11px] font-black uppercase tracking-widest">
                {Object.values(services).map((serviceName) => (
                  <li key={serviceName}>
                    <Link href="/services" className="text-gray-400 hover:text-[#26C6DA] transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-[#26C6DA] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {serviceName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sectors Section */}
            <div>
              <h4 className="text-[#26C6DA] text-[10px] uppercase tracking-[0.3em] font-black mb-8 italic">
                {t("SectorsServed")}
              </h4>
              <ul className="space-y-3 text-[11px] font-black uppercase tracking-widest">
                {sectors.map((sector) => (
                  <li key={sector} className="text-gray-500 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-white/10"></span>
                    {sector}
                  </li>
                ))}
              </ul>
            </div>

            {/* HQ Section */}
            <div>
              <h4 className="text-[#26C6DA] text-[10px] uppercase tracking-[0.3em] font-black mb-8 italic">
                {t("Headquarters")}
              </h4>
              <address className="not-italic text-gray-400 space-y-5 text-xs font-medium">
                <div className="flex items-start gap-4">
                   <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 text-[#26C6DA]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                   </div>
                  <span className="uppercase tracking-tighter leading-relaxed">{t("Address")}</span>
                </div>
                
                <div className="flex items-center gap-4">
                   <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 text-[#26C6DA]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                   </div>
                  <a href={`tel:${t("Contact.Phone")}`} className="hover:text-white text-gray-200 transition-colors tracking-widest font-black">
                    {t("Contact.Phone")}
                  </a>
                </div>

                <div className="flex items-center gap-4">
                   <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 text-[#26C6DA]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                   </div>
                  <a href={`mailto:${t("Contact.Email")}`} className="text-white hover:text-[#26C6DA] transition-colors tracking-widest font-black uppercase">
                    {t("Contact.Email")}
                  </a>
                </div>
              </address>
            </div>

          </div>
        </div>
      </footer>

      {/* Copyright Bar */}
      <div className="bg-[#071324] text-gray-600 py-8 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-[0.3em] uppercase">
          <p>{t("Copyright", { year: currentYear })}</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-[#26C6DA] transition-colors">
              {t("Links.Privacy")}
            </Link>
            <Link href="/terms" className="hover:text-[#26C6DA] transition-colors">
              {t("Links.Terms")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;