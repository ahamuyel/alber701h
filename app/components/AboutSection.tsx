'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from './ui';
import type { Skill } from '../types';
import { fadeInUp } from '../utils/animations';
import RadarChart from './ui/RadarChart';

interface AboutSectionProps {
  skills: Skill[];
}

const paraVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' as const },
  }),
};

function renderHighlight(part: string, i: number, isDark: boolean, lang: string) {
  if (part === '{highlight1}') {
    return <span key={i} className={isDark ? 'text-white/80 font-medium' : 'text-neutral-900 font-medium'}>{lang === 'pt' ? 'inteiro' : 'entire'}</span>;
  }
  if (part === '{highlight2}') {
    return <span key={i} className={isDark ? 'text-white/80 font-medium' : 'text-neutral-900 font-medium'}>{lang === 'pt' ? 'utilizável' : 'usable'}</span>;
  }
  return <span key={i}>{part}</span>;
}

export default function AboutSection({ skills }: AboutSectionProps) {
  const { isDark } = useTheme();
  const { t, lang } = useLanguage();
  const [typedText, setTypedText] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= t.about.heading.length) {
        setTypedText(t.about.heading.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
    return () => clearInterval(typeInterval);
  }, [t.about.heading]);

  const paragraphs = t.about.body.split('\n\n').map((p) => p.split(/(\{highlight1\}|\{highlight2\})/));

  return (
    <motion.section
      id="about"
      className="relative z-10 mb-12 md:mb-20 lg:mb-24 scroll-mt-24 transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {/* About text + monogram */}
      <div className="mb-10 md:mb-14">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-16">
          <div className="w-full md:max-w-2xl">
            <p className={`text-sm font-mono mb-4 transition-colors duration-300 ${isDark ? 'text-white/60' : 'text-neutral-600'}`}>
              {typedText}
            </p>

            <div className="space-y-5">
              {paragraphs.map((parts, pIdx) => (
                <motion.p
                  key={pIdx}
                  className={`text-sm md:text-base leading-relaxed transition-colors duration-300 ${isDark ? 'text-white/50' : 'text-neutral-600'}`}
                  custom={pIdx}
                  variants={paraVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {parts.map((part, i) => renderHighlight(part, i, isDark, lang))}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Monogram */}
          <motion.div
            className={`hidden md:flex flex-shrink-0 items-center justify-center w-28 h-28 lg:w-36 lg:h-36 rounded-2xl border select-none transition-all duration-300 ${
              isDark
                ? 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]'
                : 'border-neutral-200 bg-neutral-50 hover:border-neutral-300 hover:bg-neutral-100'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className={`text-3xl lg:text-4xl font-bold font-mono tracking-tight transition-colors duration-300 ${
              isDark ? 'text-white/15' : 'text-neutral-300'
            }`}>
              AH
            </span>
          </motion.div>
        </div>
      </div>

      {/* Skills */}
      <div id="skills" className="scroll-mt-24">
        <SectionHeading title={t.about.techStack} subtitle={t.about.techStackSub} />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`rounded-xl md:rounded-2xl p-5 md:p-7 border transition-colors duration-300 ${
            isDark
              ? 'border-white/[0.06] bg-white/[0.02]'
              : 'border-neutral-200 bg-white'
          }`}
        >
          {/* Radar chart */}
          <div className="flex justify-center">
            <motion.div
              key={activeCategory ?? '__all__'}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <RadarChart
                data={
                  activeCategory
                    ? skills
                        .find((s) => s.category === activeCategory)
                        ?.items.map((i) => ({ label: i.name, value: i.level })) ?? []
                    : skills.map((s) => ({
                        label: s.category,
                        value: s.items.reduce((a, i) => a + i.level, 0) / s.items.length,
                      }))
                }
                size={300}
                levels={5}
                compact
              />
            </motion.div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-5 md:mt-6">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-mono transition-all duration-200 ${
                activeCategory === null
                  ? isDark
                    ? 'bg-white/10 text-white/80'
                    : 'bg-neutral-800 text-white'
                  : isDark
                    ? 'text-white/30 hover:text-white/60 hover:bg-white/[0.04]'
                    : 'text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              All
            </button>
            {skills.map((s) => (
              <button
                key={s.category}
                onClick={() => setActiveCategory(s.category)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-mono transition-all duration-200 flex items-center gap-1.5 ${
                  activeCategory === s.category
                    ? isDark
                      ? 'bg-white/10 text-white/80'
                      : 'bg-neutral-800 text-white'
                    : isDark
                      ? 'text-white/30 hover:text-white/60 hover:bg-white/[0.04]'
                      : 'text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {s.icon && <s.icon className="w-3 h-3" />}
                {s.category}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
