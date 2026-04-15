'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa'
import type { Project } from '../types';

interface ProjectsCarouselProps {
  projects: Project[];
}

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const currentProject = projects[currentIndex];
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  return (
    <motion.div
      className="relative z-10 mb-16 md:mb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6">Projects</h2>

      <div className="relative overflow-hidden rounded-2xl">
        {/* Center card */}
        <div className="relative min-h-[280px] md:min-h-[320px] bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-indigo-900/40 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          {/* Decorative image placeholder */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl bg-gradient-to-br from-pink-400/30 to-blue-400/30 backdrop-blur-sm flex-shrink-0 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 opacity-50 blur-xl" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-medium text-white/90 mb-2 font-mono">
              {currentProject.title}
            </h3>
            <p className="text-sm text-white/40 mb-4 leading-relaxed max-w-md">
              {currentProject.description}
            </p>

            {/* Tags */}
            {currentProject.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {currentProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/10 text-xs text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 bg-white text-black rounded-full px-5 py-2 text-sm font-medium hover:bg-white/90 transition-all">
                View Details
                <ArrowRight className="w-4 h-4" />
              </button>
              {currentProject.liveUrl && (
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-sm text-white/70 hover:text-white hover:border-white/50 transition-all"
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
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-sm text-white/70 hover:text-white hover:border-white/50 transition-all"
                >
                  <FaGithub className="w-4 h-4" />
                  Code
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Side cards (faded) - Fixed to always show with circular navigation */}
        <AnimatePresence mode="wait">
          {/* Previous card */}
          <motion.div
            key={`prev-${prevIndex}`}
            className="absolute left-2 md:left-4 top-4 bottom-4 w-1/4 hidden md:flex items-center pointer-events-none"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.25, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full bg-white/5 border border-white/5 rounded-2xl p-4">
              <p className="text-xs text-white/30 font-mono line-clamp-2">
                {projects[prevIndex].title}
              </p>
            </div>
          </motion.div>

          {/* Next card */}
          <motion.div
            key={`next-${nextIndex}`}
            className="absolute right-2 md:right-4 top-4 bottom-4 w-1/4 hidden md:flex items-center pointer-events-none"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.25, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full bg-white/5 border border-white/5 rounded-2xl p-4">
              <p className="text-xs text-white/30 font-mono line-clamp-2">
                {projects[nextIndex].title}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prevProject}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition-all"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-4 h-4 text-white/50" />
        </button>

        <div className="flex items-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'w-8 bg-white'
                : 'w-4 bg-white/20'
                }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextProject}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition-all"
          aria-label="Next project"
        >
          <ChevronRight className="w-4 h-4 text-white/50" />
        </button>
      </div>
    </motion.div>
  );
}
