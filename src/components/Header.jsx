"use client";

import { Link } from "@/i18n/routing";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const t = useTranslations("Header");
  const [isSticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  /* ================= SCROLL HANDLER ================= */
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setSticky(scrolled > 50);

      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress((scrolled / windowHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock background scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const navItems = [
    { key: "Home", href: "/" },
    { key: "About", href: "/about" },
    { key: "Gallery", href: "/gallery" },
    { key: "Blog", href: "/blog" },
    { key: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#26C6DA] to-[#0A192F] z-[70] origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />

      {/* ================= HEADER ================= */}
      <motion.header
        className={`w-full top-0 left-0 z-50 transition-all duration-500 ${
          isSticky ? "fixed shadow-2xl" : "absolute"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        {/* Sticky Blur */}
        <motion.div
          className="absolute inset-0 bg-white/95 backdrop-blur-md z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isSticky ? 1 : 0 }}
        />

        {/* ================= TOP BAR ================= */}
        <motion.div
          className="bg-[#0A192F] text-white overflow-hidden relative z-20"
          animate={{
            height: isSticky ? 0 : "auto",
            opacity: isSticky ? 0 : 1,
            paddingTop: isSticky ? 0 : "0.5rem",
            paddingBottom: isSticky ? 0 : "0.5rem",
          }}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 flex justify-between items-center text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2">
              <motion.span
                className="w-2 h-2 rounded-full bg-[#26C6DA]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {t("TechnicalResponse")}
            </span>

            <span className="hidden md:block opacity-70">
              {t("ServingEmirates")}
            </span>
          </div>
        </motion.div>

        {/* ================= MAIN NAV ================= */}
        <div
          className={`max-w-7xl mx-auto px-3 sm:px-6 relative z-30 transition-all ${
            isSticky ? "py-2" : "py-4 md:py-6"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link href="/">
              <span
                className={`text-xl sm:text-2xl md:text-3xl font-black tracking-tighter transition-colors ${
                  isSticky ? "text-[#0A192F]" : "text-white"
                }`}
              >
                AZCON <span className="text-[#26C6DA]">INFRA</span>
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-10">
              <nav className="flex items-center space-x-8 xl:space-x-10">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all ${
                      isSticky ? "text-[#0A192F]" : "text-white"
                    } hover:text-[#26C6DA]`}
                  >
                    {t(item.key)}
                  </Link>
                ))}

                <Link
                  href="/services"
                  className={`text-[11px] font-black uppercase tracking-[0.2em] ${
                    isSticky ? "text-[#0A192F]" : "text-white"
                  } hover:text-[#26C6DA]`}
                >
                  {t("Services")}
                </Link>
              </nav>

              <div className="border-l border-white/10 pl-6">
                <LanguageSwitcher />
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${
                isSticky ? "text-[#0A192F]" : "text-white"
              }`}
            >
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0A192F] z-[100] px-6 pt-safe pb-10 flex flex-col overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
          >
            {/* TOP */}
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl sm:text-2xl font-black text-white">
                AZCON <span className="text-[#26C6DA]">INFRA</span>
              </span>

              <button onClick={() => setIsMobileMenuOpen(false)}>
                <svg className="w-9 h-9 text-[#26C6DA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <LanguageSwitcher />

            {/* NAV */}
            <nav className="flex flex-col space-y-6 mt-10">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight hover:text-[#26C6DA]"
                >
                  {t(item.key)}
                </Link>
              ))}

              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight hover:text-[#26C6DA]"
              >
                {t("Services")}
              </Link>
            </nav>

            {/* FOOTER */}
            <div className="mt-auto border-t border-white/10 pt-8">
              <p className="text-[#26C6DA] font-black uppercase tracking-widest text-xs mb-2">
                {t("TechnicalAssessment")}
              </p>
              <p className="text-white text-lg font-black">
                +971-42 945 885
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
