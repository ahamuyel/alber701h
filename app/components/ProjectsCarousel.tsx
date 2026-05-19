'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronLeft, ExternalLink, LayoutGrid } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from './ui';
import type { Project } from '../types';

interface ProjectsCarouselProps {
  projects: Project[];
}

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    if (isHovered || viewMode === 'grid') return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projects.length, isHovered, viewMode]);

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const currentProject = projects[currentIndex];
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  const allTags = [...new Set(projects.flatMap((p) => p.tags || []))].sort();

  const filteredProjects = selectedTag
    ? projects.filter((p) => p.tags?.includes(selectedTag))
    : projects;

  const getTags = (tags: string[] | undefined) => {
    if (!tags) return [];
    return tags.flatMap((t) => t.split('·')).map((t) => t.trim()).filter(Boolean);
  };

  const styles = {
    mainCard: isDark
      ? 'bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-indigo-900/40 border-white/10'
      : 'bg-white border-neutral-200',
    title: isDark ? 'text-white/90' : 'text-neutral-900',
    desc: isDark ? 'text-white/50' : 'text-neutral-500',
    tag: isDark
      ? 'bg-white/5 border-white/10 text-white/60 hover:border-white/30'
      : 'bg-neutral-100 border-neutral-200 text-neutral-600 hover:border-neutral-300',
    btnPrimary: isDark
      ? 'bg-white text-black hover:bg-white/90 shadow-white/5'
      : 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-neutral-900/10',
    btnSecondary: isDark
      ? 'border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5'
      : 'border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-400 hover:bg-neutral-100',
    sideCard: isDark
      ? 'border-white/5 bg-neutral-900/40'
      : 'border-neutral-200 bg-neutral-50/80',
    sideCardText: isDark ? 'text-white/20' : 'text-neutral-400',
    imgBg: isDark ? 'bg-neutral-800 border-white/10' : 'bg-neutral-100 border-neutral-200',
    navBtn: isDark
      ? 'border-white/10 text-white/50 hover:border-white/30 hover:bg-white/5'
      : 'border-neutral-200 text-neutral-400 hover:border-neutral-400 hover:bg-neutral-100',
    dot: isDark ? 'bg-white' : 'bg-neutral-900',
    dotInactive: isDark ? 'bg-white/20 hover:bg-white/40' : 'bg-neutral-300 hover:bg-neutral-400',
    gridCard: isDark
      ? 'bg-neutral-900/60 border-white/10 hover:border-white/20'
      : 'bg-white border-neutral-200 hover:border-neutral-300',
    tagSelected: isDark
      ? 'bg-white text-black border-white'
      : 'bg-neutral-900 text-white border-neutral-900',
    tagUnselected: isDark
      ? 'bg-white/5 border-white/10 text-white/50 hover:border-white/30'
      : 'bg-neutral-100 border-neutral-200 text-neutral-500 hover:border-neutral-400',
  };

  return (
    <section
      className="relative z-10 mb-16 md:mb-24 scroll-mt-24"
      id="projects"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-end justify-between mb-6">
        <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />
        <button
          onClick={() => setViewMode(viewMode === 'carousel' ? 'grid' : 'carousel')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition-all ${styles.navBtn}`}
          aria-label={viewMode === 'carousel' ? t.projects.gridView : t.projects.carouselView}
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          {viewMode === 'carousel' ? t.projects.grid : t.projects.carousel}
        </button>
      </div>

      {viewMode === 'grid' ? (
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-3 py-1 rounded-full border text-xs font-mono transition-all cursor-pointer ${
                  selectedTag === tag ? styles.tagSelected : styles.tagUnselected
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                className={`border rounded-2xl p-5 transition-all duration-300 backdrop-blur-sm group cursor-pointer ${styles.gridCard}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className={`w-full h-40 rounded-xl overflow-hidden mb-4 border ${styles.imgBg}`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ExternalLink className={`w-8 h-8 ${isDark ? 'text-white/20' : 'text-neutral-300'}`} />
                    </div>
                  )}
                </div>

                <h3 className={`text-base font-medium font-mono mb-2 max-w-full break-words transition-colors ${styles.title}`}>
                  {project.title}
                </h3>
                <p className={`text-xs leading-relaxed mb-4 line-clamp-2 max-w-full break-words ${styles.desc}`}>
                  {project.description}
                </p>

                {project.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {getTags(project.tags).slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 rounded-full border text-[10px] font-mono ${styles.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className={`text-[10px] font-mono ${isDark ? 'text-white/30' : 'text-neutral-400'}`}>
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}

                <Link
                  href={`/projects/${project.id}`}
                  className={`inline-flex items-center gap-1.5 text-xs font-medium transition-all group-hover:gap-2 ${
                    isDark ? 'text-white/60 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {t.projects.viewDetails}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="relative overflow-visible min-h-[400px] md:min-h-[380px] flex items-center justify-center py-4">
            <motion.div
              className="hidden md:flex absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 w-64 h-60 rounded-2xl z-0 items-center justify-center pointer-events-none"
              style={{ opacity: 0.5, transform: 'translateY(-50%) scale(0.9) translateX(-60%)' }}
            >
              <div className={`w-full h-full rounded-2xl flex items-center justify-center border backdrop-blur-sm ${styles.sideCard}`}>
                <div className={`text-xs font-mono truncate px-6 max-w-full ${styles.sideCardText}`}>
                  {projects[prevIndex].title}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hidden md:flex absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 w-64 h-60 rounded-2xl z-0 items-center justify-center pointer-events-none"
              style={{ opacity: 0.5, transform: 'translateY(-50%) scale(0.9) translateX(60%)' }}
            >
              <div className={`w-full h-full rounded-2xl flex items-center justify-center border backdrop-blur-sm ${styles.sideCard}`}>
                <div className={`text-xs font-mono truncate px-6 max-w-full ${styles.sideCardText}`}>
                  {projects[nextIndex].title}
                </div>
              </div>
            </motion.div>

            <div className="relative w-full max-w-4xl px-0 md:px-12 z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className={`w-full max-w-full border rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl overflow-hidden transition-colors duration-300 ${styles.mainCard}`}
                >
                  <div className={`w-full md:w-64 h-56 md:h-64 rounded-xl flex-shrink-0 overflow-hidden border relative group shadow-lg transition-colors duration-300 ${styles.imgBg}`}>
                    {currentProject.image ? (
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-violet-500/10 to-purple-500/10' : 'bg-neutral-100'}`}>
                        <ExternalLink className={`w-10 h-10 ${isDark ? 'text-white/20' : 'text-neutral-300'}`} />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  <div className="flex-1 text-center md:text-left w-full">
                    <h3 className={`text-xl md:text-2xl font-medium mb-3 font-mono max-w-full break-words transition-colors duration-300 ${styles.title}`}>
                      {currentProject.title}
                    </h3>
                    <p className={`text-sm md:text-base mb-6 leading-relaxed max-w-full lg:max-w-lg mx-auto md:mx-0 transition-colors duration-300 ${styles.desc}`}>
                      {currentProject.description}
                    </p>

                    {currentProject.tags && (
                      <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
                        {getTags(currentProject.tags).map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 rounded-full border text-xs font-mono transition-colors cursor-default ${styles.tag}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                      <Link
                        href={`/projects/${currentProject.id}`}
                        className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg ${styles.btnPrimary}`}
                      >
                        {t.projects.viewDetails}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      {currentProject.liveUrl && (
                        <a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full border text-sm transition-all ${styles.btnSecondary}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t.projects.liveDemo}
                        </a>
                      )}
                      {currentProject.githubUrl && (
                        <a
                          href={currentProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full border text-sm transition-all ${styles.btnSecondary}`}
                        >
                          <FaGithub className="w-4 h-4" />
                          {t.projects.code}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevProject}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all active:scale-95 ${styles.navBtn}`}
              aria-label={t.projects.previous}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 px-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? `w-8 ${styles.dot}`
                      : `w-2 ${styles.dotInactive}`
                  }`}
                  aria-label={t.projects.goTo.replace('{n}', String(index + 1))}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all active:scale-95 ${styles.navBtn}`}
              aria-label={t.projects.next}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </>
      )}
    </section>
  );
}
