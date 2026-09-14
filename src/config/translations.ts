export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    capabilities: string;
    works: string;
    contact: string;
    chat: string;
    location: string;
    timeLabel: string;
    copied: string;
    availableWorldwide: string;
    chatOnWhatsApp: string;
    email: string;
    switchLangTooltip: string;
  };
  hero: {
    disciplineLine1: string;
    disciplineAnd: string;
    disciplineLine2: string;
    location: string;
    studioType: string;
    role: string;
  };
  intro: {
    statement: string;
    startOnWhatsApp: string;
    direct: string;
  };
  ticker: {
    track1: Array<{ text: string; filled: boolean }>;
    track2: Array<{ text: string; filled: boolean }>;
  };
  services: {
    headerLine1: string;
    headerLine2: string;
    items: Array<{
      id: string;
      number: string;
      title: string;
      subtitle: string;
      description: string;
    }>;
  };
  projects: {
    headerLine1: string;
    headerLine2: string;
    tagline: string;
    subtagline: string;
    conceptDemoBadge: string;
    futureVisionDemo: string;
    demoButton: string;
    items: Record<
      string,
      {
        title: string;
        category: string;
        tagline: string;
        description: string;
        tech: string;
      }
    >;
    modal: {
      availableCommissions: string;
      discussProject: string;
      locationScopeLabel: string;
      locationScopeValue: string;
      coreStackLabel: string;
      speculativeStudy: string;
      disclosureText: (name: string) => string;
      closeAria: string;
    };
  };
  contact: {
    sectionTag: string;
    title: string;
    description: string;
    required: string;
    inquiryType: string;
    newProject: string;
    generalInquiry: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitIdle: string;
    submitSending: string;
    validationError: string;
    networkError: string;
    successTitle: string;
    successMessage: (name: string, projectType: string, email: string) => string;
    sendAnother: string;
    openWhatsApp: string;
  };
  footer: {
    headlineLine1: string;
    headlineLine2: string;
    whatsappButton: (number: string) => string;
    brandName: string;
    craftedBy: string;
    location: string;
    remoteWorldwide: string;
    edition: string;
    backToTop: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      capabilities: 'Capabilities',
      works: 'Works',
      contact: 'Contact',
      chat: 'Chat',
      location: 'Cali, Colombia',
      timeLabel: 'Local time in Cali. Click to copy',
      copied: 'Copied ✓',
      availableWorldwide: 'Available Worldwide',
      chatOnWhatsApp: 'Chat on WhatsApp',
      email: 'Email',
      switchLangTooltip: 'Cambiar a español',
    },
    hero: {
      disciplineLine1: 'Design',
      disciplineAnd: '&',
      disciplineLine2: 'Web Craft.',
      location: 'Cali, Colombia',
      studioType: 'Independent Studio',
      role: 'Creative Web Designer & Producer',
    },
    intro: {
      statement:
        'I partner with founders, studios, and modern brands to design and deliver high-craft web experiences. Honest communication, fast turnaround, and personal dedication to launching digital presences that stand out.',
      startOnWhatsApp: 'Start on WhatsApp',
      direct: 'Direct ↗',
    },
    ticker: {
      track1: [
        { text: 'Bespoke Design', filled: true },
        { text: 'Tactile Motion', filled: false },
        { text: 'Speed to Market', filled: true },
        { text: 'Clear Communication', filled: false },
        { text: 'Turnkey Launch', filled: true },
        { text: 'High-Fidelity Interfaces', filled: false },
        { text: 'Fast Turnaround', filled: true },
        { text: 'Figma to Web', filled: false },
      ],
      track2: [
        { text: 'Transparent Process', filled: false },
        { text: 'Cali / Remote Worldwide', filled: true },
        { text: 'Honest Collaboration', filled: false },
        { text: 'Radical Simplicity', filled: true },
        { text: 'Sub-Second Loading', filled: false },
        { text: 'Editorial Typography', filled: true },
        { text: 'Bespoke Web Craft', filled: false },
        { text: 'Continuous Evolution', filled: true },
      ],
    },
    services: {
      headerLine1: 'Built on trust.',
      headerLine2: 'Shaped by craft.',
      items: [
        {
          id: 'ux-design',
          number: '001',
          title: 'UI/UX & Art Direction',
          subtitle: 'Clarity, hierarchy, and detail.',
          description:
            'Translating your vision into an arresting visual identity and intuitive layouts that command attention and drive conversion.',
        },
        {
          id: 'frontend',
          number: '002',
          title: 'Frontend Craft',
          subtitle: 'Precision code that feels native.',
          description:
            'Modern React 19, TypeScript, and clean styling. Fast, responsive, and tactile web applications built with zero unnecessary bloat.',
        },
        {
          id: 'launch',
          number: '003',
          title: 'Turnkey Launch',
          subtitle: 'Global deployment and custom domain setup.',
          description:
            'Lightning-fast edge hosting, DNS configuration, and contact integrations ready to receive high-value inquiries with zero technical friction.',
        },
        {
          id: 'support',
          number: '004',
          title: 'Ongoing Evolution',
          subtitle: 'Peace of mind post-launch.',
          description:
            'Fast iterations, seasonal content updates, and dedicated visual refinements so your digital presence always stays ahead.',
        },
      ],
    },
    projects: {
      headerLine1: 'Selected',
      headerLine2: 'Works.',
      tagline: 'Concept Prototypes & Future Visions • Click to explore',
      subtagline:
        'Interactive demonstrations of how client platforms can look and convert',
      conceptDemoBadge: 'Concept Demo',
      futureVisionDemo: 'Future Vision Demo',
      demoButton: 'Demo',
      items: {
        habitat: {
          title: 'Hábitat',
          category: 'Veterinary Hospital & Emergency',
          tagline: '24/7 Clinical & Emergency Architecture',
          description:
            'High-complexity 24/7 veterinary hospital and emergency care center. Digital presence designed for immediate triage clarity, calm clinical authority, and rapid patient intake.',
          tech: 'React 19 • Motion • Triage Direction',
        },
        'sai-seven': {
          title: 'Sai Seven',
          category: 'Luxury Hospitality & Resort',
          tagline: 'Caribbean Coastal Sanctuary & Resort',
          description:
            'Ultra-luxury Caribbean beachfront sanctuary digital presence featuring immersive coastal typography, fluid storytelling, and effortless booking journeys.',
          tech: 'React 19 • Motion • Coastal Storytelling',
        },
      },
      modal: {
        availableCommissions: 'Available for custom commissions',
        discussProject: 'Discuss a similar project',
        locationScopeLabel: 'Location & Scope',
        locationScopeValue: 'Bespoke Web Architecture',
        coreStackLabel: 'Core Stack & Craft',
        speculativeStudy: 'Speculative Concept Study',
        disclosureText: (name: string) =>
          `This project is an interactive design demonstration showcasing how modern web architecture, editorial typography, and high-speed motion could elevate ${name}'s digital brand authority and client conversion in the future.`,
        closeAria: 'Close modal',
      },
    },
    contact: {
      sectionTag: 'Direct Inquiries',
      title: 'Start a Project',
      description:
        'Tell me about your brand or business. I reply directly within 24 business hours to your email or WhatsApp.',
      required: 'Required',
      inquiryType: 'Inquiry type',
      newProject: 'New Project',
      generalInquiry: 'General Inquiry / Other',
      nameLabel: 'Name or business',
      namePlaceholder: 'John Doe — Boutique Hotel',
      emailLabel: 'Email address',
      emailPlaceholder: 'contact@yourbrand.com',
      messageLabel: 'Project details',
      messagePlaceholder:
        'Tell me about your business, current website (if any), or the goals you want to achieve...',
      submitIdle: 'Send inquiry',
      submitSending: 'Sending...',
      validationError: 'Please complete all required fields.',
      networkError:
        'Connection issue while sending. Please contact me via WhatsApp.',
      successTitle: 'Message received successfully',
      successMessage: (name: string, projectType: string, email: string) =>
        `Thank you, ${name}. I have received your request for ${projectType}. I will get back to you at ${email} shortly.`,
      sendAnother: 'Send another message',
      openWhatsApp: 'Open chat on WhatsApp ↗',
    },
    footer: {
      headlineLine1: 'Ready to build',
      headlineLine2: 'something real?',
      whatsappButton: (display: string) => `WhatsApp (${display}) ↗`,
      brandName: 'JP STUDIOS',
      craftedBy: 'Designed & crafted by Juan Pablo Chacón.',
      location: 'Cali, Colombia',
      remoteWorldwide: 'Remote Worldwide',
      edition: '© 2026 Edition',
      backToTop: 'Back to top',
    },
  },
  es: {
    nav: {
      capabilities: 'Capacidades',
      works: 'Proyectos',
      contact: 'Contacto',
      chat: 'Chat',
      location: 'Cali, Colombia',
      timeLabel: 'Hora local en Cali. Clic para copiar',
      copied: 'Copiado ✓',
      availableWorldwide: 'Disponible Globalmente',
      chatOnWhatsApp: 'Chat en WhatsApp',
      email: 'Correo',
      switchLangTooltip: 'Switch to English',
    },
    hero: {
      disciplineLine1: 'Diseño',
      disciplineAnd: '&',
      disciplineLine2: 'Desarrollo Web.',
      location: 'Cali, Colombia',
      studioType: 'Estudio Independiente',
      role: 'Diseñador y Desarrollador Web Creativo',
    },
    intro: {
      statement:
        'Me asocio con fundadores, estudios y marcas modernas para diseñar y construir experiencias web de alto nivel. Comunicación honesta, entrega ágil y dedicación personal para lanzar presencias digitales memorables.',
      startOnWhatsApp: 'Iniciar en WhatsApp',
      direct: 'Directo ↗',
    },
    ticker: {
      track1: [
        { text: 'Diseño de Autor', filled: true },
        { text: 'Movimiento Táctil', filled: false },
        { text: 'Velocidad de Lanzamiento', filled: true },
        { text: 'Comunicación Clara', filled: false },
        { text: 'Entrega Llave en Mano', filled: true },
        { text: 'Interfaces de Alta Fidelidad', filled: false },
        { text: 'Entrega Rápida', filled: true },
        { text: 'De Figma a la Web', filled: false },
      ],
      track2: [
        { text: 'Proceso Transparente', filled: false },
        { text: 'Cali / Remoto Global', filled: true },
        { text: 'Colaboración Honesta', filled: false },
        { text: 'Simplicidad Radical', filled: true },
        { text: 'Carga Sub-Segundo', filled: false },
        { text: 'Tipografía Editorial', filled: true },
        { text: 'Desarrollo Web Artesanal', filled: false },
        { text: 'Evolución Continua', filled: true },
      ],
    },
    services: {
      headerLine1: 'Construido en confianza.',
      headerLine2: 'Forjado con maestría.',
      items: [
        {
          id: 'ux-design',
          number: '001',
          title: 'UI/UX y Dirección de Arte',
          subtitle: 'Claridad, jerarquía y atención al detalle.',
          description:
            'Transformando tu visión en una identidad visual cautivadora y estructuras intuitivas que capturan la atención e impulsan la conversión.',
        },
        {
          id: 'frontend',
          number: '002',
          title: 'Desarrollo Frontend',
          subtitle: 'Código de precisión con sensación nativa.',
          description:
            'React 19 moderno, TypeScript y estilos limpios. Aplicaciones web rápidas, responsivas y táctiles construidas sin código innecesario.',
        },
        {
          id: 'launch',
          number: '003',
          title: 'Lanzamiento Llave en Mano',
          subtitle: 'Despliegue global y configuración de dominio.',
          description:
            'Hosting ultrarrápido en el edge, configuración DNS e integraciones de contacto listas para captar clientes de alto valor sin fricción técnica.',
        },
        {
          id: 'support',
          number: '004',
          title: 'Evolución Continua',
          subtitle: 'Tranquilidad total tras el lanzamiento.',
          description:
            'Iteraciones rápidas, actualizaciones periódicas de contenido y refinamientos visuales para que tu presencia digital siempre esté a la vanguardia.',
        },
      ],
    },
    projects: {
      headerLine1: 'Proyectos',
      headerLine2: 'Destacados.',
      tagline: 'Prototipos de Concepto y Visiones Futuras • Clic para explorar',
      subtagline:
        'Demostraciones interactivas de cómo pueden verse y convertir las plataformas web de clientes',
      conceptDemoBadge: 'Demo de Concepto',
      futureVisionDemo: 'Demo de Visión Futura',
      demoButton: 'Demo',
      items: {
        habitat: {
          title: 'Hábitat',
          category: 'Hospital Veterinario y Urgencias',
          tagline: 'Arquitectura Clínica y de Urgencias 24/7',
          description:
            'Hospital veterinario y centro de urgencias 24/7 de alta complejidad. Presencia digital diseñada para triaje inmediato, serenidad clínica y rápida atención de pacientes.',
          tech: 'React 19 • Motion • Dirección de Triaje',
        },
        'sai-seven': {
          title: 'Sai Seven',
          category: 'Hotelería y Resort de Lujo',
          tagline: 'Santuario y Resort en la Costa Caribeña',
          description:
            'Santuario frente al mar en el Caribe de ultra-lujo. Presencia digital con tipografía costera inmersiva, narrativa fluida y reservas sin esfuerzo.',
          tech: 'React 19 • Motion • Narrativa Costera',
        },
      },
      modal: {
        availableCommissions: 'Disponible para proyectos a medida',
        discussProject: 'Conversar sobre un proyecto similar',
        locationScopeLabel: 'Ubicación y Alcance',
        locationScopeValue: 'Arquitectura Web a Medida',
        coreStackLabel: 'Tecnología y Desarrollo',
        speculativeStudy: 'Estudio de Concepto Especulativo',
        disclosureText: (name: string) =>
          `Este proyecto es una demostración interactiva de diseño que muestra cómo la arquitectura web moderna, la tipografía editorial y el movimiento fluido podrían elevar la autoridad de marca y la conversión de clientes para ${name} en el futuro.`,
        closeAria: 'Cerrar ventana',
      },
    },
    contact: {
      sectionTag: 'Consultas Directas',
      title: 'Iniciar un Proyecto',
      description:
        'Cuéntame sobre tu marca o negocio. Respondo directamente en menos de 24 horas hábiles a tu correo o WhatsApp.',
      required: 'Requerido',
      inquiryType: 'Tipo de consulta',
      newProject: 'Nuevo Proyecto',
      generalInquiry: 'Consulta General / Otro',
      nameLabel: 'Nombre o negocio',
      namePlaceholder: 'Juan Pérez — Hotel Boutique',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'contacto@tunegocio.com',
      messageLabel: 'Detalles del proyecto',
      messagePlaceholder:
        'Cuéntame sobre tu negocio, tu web actual (si tienes) o los objetivos que buscas lograr...',
      submitIdle: 'Enviar consulta',
      submitSending: 'Enviando...',
      validationError: 'Por favor completa todos los campos requeridos.',
      networkError:
        'Hubo un problema de conexión al enviar. Por favor contáctame por WhatsApp.',
      successTitle: 'Mensaje recibido con éxito',
      successMessage: (name: string, projectType: string, email: string) =>
        `Gracias, ${name}. He recibido tu solicitud para ${projectType}. Me pondré en contacto contigo en ${email} lo antes posible.`,
      sendAnother: 'Enviar otro mensaje',
      openWhatsApp: 'Abrir chat en WhatsApp ↗',
    },
    footer: {
      headlineLine1: '¿Listo para crear',
      headlineLine2: 'algo memorable?',
      whatsappButton: (display: string) => `WhatsApp (${display}) ↗`,
      brandName: 'JP STUDIOS',
      craftedBy: 'Diseñado y desarrollado por Juan Pablo Chacón.',
      location: 'Cali, Colombia',
      remoteWorldwide: 'Remoto Global',
      edition: 'Edición © 2026',
      backToTop: 'Volver arriba',
    },
  },
};
