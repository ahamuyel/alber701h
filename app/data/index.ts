import type { Project, Skill, WorkExperience, SocialLink } from '../types';
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
} from 'react-icons/fa';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Cur10usX',
    description: 'A student platform that turns academic data into portfolios, growth, and career opportunities.',
    image: '/cur10usx.png',
    tags: ['Next.js · Node.js · PostgreSQL · Prisma · Docker'],
    liveUrl: 'https://cur10us-sm.vercel.app',
    githubUrl: 'https://github.com/ahamuyel/cur10us-sm',
  },
  {
    id: 2,
    title: 'Fullstack Social Media App',
    description: 'A full stack social media app with authentication, using React, Supabase, PostgressSQL, TailwindCSS and TypeScript.',
    image: '/project1.jpg',
    tags: ['TypeScript', 'Supabase', 'PostgresSQL'],
    githubUrl: 'https://github.com/alber701h',
  },
  {
    id: 3,
    title: 'REST APIs with Node.js',
    description: 'Scalable REST APIs using Node.js, Express, and MongoDB with authentication and rate limiting.',
    image: '/project2.jpg',
    tags: ['Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/ahamuyel/ready-API',
  },
];

export const skills: Skill[] = [
  { category: 'Front-end', skills: 'TypeScript / React / Vue / NextJs / GraphQL ' },
  { category: 'Styles', skills: 'SCSS / PostCSS /  Material UI / Tailwind CSS' },
  { category: 'Back-end', skills: 'C++ / C  / PostgreSQL / MySQL / MongoDB / Node / PostgresSQL / Express.js' },
  { category: 'DevOps', skills: 'Nginx / Docker / (CI/CD) / Bash' },
];

export const workExperience: WorkExperience[] = [
  {
    period: '2024 - Present',
    company: '42 School',
    role: 'Student',
    tech: 'Software Development',
    startDate: '2024-05',
  },
];

export const socialLinks: SocialLink[] = [
  { icon: FaGithub, label: 'GitHub', url: 'https://github.com/ahamuyel' },
  { icon: FaLinkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/alberto-ih-173250382' },
  { icon: FaInstagram, label: 'Instagram', url: 'https://instagram.com/alber701h' },
];
