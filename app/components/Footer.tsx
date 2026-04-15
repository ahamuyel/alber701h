'use client';

import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      id="contact"
      className={`relative z-10 mt-16 pt-8 border-t transition-colors duration-300 scroll-mt-24 ${
        isDark ? 'border-white/10' : 'border-neutral-200'
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
        <div className="text-center md:text-left">
          <h3 className={`text-lg font-medium mb-2 transition-colors duration-300 ${
            isDark ? 'text-white/80' : 'text-neutral-900'
          }`}>
            Let&apos;s work together
          </h3>
          <p className={`text-sm transition-colors duration-300 ${
            isDark ? 'text-white/40' : 'text-neutral-500'
          }`}>
            Always open to new opportunities and interesting projects
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { href: 'mailto:alber701hamuyela.com', icon: Mail, label: 'Email' },
            { href: 'https://github.com/alber701h', icon: FaGithub, label: 'GitHub', external: true },
            { href: 'https://linkedin.com/in/alberto-hamuyela', icon: FaLinkedin, label: 'LinkedIn', external: true },
            { href: 'https://t.me/alber701h', icon: Send, label: 'Telegram', external: true },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                isDark 
                  ? 'border-white/10 text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5' 
                  : 'border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-400 hover:bg-neutral-100'
              }`}
            >
              <link.icon className="w-3.5 h-3.5" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className={`mt-8 pt-6 border-t text-center text-xs transition-colors duration-300 ${
        isDark ? 'border-white/5 text-white/30' : 'border-neutral-200 text-neutral-400'
      }`}>
        <p>&copy; {currentYear} Alberto Hamuyela. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
