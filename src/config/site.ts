export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  clientTag: string;
  title: string;
  category: string;
  location: string;
  tech: string;
  description: string;
  aspectRatio: string;
  dimensions: string;
  image?: string;
}

export const siteConfig = {
  profile: {
    brandName: 'JP Studios',
    founderName: 'Juan Pablo Chacón',
    role: 'Creative Web Designer & Producer',
    location: 'Cali, Colombia',
    timezone: 'America/Bogota',
    headline: 'Bespoke web design, fluid interactions, and rapid launch. Handled directly with you.',
    description: 'I design and craft high-performance web experiences for founders, studios, and modern brands. Editorial typography, tactile interactions, and turnkey delivery.',
    contact: {
      email: 'juanpablochaconusa@gmail.com',
      whatsapp: 'https://wa.me/61405667961?text=Hi%20Juan%20Pablo,%20I%20would%20like%20to%20discuss%20a%20project',
    }
  },

  services: [
    {
      id: 'ux-design',
      number: '001',
      title: 'UI/UX & Art Direction',
      subtitle: 'Clarity, hierarchy, and detail.',
      description: 'Translating your vision into an arresting visual identity and intuitive layouts that command attention and drive conversion.'
    },
    {
      id: 'frontend',
      number: '002',
      title: 'Frontend Craft',
      subtitle: 'Precision code that feels native.',
      description: 'Modern React 19, TypeScript, and clean styling. Fast, responsive, and tactile web applications built with zero unnecessary bloat.'
    },
    {
      id: 'launch',
      number: '003',
      title: 'Turnkey Launch',
      subtitle: 'Global deployment and custom domain setup.',
      description: 'Lightning-fast edge hosting, DNS configuration, and contact integrations ready to receive high-value inquiries with zero technical friction.'
    },
    {
      id: 'support',
      number: '004',
      title: 'Ongoing Evolution',
      subtitle: 'Peace of mind post-launch.',
      description: 'Fast iterations, seasonal content updates, and dedicated visual refinements so your digital presence always stays ahead.'
    }
  ] as ServiceItem[],

  projects: [
    {
      id: 'habitat',
      number: '01',
      clientTag: 'HÁBITAT',
      title: 'Hábitat',
      category: 'Editorial Architecture',
      location: 'Colombia',
      tech: 'React 19 • Tailwind • Editorial Storytelling',
      description: 'Bioclimatic architecture atelier web experience with asymmetric typography and fluid digital storytelling.',
      aspectRatio: '16/10',
      dimensions: '1920x1200 px',
      image: '/projects/habitat.jpg'
    },
    {
      id: 'aura',
      number: '02',
      clientTag: 'AURA',
      title: 'Aura Goods & Objects',
      category: 'Boutique Catalog & Brand',
      location: 'Australia',
      tech: 'React • Digital Showcase • Micro-interactions',
      description: 'Machined titanium goods boutique showcase. Minimalist digital catalog with tactile interactions and sub-second navigation.',
      aspectRatio: '16/10',
      dimensions: '1920x1200 px'
    },
    {
      id: 'kroma',
      number: '03',
      clientTag: 'KROMA',
      title: 'Kroma Design Systems',
      category: 'Design Engineering',
      location: 'United States',
      tech: 'Design System • Typography • UI Tokens',
      description: 'A multi-brand digital showcase unifying UI tokens and responsive typography across modern interfaces.',
      aspectRatio: '16/10',
      dimensions: '1920x1200 px'
    },
    {
      id: 'vanguard',
      number: '04',
      clientTag: 'VANGUARD',
      title: 'Vanguard Capital & Advisory',
      category: 'Corporate & Consulting',
      location: 'United Kingdom',
      tech: 'High-Speed Web • Responsive • Analytics',
      description: 'Editorial web presence for a strategic advisory group, featuring responsive layouts, fluid data displays, and sub-second load times.',
      aspectRatio: '16/10',
      dimensions: '1920x1200 px'
    }
  ] as ProjectItem[]
};
