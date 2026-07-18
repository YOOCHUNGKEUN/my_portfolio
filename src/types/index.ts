export interface Stat {
  category: string;
  value: string;
  label: string;
}

export interface Career {
  id: string;
  company: string;
  role: string;
  period: { start: string; end: string | null };
  domain: 'fintech' | 'exchange' | 'automotive' | 'saas' | 'app' | 'ai' | 'service';
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface ArchNode {
  label: string;
  detail: string;
  mine: boolean;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  status: 'live' | 'released' | 'submitted' | 'completed';
  description: string;
  highlights: string[];
  stack: string[];
  links: { label: string; url: string }[];
  screenshot?: {
    src: string;
    alt: string;
  };
  architecture?: ArchNode[];
  featured: boolean;
}

export interface SkillGroup {
  category: string;
  items: { name: string; note?: string }[];
}
