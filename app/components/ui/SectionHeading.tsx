'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/app/context/ThemeContext';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'right';
}

export default function SectionHeading({ title, subtitle, align = 'left' }: SectionHeadingProps) {
  const { isDark } = useTheme();

  return (
    <motion.div
      className={`flex flex-col ${align === 'right' ? 'items-end' : 'items-start'} mb-8 md:mb-12`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold font-mono tracking-tight transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-neutral-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-sm mt-2 max-w-md transition-colors duration-300 ${
            isDark ? 'text-white/40' : 'text-neutral-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
