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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="text-center px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {displayedText}
          <span className="animate-pulse">_</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Desenvolvedor web apaixonado por criar soluções digitais inovadoras e experiências interativas que impactam.
        </motion.p>
        <Link href="#projects" className="home-btn inline-block px-6 py-3 bg-white text-blue-900 rounded">
          Explore Meus Projetos
        </Link>
      </div>
    </section>
  );
}