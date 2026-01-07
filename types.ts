export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  caseStudy?: CaseStudy; // Optional rich content
}

export interface CaseStudy {
  role: string;
  timeline: string;
  team: string;
  status: string;
  company?: string;
  problem: {
    statement: string;
    before: string[];
    ledTo: string[];
    needs: string[];
  };
  context: {
    description: string;
    constraints: string[];
    additional?: string;
  };
  myRole?: {
    main: string[];
    collaborated: string[];
  };
  research: {
    description: string;
    inputs: string[];
    insights: string[];
  };
  decisions: {
    id: string;
    problem: string;
    subProblem?: string;
    decision: string;
    why: string;
    image?: string;
  }[];
  solutions: {
    title: string;
    description?: string;
    features?: string[];
    image: string;
  }[];
  impact: {
    description: string;
    outcomes: string[];
    note?: string;
  };
  learnings: {
    good: string[];
    improve: string[];
  };
  summary?: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export type SocialPlatform = 'twitter' | 'linkedin' | 'instagram' | 'behance' | 'dribbble' | 'generic';

export interface Inspiration {
  id: string;
  title: string;
  category: string;
  description?: string;
  image: string;
  gallery?: string[];
  link: string;
  platform: SocialPlatform;
}

export enum CursorVariant {
  DEFAULT = 'DEFAULT',
  HOVER = 'HOVER',
  TEXT = 'TEXT',
  BUTTON = 'BUTTON'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}