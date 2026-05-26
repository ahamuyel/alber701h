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
  },

  about: {
    heading: '... /About me ...',

    body: `I'm a self-taught full-stack developer and software engineering student at 42 Luanda, where learning happens through problem-solving, collaboration, and building real systems.

I’m interested in understanding software as a whole — not just isolated pieces. I enjoy working across the stack, from frontend interfaces to backend systems, infrastructure, and product architecture.

Currently, I’m building Cur10usX, an EdTech SaaS platform designed for Angola, focused on school management, academic performance, and connecting education with opportunity.

What motivates me most is building useful products, solving real problems, and continuously learning through execution.`,

    techStack: 'Tech Stack',

    techStackSub: 'Tools, technologies & systems I work with',
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
} as const;

export default en;