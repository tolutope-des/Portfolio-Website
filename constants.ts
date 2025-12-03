import { Project, SocialLink, Inspiration } from './types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Lumina Banking',
    category: 'Fintech App',
    year: '2024',
    image: '/images/projects/lumina.jpg',
    description: 'Redefining personal finance with a focus on mindful spending and predictive analytics.'
  },
  {
    id: '02',
    title: 'Aura Smart Home',
    category: 'IoT Interface',
    year: '2023',
    image: '/images/projects/aura.jpg',
    description: 'A unified control system for the connected home, prioritizing voice-first interactions.'
  },
  {
    id: '03',
    title: 'Velvet',
    category: 'E-commerce',
    year: '2023',
    image: '/images/projects/velvet.jpg',
    description: 'Luxury fashion marketplace designed for seamless discovery and tactile visual experiences.'
  },
  {
    id: '04',
    title: 'Carbon Trace',
    category: 'Sustainability Dashboard',
    year: '2022',
    image: '/images/projects/carbontrace.jpg',
    description: 'Enterprise level dashboard for tracking and mitigating supply chain carbon footprints.'
  }
];

export const INSPIRATIONS: Inspiration[] = [
  {
    id: 'c1',
    title: 'Glassmorphism Music Player',
    category: 'UI Concept',
    image: '/images/concepts/music-player.jpg',
    link: '#'
  },
  {
    id: 'c2',
    title: 'Crypto Wallet Dark Mode',
    category: 'Mobile Design',
    image: '/images/concepts/crypto-wallet.jpg',
    link: '#'
  },
  {
    id: 'c3',
    title: 'AI Chat Interface',
    category: 'Interaction',
    image: '/images/concepts/ai-chat.jpg',
    link: '#'
  },
  {
    id: 'c4',
    title: 'Minimalist Weather App',
    category: 'Concept',
    image: '/images/concepts/weather-app.jpg',
    link: '#'
  }
];

export const SOCIALS: SocialLink[] = [
  { name: 'Twitter / X', url: 'https://x.com/ToluTopsy' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tolutopeadebayo/' },
  { name: 'Behance', url: 'https://www.behance.net/tolutopeadebayo' }
];

export const AVATAR_IMAGE = "/images/avatar/profile.jpg";

export const EMAIL_ADDRESS = "tolutopeadebayo@gmail.com";

// NOTE: Replace this with the actual URL to your hosted Resume PDF
export const RESUME_URL = "#";

export const HERO_TEXT = "Building digital products that feel inevitable.";

export const ABOUT_PARAGRAPHS = [
  "I’ve always been the person who takes things apart just to see how they work, and then tries to put them back together. I’m endlessly curious, whether it’s figuring out how a product is built, fixing things myself, or learning a new skill just for fun.",
  "Over the years, I’ve tried tennis, ran in competitions, and play the bass guitar. I’ve also been drawing and making whiteboard animations before I found my calling as a product designer. For the past four years, I’ve designed SaaS platforms and web/mobile experiences leveraging AI across logistics, fintech, health, education, and real estate. I design products that live at the intersection of utility and art.",
  "Today, I’m shaping the future of logistics at Movam, an AI powered logistics company, while exploring all the things I used to love doing and discovering new passions along the way.",
  "Curious? So am I."
];