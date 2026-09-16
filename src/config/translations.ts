export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    capabilities: string;
    process: string;
    works: string;
    faq: string;
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
  process: {
    headerLine1: string;
    headerLine2: string;
    tagline: string;
    steps: Array<{
      number: string;
      title: string;
      timeframe: string;
      description: string;
      deliverable: string;
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
  faq: {
    headerLine1: string;
    headerLine2: string;
    tagline: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
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
      process: 'Process',
      works: 'Works',
      faq: 'FAQ',
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
        'I partner with founders, private practices, and ambitious brands to design and deliver high-craft web experiences. Direct communication, fast turnaround, and personal dedication to launching digital presences that convert visitors into clients.',
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
          subtitle: 'Authority, hierarchy, and client conversion.',
          description:
            'Translating your practice into an arresting visual identity. Clean layouts structured to command prestige and guide prospects directly toward scheduling an appointment or consultation.',
        },
        {
          id: 'frontend',
          number: '002',
          title: 'Frontend Craft',
          subtitle: 'Sub-second speed that feels native.',
          description:
            'Engineered with modern React 19, TypeScript, and zero bloat. Lightning-fast mobile performance with zero slow loading screens or broken responsive layouts.',
        },
        {
          id: 'launch',
          number: '003',
          title: 'Turnkey Launch',
          subtitle: 'Custom domain, SSL, and direct routing.',
          description:
            'Global edge hosting with 99.9% uptime, DNS setup, one-tap WhatsApp integration, and optimized Google Maps presence ready to capture high-value clients immediately.',
        },
        {
          id: 'support',
          number: '004',
          title: 'Ongoing Evolution',
          subtitle: 'Total peace of mind post-launch.',
          description:
            'Optional ongoing care including continuous speed audits, automated backups, and monthly content updates so your digital presence always stays ahead without technical headaches.',
        },
      ],
    },
    process: {
      headerLine1: 'Structured execution.',
      headerLine2: 'Zero surprises.',
      tagline: 'From strategic diagnosis to turnkey launch in under 14 days',
      steps: [
        {
          number: '01',
          title: 'Strategic Diagnosis & Architecture',
          timeframe: '48 Hours',
          description:
            'We study your business model, high-ticket services, and competitive landscape. We map the site structure and messaging strategy without burdening your team with writing copy from scratch.',
          deliverable: 'Strategic architecture & content blueprint',
        },
        {
          number: '02',
          title: 'Interactive Craft & Live Testing',
          timeframe: 'Days 3 to 10',
          description:
            'We build your bespoke web presence with sub-second responsiveness and tactile elegance. You test the complete experience live on your own smartphone before anything goes public.',
          deliverable: 'Private live staging link for review',
        },
        {
          number: '03',
          title: 'Turnkey Launch & Handover',
          timeframe: 'Days 11 to 14',
          description:
            'We connect your corporate domain, deploy SSL security, configure one-tap WhatsApp routing, and optimize your Google Business profile. You receive 100% full ownership of your assets.',
          deliverable: 'Live production launch & full ownership transfer',
        },
      ],
    },
    projects: {
      headerLine1: 'Live',
      headerLine2: 'Demos.',
      tagline: 'Visual Benchmark & Live Demos • Click to test the interactive experience',
      subtagline:
        'Interactive demonstrations of how bespoke web architecture commands authority and converts',
      conceptDemoBadge: 'Live Demo',
      futureVisionDemo: 'Interactive Vision Demo',
      demoButton: 'Open Live Demo ↗',
      items: {
        habitat: {
          title: 'Hábitat',
          category: 'Veterinary Hospital & Emergency',
          tagline: '24/7 Clinical & Emergency Architecture',
          description:
            'High-complexity 24/7 veterinary hospital and emergency care center. Digital presence designed for urgent triage clarity: one-tap emergency call and Google Maps directions optimized for nighttime mobile panic.',
          tech: 'React 19 • Emergency Triage UX • Sub-Second Mobile',
        },
        'next-project': {
          title: 'Soon...',
          category: 'Your Project Here',
          tagline: 'Reserved Space for Your Brand',
          description:
            'This space is reserved for your company. We design and develop bespoke digital experiences engineered to command immediate authority and turn visitors into direct clients.',
          tech: 'Bespoke Engineering • High-Impact Conversion',
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
          `This project is an interactive design demonstration showcasing how modern web architecture, editorial typography, and high-speed motion elevate ${name}'s digital brand authority and client conversion.`,
        closeAria: 'Close modal',
      },
    },
    faq: {
      headerLine1: 'Clear answers.',
      headerLine2: 'Zero fine print.',
      tagline: 'Everything you need to know before starting your project',
      items: [
        {
          question: 'How long does it take to have the website live and operating?',
          answer:
            'Standard delivery is 7 to 14 business days from our initial kick-off. Because we handle structural strategy and copywriting upfront, we eliminate the multi-month delays typical of traditional agencies.',
        },
        {
          question: 'Do I have to pay mandatory monthly fees after launch?',
          answer:
            'No. You can choose a single turnkey project payment with zero recurring obligations. We also offer optional monthly support and evolution plans if you prefer to delegate high-speed edge hosting, regular content updates, and Google Maps optimization.',
        },
        {
          question: 'Who owns the website, domain, and code once delivered?',
          answer:
            'You own 100% of everything. Unlike closed platforms that lock you in, your digital presence belongs entirely to you. You maintain full access to your custom domain, hosting, and source files with zero proprietary lock-in.',
        },
        {
          question: 'What do I need to provide to get started?',
          answer:
            'Only your logo (if available), basic contact information, and a 30-minute conversation about your highest-value services. We take care of competitive research, layout architecture, and conversion copywriting.',
        },
        {
          question: 'Why choose bespoke web craft over standard WordPress or Wix templates?',
          answer:
            'Generic templates load dozens of bloated plugins that take 4 to 6 seconds to open on your clients’ mobile phones, causing them to leave before reading. Our custom architecture loads in under 1 second, establishes immediate prestige, and guides users directly to a phone call or WhatsApp inquiry.',
        },
      ],
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
      namePlaceholder: 'Dr. John Doe — Private Clinic',
      emailLabel: 'Email address',
      emailPlaceholder: 'contact@yourbrand.com',
      messageLabel: 'Project details',
      messagePlaceholder:
        'Tell me about your business, your current website (if any), and the goals you want to achieve...',
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
      process: 'Proceso',
      works: 'Proyectos',
      faq: 'Preguntas',
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
        'Me asocio con fundadores, empresas y marcas modernas para diseñar y construir experiencias web de alto nivel. Comunicación directa, entrega ágil y dedicación personal para lanzar presencias digitales memorables que convierten visitas en clientes.',
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
          subtitle: 'Autoridad, jerarquía y captación de clientes.',
          description:
            'Transformando tu negocio en una identidad visual cautivadora. Estructuras de alta autoridad diseñadas para empresas y marcas que buscan diferenciarse, guiando la atención del visitante directamente a agendar una consulta o cotización.',
        },
        {
          id: 'frontend',
          number: '002',
          title: 'Desarrollo Frontend',
          subtitle: 'Velocidad sub-segundo con sensación nativa.',
          description:
            'React 19 moderno, TypeScript y estilos optimizados. Carga instantánea en menos de 1 segundo en móviles, código ultraligero y cero pantallas en blanco o desalineaciones visuales.',
        },
        {
          id: 'launch',
          number: '003',
          title: 'Lanzamiento Llave en Mano',
          subtitle: 'Dominio corporativo, SSL y WhatsApp directo.',
          description:
            'Hosting de alta velocidad en el edge, certificado de seguridad SSL, configuración DNS, botón directo a WhatsApp y ficha optimizada en Google Maps lista para recibir clientes.',
        },
        {
          id: 'support',
          number: '004',
          title: 'Evolución Continua',
          subtitle: 'Tranquilidad total tras el lanzamiento.',
          description:
            'Planes opcionales de soporte y mantenimiento: monitorización contra caídas 24/7, copias de seguridad automáticas y actualizaciones periódicas de contenido sin dolores de cabeza técnicos.',
        },
      ],
    },
    process: {
      headerLine1: 'Ejecución estructurada.',
      headerLine2: 'Cero sorpresas.',
      tagline: 'Del diagnóstico inicial al lanzamiento llave en mano en menos de 14 días',
      steps: [
        {
          number: '01',
          title: 'Diagnóstico Estratégico y Estructura',
          timeframe: '48 Horas',
          description:
            'Analizamos tus servicios más rentables, la competencia en tu ciudad y el comportamiento de tus clientes. Diseñamos la arquitectura y los textos de venta sin que tengas que redactar nada desde cero.',
          deliverable: 'Arquitectura estratégica y propuesta de contenidos',
        },
        {
          number: '02',
          title: 'Maquetación Interactiva y Pruebas en Vivo',
          timeframe: 'Días 3 al 10',
          description:
            'Construimos tu plataforma web con diseño de autor y velocidad sub-segundo. Pruebas la experiencia completa y los botones en tu propio móvil antes del lanzamiento oficial.',
          deliverable: 'Enlace privado de pruebas en vivo',
        },
        {
          number: '03',
          title: 'Puesta en Marcha y Entrega Llave en Mano',
          timeframe: 'Días 11 al 14',
          description:
            'Conectamos tu dominio corporativo, activamos certificado SSL, enlazamos el botón directo a WhatsApp y optimizamos tu ficha en Google Maps. Recibes el 100% de la propiedad.',
          deliverable: 'Web en producción y propiedad total transferida',
        },
      ],
    },
    projects: {
      headerLine1: 'Demos en',
      headerLine2: 'Vivo.',
      tagline: 'Estándar Visual & Demos en Vivo • Clic para probar la experiencia interactiva',
      subtagline:
        'Demostraciones interactivas de cómo una web a medida transmite autoridad y convierte visitas en clientes',
      conceptDemoBadge: 'Demo en Vivo',
      futureVisionDemo: 'Demo de Visión Interactiva',
      demoButton: 'Abrir Demo en Vivo ↗',
      items: {
        habitat: {
          title: 'Hábitat',
          category: 'Hospital Veterinario y Urgencias',
          tagline: 'Arquitectura Clínica y de Urgencias 24/7',
          description:
            'Hospital veterinario y centro de urgencias 24/7 de alta complejidad. Presencia digital diseñada para triaje inmediato: botón de llamada de urgencia en un toque y ruta de Google Maps optimizada para situaciones críticas nocturnas.',
          tech: 'React 19 • Triaje de Urgencias UX • Carga Sub-Segundo en Móvil',
        },
        'next-project': {
          title: 'Soon...',
          category: 'Tu Proyecto Aquí',
          tagline: 'Espacio Reservado para Tu Marca',
          description:
            'Este espacio está reservado para tu marca o empresa. Diseñamos y desarrollamos una experiencia digital a medida pensada para transmitir autoridad inmediata y convertir visitas en clientes directos.',
          tech: 'Arquitectura a Medida • Alta Conversión',
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
          `Este proyecto es una demostración interactiva de diseño que muestra cómo la arquitectura web moderna, la tipografía editorial y el movimiento fluido elevan la autoridad de marca y la conversión de clientes para ${name}.`,
        closeAria: 'Cerrar ventana',
      },
    },
    faq: {
      headerLine1: 'Respuestas claras.',
      headerLine2: 'Sin letra pequeña.',
      tagline: 'Todo lo que necesitas saber antes de iniciar tu proyecto',
      items: [
        {
          question: '¿Cuánto tiempo toma tener la página web lista para operar?',
          answer:
            'El plazo habitual es de 7 a 14 días laborables desde la sesión de diagnóstico inicial. Al tener una metodología cerrada y redactar nosotros la estructura estratégica, evitamos las demoras de meses que suelen ocurrir con agencias tradicionales.',
        },
        {
          question: '¿Tengo que pagar mensualidades obligatorias tras el lanzamiento?',
          answer:
            'No. Puedes optar por entrega llave en mano con un único pago por el proyecto. Además, si prefieres delegar el alojamiento de alta velocidad, copias de seguridad, actualizaciones mensuales y optimización continua en Google Maps, ofrezco planes de evolución y soporte mensual totalmente opcionales.',
        },
        {
          question: '¿Quién es dueño de la página web, el dominio y los archivos?',
          answer:
            'Tú al 100%. A diferencia de plataformas cerradas que te retienen como rehén, aquí la web te pertenece íntegramente. Tienes acceso completo a tu dominio, tu alojamiento y tus archivos fuente sin ataduras forzadas.',
        },
        {
          question: '¿Qué necesito entregar para comenzar a trabajar?',
          answer:
            'Solo requerimos tu logotipo (si ya dispones de uno), tus datos de contacto básicos y una llamada o conversación de 30 minutos sobre tus servicios más rentables. Nosotros nos encargamos de investigar la competencia, estructurar la propuesta y redactar el contenido.',
        },
        {
          question: '¿Por qué una web a medida supera a plantillas estándar de WordPress o Wix?',
          answer:
            'Las plantillas genéricas cargan decenas de plugins lentos que tardan de 4 a 6 segundos en abrir en el móvil de tus clientes, provocando que abandonen antes de leer. Nuestra arquitectura a medida carga en menos de 1 segundo, transmite autoridad inmediata y guía directamente a un contacto por WhatsApp o llamada.',
        },
      ],
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
      namePlaceholder: 'Carlos Mendoza — Empresa o Negocio',
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
