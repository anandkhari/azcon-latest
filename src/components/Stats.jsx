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
      className="text-center py-12 px-8 border-r border-gray-100 last:border-0 group transition-all duration-500 hover:bg-gray-50 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#26C6DA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="flex flex-col items-center relative z-10">
        {/* Animated icon/decoration */}
        <motion.div
          className="w-16 h-16 rounded-full bg-[#26C6DA]/10 flex items-center justify-center mb-6 group-hover:bg-[#26C6DA]/20 transition-colors"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-8 h-8 rounded-full bg-[#26C6DA]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.p
          className="text-6xl font-black text-[#0A192F] tracking-tighter group-hover:text-[#26C6DA] transition-colors"
          initial={{ scale: 0.5 }}
          animate={isInView ? { scale: 1 } : { scale: 0.5 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          {count}{suffix}
        </motion.p>

        <motion.div
          className="w-10 h-1.5 bg-[#26C6DA] my-6 transition-all duration-500 group-hover:w-20"
          initial={{ width: 0 }}
          animate={isInView ? { width: 40 } : { width: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
        />

        <p className="text-xs font-black text-gray-500 uppercase tracking-[0.25em] leading-tight text-center px-4">
          {label}
        </p>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#26C6DA] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
    </motion.div>
  );
};

const Stats = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });
  const t = useTranslations("Stats");

  return (
    <SectionWrapper className="bg-white border-y border-gray-100 !py-0 relative overflow-hidden">
      {/* Background pattern */}
      <motion.div
        ref={ref}
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, #26C6DA 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.02 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 max-w-full relative z-10">
        <StatCounter value="13" suffix="+" label={t("Counter1")} delay={0} />
        <StatCounter value="100" suffix="%" label={t("Counter2")} delay={0.1} />
        <StatCounter value="24" suffix="/7" label={t("Counter3")} delay={0.2} />
        <StatCounter value="100" suffix="%" label={t("Counter4")} delay={0.3} />
      </div>
    </SectionWrapper>
  );
};

export default Stats;