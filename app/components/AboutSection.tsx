'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '../types';
import { fadeInUp } from '../utils/animations';

interface AboutSectionProps {
  skills: Skill[];
}

export default function AboutSection({ skills }: AboutSectionProps) {
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
    <motion.div
      id="about"
      className="relative z-10 mb-16 md:mb-24 scroll-mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-12">
        <div>
          <p className="text-sm font-mono text-white/60 mb-3">
            {typedText}
            <motion.span
              className="inline-block w-0.5 h-4 bg-white/60 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </p>
          <p className="text-sm text-white/40 max-w-sm leading-relaxed">
            Hello! I&apos;m <span className="text-white/70 font-medium">Alberto Hamuyela</span>, a{' '}
            <span className="text-white/70 font-medium">full-stack developer</span> passionate about building{' '}
            <span className="text-white/70 font-medium">scalable</span> and{' '}
            <span className="text-white/70 font-medium">user-friendly</span> applications.
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div id="skills" className="scroll-mt-24">
        <h3 className="text-2xl md:text-3xl font-bold font-mono mb-6">Tech Stack</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              className={`${
                index === 0
                  ? 'bg-white rounded-2xl p-6 text-black'
                  : 'bg-transparent rounded-2xl p-6 border border-white/10'
              }`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <h4
                className={`text-sm font-medium mb-2 ${
                  index === 0 ? 'text-black' : 'text-white/70'
                }`}
              >
                {skill.category}
              </h4>
              <p
                className={`text-xs leading-relaxed ${
                  index === 0 ? 'text-black/60' : 'text-white/40'
                }`}
              >
                {skill.skills}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
