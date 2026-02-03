'use client';

import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionWrapper from './SectionWrapper';
import { useTranslations } from 'next-intl';

const StatCounter = ({ value, label, suffix = "", delay = 0 }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.5 });
  const endValue = parseInt(value, 10);
  const count = useCountUp(endValue, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      className="group relative flex flex-col items-center justify-center py-12 md:py-20 px-8 
                 border-b border-gray-100 sm:border-b-0 sm:border-r last:border-0 
                 transition-all duration-700 hover:bg-[#F7F9FC]"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {/* 1. Subtle Radial Glow on Hover */}
      <div className="absolute inset-0 bg-radial-gradient from-[#26C6DA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* 2. Number Display with Suffix */}
      <div className="relative flex items-baseline gap-1 z-10">
        <motion.span 
          className="text-5xl md:text-7xl font-black text-[#0A192F] tracking-tighter group-hover:text-[#26C6DA] transition-colors duration-500"
        >
          {count}
        </motion.span>
        <span className="text-[#26C6DA] text-2xl md:text-3xl font-bold italic">
          {suffix}
        </span>
      </div>

      {/* 3. Technical Accent Line */}
      <div className="relative mt-4 mb-2 z-10">
        <motion.div 
          className="h-[3px] bg-[#26C6DA] mx-auto"
          initial={{ width: 0 }}
          animate={isInView ? { width: 32 } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.5 }}
        />
      </div>

      {/* 4. Label */}
      <p className="relative z-10 text-[10px] md:text-xs font-black text-[#486581] uppercase tracking-[0.3em] text-center max-w-[150px] leading-relaxed">
        {label}
      </p>

      {/* 5. Architectural Corner Accents (Hidden on Mobile) */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none hidden md:block">
        <div className="absolute top-6 right-6 w-3 h-[1px] bg-gray-200 group-hover:bg-[#26C6DA] transition-colors" />
        <div className="absolute top-6 right-6 w-[1px] h-3 bg-gray-200 group-hover:bg-[#26C6DA] transition-colors" />
      </div>
    </motion.div>
  );
};

const Stats = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  const t = useTranslations("Stats");

  return (
    <SectionWrapper className="bg-white border-y border-gray-100 !py-0 relative overflow-hidden">
      {/* Technical Blueprint Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0A192F 1px, transparent 1px),
              linear-gradient(to bottom, #0A192F 1px, transparent 1px)
            `,
            backgroundSize: '45px 45px',
          }}
        />
        {/* Soft edge fade for the grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 max-w-full relative z-10">
        <StatCounter value="13" suffix="+" label={t("Counter1")} delay={0} />
        <StatCounter value="100" suffix="%" label={t("Counter2")} delay={0.1} />
        <StatCounter value="24" suffix="/7" label={t("Counter3")} delay={0.2} />
        <StatCounter value="100" suffix="%" label={t("Counter4")} delay={0.3} />
      </div>

      {/* Bottom accent glow */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#26C6DA]/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.5 }}
      />
    </SectionWrapper>
  );
};

export default Stats;