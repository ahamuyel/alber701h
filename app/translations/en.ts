const en = {
  nav: {
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    experience: 'Experience',
    contact: 'Contact',
  },

  header: {
    viewResume: 'View Resume',
    downloadCV: 'Download CV',
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
    toggleMenu: 'Toggle mobile menu',
  },

  hero: {
    typewriter: [
      "Hi, I'm Alberto Hamuyela",
      'Software Engineering Student',
      'Full-Stack Developer',
      'Product Builder',
      'Founder of Cur10usX',
    ],

    available: 'Open to opportunities',

    viewProjects: 'View Projects',

    resume: 'Resume',

    tagline:
      'I build full-stack products from end to end — from interface design to backend architecture, databases, and deployment. Currently building Cur10usX, an EdTech platform focused on improving education through technology.',

    developer: 'Developer',

    scroll: 'Scroll',
  },

  about: {
    heading: '... /About me ...',

    body: `I'm a self-taught full-stack developer and software engineering student at 42 Luanda, where learning happens through problem-solving, collaboration, and building real systems.

I’m interested in understanding software as a whole — not just isolated pieces. I enjoy working across the stack, from frontend interfaces to backend systems, infrastructure, and product architecture.

Currently, I’m building Cur10usX, an EdTech SaaS platform designed for Angola, focused on school management, academic performance, and connecting education with opportunity.

What motivates me most is building useful products, solving real problems, and continuously learning through execution.`,

    techStack: 'Tech Stack',

    techStackSub: 'Tools, technologies & systems I work with',

    all: 'All',
  },

  experience: {
    subtitle: 'Some of my {highlight} and technologies I work with',
    work: 'Work',
    totalLabel: 'Total work experience',
  },

  projects: {
    title: 'Projects',
    subtitle: "Things I've built",
    gridView: 'Grid view',
    carouselView: 'Carousel view',
    grid: 'Grid',
    carousel: 'Carousel',
    viewDetails: 'View Details',
    liveDemo: 'Live Demo',
    code: 'Code',
    previous: 'Previous project',
    next: 'Next project',
    goTo: 'Go to project {n}',
  },

  footer: {
    heading: "Let's work together",

    subtitle:
      'Always open to internships, collaborations, and ambitious projects.',

    emailPlaceholder: 'Your email',

    messagePlaceholder: 'Your message',

    send: 'Send Message',

    sent: 'Sent!',

    email: 'Email',

    copyright:
      '© {year} Alberto Hamuyela. All rights reserved.',
  },

  notFound: {
    title: 'Page not found',
    description:
      "The page you're looking for doesn't exist or has been moved.",
    backHome: 'Back to home',
  },

  error: {
    title: 'Something went wrong',
    defaultMessage: 'An unexpected error occurred.',
    errorId: 'Error ID: {digest}',
    retry: 'Try again',
  },

  language: {
    switchTo: 'Switch to Portuguese',
  },
  resumeUrl: '/resume-en.pdf',

  projectsData: {
    cur10usx: {
      title: 'Cur10usX',
      description: 'A student platform that turns academic data into portfolios, growth, and career opportunities.',
      longDescription: 'Cur10usX is a comprehensive student platform designed to bridge the gap between academic performance and career development. It automatically transforms grades, projects, and achievements into professional portfolios, tracks growth metrics, and connects students with relevant opportunities.',
      features: [
        'Automated portfolio generation from academic data',
        'Growth tracking with visual analytics',
        'Career opportunity matching',
        'Real-time collaboration tools',
      ],
    },
    socialMedia: {
      title: 'Fullstack Social Media App',
      description: 'A full stack social media app with authentication, using React, Supabase, PostgreSQL, TailwindCSS and TypeScript.',
      longDescription: 'A feature-rich social media platform built with modern web technologies. Includes user authentication, real-time posts, direct messaging, and a responsive feed with infinite scroll.',
      features: [
        'User authentication with Supabase',
        'Real-time feed with infinite scroll',
        'Direct messaging system',
        'Profile customization',
      ],
    },
    restApi: {
      title: 'REST APIs with Node.js',
      description: 'Scalable REST APIs using Node.js, Express, and MongoDB with authentication and rate limiting.',
      longDescription: 'A production-ready REST API boilerplate with JWT authentication, rate limiting, request validation, and comprehensive error handling. Built following clean architecture principles.',
      features: [
        'JWT-based authentication & authorization',
        'Rate limiting & request validation',
        'Comprehensive error handling',
        'Swagger API documentation',
      ],
    },
    cSystems: {
      title: '42 Common Core — C & Systems',
      description: 'Low-level programming projects from 42 Luanda — systems programming, memory management, and algorithms in C.',
      longDescription: "Part of 42 Luanda's Common Core curriculum. Built foundational systems-level projects entirely in C — from implementing a printf clone and a shell (minishell) to building a 3D wireframe renderer (FdF). These projects taught me memory management, process control, file I/O, and the discipline of working without a garbage collector.",
      features: [
        'Built a printf clone handling multiple format specifiers and flags',
        'Developed a minimal Unix shell with pipes, redirections, and built-ins',
        'Created a 3D wireframe renderer using Bresenham\'s line algorithm',
      ],
    },
    cppOop: {
      title: '42 Common Core — C++ & OOP',
      description: 'Object-oriented projects in C++ exploring inheritance, polymorphism, templates, and STL.',
      longDescription: 'A series of C++ modules and projects completed at 42 Luanda covering the full OOP spectrum — from classes and member functions to templates, smart pointers, and STL containers. Each module added complexity: fixed-size allocators, iterator patterns, container re-implementations, and type-safe generic programming.',
      features: [
        'Reimplemented STL containers (vector, map, stack) from scratch',
        'Built a fixed-size memory allocator with placement new',
        'Explored multiple inheritance, virtual tables, and RAII patterns',
      ],
    },
  },

  skillsData: {
    technical: 'Technical Skills (Core)',
    software: 'Software Engineering (42 / Solid Foundation)',
    product: 'Product & Architecture',
    frontend: 'Frontend & UX',
    interest: 'Technical Interest',
    soft: 'Soft Skills',
  },

  experienceData: {
    cur10usx: {
      role: 'Founder & Lead Developer',
      description: 'Building an EdTech SaaS platform from scratch to digitalize school management in Angola and empower students with tools to track their academic growth.',
      highlights: [
        'Architected a multi-tenant system with role-based access control and complex authentication flows',
        'Built bulk data import, exportable reports, and a real-time guardian dashboard',
        'Managing all product and technical decisions as sole developer',
      ],
    },
    school42: {
      role: 'Student (Common Core)',
      description: '42 is a global engineering school with no teachers and no traditional classes — learning happens entirely through projects and peer collaboration. Ranked among the top programming schools worldwide, with 50+ campuses in 30+ countries.',
      highlights: [
        'Completing the Common Core covering C, algorithms, OS, memory management, networking, and web development',
        'Built projects spanning low-level programming, infrastructure, and full-stack web',
        'Developed strong problem-solving and autonomous learning skills under pressure',
      ],
    },
  },

  projectDetail: {
    backHome: 'Back to home',
    keyFeatures: 'Key Features',
    liveDemo: 'Live Demo',
    sourceCode: 'Source Code',
  },
} as const;

export default en;