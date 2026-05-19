'use client';

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { en, pt, type Translation } from '../translations';

type Language = 'en' | 'pt';

interface LanguageContextType {
  lang: Language;
  t: Translation;
  toggleLanguage: () => void;
}

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem('language') as Language | null;
  if (saved === 'en' || saved === 'pt') return saved;
  return navigator.language.startsWith('pt') ? 'pt' : 'en';
}

const translations: Record<Language, Translation> = { en, pt };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    setLang((prev) => {
      const next: Language = prev === 'en' ? 'pt' : 'en';
      localStorage.setItem('language', next);
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
