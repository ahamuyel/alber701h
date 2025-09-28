"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomeSection() {
  const phrases = [
    "Olá, eu sou Alberto Hamuyela",
    "Sou um estudante da 42",
    "Desenvolvedor Web",
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
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {displayedText}
          <span className="animate-pulse">_</span>
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Desenvolvedor web apaixonado por criar soluções digitais inovadoras e experiências interativas que impactam.
        </p>
        <Link
          href="#projects"
          className="btn inline-block px-6 py-3"
        >
          Explore Meus Projetos
        </Link>
      </div>
    </section>
  );
}
