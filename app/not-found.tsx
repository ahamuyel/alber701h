'use client';

import Link from 'next/link';
import { useLanguage } from './context/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl md:text-8xl font-bold font-mono text-white/20 mb-4">404</h1>
        <h2 className="text-xl md:text-2xl font-medium mb-3">{t.notFound.title}</h2>
        <p className="text-sm text-white/40 mb-8">
          {t.notFound.description}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all"
        >
          {t.notFound.backHome}
        </Link>
      </div>
    </div>
  );
}
