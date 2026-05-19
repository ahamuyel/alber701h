import type { Project, Skill, WorkExperience, Certification, SocialLink } from '../types';
import { Monitor, Brain, Rocket, Palette, Shield, Puzzle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const cvUrl = '/cv.txt';
export const resumeUrl = '/resume.pdf';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Cur10usX',
    description: 'A student platform that turns academic data into portfolios, growth, and career opportunities.',
    longDescription: 'Cur10usX is a comprehensive student platform designed to bridge the gap between academic performance and career development. It automatically transforms grades, projects, and achievements into professional portfolios, tracks growth metrics, and connects students with relevant opportunities.',
    image: '/api/preview?url=https://cur10us-sm.vercel.app',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker'],
    features: [
      'Automated portfolio generation from academic data',
      'Growth tracking with visual analytics',
      'Career opportunity matching',
      'Real-time collaboration tools',
    ],
    liveUrl: 'https://cur10us-sm.vercel.app',
    githubUrl: 'https://github.com/ahamuyel/cur10us-sm',
  },
  {
    id: 2,
    title: 'Fullstack Social Media App',
    description: 'A full stack social media app with authentication, using React, Supabase, PostgreSQL, TailwindCSS and TypeScript.',
    longDescription: 'A feature-rich social media platform built with modern web technologies. Includes user authentication, real-time posts, direct messaging, and a responsive feed with infinite scroll.',
    tags: ['TypeScript', 'Supabase', 'PostgreSQL', 'React', 'TailwindCSS'],
    features: [
      'User authentication with Supabase',
      'Real-time feed with infinite scroll',
      'Direct messaging system',
      'Profile customization',
    ],
    githubUrl: 'https://github.com/alber701h',
  },
  {
    id: 3,
    title: 'REST APIs with Node.js',
    description: 'Scalable REST APIs using Node.js, Express, and MongoDB with authentication and rate limiting.',
    longDescription: 'A production-ready REST API boilerplate with JWT authentication, rate limiting, request validation, and comprehensive error handling. Built following clean architecture principles.',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    features: [
      'JWT-based authentication & authorization',
      'Rate limiting & request validation',
      'Comprehensive error handling',
      'Swagger API documentation',
    ],
    githubUrl: 'https://github.com/ahamuyel/ready-API',
  },
  {
    id: 4,
    title: '42 Common Core — C & Systems',
    description: 'Low-level programming projects from 42 Luanda — systems programming, memory management, and algorithms in C.',
    longDescription: 'Part of 42 Luanda\'s Common Core curriculum. Built foundational systems-level projects entirely in C — from implementing a printf clone and a shell (minishell) to building a 3D wireframe renderer (FdF). These projects taught me memory management, process control, file I/O, and the discipline of working without a garbage collector.',
    tags: ['C', 'Systems Programming', 'Memory Management', 'Algorithms', 'Unix'],
    features: [
      'Built a printf clone handling multiple format specifiers and flags',
      'Developed a minimal Unix shell with pipes, redirections, and built-ins',
      'Created a 3D wireframe renderer using Bresenham\'s line algorithm',
    ],
  },
  {
    id: 5,
    title: '42 Common Core — C++ & OOP',
    description: 'Object-oriented projects in C++ exploring inheritance, polymorphism, templates, and STL.',
    longDescription: 'A series of C++ modules and projects completed at 42 Luanda covering the full OOP spectrum — from classes and member functions to templates, smart pointers, and STL containers. Each module added complexity: fixed-size allocators, iterator patterns, container re-implementations, and type-safe generic programming.',
    tags: ['C++', 'OOP', 'Templates', 'STL', 'Design Patterns'],
    features: [
      'Reimplemented STL containers (vector, map, stack) from scratch',
      'Built a fixed-size memory allocator with placement new',
      'Explored multiple inheritance, virtual tables, and RAII patterns',
    ],
  },
];

export const skills: Skill[] = [
  {
    category: 'Competências Técnicas (Core)',
    icon: Monitor,
    items: [
      { name: 'Next.js', level: 4.0 },
      { name: 'TypeScript', level: 4.0 },
      { name: 'Node.js', level: 4.0 },
      { name: 'React.js', level: 4.0 },
      { name: 'JavaScript', level: 4.5 },
      { name: 'PostgreSQL', level: 3.5 },
      { name: 'Prisma ORM', level: 3.5 },
      { name: 'Docker', level: 3.0 },
      { name: 'REST APIs', level: 4.0 },
      { name: 'WebSockets', level: 3.0 },
      { name: 'Git', level: 4.0 },
      { name: 'Linux', level: 3.5 },
    ],
  },
  {
    category: 'Engenharia de Software (42 / Base sólida)',
    icon: Brain,
    items: [
      { name: 'C++', level: 3.0 },
      { name: 'C Programming', level: 3.5 },
      { name: 'Object-Oriented Programming (OOP)', level: 3.5 },
      { name: 'Data Structures', level: 3.5 },
      { name: 'Algorithms', level: 3.5 },
      { name: 'Networking', level: 3.0 },
      { name: 'System Administration', level: 2.5 },
      { name: 'Problem Solving', level: 4.0 },
    ],
  },
  {
    category: 'Produto & Arquitetura',
    icon: Rocket,
    items: [
      { name: 'SaaS Development', level: 3.0 },
      { name: 'Software Architecture', level: 3.0 },
      { name: 'Database Design', level: 3.5 },
      { name: 'System Design', level: 3.0 },
      { name: 'API Development', level: 4.0 },
      { name: 'Authentication Systems', level: 3.0 },
      { name: 'Scalable Systems', level: 2.5 },
    ],
  },
  {
    category: 'Frontend & UX',
    icon: Palette,
    items: [
      { name: 'UI/UX Design', level: 3.0 },
      { name: 'Responsive Web Design', level: 4.0 },
      { name: 'Tailwind CSS', level: 4.5 },
      { name: 'Component-based Architecture', level: 4.0 },
    ],
  },
  {
    category: 'Interesse técnico',
    icon: Shield,
    items: [
      { name: 'Cybersecurity', level: 2.0 },
      { name: 'Web Security', level: 2.5 },
      { name: 'Network Security', level: 2.0 },
    ],
  },
  {
    category: 'Soft Skills',
    icon: Puzzle,
    items: [
      { name: 'Problem Solving', level: 4.5 },
      { name: 'Team Collaboration', level: 4.0 },
      { name: 'Communication', level: 4.0 },
      { name: 'Adaptability', level: 4.5 },
      { name: 'Critical Thinking', level: 4.0 },
      { name: 'Leadership', level: 3.5 },
    ],
  },
];

export const workExperience: WorkExperience[] = [
  {
    period: 'Jan 2025 - Present',
    company: 'Cur10usX',
    role: 'Founder & Lead Developer',
    tech: 'Self-employed',
    startDate: '2025-01',
    location: 'Luanda, Angola · Remote',
    url: 'https://cur10usx.vercel.app',
    stack: 'Next.js · Node.js · PostgreSQL · Prisma ORM · Docker · Kubernetes · Nginx',
    description: 'Building an EdTech SaaS platform from scratch to digitalize school management in Angola and empower students with tools to track their academic growth.',
    highlights: [
      'Architected a multi-tenant system with role-based access control and complex authentication flows',
      'Built bulk data import, exportable reports, and a real-time guardian dashboard',
      'Managing all product and technical decisions as sole developer',
    ],
  },
  {
    period: 'May 2024 - Present',
    company: '42 Luanda',
    role: 'Student (Common Core)',
    tech: 'Software Development',
    startDate: '2024-05',
    url: 'https://42.fr',
    description: '42 is a global engineering school with no teachers and no traditional classes — learning happens entirely through projects and peer collaboration. Ranked among the top programming schools worldwide, with 50+ campuses in 30+ countries.',
    highlights: [
      'Completing the Common Core covering C, algorithms, OS, memory management, networking, and web development',
      'Built projects spanning low-level programming, infrastructure, and full-stack web',
      'Developed strong problem-solving and autonomous learning skills under pressure',
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: 'Common Core',
    issuer: '42 School',
    date: '2024',
    url: 'https://42.fr',
  },
];

export const socialLinks: SocialLink[] = [
  { icon: FaGithub, label: 'GitHub', url: 'https://github.com/ahamuyel' },
  { icon: FaLinkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/alber701h' },
  { icon: FaInstagram, label: 'Instagram', url: 'https://instagram.com/alber701h' },
];
