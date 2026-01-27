"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing"; 
import { motion, AnimatePresence } from "framer-motion";

// --- SVG FLAGS ---
// 1. UNITED STATES FLAG (ENGLISH)
const USFlag = () => (
  <svg className="w-5 h-5 rounded-full object-cover border border-white/20 shadow-sm" viewBox="0 0 640 480">
    <path fill="#bd3d44" d="M0 0h640v480H0" />
    <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 202.8h640M0 276.5h640M0 350.2h640m0 73.7h640" />
    <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
    <marker id="us-a" markerHeight="30" markerWidth="30">
      <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
    </marker>
    <path fill="none" markerMid="url(#us-a)" d="m0 0 16 11h61M0 0h16l11 16" />
  </svg>
);

// 2. UNITED ARAB EMIRATES FLAG (ARABIC)
const UAEFlag = () => (
  <svg className="w-5 h-5 rounded-full object-cover border border-white/20 shadow-sm" viewBox="0 0 640 480">
    <path fill="#00732f" d="M0 0h640v160H0z" />
    <path fill="#fff" d="M0 160h640v160H0z" />
    <path fill="#000" d="M0 320h640v160H0z" />
    <path fill="red" d="M0 0h220v480H0z" />
  </svg>
);

export default function LanguageSwitcher() {
  const locale = useLocale(); // 'en' or 'ar'
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (nextLocale) => {
    setIsOpen(false);
    router.replace(pathname, { locale: nextLocale });
  };

  // Explicitly determine which flag to show for the MAIN BUTTON
  const CurrentFlag = locale === 'ar' ? UAEFlag : USFlag;
  const currentLabel = locale === 'ar' ? 'العربية' : 'English';

  return (
    <div className="relative z-50" ref={containerRef}>
      
      {/* TRIGGER BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 bg-[#0A192F]/80 hover:bg-[#26C6DA]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 transition-all duration-300 group"
      >
        <CurrentFlag /> {/* Shows active language flag */}
        <span className="text-[10px] font-black uppercase tracking-widest text-white group-hover:text-[#26C6DA] transition-colors">
          {currentLabel}
        </span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="w-3 h-3 text-white/50 group-hover:text-[#26C6DA] transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      {/* DROPDOWN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-48 bg-[#0A192F] border border-[#26C6DA]/30 shadow-2xl rounded-lg overflow-hidden py-2"
          >
            {/* OPTION 1: ENGLISH */}
            <button
              onClick={() => handleLanguageChange('en')}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[#26C6DA]/20 transition-colors ${
                locale === 'en' ? "bg-white/5" : ""
              }`}
            >
              <USFlag />
              <span className={`text-[10px] font-black uppercase tracking-widest flex-1 text-left ${
                locale === 'en' ? "text-[#26C6DA]" : "text-gray-300"
              }`}>
                English
              </span>
              {locale === 'en' && (
                <CheckIcon />
              )}
            </button>

            {/* OPTION 2: ARABIC */}
            <button
              onClick={() => handleLanguageChange('ar')}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[#26C6DA]/20 transition-colors ${
                locale === 'ar' ? "bg-white/5" : ""
              }`}
            >
              <UAEFlag />
              <span className={`text-[10px] font-black uppercase tracking-widest flex-1 text-left ${
                locale === 'ar' ? "text-[#26C6DA]" : "text-gray-300"
              }`}>
                العربية
              </span>
              {locale === 'ar' && (
                <CheckIcon />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Simple check icon helper
const CheckIcon = () => (
  <svg className="w-3 h-3 text-[#26C6DA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
  </svg>
);