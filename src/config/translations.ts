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
    step1Question: string;
    step2Question: string;
    step3Question: string;
    step3Subtitle: string;
    prevButton: string;
    nextButton: string;
    projectOptions: Array<{ id: string; label: string; icon: string }>;
    sectorOptions: Array<{ id: string; label: string; icon: string }>;
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
      headerLine1: 'Engineered for revenue,',
      headerLine2: 'not just decoration.',
      items: [
        {
          id: 'performance-web',
          number: '001',
          title: 'High-Performance Web Development',
          subtitle: 'Sub-second speed that drastically minimizes visitor drop-off.',
          description:
            'Bespoke web architecture engineered by JP Studios with React 19, TypeScript, and modern Tailwind. Clean, ultra-fast mobile performance that loads in under 0.5s without slow plugins or template bloat.',
        },
        {
          id: 'seo-local',
          number: '002',
          title: 'Local SEO & Google Maps Presence',
          subtitle: 'Rank where your potential clients actually search on Google & Maps.',
          description:
            'Structured Schema.org JSON-LD data graphs, Google Business Profile optimization, and direct Answer Blocks so your business gets recommended on Google Search, Maps, and AI search engines.',
        },
        {
          id: 'conversion-pages',
          number: '003',
          title: 'High-Conversion Landing Pages',
          subtitle: 'Frictionless pathways from click to client.',
          description:
            'Persuasive copy and intentional layout hierarchy designed to qualify prospects and guide them directly to what drives sales: direct WhatsApp messaging, calls, or online appointment booking.',
        },
        {
          id: 'support',
          number: '004',
          title: 'Cloud Hosting & Optional Support',
          subtitle: 'High-speed edge hosting and technical support whenever you need it.',
          description:
            'Enterprise edge hosting with 99.9% uptime, SSL security, automated backups, and optional support with zero forced monthly retainers or technical lock-in.',
        },
      ],
    },
    process: {
      headerLine1: 'Live in 14 days.',
      headerLine2: 'Zero technical friction.',
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
      headerLine1: 'Clear answers.',
      headerLine2: 'Zero fine print.',
      tagline: 'Everything you need to know before starting your project',
      items: [
        {
          question: 'How do you get my business to rank on Google and Google Maps?',
          answer:
            'We optimize your Google Business Profile with precise categories, verified business data (NAP), and connect your website with structured Schema.org markup to maximize visibility in local searches in your target area and on AI response engines like ChatGPT and Gemini.',
        },
        {
          question: 'How are project fees structured and are there mandatory monthly charges?',
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
      sectionTag: 'Project Estimator',
      title: 'Start a Project',
      description:
        'Tell us about your project goals and we will get back to you with a tailored proposal today.',
      step1Question: 'What type of project do you need?',
      step2Question: 'What is your business sector?',
      step3Question: 'Where should we send your proposal?',
      step3Subtitle: 'We will review your inquiry and contact you personally on the same business day.',
      prevButton: 'Previous',
      nextButton: 'Next',
      projectOptions: [
        { id: 'web-scratch', label: 'Website from Scratch', icon: 'globe' },
        { id: 'landing', label: 'Landing Page', icon: 'rocket' },
        { id: 'seo', label: 'SEO Optimization', icon: 'search' },
        { id: 'ai', label: 'AI Integration', icon: 'cpu' },
        { id: 'redesign', label: 'Website Redesign', icon: 'refresh' },
        { id: 'other', label: 'Other Service', icon: 'compass' },
      ],
      sectorOptions: [
        { id: 'health', label: 'Healthcare', icon: 'heart' },
        { id: 'services', label: 'Services', icon: 'briefcase' },
        { id: 'retail', label: 'Retail & Food', icon: 'store' },
        { id: 'b2b', label: 'B2B Enterprise', icon: 'layers' },
        { id: 'property', label: 'Real Estate', icon: 'home' },
        { id: 'other', label: 'Other Sector', icon: 'star' },
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
      work: 'Trabajo',
      process: 'Proceso',
      services: 'Servicios',
      faq: 'Preguntas',
      contact: 'Contacto',
      talk: 'Hablemos',
      studio: 'Estudio Independiente',
      capabilities: 'Servicios',
      works: 'Trabajo',
      chat: 'Hablemos',
      location: 'Cali, Colombia',
      timeLabel: 'Hora local en Cali. Clic para copiar',
      copied: 'Copiado ✓',
      availableWorldwide: 'Disponible Globalmente',
      chatOnWhatsApp: 'Chat en WhatsApp',
      email: 'Correo',
      switchLangTooltip: 'Switch to English',
    },
    hero: {
      headlineLine1: 'Páginas web en Cali,',
      headlineLine2: 'para liderar Google',
      headlineLine3: 'y multiplicar tus ventas.',
      subtitle: 'Diseño y desarrollo web basado en Cali para sacar a tu página de los sótanos de Google.',
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
      startOnWhatsApp: 'Iniciar en WhatsApp',
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
      headerLine1: 'Ingeniería web para facturar,',
      headerLine2: 'no solo para adornar.',
      items: [
        {
          id: 'performance-web',
          number: '001',
          title: 'Desarrollo Web de Alto Rendimiento',
          subtitle: 'Velocidad sub-segundo que minimiza el abandono de visitas.',
          description:
            'Arquitectura web a medida construida por JP Studios en React 19, TypeScript y Tailwind moderno. Carga instantánea en menos de 0.5s en celulares, sin plugins pesados ni plantillas lentas de WordPress.',
        },
        {
          id: 'seo-local',
          number: '002',
          title: 'Posicionamiento Web y Google Maps',
          subtitle: 'Aparece exactamente donde buscan tus clientes en Google y Google Maps.',
          description:
            'Estructuración de datos con Schema.org JSON-LD oficial, optimización de ficha en Google Maps y bloques de respuesta directa para que Google y motores de IA (ChatGPT, Gemini) recomienden tu empresa.',
        },
        {
          id: 'conversion-pages',
          number: '003',
          title: 'Páginas Web para Vender (Landing Pages)',
          subtitle: 'Rutas directas y sin fricción de la visita al cliente.',
          description:
            'Copywriting persuasivo y diseño enfocado en cualificar prospectos y guiarlos directamente hacia la acción comercial: escribir a tu WhatsApp, llamar directamente o agendar una cita.',
        },
        {
          id: 'support',
          number: '004',
          title: 'Hosting Cloud y Soporte Opcional',
          subtitle: 'Alojamiento de alta velocidad y soporte técnico cuando lo necesites.',
          description:
            'Alojamiento global de alta velocidad con 99.9% de estabilidad, certificado SSL, copias de seguridad automáticas y soporte técnico opcional sin mensualidades forzadas ni ataduras.',
        },
      ],
    },
    process: {
      headerLine1: 'Tu web lista en 14 días.',
      headerLine2: 'Sin enredos técnicos.',
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
      headerLine1: 'Respuestas claras.',
      headerLine2: 'Sin letra pequeña.',
      tagline: 'Todo lo que necesitas saber antes de iniciar tu proyecto',
      items: [
        {
          question: '¿Cómo hago para que mi negocio aparezca en Google y Google Maps?',
          answer:
            'Optimizamos tu perfil de Google Business Profile con categorías comerciales precisas, datos de contacto alineados (NAP) y vinculamos tu página web con datos estructurados Schema.org para maximizar la visibilidad en las búsquedas locales de tu zona y en motores de búsqueda de IA como ChatGPT y Gemini.',
        },
        {
          question: '¿Cómo se definen los costos y si hay pagos mensuales obligatorios?',
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
      sectionTag: 'Cotizador Rápido',
      title: 'Iniciar un Proyecto',
      description:
        'Cuéntanos brevemente sobre tu proyecto y te responderemos con una propuesta personalizada hoy mismo.',
      step1Question: '¿Qué tipo de proyecto buscas?',
      step2Question: '¿Cuál es el sector de tu negocio?',
      step3Question: '¿A dónde te enviamos la propuesta?',
      step3Subtitle: 'Revisaremos tu consulta y te contactaremos personalmente el mismo día hábil.',
      prevButton: 'Anterior',
      nextButton: 'Siguiente',
      projectOptions: [
        { id: 'web-scratch', label: 'Página Web desde Cero', icon: 'globe' },
        { id: 'landing', label: 'Landing Page', icon: 'rocket' },
        { id: 'seo', label: 'Optimización SEO', icon: 'search' },
        { id: 'ai', label: 'Integración de IA', icon: 'cpu' },
        { id: 'redesign', label: 'Rediseño Web', icon: 'refresh' },
        { id: 'other', label: 'Otro Servicio', icon: 'compass' },
      ],
      sectorOptions: [
        { id: 'health', label: 'Salud o Clínica', icon: 'heart' },
        { id: 'services', label: 'Servicios', icon: 'briefcase' },
        { id: 'retail', label: 'Comercio / Comida', icon: 'store' },
        { id: 'b2b', label: 'Empresa / B2B', icon: 'layers' },
        { id: 'property', label: 'Inmobiliaria', icon: 'home' },
        { id: 'other', label: 'Otro Sector', icon: 'star' },
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
      headlineLine1: '¿Listo para crear',
      headlineLine2: 'algo memorable?',
      whatsappButton: (display: string) => `WhatsApp (${display}) ↗`,
      brandName: 'JP STUDIOS',
      craftedBy: 'JP Studios — Diseñado y desarrollado por Juan Pablo Chacón.',
      location: 'Cali, Colombia',
      remoteWorldwide: 'Remoto Global',
      edition: 'Edición © 2026',
      backToTop: 'Volver arriba',
    },
  },
};
