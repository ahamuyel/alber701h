'use client';

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub as FaGithubIcon } from 'react-icons/fa';
import { ThemeProvider, useTheme } from '@/app/context/ThemeContext';
import { useLanguage } from '@/app/context/LanguageContext';
import { getProjects } from '@/app/data';
import { notFound } from 'next/navigation';

function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const projects = getProjects(t);
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    notFound();
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-[#0a0a0a] text-white' : 'bg-[#fafafa] text-neutral-900'
    }`}>
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className={`inline-flex items-center gap-2 text-sm mb-8 transition-all hover:gap-3 ${
              isDark ? 'text-white/50 hover:text-white' : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            {t.projectDetail.backHome}
          </Link>

          <div className={`border rounded-2xl p-6 md:p-10 backdrop-blur-sm transition-colors duration-300 ${
            isDark ? 'bg-neutral-900/40 border-white/10' : 'bg-white/80 border-neutral-200'
          }`}>
            <div className={`w-full h-48 md:h-64 rounded-xl overflow-hidden border mb-8 ${
              isDark ? 'bg-neutral-800 border-white/10' : 'bg-neutral-100 border-neutral-200'
            }`}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ExternalLink className={`w-12 h-12 ${isDark ? 'text-white/20' : 'text-neutral-300'}`} />
                </div>
              )}
            </div>

            <h1 className={`text-2xl md:text-3xl font-bold font-mono mb-4 max-w-full break-words transition-colors ${
              isDark ? 'text-white/90' : 'text-neutral-900'
            }`}>
              {project.title}
            </h1>

            {project.tags && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full border text-xs font-mono ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-white/60'
                        : 'bg-neutral-100 border-neutral-200 text-neutral-600'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <p className={`text-sm md:text-base leading-relaxed mb-8 max-w-full break-words ${
              isDark ? 'text-white/60' : 'text-neutral-600'
            }`}>
              {project.longDescription || project.description}
            </p>

            {project.features && (
              <div className="mb-8">
                <h2 className={`text-sm font-semibold font-mono mb-3 uppercase tracking-wider ${
                  isDark ? 'text-white/40' : 'text-neutral-500'
                }`}>
                  {t.projectDetail.keyFeatures}
                </h2>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className={`flex items-start gap-3 text-sm ${
                        isDark ? 'text-white/50' : 'text-neutral-600'
                      }`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        isDark ? 'bg-white/30' : 'bg-neutral-400'
                      }`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            <div className={`flex flex-wrap items-center gap-3 pt-6 border-t ${
              isDark ? 'border-white/10' : 'border-neutral-200'
            }`}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all hover:scale-105 active:scale-95 ${
                    isDark
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'bg-neutral-900 text-white hover:bg-neutral-800'
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.projectDetail.liveDemo}
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full border text-sm transition-all ${
                    isDark
                      ? 'border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5'
                      : 'border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-400 hover:bg-neutral-100'
                  }`}
                >
                  <FaGithubIcon className="w-4 h-4" />
                  {t.projectDetail.sourceCode}
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <ThemeProvider>
      <ProjectDetail params={params} />
    </ThemeProvider>
  );
}
