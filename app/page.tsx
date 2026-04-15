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
import { fadeIn } from './utils/animations';

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleThemeToggle = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      isDark ? 'bg-[#111111] text-white' : 'bg-white text-[#111111]'
    }`}>
      {/* Decorative circles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full border border-white/[0.03]"
          style={{ transform: 'translateX(40%)' }}
        />
        <div
          className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full border border-white/[0.03]"
          style={{ transform: 'translateX(-40%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full border border-white/[0.02]"
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      </div>

      <div className="relative z-10 px-4 md:px-8 py-8 md:py-12">
        <motion.div
          className="max-w-[1000px] mx-auto border border-white/15 rounded-[24px] p-6 md:p-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Background circle decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full border border-white/[0.04] pointer-events-none" style={{ transform: 'translate(30%, -30%)' }} />
          <div className="absolute bottom-40 right-20 w-[400px] h-[400px] rounded-full border border-white/[0.03] pointer-events-none" style={{ transform: 'translate(20%, 0)' }} />

          {/* Header */}
          <Header onThemeToggle={handleThemeToggle} isDark={isDark} />

          {/* Hero Section */}
          <Hero onProjectsClick={handleProjectsClick} />

          {/* Social Links */}
          <SocialLinks links={socialLinks} />

          {/* Projects Carousel */}
          <div id="projects" className="scroll-mt-24">
            <ProjectsCarousel projects={projects} />
          </div>

          {/* About & Skills Section */}
          <AboutSection skills={skills} />

          {/* Work Experience Section */}
          <ExperienceSection experiences={workExperience} />

          {/* Footer / Contact */}
          <Footer />
        </motion.div>
      </div>
    </div>
  );
}
