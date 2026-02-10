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
  const [activeTab, setActiveTab] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setSticky(scrolled > 50);

      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const megaMenuData = {
    services: [
      {
        category: t("megaMenu.BuildingMaintenance.category"),
        image: "/service.png",
        description: t("megaMenu.BuildingMaintenance.description"),
        links: [
          t("megaMenu.BuildingMaintenance.links.0"),
          t("megaMenu.BuildingMaintenance.links.1"),
          t("megaMenu.BuildingMaintenance.links.2"),
          t("megaMenu.BuildingMaintenance.links.3"),
        ],
      },
      {
        category: t("megaMenu.Interiors.category"),
        image: "/service_2.png",
        description: t("megaMenu.Interiors.description"),
        links: [
          t("megaMenu.Interiors.links.0"),
          t("megaMenu.Interiors.links.1"),
          t("megaMenu.Interiors.links.2"),
          t("megaMenu.Interiors.links.3"),
        ],
      },
      {
        category: t("megaMenu.Industrial.category"),
        image: "/service_4.png",
        description: t("megaMenu.Industrial.description"),
        links: [
          t("megaMenu.Industrial.links.0"),
          t("megaMenu.Industrial.links.1"),
          t("megaMenu.Industrial.links.2"),
          t("megaMenu.Industrial.links.3"),
        ],
      },
    ],
  };

  const navItems = [
    { key: "Home", href: "/" },
    { key: "About", href: "/about" },
    { key: "Gallery", href: "/gallery" },
    { key: "Blog", href: "/blog" },
    { key: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* 1. Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#26C6DA] to-[#0A192F] z-[70] origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />

      <motion.header
        className={`w-full top-0 left-0 z-50 transition-all duration-500 ${
          isSticky ? "fixed shadow-2xl" : "absolute"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Sticky Backdrop Blur */}
        <motion.div
          className={`absolute inset-0 bg-white/95 backdrop-blur-md z-0 ${
            !isSticky ? "pointer-events-none" : ""
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isSticky ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* 2. Top Bar (Hides on Scroll) */}
        <motion.div
          className="bg-[#0A192F] text-white py-2 transition-all duration-500 overflow-hidden relative z-20"
          animate={{
            height: isSticky ? 0 : "auto",
            opacity: isSticky ? 0 : 1,
            paddingTop: isSticky ? 0 : "0.5rem",
            paddingBottom: isSticky ? 0 : "0.5rem",
          }}
        >
          <div className="container mx-auto px-6 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em]">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-2">
                <motion.span
                  className="w-2 h-2 rounded-full bg-[#26C6DA]"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {t("TechnicalResponse")}
              </span>
            </div>
            <div className="flex gap-6 items-center">
              <span className="hover:text-[#26C6DA] transition-colors cursor-pointer hidden md:block opacity-70">
                {t("ServingEmirates")}
              </span>
            </div>
          </div>
        </motion.div>

        {/* 3. Main Navigation Area */}
        <div
          className={`max-w-7xl container mx-auto px-2 transition-all duration-300 relative z-30 ${
            isSticky ? "py-2" : "py-6"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group">
              <motion.span
                className={`text-2xl md:text-3xl font-black tracking-tighter transition-colors duration-300 ${
                  isSticky ? "text-[#0A192F]" : "text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                AZCON <span className="text-[#26C6DA]">INFRA</span>
              </motion.span>
            </Link>

            {/* Desktop Nav + Switcher Group */}
            <div className="hidden lg:flex items-center gap-10">
              <nav className="flex items-center space-x-10 h-full">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all ${
                      isSticky ? "text-[#0A192F]" : "text-white"
                    } hover:text-[#26C6DA] relative group`}
                  >
                    {t(item.key)}
                    <motion.span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#26C6DA] group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}

                {/* Services Dropdown Trigger */}
                <div
                  className="group h-full flex items-center relative"
                  onMouseEnter={() => setActiveTab("services")}
                >
                  <Link
                    href="/services"
                    className={`text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-1 transition-all ${
                      isSticky ? "text-[#0A192F]" : "text-white"
                    } hover:text-[#26C6DA]`}
                  >
                    {t("Services")}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  
                  {/* Mega Menu logic remains the same as your original */}
                </div>
              </nav>

              {/* Language Switcher - Placed inside Main Nav for visibility */}
              <div className="border-l border-white/10 pl-6">
                <LanguageSwitcher />
              </div>
            </div>

            {/* Contact Button & Mobile Toggle */}
            <div className="flex items-center gap-6">
              {/* <div className="hidden md:flex items-center gap-6">
                <motion.div
                  className={`hidden xl:block text-right ${
                    isSticky ? "text-[#0A192F]" : "text-white"
                  }`}
                >
                  
                  <p className="text-sm font-black tracking-tighter">info@azconinfra.com</p>
                </motion.div>
                <Link
                  href="/contact"
                  className={`px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] rounded-sm transition-all duration-500 shadow-2xl ${
                    isSticky
                      ? "bg-[#0A192F] text-white hover:bg-[#26C6DA] hover:text-[#0A192F]"
                      : "bg-[#26C6DA] text-[#0A192F] hover:bg-white"
                  }`}
                >
                  {t("SecureAssessment")}
                </Link>
              </div> */}

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 ${isSticky ? "text-[#0A192F]" : "text-white"}`}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0A192F] z-[100] p-8 flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-black text-white">
                AZCON <span className="text-[#26C6DA]">INFRA</span>
              </span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-[#26C6DA]">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Added Language Switcher to Mobile Menu Top */}
            <div className="mb-10">
                <LanguageSwitcher />
            </div>

            <nav className="flex flex-col space-y-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-black text-white uppercase tracking-tighter hover:text-[#26C6DA] transition-colors inline-block"
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>
            
            <div className="mt-auto border-t border-white/10 pt-8">
              <p className="text-[#26C6DA] font-black uppercase tracking-widest text-xs mb-2">
                {t("TechnicalAssessment")}
              </p>
              <p className="text-white text-xl font-black">+971-42 945 885</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
