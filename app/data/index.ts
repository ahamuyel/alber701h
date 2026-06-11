import type { Project, Skill, WorkExperience, Certification, SocialLink } from '../types';
import { Monitor, Brain, Rocket, Palette, Shield, Puzzle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import type { Translation } from '../translations';

export const projectIds = [1, 2, 3, 4, 5];

export const getProjects = (t: Translation): Project[] => [
  {
    id: 1,
    title: t.projectsData.cur10usx.title,
    description: t.projectsData.cur10usx.description,
    longDescription: t.projectsData.cur10usx.longDescription,
    image: '/api/preview?url=https://cur10usx.vercel.app',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker'],
    features: [...t.projectsData.cur10usx.features],
    liveUrl: 'https://cur10usx.vercel.app',
    githubUrl: 'https://github.com/ahamuyel/cur10usx',
  },
  {
    id: 2,
    title: t.projectsData.socialMedia.title,
    description: t.projectsData.socialMedia.description,
    longDescription: t.projectsData.socialMedia.longDescription,
    tags: ['TypeScript', 'Supabase', 'PostgreSQL', 'React', 'TailwindCSS'],
    features: [...t.projectsData.socialMedia.features],
    githubUrl: 'https://github.com/alber701h',
  },
  {
    id: 3,
    title: t.projectsData.restApi.title,
    description: t.projectsData.restApi.description,
    longDescription: t.projectsData.restApi.longDescription,
    tags: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    features: [...t.projectsData.restApi.features],
    githubUrl: 'https://github.com/ahamuyel/ready-API',
  },
  {
    id: 4,
    title: t.projectsData.cSystems.title,
    description: t.projectsData.cSystems.description,
    longDescription: t.projectsData.cSystems.longDescription,
    tags: ['C', 'Systems Programming', 'Memory Management', 'Algorithms', 'Unix'],
    features: [...t.projectsData.cSystems.features],
  },
  {
    id: 5,
    title: t.projectsData.cppOop.title,
    description: t.projectsData.cppOop.description,
    longDescription: t.projectsData.cppOop.longDescription,
    tags: ['C++', 'OOP', 'Templates', 'STL', 'Design Patterns'],
    features: [...t.projectsData.cppOop.features],
  },
];

export const getSkills = (t: Translation): Skill[] => [
  {
    category: t.skillsData.technical,
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
    category: t.skillsData.software,
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
    category: t.skillsData.product,
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
    category: t.skillsData.frontend,
    icon: Palette,
    items: [
      { name: 'UI/UX Design', level: 3.0 },
      { name: 'Responsive Web Design', level: 4.0 },
      { name: 'Tailwind CSS', level: 4.5 },
      { name: 'Component-based Architecture', level: 4.0 },
    ],
  },
  {
    category: t.skillsData.interest,
    icon: Shield,
    items: [
      { name: 'Cybersecurity', level: 2.0 },
      { name: 'Web Security', level: 2.5 },
      { name: 'Network Security', level: 2.0 },
    ],
  },
  {
    category: t.skillsData.soft,
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

export const getWorkExperience = (t: Translation): WorkExperience[] => [
  {
    period: 'Jan 2025 - Present',
    company: 'Cur10usX',
    role: t.experienceData.cur10usx.role,
    tech: 'Self-employed',
    startDate: '2025-01',
    location: 'Luanda, Angola · Remote',
    url: 'https://cur10usx.vercel.app',
    stack: 'Next.js · Node.js · PostgreSQL · Prisma ORM · Docker · Kubernetes · Nginx',
    description: t.experienceData.cur10usx.description,
    highlights: [...t.experienceData.cur10usx.highlights],
  },
  {
    period: 'May 2024 - Present',
    company: '42 Luanda',
    role: t.experienceData.school42.role,
    tech: 'Software Development',
    startDate: '2024-05',
    url: 'https://42.fr',
    description: t.experienceData.school42.description,
    highlights: [...t.experienceData.school42.highlights],
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

export const navItems = (t: Translation) => [
  { label: t.nav.about, href: '#about' },
  { label: t.nav.projects, href: '#projects' },
  { label: t.nav.skills, href: '#skills' },
  { label: t.nav.experience, href: '#experience' },
  { label: t.nav.contact, href: '#contact' },
];
