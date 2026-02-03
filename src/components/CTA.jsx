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
  secondaryBtnLink = "https://wa.me/yournumber" 
}) => {
  const t = useTranslations("CTA");
  
  const displayTitle = title || t("Title");
  const displaySubtitle = subtitle || t("Subtitle");
  const displayPrimaryText = primaryBtnText || t("Button");
  const displaySecondaryText = secondaryBtnText || t("SecondaryButton");

  return (
    // Applied !py-16 to override SectionWrapper's default bulky padding
    <SectionWrapper className="relative overflow-hidden bg-[#0A192F] py-16">
      
    

      {/* Reduced internal padding from py-12 to py-4 */}
      <div className="relative z-10 text-center max-w-4xl mx-auto py-4">
        
        {/* Subtle Brand Tagline */}
        <span className="text-[#26C6DA] font-black tracking-[0.4em] uppercase text-[10px] mb-4 block italic">
          {t("Tagline")}
        </span>
        
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
          {displayTitle}
        </h2>
        
        <p className="mt-4 text-base md:text-lg text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
          {displaySubtitle}
        </p>
        
        {/* Adjusted Button Padding for a "Genius Engineer" minimalist look */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link 
            href={primaryBtnLink} 
            className="bg-[#26C6DA] text-[#0A192F] font-black uppercase tracking-widest py-3 px-8 text-xs rounded-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(38,198,218,0.3)]"
          >
            {displayPrimaryText}
          </Link>
          
          <Link 
            href={secondaryBtnLink} 
            className="border border-white/20 text-white font-black uppercase tracking-widest py-3 px-8 text-xs rounded-sm hover:border-[#26C6DA] hover:text-[#26C6DA] transition-all duration-300"
          >
            {displaySecondaryText}
          </Link>
        </div>

        {/* 24/7 Availability Indicator */}
        <div className="mt-8 flex items-center justify-center gap-3 text-gray-500 text-[10px] font-black uppercase tracking-widest">
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