import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  const t = useTranslations("Hero");
  const { ref: parallaxRef, offset } = useParallax(0.25);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/hero6.jpg",
      title: t.raw("slides.0.title"),
      description: t("slides.0.description"),
    },
    {
      image: "/hero5.jpg",
      title: t.raw("slides.1.title"),
      description: t("slides.1.description"),
    },
    {
      image: "/hero3.jpg",
      title: t.raw("slides.2.title"),
      description: t("slides.2.description"),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.08 },
    }),
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
      {/* ===== BACKGROUND IMAGE LAYER (SMOOTH CROSSFADE) ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            ref={parallaxRef}
            className="absolute inset-0"
            style={{ y: offset }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          >
            <Image
              src={slides[currentSlide].image}
              alt="Azcon Infra Engineering Excellence"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Persistent soft overlay (no flicker) */}
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 w-full mt-40">
        <div className="max-w-7xl mx-auto px-2">
          <motion.div
            className="max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={`content-${currentSlide}`}
          >
            {/* Headline */}
            <AnimatePresence initial={false}>
              <motion.h1
                key={`title-${currentSlide}`}
                className="font-inter text-5xl md:text-7xl font-semibold text-white leading-tight tracking-tight  mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {slides[currentSlide].title.map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className={`inline-block mr-4 ${
                      i === 1
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#26C6DA] to-white"
                        : ""
                    }`}
                  >
                    {word}
                    {(i === 0 || i === 1) && <br />}
                  </motion.span>
                ))}
              </motion.h1>
            </AnimatePresence>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-md text-gray-100 max-w-2xl leading-relaxed font-light tracking-wide"
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* Indicators */}
            <motion.div variants={itemVariants} className="flex gap-3 mt-8">
              {slides.map((_, index) => (
                <button key={index} onClick={() => setCurrentSlide(index)}>
                  <div
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? "w-12 bg-[#26C6DA]"
                        : "w-8 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                </button>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-col sm:flex-row gap-5"
            >
              <Link
                href="/services"
                className="group px-10 py-5 bg-[#26C6DA] hover:bg-white text-[#0A192F] font-black text-[10px] tracking-[0.3em] uppercase rounded-sm transition-all duration-500 flex items-center gap-4"
              >
                <span>{t("ViewScope")}</span>
                <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group px-10 py-5 border border-white/20 hover:border-[#26C6DA] text-white font-black text-[10px] tracking-[0.3em] uppercase rounded-sm transition-all duration-500 flex items-center gap-4 hover:text-[#26C6DA]"
              >
                <span>{t("RequestAssessment")}</span>
                <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
