'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';
import { useState, useEffect } from 'react';

interface HeroProps {
  onProjectsClick: () => void;
}

export default function Hero({ onProjectsClick }: HeroProps) {

  const phrases = [
    "Hi, I'm Alberto Hamuyela",
    "A 42 Student",
    "Web Developer",
    "DevOps",
    "Cur10usX's founder",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const typeOrErase = () => {
      if (isTyping) {
        if (charIndex < currentPhrase.length) {
          setDisplayedText(currentPhrase.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsTyping(false); // Start erasing after a pause
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(currentPhrase.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsTyping(true);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    };

    const typingSpeed = isTyping ? 100 : 50; // Faster erasing than typing
    const pauseDuration = isTyping && charIndex === currentPhrase.length ? 2000 : 0; // Pause at end of typing

    const timer = setTimeout(typeOrErase, pauseDuration || typingSpeed);

    return () => clearTimeout(timer); // Cleanup on unmount or change
  }, [charIndex, isTyping, currentPhraseIndex, phrases]);


  return (
    <motion.div
      className="relative z-10 mb-12 md:mb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono tracking-tight leading-none"
            variants={itemVariants}
          >
            {displayedText}
          </motion.h1>
          <motion.p
            className="text-sm md:text-base text-white/50 mt-4 max-w-[300px] leading-relaxed"
            variants={itemVariants}
          >
            Creative enough to imagine it. Technical enough to build it. Resilient enough to ship it.
          </motion.p>
        </div>

        <div className="flex flex-col items-end gap-6">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tight leading-none"
            variants={itemVariants}
          >
            Developer
          </motion.h1>

          <motion.button
            className="group flex items-center gap-3 bg-white text-black rounded-full px-6 py-2.5 text-sm font-medium hover:bg-white/90 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onProjectsClick}
          >
            Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
