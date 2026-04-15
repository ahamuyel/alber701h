'use client';

import { motion } from 'framer-motion';
import type { WorkExperience } from '../types';
import { calculateTotalExperience } from '../utils/date';

interface ExperienceSectionProps {
  experiences: WorkExperience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const totalExperience = calculateTotalExperience(experiences);

  return (
    <motion.div
      id="experience"
      className="relative z-10 mb-16 scroll-mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-end justify-between mb-8">
        <p className="text-xs text-white/40 max-w-[200px]">
          Some of my <span className="text-white/60">favorite technologies</span> and tools I work with
        </p>
        <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tight">Work</h2>
      </div>

      <div className="border-t border-white/10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="md:col-span-1">
              <p className="text-sm text-white/70 font-mono">{exp.period}</p>
            </div>
            <div className="md:col-span-1">
              <p className="text-sm text-white/80 font-medium">{exp.company}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-white/50">
                {exp.role} <span className="text-white/30">|</span>{' '}
                <span className="text-white/40">{exp.tech}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-end mt-4">
        <p className="text-xs text-white/40 text-right">
          Total work experience
          <br />
          <span className="text-white/60 font-medium">{totalExperience}</span>
        </p>
      </div>
    </motion.div>
  );
}
