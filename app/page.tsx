'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import ProjectsCarousel from './components/ProjectsCarousel';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import { projects, skills, workExperience, socialLinks } from './data';

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  // Initialize theme based on preference or system settings
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldUseDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    
    setIsDark(shouldUseDark);
    if (shouldUseDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleThemeToggle = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${
      isDark ? 'bg-[#0a0a0a] text-white' : 'bg-[#fafafa] text-neutral-900'
    }`}>
      {/* Decorative circles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-20 right-0 w-[600px] h-[600px] rounded-full border transition-colors duration-500 ${isDark ? 'border-white/[0.03]' : 'border-neutral-200/60'}`}
          style={{ transform: 'translateX(40%)' }}
        />
        <div
          className={`absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full border transition-colors duration-500 ${isDark ? 'border-white/[0.03]' : 'border-neutral-200/60'}`}
          style={{ transform: 'translateX(-40%)' }}
        />
        <div
          className={`absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full border transition-colors duration-500 ${isDark ? 'border-white/[0.02]' : 'border-neutral-200/40'}`}
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      </div>

      <div className="relative z-10 px-4 md:px-8 py-6 md:py-12">
        <motion.div
          className={`max-w-[1000px] mx-auto border rounded-[24px] p-5 md:p-10 relative overflow-hidden transition-all duration-500 backdrop-blur-sm ${
            isDark ? 'bg-neutral-900/40 border-white/10' : 'bg-white/80 border-neutral-200'
          }`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Background circle decoration inside card */}
          <div className={`absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full border pointer-events-none transition-colors duration-500 ${isDark ? 'border-white/[0.04]' : 'border-neutral-200/50'}`} style={{ transform: 'translate(30%, -30%)' }} />
          <div className={`absolute bottom-20 right-10 md:bottom-40 md:right-20 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full border pointer-events-none transition-colors duration-500 ${isDark ? 'border-white/[0.03]' : 'border-neutral-200/30'}`} style={{ transform: 'translate(20%, 0)' }} />

          <div className="relative z-20">
            {/* Header */}
            <Header onThemeToggle={handleThemeToggle} isDark={isDark} />

            {/* Hero Section */}
            <Hero onProjectsClick={handleProjectsClick} isDark={isDark} />

            {/* Social Links */}
            <SocialLinks links={socialLinks} isDark={isDark} />

            {/* Projects Carousel */}
            <div id="projects" className="scroll-mt-24 mt-8 md:mt-12">
              <ProjectsCarousel projects={projects} isDark={isDark} />
            </div>
            
            {/* About & Skills Section */}
            <div className="mt-8 md:mt-12">
              <AboutSection skills={skills} isDark={isDark} />
            </div>
            
            {/* Work Experience Section*/}
            <div className="mt-8 md:mt-12">
              <ExperienceSection experiences={workExperience} isDark={isDark} />
            </div> 
            

            {/* Footer / Contact */}
            <div className="mt-8 md:mt-12">
              <Footer isDark={isDark} />
            </div>
            
          </div>
        </motion.div>
      </div>
    </div>
  );
}
