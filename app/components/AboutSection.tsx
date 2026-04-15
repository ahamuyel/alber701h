'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '../types';
import { fadeInUp } from '../utils/animations';

interface AboutSectionProps {
  skills: Skill[];
  isDark: boolean;
}

export default function AboutSection({ skills, isDark }: AboutSectionProps) {
  const [typedText, setTypedText] = useState('');
  const fullText = '... /About me ...';

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <motion.section
      id="about"
      className="relative z-10 mb-12 md:mb-20 lg:mb-24 scroll-mt-24 transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12 mb-10 md:mb-14">
        <div className="w-full md:w-auto">
          <p className={`text-sm font-mono mb-3 transition-colors duration-300 ${isDark ? 'text-white/60' : 'text-neutral-600'}`}>
            {typedText}
            <motion.span
              className={`inline-block w-0.5 h-4 ml-1 align-middle transition-colors duration-300 ${isDark ? 'bg-white/60' : 'bg-neutral-600'}`}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </p>
          <p className={`text-sm md:text-base leading-relaxed max-w-full md:max-w-sm transition-colors duration-300 ${isDark ? 'text-white/50' : 'text-neutral-600'}`}>
            Hello! I&apos;m <span className={isDark ? 'text-white/80 font-medium' : 'text-neutral-900 font-medium'}>Alberto Hamuyela</span>, a{' '}
            <span className={isDark ? 'text-white/80 font-medium' : 'text-neutral-900 font-medium'}>full-stack developer</span> passionate about building{' '}
            <span className={isDark ? 'text-white/80 font-medium' : 'text-neutral-900 font-medium'}>scalable</span> and{' '}
            <span className={isDark ? 'text-white/80 font-medium' : 'text-neutral-900 font-medium'}>user-friendly</span> applications.
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div id="skills" className="scroll-mt-24">
        <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold font-mono mb-6 md:mb-8 transition-colors duration-300 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
          Tech Stack
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              className={`rounded-xl md:rounded-2xl p-5 md:p-6 transition-colors duration-300 backdrop-blur-sm ${
                index === 0
                  ? isDark 
                    ? 'bg-white text-black' 
                    : 'bg-neutral-900 text-white'
                  : isDark 
                    ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                    : 'bg-white border border-neutral-200 hover:bg-neutral-50'
              }`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
            >
              <h4
                className={`text-sm font-semibold mb-2 transition-colors duration-300 ${
                  index === 0 
                    ? isDark ? 'text-black' : 'text-white'
                    : isDark 
                      ? 'text-white/70' 
                      : 'text-neutral-700'
                }`}
              >
                {skill.category}
              </h4>
              <p
                className={`text-xs md:text-sm leading-relaxed transition-colors duration-300 ${
                  index === 0 
                    ? isDark ? 'text-black/70' : 'text-white/70'
                    : isDark 
                      ? 'text-white/40' 
                      : 'text-neutral-500'
                }`}
              >
                {skill.skills}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
