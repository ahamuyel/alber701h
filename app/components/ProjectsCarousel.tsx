'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '../types';

interface ProjectsCarouselProps {
  projects: Project[];
  isDark: boolean;
}

export default function ProjectsCarousel({ projects, isDark }: ProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play logic
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [projects.length, isHovered]);

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const currentProject = projects[currentIndex];
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  const getTags = (tags: string[] | undefined) => {
    if (!tags) return [];
    return tags.flatMap(t => t.split('·')).map(t => t.trim()).filter(Boolean);
  };

  const displayTags = getTags(currentProject.tags);

  // Theme styles mapping
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
    sectionTitle: isDark ? 'text-white' : 'text-neutral-900',
    fallbackGradient: isDark 
      ? ['bg-gradient-to-br', 'from-violet-500', 'to-purple-600'] 
      : ['bg-neutral-200']
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent) {
      parent.classList.add(...styles.fallbackGradient);
    }
  };

  return (
    <section 
      className="relative z-10 mb-16 md:mb-24 scroll-mt-24"
      id="projects"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className={`text-3xl md:text-4xl font-bold font-mono mb-8 transition-colors duration-300 ${styles.sectionTitle}`}>
        Projects
      </h2>

      {/* Carousel Container */}
      <div className="relative overflow-visible min-h-[400px] md:min-h-[380px] flex items-center justify-center py-4">
        
        {/* Side Cards (Hidden on small mobile) */}
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

        {/* Main Card */}
        <div className="relative w-full max-w-4xl px-0 md:px-12 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`w-full border rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl overflow-hidden transition-colors duration-300 ${styles.mainCard}`}
              >
                {/* Image Display */}
                <div className={`w-full md:w-64 h-56 md:h-64 rounded-xl flex-shrink-0 overflow-hidden border relative group shadow-lg transition-colors duration-300 ${styles.imgBg}`}>
                  {currentProject.image ? (
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={handleImageError}
                    />
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-violet-500/10 to-purple-500/10' : 'bg-neutral-100'}`}>
                       <ExternalLink className={`w-10 h-10 ${isDark ? 'text-white/20' : 'text-neutral-300'}`} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="flex-1 text-center md:text-left w-full">
                  <h3 className={`text-xl md:text-2xl font-medium mb-3 font-mono transition-colors duration-300 ${styles.title}`}>
                    {currentProject.title}
                  </h3>
                  <p className={`text-sm md:text-base mb-6 leading-relaxed max-w-lg mx-auto md:mx-0 transition-colors duration-300 ${styles.desc}`}>
                    {currentProject.description}
                  </p>

                  {/* Tags */}
                  {displayTags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
                      {displayTags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full border text-xs font-mono transition-colors cursor-default ${styles.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                    <button className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg ${styles.btnPrimary}`}>
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    {currentProject.liveUrl && (
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full border text-sm transition-all ${styles.btnSecondary}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
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
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
        </div>
      </div>

      {/* Carousel Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prevProject}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all active:scale-95 ${styles.navBtn}`}
          aria-label="Previous project"
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
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextProject}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all active:scale-95 ${styles.navBtn}`}
          aria-label="Next project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
