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
    },
    social: {
      instagram: 'https://www.instagram.com/juanpa_571',
      tiktok: 'https://www.tiktok.com/@juanpa.571',
      linkedin: 'https://www.linkedin.com/in/juan-pablo-chacon-034457283/',
      github: 'https://github.com/Juanpa571',
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
      id: 'maranatha',
      number: '01',
      clientTag: 'MARANATHA',
      title: 'Maranatha Papelería',
      category: 'Papelería Creativa • Empaques & Eventos',
      location: 'Cali, Colombia',
      tech: 'React 19 • Catálogo WhatsApp • SEO Local',
      description: 'Taller de papelería creativa en Cali. Plataforma web diseñada para exhibir catálogo de productos, stickers y empaques temáticos con conversión directa a pedidos por WhatsApp.',
      aspectRatio: '16/10',
      dimensions: '1440x900 px',
      image: '/projects/maranatha-hero.png',
      isCta: false,
      theme: {
        accentColor: '#6B21A8',
        cardBg: 'rgba(250, 245, 255, 0.7)',
        hoverBg: '#FAF5FF',
        borderColor: 'rgba(107, 33, 168, 0.2)',
        badgeBg: '#F3E8FF',
        badgeText: '#6B21A8',
        badgeBorder: 'rgba(107, 33, 168, 0.3)',
        tagline: 'Catálogo Digital y Pedidos Directos por WhatsApp',
        buttonHoverBg: '#6B21A8',
        buttonHoverText: '#FFFFFF',
        glowColor: 'rgba(107, 33, 168, 0.15)',
      }
    },
    {
      id: 'next-project',
      number: '02',
      clientTag: 'TU MARCA',
      title: 'Próximo Proyecto',
      category: 'Espacio disponible para tu empresa',
      location: 'Cali / Remoto Global',
      tech: 'Desarrollo Llave en Mano • Entrega en 14 Días',
      description: 'Espacio reservado para tu marca. Diseñamos y desarrollamos tu plataforma web a medida para posicionar tu negocio con autoridad y captar clientes directos.',
      aspectRatio: '16/10',
      dimensions: '1920x1200 px',
      isCta: true,
    }
  ] as ProjectItem[]
};
