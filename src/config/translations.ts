export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    work: string;
    process: string;
    services: string;
    pricing: string;
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
  pricing: {
    tag: string;
    headerLine1: string;
    headerLine2: string;
    tagline: string;
    currencyNote: string;
    tiers: Array<{
      id: string;
      number: string;
      name: string;
      pricePrefix: string;
      priceAmount: string;
      priceCurrency: string;
      description: string;
      features: string[];
      actionText: string;
      whatsappSubject: string;
    }>;
    guaranteeTitle: string;
    guaranteeSubtitle: string;
    calculatorPrompt: string;
    calculatorButton: string;
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
      pricing: 'Pricing',
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
      headlineLine1: 'Bespoke web design',
      headlineLine2: 'in Cali to rank on',
      headlineLine3: 'Google and scale sales.',
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
    pricing: {
      tag: 'Investment & Pricing',
      headerLine1: 'How much does a website cost? ',
      headerLine2: 'Transparent pricing with zero hidden fees.',
      tagline: 'Realistic investment ranges for companies in Colombia. No surprise charges, no forced maintenance retainers.',
      currencyNote: '* All values in Colombian Pesos (COP). Turnkey one-time development fee with 100% client ownership of code and domain.',
      tiers: [
        {
          id: 'landing-page',
          number: '01',
          name: 'Landing Page para Vender',
          pricePrefix: 'From',
          priceAmount: '$1.500.000',
          priceCurrency: 'COP',
          description: 'Engineered for businesses requiring an immediate high-impact digital presence that turns visitors into clients.',
          features: [
            'High-converting landing page',
            'Mobile-first responsive design',
            'Persuasive sales copywriting',
            'Direct WhatsApp routing triggers',
          ],
          actionText: 'View details',
          whatsappSubject: 'Hola Juan Pablo, me interesa cotizar una Landing Page para Vender (Desde $1.5M COP).',
        },
        {
          id: 'corporate-seo',
          number: '02',
          name: 'Corporate Website & Google Ranking',
          pricePrefix: 'From',
          priceAmount: '$2.500.000',
          priceCurrency: 'COP',
          description: 'The complete solution for companies aiming to lead their sector in Cali, rank on Google, and project authority.',
          features: [
            'Multi-section React 19 architecture',
            'Local Cali SEO optimization',
            'Verified Google Business Profile setup',
            'Structured data (Schema.org JSON-LD)',
          ],
          actionText: 'View details',
          whatsappSubject: 'Hola Juan Pablo, me interesa cotizar un Sitio Corporativo con Posicionamiento en Google (Desde $2.5M COP).',
        },
        {
          id: 'custom-platform',
          number: '03',
          name: 'Custom Platform & Automation',
          pricePrefix: 'From',
          priceAmount: '$4.500.000',
          priceCurrency: 'COP',
          description: 'For businesses with custom workflows, large catalogs, or advanced CRM & WhatsApp API integrations.',
          features: [
            'Bespoke web software engineering',
            'Integrations (CRM, WhatsApp, APIs)',
            'Dynamic database & content management',
            'Interactive real-time calculators & funnels',
          ],
          actionText: 'View details',
          whatsappSubject: 'Hola Juan Pablo, me interesa cotizar una Plataforma a Medida con Automatizaciones (Desde $4.5M COP).',
        },
      ],
      guaranteeTitle: 'Why we charge a single turnkey fee with zero forced retainers',
      guaranteeSubtitle: 'Traditional agencies trap you with months of delays and mandatory retainers of $200.000 – $300.000 COP/month for fragile WordPress plugin updates. At JP Studios, we engineer in clean code (React 19) that doesn\'t break, doesn\'t get hacked, and belongs 100% to you.',
      calculatorPrompt: 'Need an exact estimate tailored to your requirements?',
      calculatorButton: 'Estimate in 60 seconds ↓',
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
      pricing: 'Precios',
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
      headlineLine1: 'Diseño de páginas web',
      headlineLine2: 'en Cali para liderar en',
      headlineLine3: 'Google y vender más.',
      subtitle:
        'Desarrollo web a medida y landing pages de alta conversión en Cali. Sitios ultrarrápidos (carga en 0.5s en celulares) diseñados para empresas que necesitan aparecer en Google Maps y convertir visitas en chats directos de WhatsApp.',
      signature: 'JP Studios by Juan Pablo Chacón',
      disciplineLine1: 'Diseño Web Cali',
      disciplineAnd: '&',
      disciplineLine2: 'Páginas para Negocios',
      location: 'Cali, Colombia',
      studioType: 'Estudio Independiente',
      role: 'Ingeniería Web & Posicionamiento Local',
    },
    intro: {
      statement:
        'En JP Studios, liderado por Juan Pablo Chacón, desarrollamos páginas web en Cali para empresas y negocios que necesitan destacar y facturar. Construimos sitios web a medida en código ultrarrápido (React 19), estructurados para liderar en Google y motores de IA, y optimizados para transformar visitas locales en ventas directas por WhatsApp.',
      startOnWhatsApp: 'Cotizar por WhatsApp',
      direct: 'Directo ↗',
    },
    ticker: {
      track1: [
        { text: 'JP Studios', filled: true },
        { text: 'Diseño Web Cali', filled: false },
        { text: 'Páginas Web para Empresas', filled: true },
        { text: 'Google Maps Cali', filled: false },
        { text: 'React 19 & TypeScript', filled: true },
        { text: 'Carga Sub-Segundo', filled: false },
        { text: 'Cero Plantillas Lentas', filled: true },
        { text: 'Lanzamiento Llave en Mano', filled: false },
      ],
      track2: [
        { text: 'JP Studios Cali', filled: true },
        { text: 'Páginas para Negocios', filled: false },
        { text: 'Landing Pages para Vender', filled: true },
        { text: 'Ejecución Estructurada', filled: false },
        { text: '99.9% de Disponibilidad', filled: true },
        { text: 'Conversión a WhatsApp', filled: false },
        { text: 'Arquitectura a Medida', filled: true },
        { text: 'Posicionamiento Google', filled: false },
      ],
    },
    services: {
      tag: 'Servicios',
      headerLine1: 'Páginas web para empresas, ',
      headerLine2: 'diseñadas para vender.',
      seoDescription:
        'Diseño y desarrollo web en Cali con arquitectura moderna en código limpio. Páginas corporativas y landing pages de alta velocidad para captar clientes en Google y conectarlos directamente a tu WhatsApp.',
      items: [
        {
          id: 'performance-web',
          number: '01',
          title: 'Diseño de Páginas Web en Cali',
          subtitle: 'Sitios web corporativos a medida con carga en 0.5s en celulares, sin plantillas lentas de WordPress.',
          description:
            'Desarrollo web a medida construido por JP Studios en React 19, TypeScript y Tailwind moderno. Páginas web rápidas y seguras para empresas que buscan diferenciarse de la competencia local.',
        },
        {
          id: 'seo-local',
          number: '02',
          title: 'Posicionamiento en Google y Google Maps',
          subtitle: 'SEO local en Cali para que tu negocio aparezca cuando busquen tus servicios en Google y motores de IA.',
          description:
            'Estructuración de datos con Schema.org JSON-LD oficial, optimización de ficha en Google Maps y bloques AEO para que Google, ChatGPT y Gemini recomienden tu empresa.',
        },
        {
          id: 'conversion-pages',
          number: '03',
          title: 'Desarrollo de Landing Pages para Vender',
          subtitle: 'Páginas web para negocios enfocadas en convertir visitas en llamadas y chats directos de WhatsApp.',
          description:
            'Copywriting persuasivo y arquitectura comercial sin distracciones. Diseñadas para cualificar prospectos y guiarlos directamente hacia la acción comercial: escribir a tu WhatsApp o llamar.',
        },
        {
          id: 'support',
          number: '04',
          title: 'Hosting Cloud, Dominio y Cero Ataduras',
          subtitle: 'Entrega llave en mano con 99.9% de estabilidad, certificado SSL y propiedad 100% tuya sin mensualidades.',
          description:
            'Alojamiento global de alta velocidad, certificado SSL y entrega llave en mano con código propio. Sin mensualidades forzadas de mantenimiento ni letras pequeñas.',
        },
      ],
    },
    pricing: {
      tag: 'Inversión Transparente',
      headerLine1: '¿Cuánto cuesta una página web? ',
      headerLine2: 'Precios claros, sin letra pequeña.',
      tagline: 'Rangos de inversión reales para empresas y negocios en Colombia. Sin cobros sorpresa ni mensualidades forzadas.',
      currencyNote: '* Todos los valores en Pesos Colombianos (COP). Pago único de desarrollo llave en mano con propiedad 100% tuya del código y dominio.',
      tiers: [
        {
          id: 'landing-page',
          number: '01',
          name: 'Landing Page para Vender',
          pricePrefix: 'Desde',
          priceAmount: '$1.500.000',
          priceCurrency: 'COP',
          description: 'Diseñada para empresas que necesitan una presencia digital inmediata de alto impacto para convertir visitas en clientes.',
          features: [
            'Página de alta conversión',
            'Optimizada para móviles',
            'Redacción persuasiva',
            'Botones directos a WhatsApp',
          ],
          actionText: 'Ver detalles',
          whatsappSubject: 'Hola Juan Pablo, me interesa cotizar una Landing Page para Vender (Desde $1.5M COP).',
        },
        {
          id: 'corporate-seo',
          number: '02',
          name: 'Sitio Corporativo & Posicionamiento Google',
          pricePrefix: 'Desde',
          priceAmount: '$2.500.000',
          priceCurrency: 'COP',
          description: 'La solución completa para empresas que buscan liderar su sector en Cali, posicionarse en Google y proyectar autoridad comercial.',
          features: [
            'Sitio web multi-sección en React 19',
            'SEO local para Cali',
            'Ficha de Google Maps optimizada',
            'Datos estructurados (Schema.org)',
          ],
          actionText: 'Ver detalles',
          whatsappSubject: 'Hola Juan Pablo, me interesa cotizar un Sitio Corporativo con Posicionamiento en Google (Desde $2.5M COP).',
        },
        {
          id: 'custom-platform',
          number: '03',
          name: 'Plataforma a Medida & Automatizaciones',
          pricePrefix: 'Desde',
          priceAmount: '$4.500.000',
          priceCurrency: 'COP',
          description: 'Para negocios con procesos comerciales a medida, catálogos extensos o integraciones avanzadas con CRM, WhatsApp API y más.',
          features: [
            'Desarrollo a medida',
            'Integraciones (CRM, WhatsApp, APIs)',
            'Base de datos o gestor de contenidos',
            'Cotizadores y formularios dinámicos',
          ],
          actionText: 'Ver detalles',
          whatsappSubject: 'Hola Juan Pablo, me interesa cotizar una Plataforma a Medida con Automatizaciones (Desde $4.5M COP).',
        },
      ],
      guaranteeTitle: 'Por qué cobramos un valor único llave en mano',
      guaranteeSubtitle: 'En agencias tradicionales pagas demoras de meses y te atan a contratos mensuales de $200.000 o $300.000 COP por "mantenimiento" de plantillas lentas de WordPress. En JP Studios programamos en código limpio (React 19): tu web no se cae, no se desactualiza y es 100% de tu propiedad desde el día uno.',
      calculatorPrompt: '¿Quieres una cotización exacta para los requerimientos de tu negocio?',
      calculatorButton: 'Calcular en 60 segundos ↓',
    },
    process: {
      tag: 'Proceso',
      headerLine1: 'Tu página web lista en 14 días. ',
      headerLine2: 'Sin demoras ni intermediarios.',
      seoDescription:
        'Creamos páginas web para empresas en Cali bajo un flujo ágil de 14 días. De la estrategia comercial y redacción de textos a tu web en producción: rápida, optimizada para Google y lista para facturar.',
      tagline: 'La metodología de JP Studios: De la estrategia comercial a tu web en producción y lista para operar en menos de dos semanas',
      steps: [
        {
          number: '01',
          title: 'Diagnóstico Comercial y Redacción',
          timeframe: '48 Horas',
          description:
            'Analizamos qué buscan tus clientes en Google en Cali y redactamos los textos de venta de tu página web. Tú no tienes que redactar nada desde cero.',
          deliverable: 'Estructura comercial y propuesta de contenidos',
        },
        {
          number: '02',
          title: 'Desarrollo Web a Medida y Pruebas en Móvil',
          timeframe: 'Días 3 al 10',
          description:
            'Programamos tu web a medida en React 19 con carga sub-segundo en celulares. Pruebas la navegación y los botones de contacto directo en tu propio móvil antes del lanzamiento.',
          deliverable: 'Enlace privado de pruebas en vivo en tu celular',
        },
        {
          number: '03',
          title: 'Lanzamiento, SEO Local y Propiedad Total',
          timeframe: 'Días 11 al 14',
          description:
            'Conectamos tu dominio corporativo, activamos certificado SSL, estructuramos datos Schema para Google y motores de IA, y optimizamos tu ficha de Google Maps. Te entregamos el sitio 100% llave en mano.',
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
          question: '¿Cuánto cuesta una página web en Cali y cómo se cotiza?',
          answer:
            'El precio de una página web en Cali depende de la complejidad y el objetivo comercial: desde landing pages enfocadas en ventas directas hasta sitios web corporativos a medida. En JP Studios trabajamos con presupuestos cerrados y transparentes, entrega 100% llave en mano y sin cobros sorpresa ni mensualidades forzadas. Puedes cotizar tu proyecto en 1 minuto en nuestro cotizador interactivo o escribirnos directamente a WhatsApp.',
        },
        {
          question: '¿Qué se necesita para tener una página web lista para mi negocio?',
          answer:
            'Solo necesitas una sesión inicial de 30 minutos para contarnos sobre tu empresa y tus clientes ideales. En JP Studios nos encargamos de todo el proceso técnico: investigación de competidores en Google, redacción de textos comerciales orientados a vender, diseño UI/UX de autor, desarrollo en código limpio, hosting y configuración de dominio. Tú no tienes que redactar textos técnicos ni lidiar con configuraciones complicadas.',
        },
        {
          question: '¿Cómo hago para que mi negocio aparezca de primero en Google y Google Maps en Cali?',
          answer:
            'Optimizamos tu presencia digital combinando tres factores: 1) Marcado de datos estructurados Schema.org para que Google identifique tu empresa local en Cali, 2) Optimización de tu ficha de Google Business Profile con datos alineados (NAP), y 3) Velocidad de carga sub-segundo (Core Web Vitals en verde), factor prioritario para que Google y motores de IA (ChatGPT, Gemini) recomienden tu página por encima de sitios lentos.',
        },
        {
          question: '¿Cuánto cobran por hacer una página web y si hay pagos mensuales obligatorios?',
          answer:
            'En JP Studios cobramos un valor único de desarrollo con entrega llave en mano y propiedad 100% tuya del código y el dominio. A diferencia de agencias que cobran mensualidades obligatorias de $200.000 o $300.000 COP por "mantenimiento" de plantillas de WordPress, nuestras plataformas se programan a medida en React 19, por lo que no requieren parches constantes de seguridad. Cualquier soporte futuro es opcional y bajo demanda.',
        },
        {
          question: '¿Cuál es la diferencia entre una página web tradicional y una diseñada para vender?',
          answer:
            'Una web tradicional suele ser un folleto digital pesado que tarda 4 a 6 segundos en abrir en el celular y tiene textos genéricos que nadie lee. Una página web diseñada para vender carga en menos de 0.5 segundos en celulares, comunica tu propuesta de valor en los primeros 3 segundos y guía al visitante directamente hacia lo que genera ingresos: un botón de WhatsApp directo, una llamada telefónica o un formulario calificado.',
        },
        {
          question: '¿Por qué elegir a JP Studios en lugar de una agencia de diseño web tradicional en Cali?',
          answer:
            'En una agencia tradicional pagas los costos de oficinas, intermediarios y demoras de meses para recibir una plantilla prediseñada. En JP Studios tratas directamente con el fundador e ingeniero de software (Juan Pablo Chacón), tu proyecto se entrega en 14 días con arquitectura a medida en React 19 y recibes un trato personalizado enfocado en tu retorno de inversión.',
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
