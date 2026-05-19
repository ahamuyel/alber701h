'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from './ui';
import type { WorkExperience } from '../types';
import { calculateTotalExperience } from '../utils/date';

interface ExperienceSectionProps {
  experiences: WorkExperience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const totalExperience = calculateTotalExperience(experiences);

  const subtitleParts = t.experience.subtitle.split(/\{highlight\}/);

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
        <p className={`text-sm max-w-xs leading-relaxed transition-colors duration-300 ${isDark ? 'text-white/40' : 'text-neutral-500'}`}>
          {subtitleParts[0]}
          <span className={isDark ? 'text-white/60' : 'text-neutral-700'}>{t.experience.work}</span>
          {subtitleParts[1]}
        </p>
        <SectionHeading title={t.experience.work} />
      </div>

      {/* Timeline */}
      <div className="relative">
        <div
          className={`absolute left-[7px] top-3 bottom-3 w-px transition-colors duration-300 ${
            isDark ? 'bg-white/10' : 'bg-neutral-200'
          }`}
        />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 transition-colors duration-300 ${
                  isDark
                    ? 'border-violet-400 bg-[#0a0a0a]'
                    : 'border-violet-500 bg-white'
                }`}
              >
                <div
                  className={`absolute inset-1 rounded-full transition-colors duration-300 ${
                    isDark ? 'bg-violet-400' : 'bg-violet-500'
                  }`}
                />
              </div>

              {/* Content card */}
              <div
                className={`rounded-xl md:rounded-2xl p-5 md:p-6 border transition-all duration-300 ${
                  isDark
                    ? 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12]'
                    : 'border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300'
                }`}
              >
                <div className="flex flex-col gap-4">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className={`text-base font-semibold transition-colors duration-300 ${
                            isDark ? 'text-white/90' : 'text-neutral-900'
                          }`}
                        >
                          {exp.company}
                        </h3>
                        {exp.employmentType && (
                          <span
                            className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full border transition-colors duration-300 ${
                              isDark
                                ? 'border-white/[0.08] text-white/30'
                                : 'border-neutral-200 text-neutral-400'
                            }`}
                          >
                            {exp.employmentType}
                          </span>
                        )}
                      </div>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          isDark ? 'text-white/50' : 'text-neutral-600'
                        }`}
                      >
                        {exp.role}
                      </p>
                    </div>

                    {/* Employment type badge */}
                    {index === 0 && (
                      <div
                        className={`flex-shrink-0 self-start px-3 py-1 rounded-full border text-[11px] font-mono transition-colors duration-300 ${
                          isDark
                            ? 'border-violet-400/20 text-violet-400/70 bg-violet-500/5'
                            : 'border-violet-500/30 text-violet-600 bg-violet-500/10'
                        }`}
                      >
                        {exp.tech}
                      </div>
                    )}
                  </div>

                  {/* Meta row */}
                  <div
                    className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono transition-colors duration-300 ${
                      isDark ? 'text-white/30' : 'text-neutral-400'
                    }`}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    )}
                    {exp.url && (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 transition-all duration-200 ${
                          isDark
                            ? 'text-white/40 hover:text-violet-400'
                            : 'text-neutral-400 hover:text-violet-600'
                        }`}
                      >
                        <ExternalLink className="w-3 h-3" />
                        {exp.url.replace('https://', '')}
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  {exp.description && (
                    <p
                      className={`text-xs leading-relaxed max-w-prose transition-colors duration-300 ${
                        isDark ? 'text-white/40' : 'text-neutral-500'
                      }`}
                    >
                      {exp.description}
                    </p>
                  )}

                  {/* Highlights */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="space-y-1.5">
                      {exp.highlights.map((item, i) => (
                        <motion.li
                          key={i}
                          className={`flex items-start gap-2 text-xs leading-relaxed transition-colors duration-300 ${
                            isDark ? 'text-white/40' : 'text-neutral-500'
                          }`}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                        >
                          <ChevronRight
                            className={`w-3 h-3 mt-0.5 flex-shrink-0 transition-colors duration-300 ${
                              isDark ? 'text-white/20' : 'text-neutral-400'
                            }`}
                          />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {/* Stack tags */}
                  {exp.stack && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.stack.split(' · ').map((s) => (
                        <span
                          key={s}
                          className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-mono border transition-colors duration-300 ${
                            isDark
                              ? 'border-white/[0.06] text-white/30 bg-white/[0.03]'
                              : 'border-neutral-200 text-neutral-400 bg-neutral-100/50'
                          }`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Total experience counter */}
      <motion.div
        className="flex justify-end mt-8 md:mt-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <div
          className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl border transition-colors duration-300 ${
            isDark
              ? 'border-white/[0.06] bg-white/[0.02]'
              : 'border-neutral-200 bg-neutral-50/50'
          }`}
        >
          <MapPin className={`w-3.5 h-3.5 ${isDark ? 'text-white/30' : 'text-neutral-400'}`} />
          <div className="flex items-baseline gap-1.5">
            <span className={`text-xs transition-colors duration-300 ${isDark ? 'text-white/30' : 'text-neutral-400'}`}>
              {t.experience.totalLabel}
            </span>
            <span className={`text-sm font-semibold font-mono transition-colors duration-300 ${isDark ? 'text-white/70' : 'text-neutral-700'}`}>
              {totalExperience}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
