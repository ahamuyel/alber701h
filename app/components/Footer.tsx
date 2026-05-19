'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setEmail('');
    setMessage('');
  };

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
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16">
        <div className="w-full md:max-w-md">
          <h3 className={`text-lg font-medium mb-2 transition-colors duration-300 ${
            isDark ? 'text-white/80' : 'text-neutral-900'
          }`}>
            {t.footer.heading}
          </h3>
          <p className={`text-sm mb-6 transition-colors duration-300 ${
            isDark ? 'text-white/40' : 'text-neutral-500'
          }`}>
            {t.footer.subtitle}
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              placeholder={t.footer.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                isDark
                  ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30'
                  : 'bg-neutral-100 border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400'
              }`}
            />
            <textarea
              placeholder={t.footer.messagePlaceholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={3}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none resize-none transition-all ${
                isDark
                  ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30'
                  : 'bg-neutral-100 border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400'
              }`}
            />
            <button
              type="submit"
              disabled={sent}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all active:scale-95 ${
                sent
                  ? 'bg-green-500 text-white'
                  : isDark
                    ? 'bg-white text-black hover:bg-white/90'
                    : 'bg-neutral-900 text-white hover:bg-neutral-800'
              }`}
            >
              {sent ? (
                <>
                  <Check className="w-4 h-4" />
                  {t.footer.sent}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t.footer.send}
                </>
              )}
            </button>
          </form>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 flex-shrink-0">
          {[
            { href: 'mailto:alber701hamuyela@gmail.com', icon: Mail, label: t.footer.email },
            { href: 'https://github.com/ahamuyel', icon: FaGithub, label: 'GitHub', external: true },
            { href: 'https://www.linkedin.com/in/alber701h', icon: FaLinkedin, label: 'LinkedIn', external: true },
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
        <p>{t.footer.copyright.replace('{year}', String(currentYear))}</p>
      </div>
    </motion.footer>
  );
}
