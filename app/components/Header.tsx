'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, FileDown, FileText, Languages } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const { t, lang, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const styles = {
    text: {
      primary: isDark ? 'text-white/90' : 'text-neutral-900',
      secondary: isDark ? 'text-white/50' : 'text-neutral-500',
      nav: isDark ? 'text-white/60 hover:text-white' : 'text-neutral-500 hover:text-neutral-900',
      mobileNav: isDark ? 'text-white/70 hover:text-white border-white/10' : 'text-neutral-600 hover:text-neutral-900 border-neutral-200',
    },
    bg: {
      mobileMenu: isDark ? 'bg-neutral-900/98 border-white/10' : 'bg-white/98 border-neutral-200',
    },
    btn: {
      base: isDark ? 'hover:bg-white/10 text-white/70 active:bg-white/20' : 'hover:bg-black/10 text-neutral-600 active:bg-black/20',
    },
  };

  return (
    <>
      <motion.header
        className="flex items-center justify-between mb-12 md:mb-16 relative z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="text-sm font-mono tracking-wide select-none cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className={styles.text.primary}>Alberto</span>
          <br />
          <span className={styles.text.secondary}>Hamuyela</span>
        </div>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs transition-all duration-300 tracking-wide py-1 px-2 rounded hover:opacity-80 ${styles.text.nav}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className={`p-2 rounded-full transition-all duration-300 text-xs font-mono font-semibold ${styles.btn.base}`}
            aria-label={t.language.switchTo}
            title={t.language.switchTo}
          >
            <Languages className="w-4 h-4 hidden sm:block" />
            <span className="sm:hidden">{lang === 'en' ? 'PT' : 'EN'}</span>
            <span className="hidden sm:block text-xs ml-0">{lang === 'en' ? 'PT' : 'EN'}</span>
          </button>

          {/* Resume View */}
          <a
            href={t.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-all duration-300 ${styles.btn.base}`}
            aria-label={t.header.viewResume}
            title={t.header.viewResume}
          >
            <FileText className="w-4 h-4" />
          </a>

          {/* CV Download */}
          <a
            href={t.resumeUrl}
            download
            className={`p-2 rounded-full transition-all duration-300 ${styles.btn.base}`}
            aria-label={t.header.downloadCV}
            title={t.header.downloadCV}
          >
            <FileDown className="w-4 h-4" />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${styles.btn.base}`}
            aria-label={isDark ? t.header.switchToLight : t.header.switchToDark}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isDark ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.div>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full transition-all duration-300 ${styles.btn.base}`}
            aria-label={t.header.toggleMenu}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className={`fixed inset-0 z-40 ${isDark ? 'bg-black/60' : 'bg-black/20'} backdrop-blur-sm`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              ref={menuRef}
              className={`fixed top-4 left-4 right-4 md:left-auto md:right-8 md:w-80 md:top-20 z-50 backdrop-blur-xl border rounded-2xl shadow-2xl ${styles.bg.mobileMenu}`}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <nav className="flex flex-col p-2">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`text-sm font-medium py-3 px-4 rounded-xl transition-all duration-200 ${styles.text.mobileNav}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                  >
                    <span className="text-white/30 font-mono mr-3 text-xs">0{idx + 1}.</span>
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
