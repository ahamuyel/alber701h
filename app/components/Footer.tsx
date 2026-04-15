'use client';

import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { 
  FaGithub, 
  FaLinkedin, 
} from 'react-icons/fa';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      id="contact"
      className="relative z-10 mt-16 pt-8 border-t border-white/10 scroll-mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-medium text-white/80 mb-2">Let&apos;s work together</h3>
          <p className="text-sm text-white/40">
            Always open to new opportunities and interesting projects
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:alberto@example.com"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs text-white/50 hover:text-white hover:border-white/30 transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/alber701h"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs text-white/50 hover:text-white hover:border-white/30 transition-all"
          >
            <FaGithub className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/alberto-hamuyela"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs text-white/50 hover:text-white hover:border-white/30 transition-all"
          >
            <FaLinkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://t.me/alber701h"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs text-white/50 hover:text-white hover:border-white/30 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Telegram</span>
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-white/30">
        <p>&copy; {currentYear} Alberto Hamuyela. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
