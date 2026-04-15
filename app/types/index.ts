export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  category: string;
  skills: string;
}

export interface WorkExperience {
  period: string;
  company: string;
  role: string;
  tech: string;
  startDate: string;
  endDate?: string;
}

export interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  url: string;
}
