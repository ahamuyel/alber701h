'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';

interface HeroProps {
  onProjectsClick: () => void;
}

export default function Hero({ onProjectsClick }: HeroProps) {
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tight leading-none"
            variants={itemVariants}
          >
            Full-stack
          </motion.h1>
          <motion.p
            className="text-sm md:text-base text-white/50 mt-4 max-w-[300px] leading-relaxed"
            variants={itemVariants}
          >
            Crafting maintainable, elegant, and scalable solutions that make development a joy.
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
