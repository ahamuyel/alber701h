export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  images?: string[];
  tags?: string[];
  features?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface Skill {
  category: string;
  icon?: React.ComponentType<{ className?: string }>;
  items: SkillItem[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface WorkExperience {
  period: string;
  company: string;
  role: string;
  tech: string;
  startDate: string;
  endDate?: string;
  description?: string;
  highlights?: string[];
  location?: string;
  employmentType?: string;
  url?: string;
  stack?: string;
}

export interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  url: string;
}
