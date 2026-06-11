'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, FileText, ChevronDown } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const phrases = t.hero.typewriter;
  const currentPhrase = phrases[currentPhraseIndex];
  const isCursorIdle = !isTyping && charIndex > 0 && charIndex === currentPhrase.length;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentPhrase = phrases[currentPhraseIndex];

    if (isTyping) {
      if (charIndex < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 80 + Math.random() * 40);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 40);
      } else {
        timeout = setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, currentPhraseIndex, phrases]);

  const handleProjectsClick = useCallback(() => {
    const section = document.getElementById('projects');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <motion.div
      className="relative z-10 mb-12 md:mb-16 lg:mb-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Glow effect behind Developer text */}
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/2 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full blur-[100px] md:blur-[150px] transition-colors duration-500 ${
            isDark ? 'bg-violet-500/10' : 'bg-violet-400/10'
          }`}
          style={{ transform: 'translate(20%, -50%)' }}
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row md:items-end justify-between gap-8 md:gap-12">
        <div className="w-full md:w-auto">
          {/* Available badge */}
          <motion.div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono mb-4 transition-colors duration-300 ${
              isDark
                ? 'border-emerald-500/20 text-emerald-400/80 bg-emerald-500/5'
                : 'border-emerald-500/30 text-emerald-600 bg-emerald-500/10'
            }`}
            variants={itemVariants}
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            {t.hero.available}
          </motion.div>

          <motion.h1
            className={`text-2xl md:text-3xl lg:text-4xl font-bold font-mono tracking-tight leading-tight min-h-[2.5rem] max-w-full break-words transition-colors duration-300 ${isDark ? 'text-white' : 'text-neutral-900'}`}
            variants={itemVariants}
          >
            <span className="inline-block min-w-[9ch] max-w-full break-words">
              {displayedText.split('').map((char, i) =>
                char === ' ' ? (
                  <span key={`${currentPhraseIndex}-${i}`} className="inline-block">&nbsp;</span>
                ) : (
                  <motion.span
                    key={`${currentPhraseIndex}-${i}`}
                    initial={{ opacity: 0, x: -3 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.08, ease: 'easeOut' }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                )
              )}
              <span
                className={`inline-block w-[2px] h-[0.9em] align-middle rounded-full transition-opacity duration-200 ${
                  isDark ? 'bg-violet-400' : 'bg-violet-500'
                } ${
                  isCursorIdle
                    ? 'opacity-100 animate-pulse'
                    : isTyping || charIndex > 0
                      ? 'opacity-100'
                      : 'opacity-30'
                }`}
              />
            </span>
          </motion.h1>

          <motion.p
            className={`text-sm md:text-base mt-4 max-w-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-white/50' : 'text-neutral-500'}`}
            variants={itemVariants}
          >
            {t.hero.tagline}
          </motion.p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <h2
              className={`relative text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight leading-none max-w-full break-words transition-colors duration-300 ${isDark ? 'text-white' : 'text-neutral-900'}`}
            >
              {t.hero.developer}
            </h2>
            {/* Subtle underline decoration */}
            <div
              className={`absolute -bottom-2 left-0 right-0 h-[2px] rounded-full transition-colors duration-500 ${
                isDark ? 'bg-gradient-to-r from-violet-500/0 via-violet-500/40 to-violet-500/0' : 'bg-gradient-to-r from-violet-400/0 via-violet-400/40 to-violet-400/0'
              }`}
            />
          </motion.div>

          <div className="flex items-center gap-3">
            <motion.button
              className={`group flex items-center gap-3 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 ${
                isDark
                  ? 'bg-white text-black hover:bg-white/90 hover:shadow-lg hover:shadow-white/10'
                  : 'bg-neutral-900 text-white hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-900/10'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleProjectsClick}
              aria-label={t.hero.viewProjects}
            >
              <Sparkles className="w-4 h-4" />
              {t.hero.viewProjects}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.a
              href={t.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium border transition-all duration-300 active:scale-95 ${
                isDark
                  ? 'border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5'
                  : 'border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-400 hover:bg-neutral-100'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={t.header.viewResume}
            >
              <FileText className="w-4 h-4" />
              {t.hero.resume}
            </motion.a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="flex justify-center mt-16 md:mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className={`flex flex-col items-center gap-1 transition-colors duration-300 ${
            isDark ? 'text-white/20' : 'text-neutral-400'
          }`}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">{t.hero.scroll}</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
