'use client';

import { motion } from 'framer-motion';
import type { SocialLink } from '../types';

interface SocialLinksProps {
  links: SocialLink[];
  isDark: boolean;
}

export default function SocialLinks({ links, isDark }: SocialLinksProps) {
  return (
    <motion.div
      className={`flex flex-wrap items-center gap-3 mb-12 md:mb-16 relative z-10 transition-colors duration-300`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      {links.map((social) => (
        <motion.a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs transition-all duration-300 ${
            isDark
              ? 'border-white/10 text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5'
              : 'border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-400 hover:bg-neutral-100'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <social.icon className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{social.label}</span>
        </motion.a>
      ))}
    </motion.div>
  );
}
