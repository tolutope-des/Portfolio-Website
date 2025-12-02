export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface Inspiration {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
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