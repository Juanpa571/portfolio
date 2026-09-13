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
}

export const siteConfig = {
  profile: {
    brandName: 'JP Studios',
    founderName: 'Juan Pablo Chacón',
    role: 'Full-Stack Designer & Developer',
    location: 'Cali, Colombia',
    timezone: 'America/Bogota',
    headline: 'Design, code, and dependable partnership. Handled directly with you.',
    description: 'I build production-grade web products from initial UI design to backend architecture and cloud deployment. Senior craftsmanship with transparent, direct collaboration.',
    contact: {
      email: 'juanpablochaconusa@gmail.com',
      whatsapp: 'https://wa.me/61405667961?text=Hi%20Juan%20Pablo,%20I%20would%20like%20to%20discuss%20a%20project',
    }
  },

  services: [
    {
      id: 'ux-design',
      number: '001',
      title: 'UI/UX Design',
      subtitle: 'Clarity, hierarchy, and detail.',
      description: 'I turn complex product requirements into clean visual systems that reduce friction and guesswork, so your interface just makes sense.'
    },
    {
      id: 'frontend',
      number: '002',
      title: 'Frontend Craft',
      subtitle: 'Precision code that feels native.',
      description: 'Modern React 19, TypeScript, and clean CSS. Fast, responsive, and tactile web applications built with zero unnecessary library bloat.'
    },
    {
      id: 'fullstack',
      number: '003',
      title: 'Full-Stack & APIs',
      subtitle: 'Resilience that scales.',
      description: 'Connecting databases, payment gateways (Stripe), webhooks, and secure cloud infrastructure designed for reliability and scale.'
    },
    {
      id: 'support',
      number: '004',
      title: 'Ongoing Support',
      subtitle: 'Peace of mind post-launch.',
      description: 'Hosting setup, DNS configuration, and direct WhatsApp maintenance. Your web application never gets left behind.'
    }
  ] as ServiceItem[],

  projects: [
    {
      id: 'habitat',
      number: '01',
      clientTag: 'HÁBITAT',
      title: 'Hábitat Architectural Studio',
      category: 'Editorial Architecture',
      location: 'Colombia',
      tech: 'React 19 • Tailwind v4 • Storytelling',
      description: 'Bioclimatic architecture atelier web experience with asymmetric typography and fluid digital storytelling.',
      aspectRatio: '16/10',
      dimensions: '1920x1200 px'
    },
    {
      id: 'aura',
      number: '02',
      clientTag: 'AURA',
      title: 'Aura Goods & Objects',
      category: 'Headless E-Commerce',
      location: 'Australia',
      tech: 'Next.js • Stripe • Serverless',
      description: 'Machined titanium goods boutique. Custom headless storefront with integrated Stripe checkout and sub-second navigation.',
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
      tech: 'TypeScript • Token Engine • CSS',
      description: 'A multi-brand design engineering engine unifying UI tokens across web, mobile, and Figma design kits.',
      aspectRatio: '16/10',
      dimensions: '1920x1200 px'
    },
    {
      id: 'vanguard',
      number: '04',
      clientTag: 'VANGUARD',
      title: 'Vanguard Energy Analytics',
      category: 'Fintech & Telemetry',
      location: 'United Kingdom',
      tech: 'Edge APIs • WebSockets • Real-time',
      description: 'High-frequency renewable energy telemetry console processing real-time grid transactions with sub-10ms edge compute.',
      aspectRatio: '16/10',
      dimensions: '1920x1200 px'
    }
  ] as ProjectItem[]
};
