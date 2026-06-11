'use client';

import { motion } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import ProjectsCarousel from './components/ProjectsCarousel';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import { useLanguage } from './context/LanguageContext';
import { getProjects, getSkills, getWorkExperience, socialLinks } from './data';

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}

function HomeContent() {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const projects = getProjects(t);
  const skills = getSkills(t);
  const workExperience = getWorkExperience(t);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 ${
        isDark ? 'bg-[#0a0a0a] text-white' : 'bg-[#fafafa] text-neutral-900'
      }`}
    >
      {/* Decorative circles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-20 right-0 w-[600px] h-[600px] rounded-full border transition-colors duration-500 ${isDark ? 'border-white/[0.08]' : 'border-neutral-200/60'}`}
          style={{ transform: 'translateX(40%)' }}
        />
        <div
          className={`absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full border transition-colors duration-500 ${isDark ? 'border-white/[0.08]' : 'border-neutral-200/60'}`}
          style={{ transform: 'translateX(-40%)' }}
        />
        <div
          className={`absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full border transition-colors duration-500 ${isDark ? 'border-white/[0.05]' : 'border-neutral-200/40'}`}
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      </div>

      <div className="relative z-10 px-4 md:px-8 py-6 md:py-12">
        <motion.div
          className={`max-w-[1200px] mx-auto border rounded-[24px] p-5 md:p-10 relative overflow-hidden transition-all duration-500 backdrop-blur-sm ${
            isDark ? 'bg-neutral-900/40 border-white/10' : 'bg-white/80 border-neutral-200'
          }`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Background circle decoration inside card */}
          <div
            className={`absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full border pointer-events-none transition-colors duration-500 ${isDark ? 'border-white/[0.08]' : 'border-neutral-200/50'}`}
            style={{ transform: 'translate(30%, -30%)' }}
          />
          <div
            className={`absolute bottom-20 right-10 md:bottom-40 md:right-20 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full border pointer-events-none transition-colors duration-500 ${isDark ? 'border-white/[0.06]' : 'border-neutral-200/30'}`}
            style={{ transform: 'translate(20%, 0)' }}
          />

          <div className="relative z-20">
            <Header />
            <Hero />
            <SocialLinks links={socialLinks} />
            <div id="projects" className="scroll-mt-24 mt-8 md:mt-12">
              <ProjectsCarousel projects={projects} />
            </div>
            <div className="mt-8 md:mt-12">
              <AboutSection skills={skills} />
            </div>
            <div className="mt-8 md:mt-12">
              <ExperienceSection experiences={workExperience} />
            </div>
            <div className="mt-8 md:mt-12">
              <Footer />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
