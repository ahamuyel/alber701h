'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';

interface HeroProps {
  onProjectsClick: () => void;
  isDark: boolean;
}

export default function Hero({ onProjectsClick, isDark }: HeroProps) {
  const phrases = [
    "Hi, I'm Alberto IH",
    "A 42 Student",
    "Web Developer",
    "DevOps",
    "Cur10usX's founder",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  // Fixed typing logic: prevents race conditions & stale closures
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentPhrase = phrases[currentPhraseIndex];

    if (isTyping) {
      if (charIndex < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 80 + Math.random() * 40); // Realistic typing speed variance
      } else {
        // Pause at the end of the phrase before erasing
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 40);
      } else {
        // Pause after fully erased, then move to next phrase
        timeout = setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, currentPhraseIndex, phrases]);

  return (
    <motion.div
      className="relative z-10 mb-12 md:mb-16 lg:mb-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col-reverse md:flex-row md:items-end justify-between gap-8 md:gap-12">
        {/* Left Column */}
        <div className="w-full md:w-auto">
          <motion.h1
            className={`text-2xl md:text-3xl lg:text-4xl font-bold font-mono tracking-tight leading-tight min-h-[2.5rem] transition-colors duration-300 ${isDark ? 'text-white' : 'text-neutral-900'}`}
            variants={itemVariants}
          >
            <span className="inline-block min-w-[9ch]">
              {displayedText}
            </span>
            {/* Blinking Cursor - adapts to theme */}
            <span 
              className={`inline-block w-[3px] h-[0.85em] ml-1 align-middle transition-opacity duration-200 ${isDark ? 'bg-white/80' : 'bg-neutral-900/80'} ${
                isTyping || charIndex > 0 ? 'opacity-100' : 'opacity-30'
              }`} 
            />
          </motion.h1>
          
          <motion.p
            className={`text-sm md:text-base mt-4 max-w-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-white/50' : 'text-neutral-500'}`}
            variants={itemVariants}
          >
            Creative enough to imagine it. Technical enough to build it. Resilient enough to ship it.
          </motion.p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
          <motion.h2
            className={`text-5xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tight leading-none transition-colors duration-300 ${isDark ? 'text-white' : 'text-neutral-900'}`}
            variants={itemVariants}
          >
            Developer
          </motion.h2>

          <motion.button
            className={`group flex items-center gap-3 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 ${
              isDark 
                ? 'bg-white text-black hover:bg-white/90 hover:shadow-lg hover:shadow-white/10' 
                : 'bg-neutral-900 text-white hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-900/10'
            }`}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onProjectsClick}
            aria-label="View Projects"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
