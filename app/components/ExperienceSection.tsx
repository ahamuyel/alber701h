'use client';

import { motion } from 'framer-motion';
import type { WorkExperience } from '../types';
import { calculateTotalExperience } from '../utils/date';

interface ExperienceSectionProps {
  experiences: WorkExperience[];
  isDark: boolean;
}

export default function ExperienceSection({ experiences, isDark }: ExperienceSectionProps) {
  const totalExperience = calculateTotalExperience(experiences);

  // Theme configuration
  const theme = {
    text: {
      heading: isDark ? 'text-white' : 'text-neutral-900',
      subtitle: isDark ? 'text-white/40' : 'text-neutral-500',
      highlight: isDark ? 'text-white/60' : 'text-neutral-700',
      period: isDark ? 'text-white/60' : 'text-neutral-500',
      company: isDark ? 'text-white/80' : 'text-neutral-900',
      role: isDark ? 'text-white/50' : 'text-neutral-600',
      tech: isDark ? 'text-white/30' : 'text-neutral-400',
      footerLabel: isDark ? 'text-white/30' : 'text-neutral-400',
      footerValue: isDark ? 'text-white/50' : 'text-neutral-700',
    },
    border: {
      top: isDark ? 'border-white/10' : 'border-neutral-200',
      item: isDark ? 'border-white/5' : 'border-neutral-200',
    },
    hover: isDark ? 'hover:bg-white/[0.03]' : 'hover:bg-neutral-50',
  };

  return (
    <motion.section
      id="experience"
      className="relative z-10 mb-16 md:mb-24 scroll-mt-24 transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col-reverse md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
        <p className={`text-sm max-w-xs leading-relaxed ${theme.text.subtitle}`}>
          Some of my <span className={theme.text.highlight}>favorite technologies</span> and tools I work with
        </p>
        <h2 className={`text-4xl md:text-5xl font-bold font-mono tracking-tight ${theme.text.heading}`}>
          Work
        </h2>
      </div>

      <div className={`border-t ${theme.border.top}`}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 py-5 md:py-6 border-b items-start md:items-center transition-colors duration-300 ${theme.border.item} ${theme.hover}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Period */}
            <div className="md:col-span-3 order-2 md:order-1">
              <p className={`text-sm font-mono transition-colors duration-300 ${theme.text.period}`}>
                {exp.period}
              </p>
            </div>

            {/* Company */}
            <div className="md:col-span-3 order-1 md:order-2">
              <p className={`text-base font-medium transition-colors duration-300 ${theme.text.company}`}>
                {exp.company}
              </p>
            </div>

            {/* Role & Tech */}
            <div className="md:col-span-6 order-3">
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                <p className={`text-sm transition-colors duration-300 ${theme.text.role}`}>
                  {exp.role}
                </p>
                {exp.tech && (
                  <div className="flex items-center gap-2">
                    <span className={`hidden md:block text-xs ${theme.text.tech}`}>/</span>
                    <span className={`text-xs md:text-sm font-mono opacity-80 ${theme.text.tech}`}>
                      {exp.tech}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-end mt-6 md:mt-8">
        <p className={`text-xs text-right transition-colors duration-300 ${theme.text.footerLabel}`}>
          Total work experience
          <br />
          <span className={`text-sm md:text-base font-medium font-mono ${theme.text.footerValue}`}>
            {totalExperience}
          </span>
        </p>
      </div>
    </motion.section>
  );
}
