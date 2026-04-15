import type { Project, Skill, WorkExperience, SocialLink } from '../types';
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaFacebook, 
  FaTelegram 
} from 'react-icons/fa';

export const projects: Project[] = [
  {
    id: 1,
    title: 'kafka + golang microservices',
    description: 'A micro-service architecture using Kafka, Golang and Docker for scalable message handling.',
    image: '/project1.jpg',
    tags: ['Golang', 'Kafka', 'Docker'],
    githubUrl: 'https://github.com/alber701h',
  },
  {
    id: 2,
    title: 'REST APIs with Node.js',
    description: 'Scalable REST APIs using Node.js, Express, and MongoDB with authentication and rate limiting.',
    image: '/project2.jpg',
    tags: ['Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/alber701h',
  },
  {
    id: 3,
    title: 'React Performance Dashboard',
    description: 'Performance monitoring dashboard with real-time metrics, profiling and optimization suggestions.',
    image: '/project3.jpg',
    tags: ['React', 'TypeScript', 'D3.js'],
    liveUrl: 'https://react-dashboard.demo',
    githubUrl: 'https://github.com/alber701h',
  },
];

export const skills: Skill[] = [
  { category: 'Front-end', skills: 'TypeScript / React / Vue / Vuex / Redux Toolkit / NextJs / Nuxt / Jest / GraphQL / React Native / Puppeteer' },
  { category: 'Styles', skills: 'SCSS / SASS / PostCSS / Ant.d / MUI / Material UI / Tailwind CSS' },
  { category: 'Back-end', skills: 'GoLang / Gin / GORM / PostgreSQL / MySQL / MongoDB / gRPC / Redis / Kafka / Node / Nest / TypeORM' },
  { category: 'DevOps', skills: 'Nginx / Brotli / Docker / (CI/CD) / k8s / Bash' },
];

export const workExperience: WorkExperience[] = [
  {
    period: '2022 - Present',
    company: 'ITHUB',
    role: 'Frontend Developer',
    tech: 'React & Vue',
    startDate: '2022-01',
  },
  {
    period: '2021 - 2022',
    company: 'VK Development Lab',
    role: 'Frontend Developer',
    tech: 'React',
    startDate: '2021-01',
    endDate: '2022-01',
  },
  {
    period: '2020 - 2021',
    company: 'SN Inc.',
    role: 'Fullstack Developer',
    tech: 'JavaScript & Python',
    startDate: '2020-01',
    endDate: '2021-01',
  },
  {
    period: '2018 - 2020',
    company: 'Business Up',
    role: 'Fullstack Developer',
    tech: 'JavaScript & Python',
    startDate: '2018-01',
    endDate: '2020-01',
  },
];

export const socialLinks: SocialLink[] = [
  { icon: FaGithub, label: 'GitHub', url: 'https://github.com/alber701h' },
  { icon: FaLinkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/alberto-hamuyela' },
  { icon: FaTelegram, label: 'Telegram', url: 'https://t.me/alber701h' },
  { icon: FaFacebook, label: 'Facebook', url: 'https://facebook.com/alber701h' },
  { icon: FaInstagram, label: 'Instagram', url: 'https://instagram.com/alber701h' },
];
