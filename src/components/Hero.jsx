import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallax } from '@/hooks/useParallax';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Hero = () => {
  const t = useTranslations('Hero');
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: parallaxRef, offset } = useParallax(0.3);

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data from translations
  const slides = [
    {
      image: '/hero.png',
      title: t.raw('slides.0.title'),
      description: t('slides.0.description'),
    },
    {
      image: '/service4.jpg',
      title: t.raw('slides.1.title'),
      description: t('slides.1.description'),
    },
    {
      image: '/service.png',
      title: t.raw('slides.2.title'),
      description: t('slides.2.description'),
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  // Count-up animations for stats
  const yearsCount = useCountUp(13, 2000, statsInView);
  const deliveryCount = useCountUp(100, 2000, statsInView);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-[#0A192F]">
      {/* Carousel Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          ref={parallaxRef}
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${offset}px)` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={slides[currentSlide].image}
            alt="Azcon Infra Engineering Excellence"
            fill
            className="object-cover opacity-60 lg:opacity-100"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/10 lg:via-[#0A192F]/10 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#26C6DA] rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#26C6DA]/50 rounded-full"
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mt-40 py-6 mx-auto  px-10 relative z-10">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={`content-${currentSlide}`}
        >
  

          {/* Main Headline with Word-by-Word Animation */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentSlide}`}
             className="font-inter text-5xl md:text-6xl font-bold text-white  leading-tight tracking-tight uppercase mb-8"

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {slides[currentSlide].title.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block mr-4 ${i === 1
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#26C6DA] to-white not-italic'
                      : i === 0
                        ? 'italic'
                        : ''
                    }`}
                >
                  {word}
                  {i === 0 && <br />}
                  {i === 1 && <br />}
                </motion.span>
              ))}
            </motion.h1>
          </AnimatePresence>

          {/* Supporting Text */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${currentSlide}`}
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-sm md:text-lg text-gray-300 max-w-2xl leading-relaxed font-medium tracking-wide"
            >
              {slides[currentSlide].description}
            </motion.p>
          </AnimatePresence>

          {/* Carousel Indicators */}
          <motion.div variants={itemVariants} className="flex gap-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group relative"
              >
                <div
                  className={`h-1 rounded-full transition-all duration-500 ${index === currentSlide ? 'w-12 bg-[#26C6DA]' : 'w-8 bg-white/30 hover:bg-white/50'
                    }`}
                />
              </button>
            ))}
          </motion.div>

          {/* CTA Group */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row gap-5"
          >
            <Link
              href="/services"
              className="group px-10 py-5 bg-[#26C6DA] hover:bg-white text-[#0A192F] font-black text-[10px] tracking-[0.3em] uppercase rounded-sm transition-all duration-500 shadow-[0_0_30px_rgba(38,198,218,0.3)] hover:shadow-[0_0_50px_rgba(38,198,218,0.5)] flex items-center justify-center gap-3 relative overflow-hidden"
            >
              <span className="relative z-10">{t("ViewScope")}</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
              {/* Ripple effect on hover */}
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0.5 }}
                whileHover={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 border border-white/20 hover:border-[#26C6DA] text-white font-black text-[10px] tracking-[0.3em] uppercase rounded-sm backdrop-blur-md transition-all duration-500 flex items-center justify-center hover:bg-[#26C6DA]/10"
            >
              {t("RequestAssessment")}
            </Link>
          </motion.div>

          
        </motion.div>
      </div>

      {/* Animated Decorative Element */}
      <motion.div
        className="absolute bottom-0 right-0 w-1/3 h-[2px] bg-gradient-to-l from-[#26C6DA] to-transparent opacity-30"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        style={{ transformOrigin: 'right' }}
      />
    </section>
  );
};

export default Hero;