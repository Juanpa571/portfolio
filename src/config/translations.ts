export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    work: string;
    process: string;
    services: string;
    faq: string;
    contact: string;
    talk: string;
    studio: string;
    capabilities: string;
    works: string;
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
    headlineLine1: string;
    headlineLine2: string;
    headlineLine3: string;
    subtitle: string;
    signature: string;
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
    tag: string;
    headerLine1: string;
    headerLine2: string;
    seoDescription: string;
    items: Array<{
      id: string;
      number: string;
      title: string;
      subtitle: string;
      description: string;
    }>;
  };
  process: {
    tag: string;
    headerLine1: string;
    headerLine2: string;
    seoDescription: string;
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
    tag: string;
    headerLine1: string;
    headerLine2: string;
    tagline: string;
    whatsappPrompt: string;
    whatsappButton: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contact: {
    sectionTag: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    stepIndicator: (current: number, total: number) => string;
    step1Question: string;
    step1Subtitle: string;
    step2Question: string;
    step2Subtitle: string;
    step3Question: string;
    step3Subtitle: string;
    whatsappQuestion: string;
    whatsappAction: string;
    whatsappButton: string;
    prevButton: string;
    nextButton: string;
    projectOptions: Array<{ id: string; label: string; description: string; icon: string }>;
    sectorOptions: Array<{ id: string; label: string; description: string; icon: string }>;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    submitIdle: string;
    submitSending: string;
    validationError: string;
    networkError: string;
    successTitle: string;
    successSubtitle: (name: string) => string;
    resetButton: string;
  };
  footer: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    subtitle: string;
    email: string;
    whatsapp: string;
    responseBadge: string;
    slogan: string;
    brandDescription: string;
    navTitle: string;
    servicesTitle: string;
    resourcesTitle: string;
    locationTitle: string;
    locationName: string;
    locationSubtitle: string;
    remoteGlobal: string;
    copyright: string;
    craftedBy: string;
    backToTop: string;
    whatsappButton?: (number: string) => string;
    brandName?: string;
    location?: string;
    remoteWorldwide?: string;
    edition?: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      work: 'Work',
      process: 'Process',
      services: 'Services',
      faq: 'FAQ',
      contact: 'Contact',
      talk: "Let's talk",
      studio: 'Independent Studio',
      capabilities: 'Services',
      works: 'Work',
      chat: "Let's talk",
      location: 'Cali, Colombia',
      timeLabel: 'Local time in Cali. Click to copy',
      copied: 'Copied ✓',
      availableWorldwide: 'Available Worldwide',
      chatOnWhatsApp: 'Chat on WhatsApp',
      email: 'Email',
      switchLangTooltip: 'Cambiar a español',
    },
    hero: {
      headlineLine1: 'Websites in Cali,',
      headlineLine2: 'engineered to rank on Google',
      headlineLine3: 'and scale your sales.',
      subtitle: 'Bespoke web design and engineering in Cali to bring your company to the top of Google.',
      signature: 'JP Studios by Juan Pablo Chacón',
      disciplineLine1: 'Bespoke Websites',
      disciplineAnd: '&',
      disciplineLine2: 'Design to Sell.',
      location: 'Cali, Colombia',
      studioType: 'Independent Studio',
      role: 'Product Engineer & Conversion Web Developer',
    },
    intro: {
      statement:
        'At JP Studios, an independent web engineering studio led by Juan Pablo Chacón, we craft high-performance websites in Cali for businesses that cannot afford to go unnoticed. Ultra-fast websites, optimized to dominate the Google ecosystem and AI search engines. Engineered to turn local discovery into real clients across your primary contact channels.',
      startOnWhatsApp: 'Start on WhatsApp',
      direct: 'Direct ↗',
    },
    ticker: {
      track1: [
        { text: 'JP Studios', filled: true },
        { text: 'Bespoke Websites', filled: false },
        { text: 'Design to Sell', filled: true },
        { text: 'Google Maps Optimization', filled: false },
        { text: 'React 19 & TypeScript', filled: true },
        { text: 'Sub-Second Loading', filled: false },
        { text: 'Search & AI Ready', filled: true },
        { text: 'Turnkey Launch', filled: false },
      ],
      track2: [
        { text: 'JP Studios Cali', filled: true },
        { text: 'Measurable ROI', filled: false },
        { text: 'Structured Execution', filled: true },
        { text: 'Direct WhatsApp Routing', filled: false },
        { text: '99.9% Cloud Uptime', filled: true },
        { text: 'Lead Qualification', filled: false },
        { text: 'Bespoke Architecture', filled: true },
        { text: 'Continuous Evolution', filled: false },
      ],
    },
    services: {
      tag: 'Services',
      headerLine1: 'Engineered to sell,',
      headerLine2: 'not just decoration.',
      seoDescription:
        'Bespoke web development in Cali, high-speed landing pages, and visibility on Google. Engineered with clean code to rank your business across search engines and route qualified prospects straight to direct contact channels.',
      items: [
        {
          id: 'performance-web',
          number: '01',
          title: 'High-Performance Web Design & Development',
          subtitle: 'Fast web development loading in under 0.5s on mobile, free of slow WordPress plugins.',
          description:
            'Bespoke web architecture engineered by JP Studios with React 19, TypeScript, and modern Tailwind. Clean, ultra-fast mobile performance that loads in under 0.5s without slow plugins or template bloat.',
        },
        {
          id: 'seo-local',
          number: '02',
          title: 'Google & Google Maps Ranking',
          subtitle: 'Optimized digital presence to lead local searches in Cali or your specific business area, plus AI recommendations.',
          description:
            'Structured Schema.org JSON-LD data graphs, Google Business Profile optimization, and direct Answer Blocks so your business gets recommended on Google Search, Maps, and AI search engines.',
        },
        {
          id: 'conversion-pages',
          number: '03',
          title: 'Websites Designed to Sell',
          subtitle: 'High-conversion landing pages engineered to turn traffic into WhatsApp inquiries and phone calls.',
          description:
            'Persuasive copy and intentional layout hierarchy designed to qualify prospects and guide them directly to what drives sales: direct WhatsApp messaging, calls, or online appointment booking.',
        },
        {
          id: 'support',
          number: '04',
          title: 'Cloud Hosting, Domain & Maintenance',
          subtitle: 'Ultra-fast cloud infrastructure with 99.9% uptime, SSL security, and direct support without lock-in.',
          description:
            'Enterprise edge hosting with 99.9% uptime, SSL security, automated backups, and optional support with zero forced monthly retainers or technical lock-in.',
        },
      ],
    },
    process: {
      tag: 'Process',
      headerLine1: 'Live in 14 days.',
      headerLine2: 'Zero technical friction.',
      seoDescription:
        'We engineer bespoke websites and web development in Cali with a transparent 14-day workflow. From strategy to production, delivering a fast, search-ready website built to convert.',
      tagline: 'The JP Studios methodology: From commercial strategy to a production-ready web presence in under two weeks',
      steps: [
        {
          number: '01',
          title: 'Commercial Diagnosis & Keyword Research',
          timeframe: '48 Hours',
          description:
            'We analyze your direct competitors on Google and your specific target customer area. We map the site structure and high-intent commercial copy without your team having to write anything from scratch.',
          deliverable: 'Strategic architecture & content blueprint',
        },
        {
          number: '02',
          title: 'High-Speed Web Development & Mobile Testing',
          timeframe: 'Days 3 to 10',
          description:
            'We engineer your bespoke web presence in modern React 19 with instant sub-second loading on mobile devices. You test the complete experience and direct contact channels on your own smartphone before launch.',
          deliverable: 'Private live staging link for review',
        },
        {
          number: '03',
          title: 'Google Maps, Search Indexing & Turnkey Launch',
          timeframe: 'Days 11 to 14',
          description:
            'We connect your corporate domain, deploy SSL security, structure official Schema data for Google and AI search engines, and optimize your local Google Maps profile to activate your direct client acquisition channels.',
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
        'sai-seven': {
          title: 'SAI — San Andrés Island',
          category: 'Hospitality • Nature • Culture • Caribbean',
          tagline: 'Architecture for Direct Bookings with Zero OTA Fees',
          description:
            'Oceanfront resort and retreat in San Andrés. Digital presence engineered to capture high-value direct bookings without OTA commissions, mobile-first with sub-second loading.',
          tech: 'React 19 • Direct Booking Architecture • Sub-Second Edge',
        },
        'next-project': {
          title: 'Next Project',
          category: 'Available Spot for Your Brand',
          tagline: 'Reserved Space for Your Company',
          description:
            'This space is reserved for your company. We design and develop bespoke digital experiences engineered to command immediate authority and turn visitors into direct clients.',
          tech: 'Turnkey Launch • High-Impact Conversion',
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
      tag: 'FAQ',
      headerLine1: 'Clear answers.',
      headerLine2: 'Zero fine print.',
      tagline: 'Everything you need to know before starting your project',
      whatsappPrompt: "Can't find your answer? Reach out and I'll reply personally.",
      whatsappButton: "Let's talk",
      items: [
        {
          question: 'How do you get my business to rank on Google and Google Maps?',
          answer:
            'We optimize your Google Business Profile with precise categories, verified business data (NAP), and connect your website with structured Schema.org markup to maximize visibility in local searches in your target area and on AI response engines like ChatGPT and Gemini.',
        },
        {
          question: 'What is the pricing for a website and are there mandatory monthly fees?',
          answer:
            'We work with fixed, transparent proposals tailored to your project scope (landing page, corporate site, or custom integrations). Delivery is turnkey with 100% ownership and zero mandatory retainers. Cloud edge hosting and maintenance are completely optional.',
        },
        {
          question: 'What is the difference between a traditional website and a high-conversion sales page?',
          answer:
            'Traditional websites are often slow, cluttered, and purely informational. A website designed to sell loads in under 1 second on mobile devices, eliminates friction, and guides visitors directly toward commercial action: a WhatsApp message, a phone call, or a qualified inquiry.',
        },
        {
          question: 'How long does it take to have the website live and operating?',
          answer:
            'Standard delivery is 7 to 14 business days from our initial kick-off. Because we handle structural strategy and commercial copywriting upfront, we eliminate the multi-month delays typical of traditional agencies.',
        },
        {
          question: 'Do I have to write the text and content for the website myself?',
          answer:
            'No. Content writing is usually the biggest bottleneck for business owners. We research your direct competitors, structure your value proposition, and write the commercial copy. You only need an initial 30-minute conversation to share your goals and approve the direction.',
        },
        {
          question: 'What kind of AI solutions or integrations can you incorporate into my website?',
          answer:
            'From custom AI assistants trained on your service catalog to answer inquiries and qualify leads 24/7, to instant automations that route contact details directly into your WhatsApp, email, or CRM in real time so no sales opportunity is lost.',
        },
      ],
    },
    contact: {
      sectionTag: 'Project',
      titleLine1: 'Start a',
      titleLine2: 'Project.',
      description:
        'Tell us briefly about your project goals and we will reply with a tailored proposal today.',
      stepIndicator: (c, total) => `STEP ${c} OF ${total}`,
      step1Question: 'What type of project are you looking for?',
      step1Subtitle: 'Select the option that best fits your goals.',
      step2Question: 'What is your business sector?',
      step2Subtitle: 'Select the primary category of your business activity.',
      step3Question: 'Where should we send your proposal?',
      step3Subtitle: 'We will review your inquiry and contact you personally on the same business day.',
      whatsappQuestion: 'Have questions before starting?',
      whatsappAction: "Let's chat on WhatsApp.",
      whatsappButton: "Let's talk",
      prevButton: 'Previous',
      nextButton: 'Next',
      projectOptions: [
        {
          id: 'web-scratch',
          label: 'Website from Scratch',
          description: 'A complete, custom-built website tailored for your business.',
          icon: 'globe',
        },
        {
          id: 'landing',
          label: 'Landing Page',
          description: 'A single high-speed page focused on converting visitors into clients.',
          icon: 'rocket',
        },
        {
          id: 'seo',
          label: 'SEO Optimization',
          description: 'Boost your Google presence and attract more qualified clients.',
          icon: 'search',
        },
        {
          id: 'ai',
          label: 'AI Integration',
          description: 'Automate workflows and empower your business with artificial intelligence.',
          icon: 'cpu',
        },
        {
          id: 'redesign',
          label: 'Website Redesign',
          description: 'Revitalize your website with modern, performance-driven design.',
          icon: 'refresh',
        },
        {
          id: 'other',
          label: 'Other Service',
          description: 'Tell us what you need and we will find the ideal solution for you.',
          icon: 'compass',
        },
      ],
      sectorOptions: [
        {
          id: 'health',
          label: 'Healthcare & Clinics',
          description: 'Medical practices, clinics, dental care, and health specialists.',
          icon: 'heart',
        },
        {
          id: 'services',
          label: 'Professional Services',
          description: 'Consulting, legal, agencies, accounting, and advisory firms.',
          icon: 'briefcase',
        },
        {
          id: 'retail',
          label: 'Retail & Hospitality',
          description: 'Restaurants, physical stores, e-commerce, and food brands.',
          icon: 'store',
        },
        {
          id: 'b2b',
          label: 'B2B & Enterprise',
          description: 'Wholesale, distribution, logistics, and enterprise services.',
          icon: 'layers',
        },
        {
          id: 'property',
          label: 'Real Estate',
          description: 'Real estate agencies, property sales, and residential projects.',
          icon: 'home',
        },
        {
          id: 'other',
          label: 'Other Sector',
          description: 'Any other commercial business model or venture.',
          icon: 'star',
        },
      ],
      nameLabel: 'Your name or company',
      namePlaceholder: 'Alex Morgan',
      phoneLabel: 'WhatsApp or Phone',
      phonePlaceholder: '+1 (555) 000-0000',
      submitIdle: 'Send and Receive Proposal',
      submitSending: 'Sending...',
      validationError: 'Please provide your name and phone number.',
      networkError: 'Connection error while sending. Please contact us via WhatsApp.',
      successTitle: 'Information received successfully',
      successSubtitle: (name: string) =>
        `Thank you, ${name}. We have received your project details and will get in touch on the same business day.`,
      resetButton: 'Start over',
    },
    footer: {
      eyebrow: "LET'S TALK",
      headlineLine1: 'Ready to create ',
      headlineLine2: 'something memorable?',
      subtitle: "Tell us about your project. We're ready to help take your business to the next level.",
      email: 'hola@jpchacon.com',
      whatsapp: 'WhatsApp (+57 317 737 1301)',
      responseBadge: 'Response in under 24 hours',
      slogan: 'Real businesses. Real results.',
      brandDescription: 'Websites in Cali, engineered to rank on Google and scale your sales.',
      navTitle: 'Navigation',
      servicesTitle: 'Services',
      resourcesTitle: 'Resources',
      locationTitle: 'Location',
      locationName: 'Cali, Colombia',
      locationSubtitle: 'Working with clients worldwide.',
      remoteGlobal: 'Global Remote',
      copyright: '© 2026 JP Studios. All rights reserved.',
      craftedBy: 'Designed and crafted by Juan Pablo Chacón.',
      backToTop: 'Back to top',
      whatsappButton: (display: string) => `WhatsApp (${display}) ↗`,
      brandName: 'JP STUDIOS',
      location: 'Cali, Colombia',
      remoteWorldwide: 'Remote Worldwide',
      edition: '© 2026 Edition',
    },
  },
  es: {
    nav: {
      work: 'Trabajo',
      process: 'Proceso',
      services: 'Servicios',
      faq: 'Preguntas',
      contact: 'Contacto',
      talk: 'Cotizar Proyecto',
      studio: 'Estudio Independiente',
      capabilities: 'Servicios',
      works: 'Trabajo',
      chat: 'Cotizar Proyecto',
      location: 'Cali, Colombia',
      timeLabel: 'Hora local en Cali. Clic para copiar',
      copied: 'Copiado ✓',
      availableWorldwide: 'Disponible Globalmente',
      chatOnWhatsApp: 'Chat en WhatsApp',
      email: 'Correo',
      switchLangTooltip: 'Switch to English',
    },
    hero: {
      headlineLine1: 'Páginas web en Cali, ',
      headlineLine2: 'para liderar Google ',
      headlineLine3: 'y multiplicar tus ventas.',
      subtitle: 'Diseño y desarrollo web en Cali para empresas que necesitan dejar de perder clientes en Google y empezar a cerrar ventas directas por WhatsApp.',
      signature: 'JP Studios by Juan Pablo Chacón',
      disciplineLine1: 'Páginas Web Cali',
      disciplineAnd: '&',
      disciplineLine2: 'Diseño para Vender.',
      location: 'Cali, Colombia',
      studioType: 'Estudio Independiente',
      role: 'Ingeniería Web & Posicionamiento Local',
    },
    intro: {
      statement:
        'En JP Studios, estudio independiente dirigido por Juan Pablo Chacón, diseñamos y programamos páginas web en Cali para empresas que no pueden permitirse pasar desapercibidas. Sitios ultrarrápidos, optimizados para dominar el ecosistema de Google y los chats de IA. Estructurados para convertir búsquedas locales en clientes reales por tus medios de contacto.',
      startOnWhatsApp: 'Cotizar por WhatsApp',
      direct: 'Directo ↗',
    },
    ticker: {
      track1: [
        { text: 'JP Studios', filled: true },
        { text: 'Páginas Web Cali', filled: false },
        { text: 'Diseño para Vender', filled: true },
        { text: 'Google Maps', filled: false },
        { text: 'React 19 & TypeScript', filled: true },
        { text: 'Carga Sub-Segundo', filled: false },
        { text: 'Cero Plantillas Lentas', filled: true },
        { text: 'Lanzamiento Llave en Mano', filled: false },
      ],
      track2: [
        { text: 'JP Studios Cali', filled: true },
        { text: 'Retorno de Inversión', filled: false },
        { text: 'Interfaces para Facturar', filled: true },
        { text: 'Ejecución Estructurada', filled: false },
        { text: '99.9% de Disponibilidad', filled: true },
        { text: 'Cualificación de Clientes', filled: false },
        { text: 'Arquitectura a Medida', filled: true },
        { text: 'Evolución Continua', filled: false },
      ],
    },
    services: {
      tag: 'Servicios',
      headerLine1: 'Ingeniería web para vender, ',
      headerLine2: 'no solo para adornar.',
      seoDescription:
        'Desarrollo web en Cali, páginas de alta velocidad y presencia en Google. Diseñamos arquitectura en código limpio optimizada para captar clientes locales y conectar directamente por WhatsApp y llamadas.',
      items: [
        {
          id: 'performance-web',
          number: '01',
          title: 'Diseño y Desarrollo Web de Alto Rendimiento',
          subtitle: 'Desarrollo de sitios web con carga en menos de 0.5s en celulares, sin plugins lentos de WordPress.',
          description:
            'Arquitectura web a medida construida por JP Studios en React 19, TypeScript y Tailwind moderno. Carga instantánea en menos de 0.5s en celulares, sin plugins pesados ni plantillas lentas de WordPress.',
        },
        {
          id: 'seo-local',
          number: '02',
          title: 'Posicionamiento en Google y Google Maps',
          subtitle: 'Optimizamos tu presencia digital para dominar las búsquedas locales en Cali o la zona específica de tu negocio, y recomendaciones de IA.',
          description:
            'Estructuración de datos con Schema.org JSON-LD oficial, optimización de ficha en Google Maps y bloques de respuesta directa para que Google y motores de IA (ChatGPT, Gemini) recomienden tu empresa.',
        },
        {
          id: 'conversion-pages',
          number: '03',
          title: 'Diseño de Páginas Web para Vender',
          subtitle: 'Landing pages de alta conversión estructuradas para transformar visitas en chats de WhatsApp y llamadas.',
          description:
            'Copywriting persuasivo y diseño enfocado en cualificar prospectos y guiarlos directamente hacia la acción comercial: escribir a tu WhatsApp, llamar directamente o agendar una cita.',
        },
        {
          id: 'support',
          number: '04',
          title: 'Hosting Cloud, Dominio y Mantenimiento',
          subtitle: 'Infraestructura ultrarrápida con 99.9% de estabilidad, seguridad SSL y soporte técnico directo sin ataduras.',
          description:
            'Alojamiento global de alta velocidad con 99.9% de estabilidad, certificado SSL, copias de seguridad automáticas y soporte técnico opcional sin mensualidades forzadas ni ataduras.',
        },
      ],
    },
    process: {
      tag: 'Proceso',
      headerLine1: 'Tu web lista en 14 días. ',
      headerLine2: 'Sin enredos técnicos.',
      seoDescription:
        'Creamos sitios web y desarrollos a medida en Cali bajo un flujo estructurado de 14 días. De la estrategia comercial a tu página web en producción: rápida, optimizada para Google y lista para facturar.',
      tagline: 'La metodología de JP Studios: De la estrategia comercial a tu web en producción y lista para operar en menos de dos semanas',
      steps: [
        {
          number: '01',
          title: 'Diagnóstico Estratégico y Propuesta',
          timeframe: '48 Horas',
          description:
            'Analizamos tu competencia directa en Google y la zona comercial donde operan tus clientes. Investigamos qué buscan exactamente tus compradores para estructurar los textos de venta sin que tengas que redactar nada desde cero.',
          deliverable: 'Arquitectura comercial y propuesta de contenidos',
        },
        {
          number: '02',
          title: 'Maquetación Interactiva y Pruebas en Móvil',
          timeframe: 'Días 3 al 10',
          description:
            'Construimos tu plataforma web a medida en React 19 con carga instantánea en menos de 0.5 segundos en celulares. Pruebas la experiencia completa y los botones de contacto directo en tu propio móvil antes del lanzamiento.',
          deliverable: 'Enlace privado de pruebas en vivo en tu celular',
        },
        {
          number: '03',
          title: 'Puesta en Marcha y Entrega Llave en Mano',
          timeframe: 'Días 11 al 14',
          description:
            'Conectamos tu dominio corporativo, activamos certificado SSL, estructuramos los datos Schema para Google y motores de IA, y optimizamos tu ficha de Google Maps en tu zona comercial para activar tus canales de captación y contacto directo.',
          deliverable: 'Web en Producción & Propiedad Total Transferida',
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
        'sai-seven': {
          title: 'SAI — San Andrés Island',
          category: 'Hospedaje • Naturaleza • Cultura • Caribe',
          tagline: 'Arquitectura para Reservas Directas sin Comisiones',
          description:
            'Resort y descanso frente al mar en San Andrés. Arquitectura digital diseñada para captar reservas directas de alto valor sin intermediarios, optimizada para móviles y con carga instantánea.',
          tech: 'React 19 • Arquitectura de Reserva Directa • Carga Sub-Segundo',
        },
        'next-project': {
          title: 'Próximo Proyecto',
          category: 'Espacio disponible para tu empresa',
          tagline: 'Espacio Reservado para Tu Marca',
          description:
            'Este espacio está reservado para tu marca o empresa. Diseñamos y desarrollamos una experiencia digital a medida pensada para transmitir autoridad inmediata y convertir visitas en clientes directos.',
          tech: 'Desarrollo Llave en Mano • Alta Conversión',
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
      tag: 'Preguntas Frecuentes',
      headerLine1: 'Respuestas claras. ',
      headerLine2: 'Sin letra pequeña.',
      tagline: 'Todo lo que necesitas saber antes de iniciar tu proyecto',
      whatsappPrompt: '¿No encuentras tu respuesta? Escríbeme y te respondo personalmente.',
      whatsappButton: 'Hablemos',
      items: [
        {
          question: '¿Cómo hago para que mi negocio aparezca en Google y Google Maps?',
          answer:
            'Optimizamos tu perfil de Google Business Profile con categorías comerciales precisas, datos de contacto alineados (NAP) y vinculamos tu página web con datos estructurados Schema.org para maximizar la visibilidad en las búsquedas locales de tu zona y en motores de búsqueda de IA como ChatGPT y Gemini.',
        },
        {
          question: '¿Cuál es el precio de una página web y si hay pagos mensuales obligatorios?',
          answer:
            'En JP Studios trabajamos con presupuestos cerrados y transparentes según el alcance de tu proyecto (landing page, sitio web corporativo o integraciones a medida). La entrega es llave en mano con propiedad 100% tuya y sin mensualidades forzadas. El servicio de hosting cloud de alta velocidad y mantenimiento es totalmente opcional.',
        },
        {
          question: '¿Cuál es la diferencia entre una web tradicional y una página web para vender?',
          answer:
            'Una web tradicional suele ser pesada, lenta y puramente informativa. Una página web diseñada para vender carga en menos de 1 segundo en móviles, elimina distracciones y guía al visitante directamente hacia lo que genera facturación: un mensaje directo a WhatsApp, una llamada o un formulario calificado.',
        },
        {
          question: '¿Cuánto tiempo toma tener la página web lista para operar?',
          answer:
            'El plazo habitual es de 7 a 14 días hábiles desde la sesión de diagnóstico inicial. Al contar con un proceso estructurado y encargarnos nosotros de la arquitectura comercial, eliminamos las demoras de meses típicas de las agencias tradicionales.',
        },
        {
          question: '¿Tengo que escribir yo los textos y el contenido de la página?',
          answer:
            'No. La redacción suele ser el mayor cuello de botella para los dueños de negocio. En JP Studios nos encargamos de investigar a tus competidores directos, estructurar tu propuesta de valor y redactar los textos comerciales. Tú solo necesitas una sesión inicial de 30 minutos para contarnos sobre tus servicios y validar el enfoque.',
        },
        {
          question: '¿Qué tipo de soluciones o integraciones de Inteligencia Artificial pueden incorporar?',
          answer:
            'Desde asistentes inteligentes entrenados con la información de tus servicios para responder preguntas y calificar prospectos 24/7, hasta automatizaciones que envían los datos de contacto directamente a tu WhatsApp, correo o CRM en tiempo real para no perder oportunidades de venta.',
        },
      ],
    },
    contact: {
      sectionTag: 'Proyecto',
      titleLine1: 'Iniciar un ',
      titleLine2: 'Proyecto.',
      description:
        'Cuéntanos brevemente sobre tu proyecto y te responderemos con una propuesta personalizada hoy mismo.',
      stepIndicator: (c, total) => `PASO ${c} DE ${total}`,
      step1Question: '¿Qué tipo de proyecto buscas?',
      step1Subtitle: 'Selecciona la opción que mejor se ajuste a tus objetivos.',
      step2Question: '¿Cuál es el sector de tu negocio?',
      step2Subtitle: 'Selecciona la categoría principal de tu actividad comercial.',
      step3Question: '¿A dónde te enviamos la propuesta?',
      step3Subtitle: 'Revisaremos tu consulta y te contactaremos personalmente el mismo día hábil.',
      whatsappQuestion: '¿Tienes dudas antes de empezar?',
      whatsappAction: 'Hablemos por WhatsApp.',
      whatsappButton: 'Hablemos',
      prevButton: 'Anterior',
      nextButton: 'Siguiente',
      projectOptions: [
        {
          id: 'web-scratch',
          label: 'Página Web desde Cero',
          description: 'Un sitio web completo y personalizado para tu negocio.',
          icon: 'globe',
        },
        {
          id: 'landing',
          label: 'Landing Page',
          description: 'Una página enfocada en convertir visitas en clientes.',
          icon: 'rocket',
        },
        {
          id: 'seo',
          label: 'Optimización SEO',
          description: 'Mejora tu visibilidad en Google y atrae más clientes.',
          icon: 'search',
        },
        {
          id: 'ai',
          label: 'Integración de IA',
          description: 'Automatiza procesos y potencia tu negocio con inteligencia artificial.',
          icon: 'cpu',
        },
        {
          id: 'redesign',
          label: 'Rediseño Web',
          description: 'Dale una nueva vida a tu sitio con un diseño moderno y enfocado en resultados.',
          icon: 'refresh',
        },
        {
          id: 'other',
          label: 'Otro Servicio',
          description: 'Cuéntanos qué necesitas y encontramos la mejor solución para ti.',
          icon: 'compass',
        },
      ],
      sectorOptions: [
        {
          id: 'health',
          label: 'Salud o Clínica',
          description: 'Consultorios médicos, clínicas y especialistas de salud.',
          icon: 'heart',
        },
        {
          id: 'services',
          label: 'Servicios Profesionales',
          description: 'Consultoría, agencias, asesoría y firmas profesionales.',
          icon: 'briefcase',
        },
        {
          id: 'retail',
          label: 'Comercio o Comida',
          description: 'Restaurantes, tiendas físicas y marcas de consumo.',
          icon: 'store',
        },
        {
          id: 'b2b',
          label: 'Empresa o B2B',
          description: 'Distribuidoras, logística e industria corporativa.',
          icon: 'layers',
        },
        {
          id: 'property',
          label: 'Inmobiliaria',
          description: 'Venta, renta de inmuebles y proyectos residenciales.',
          icon: 'home',
        },
        {
          id: 'other',
          label: 'Otro Sector',
          description: 'Cualquier otro tipo de modelo comercial o negocio.',
          icon: 'star',
        },
      ],
      nameLabel: 'Tu nombre o empresa',
      namePlaceholder: 'Carlos Mendoza',
      phoneLabel: 'WhatsApp o Celular',
      phonePlaceholder: '+57 300 000 0000',
      submitIdle: 'Enviar y Recibir Propuesta',
      submitSending: 'Enviando...',
      validationError: 'Por favor ingresa tu nombre y un número de contacto.',
      networkError: 'Hubo un problema de conexión al enviar. Por favor contáctame por WhatsApp.',
      successTitle: 'Información recibida con éxito',
      successSubtitle: (name: string) =>
        `Gracias, ${name}. Hemos recibido los detalles de tu proyecto y nos pondremos en contacto contigo hoy mismo.`,
      resetButton: 'Iniciar de nuevo',
    },
    footer: {
      eyebrow: 'HABLEMOS',
      headlineLine1: '¿Listo para crear ',
      headlineLine2: 'algo memorable?',
      subtitle: 'Cuéntanos tu proyecto. Estamos listos para ayudarte a llevar tu negocio al siguiente nivel.',
      email: 'hola@jpchacon.com',
      whatsapp: 'WhatsApp (+57 317 737 1301)',
      responseBadge: 'Respuesta en menos de 24 horas',
      slogan: 'Negocios reales. Resultados reales.',
      brandDescription: 'Páginas web en Cali para liderar Google y multiplicar tus ventas.',
      navTitle: 'Navegación',
      servicesTitle: 'Servicios',
      resourcesTitle: 'Recursos',
      locationTitle: 'Ubicación',
      locationName: 'Cali, Colombia',
      locationSubtitle: 'Trabajo con clientes en todo el mundo.',
      remoteGlobal: 'Remoto Global',
      copyright: '© 2026 JP Studios. Todos los derechos reservados.',
      craftedBy: 'Diseñado y desarrollado por Juan Pablo Chacón.',
      backToTop: 'Volver arriba',
      whatsappButton: (display: string) => `WhatsApp (${display}) ↗`,
      brandName: 'JP STUDIOS',
      location: 'Cali, Colombia',
      remoteWorldwide: 'Remoto Global',
      edition: 'Edición © 2026',
    },
  },
};
