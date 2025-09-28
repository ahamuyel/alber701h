"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomeSection() {
  const phrases = [
    "Olá, eu sou Alberto Hamuyela",
    "Sou um estudante da 42",
    "Apaixonado por tecnologia",
    "Construo experiências digitais",
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
          setIsTyping(false);
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

    const typingSpeed = isTyping ? 100 : 50;
    const pauseDuration = isTyping && charIndex === currentPhrase.length ? 2000 : 0;

    const timer = setTimeout(typeOrErase, pauseDuration || typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isTyping, currentPhraseIndex, phrases]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      <motion.div
        className="absolute inset-[-10%] bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-600"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 15, -15, 0],
          borderRadius: ['0%', '15%', '5%', '0%'],
          opacity: [0.4, 0.6, 0.4],
          background: [
            'linear-gradient(90deg, #06b6d4, #8b5cf6, #4f46e5)',
            'linear-gradient(135deg, #8b5cf6, #4f46e5, #06b6d4)',
            'linear-gradient(180deg, #4f46e5, #06b6d4, #8b5cf6)',
            'linear-gradient(90deg, #06b6d4, #8b5cf6, #4f46e5)',
          ],
        }}
        transition={{
          duration: 8,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
          times: [0, 0.3, 0.6, 1],
        }}
      />
      <div className="text-center px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-cyan-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {displayedText}
          <span className="animate-pulse text-cyan-300">_</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Desenvolvedor web apaixonado por criar soluções digitais inovadoras e experiências interativas que impactam.
        </motion.p>
        <Link href="#projects" className="home-btn inline-block px-6 py-3 bg-cyan-400 text-white rounded hover:bg-indigo-600 transition-colors">
          Explore Meus Projetos
        </Link>
      </div>
    </section>
  );
}