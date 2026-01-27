// src/components/CTA.jsx
import Link from 'next/link';
import SectionWrapper from './SectionWrapper';
import { useTranslations } from 'next-intl';

const CTA = ({
  title,
  subtitle,
  primaryBtnText,
  primaryBtnLink = "/contact",
  secondaryBtnText,
  secondaryBtnLink = "https://wa.me/yournumber" // Common for UAE-based businesses
}) => {
  const t = useTranslations("CTA");
  
  // Use passed props if available, otherwise fallback to translations
  const displayTitle = title || t("Title");
  const displaySubtitle = subtitle || t("Subtitle");
  const displayPrimaryText = primaryBtnText || t("Button");
  const displaySecondaryText = secondaryBtnText || t("SecondaryButton");
  return (
    <SectionWrapper className="relative overflow-hidden bg-[#0A192F]">
      {/* Decorative Brand Accent (Teal Blur) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#26C6DA] opacity-10 blur-[100px] -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#26C6DA] opacity-10 blur-[100px] -ml-32 -mb-32"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto border-y border-white/10 py-12">
        {/* Subtle Brand Tagline */}
        <span className="text-[#26C6DA] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
          {t("Tagline")}
        </span>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          {displayTitle}
        </h2>
        
        <p className="mt-6 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
          {displaySubtitle}
        </p>
        
        <div className="mt-10 flex justify-center gap-5 flex-wrap">
          <Link 
            href={primaryBtnLink} 
            className="bg-[#26C6DA] text-[#0A192F] font-black uppercase tracking-widest py-4 px-10 rounded-sm hover:bg-white transition-all duration-300 shadow-xl"
          >
            {displayPrimaryText}
          </Link>
          
          <Link 
            href={secondaryBtnLink} 
            className="border-2 border-white/20 text-white font-black uppercase tracking-widest py-4 px-10 rounded-sm hover:border-[#26C6DA] hover:text-[#26C6DA] transition-all duration-300"
          >
            {displaySecondaryText}
          </Link>
        </div>

        {/* 24/7 Availability Indicator */}
        <div className="mt-8 flex items-center justify-center gap-2 text-gray-500 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26C6DA] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#26C6DA]"></span>
          </span>
          {t("SupportAvailability")}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CTA;