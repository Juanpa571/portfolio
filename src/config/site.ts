export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ProjectTheme {
  accentColor: string;
  cardBg: string;
  hoverBg: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  tagline: string;
  buttonHoverBg: string;
  buttonHoverText: string;
  glowColor: string;
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
  isCta?: boolean;
  theme?: ProjectTheme;
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
      email: 'hola@jpchacon.com',
      whatsapp: 'https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto',
      whatsappDisplay: '+57 317 737 1301',
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
      category: 'Veterinary Hospital & Emergency',
      location: 'Cali, Colombia',
      tech: 'React 19 • Motion • Triage Direction',
      description: 'High-complexity 24/7 veterinary hospital and emergency care center. Digital presence designed for immediate triage clarity, calm clinical authority, and rapid patient intake.',
      aspectRatio: '16/10',
      dimensions: '1920x1200 px',
      image: '/projects/habitat.jpg',
      theme: {
        accentColor: '#C89D66',
        cardBg: 'rgba(243, 239, 231, 0.45)',
        hoverBg: '#F5F1E8',
        borderColor: 'rgba(196, 178, 153, 0.35)',
        badgeBg: '#EAE3D5',
        badgeText: '#3B332A',
        badgeBorder: 'rgba(180, 160, 130, 0.45)',
        tagline: '24/7 Clinical & Emergency Architecture',
        buttonHoverBg: '#23201C',
        buttonHoverText: '#F7F4EE',
        glowColor: 'rgba(200, 157, 102, 0.15)',
      }
    },
    {
      id: 'sai-seven',
      number: '02',
      clientTag: 'SAI',
      title: 'SAI — San Andrés Island',
      category: 'Hospedaje • Naturaleza • Cultura • Caribe',
      location: 'San Andrés, Colombia',
      tech: 'Arquitectura de Reserva Directa • Cero Comisiones OTA',
      description: 'Resort y descanso frente al mar en San Andrés. Arquitectura digital diseñada para captar reservas directas de alto valor sin intermediarios.',
      aspectRatio: '16/10',
      dimensions: '1920x1200 px',
      image: '/projects/arrecife-hero.jpg',
      isCta: false,
      theme: {
        accentColor: '#0B2532',
        cardBg: 'rgba(250, 249, 246, 0.7)',
        hoverBg: '#FAF9F6',
        borderColor: 'rgba(11, 37, 50, 0.2)',
        badgeBg: '#E6EFF2',
        badgeText: '#0B2532',
        badgeBorder: 'rgba(11, 37, 50, 0.3)',
        tagline: 'Arquitectura para Reservas Directas sin Comisiones',
        buttonHoverBg: '#0B2532',
        buttonHoverText: '#FFFFFF',
        glowColor: 'rgba(23, 162, 184, 0.15)',
      }
    }
  ] as ProjectItem[]
};
