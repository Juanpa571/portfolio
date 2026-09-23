import React, { useState } from 'react';
import { Compass, Target, MapPin, BarChart3, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/site';
import { MetaTags } from '../components/seo/MetaTags';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroPhoneMockup } from '../components/seo/HeroPhoneMockup';
import { highlightBrandKeywords } from '../utils/textHighlight';
import { trackWhatsAppClick } from '../utils/analytics';

const easeTransition = [0.16, 1, 0.3, 1] as const;

interface PosicionarWebGooglePageProps {
  onNavigateHome: () => void;
}

export const PosicionarWebGooglePage: React.FC<PosicionarWebGooglePageProps> = ({ onNavigateHome }) => {
  // Estado para el acordeón interactivo de preguntas frecuentes (primera abierta por defecto)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const bentoSteps = [
    {
      num: '01',
      title: '1. Que Google pueda leer tu sitio web sin esfuerzo',
      desc: 'Antes de competir por palabras clave, tu base técnica debe ser impecable. Googlebot prioriza páginas con Core Web Vitals perfectos, tiempos de carga en menos de 1 segundo en celulares y una estructura limpia con marcado a Google Search Console.',
      icon: Compass,
      tag: 'Herramientas clave',
      detail: 'React 19, Schema.org JSON-LD oficial, diseño y compresión WebP.',
    },
    {
      num: '02',
      title: '2. Diseñar para la intención de búsqueda real',
      desc: 'Repetir palabras clave como un robot ya no funciona. Investigamos exactamente qué dudas tienen tus compradores antes de contratar y estructuramos títulos H1, H2 y respuestas directas que satisfacen esa necesidad de forma transparente y convincente.',
      icon: Target,
      tag: 'Objetivo',
      detail: 'Mayor retención en la página y más señales a Google.',
    },
    {
      num: '03',
      title: '3. Dominar el podio local en Google Maps',
      desc: 'Para recibir clientes en tu ciudad o región, optimizamos y construimos tu Google Business Profile (antes Google My Business), lo llenamos con información completa y gestionamos reseñas. Una ficha verificada con reseñas reales es la forma más rápida de generar llamadas directas al negocio.',
      icon: MapPin,
      tag: 'Canal',
      detail: 'Aparición en el mapa local cuando buscan servicios cerca de ti.',
    },
    {
      num: '04',
      title: '4. Optimización para Inteligencia Artificial (AEO & GEO)',
      desc: 'En 2026, miles de decisiones de compra pasan por ChatGPT, Gemini y Perplexity. Estructuramos tu sitio con contenido optimizado para que estos motores de IA interpreten tu propuesta de valor y te recomienden en temas con intención de silencio.',
      icon: BarChart3,
      tag: 'Ventaja',
      detail: 'Citabilidad en respuestas conversacionales y AI Overviews.',
    },
  ];

  const faqItems = [
    {
      question: '¿Cuánto cuesta posicionar una página web en Google en Colombia?',
      answer:
        'El costo depende de la escala técnica del proyecto y del nivel de competencia de tu sector. Un servicio profesional de optimización y estructuración para pequeñas y medianas empresas oscila habitualmente entre $1.500.000 y $4.000.000 COP (o $400 a $1.000 USD). Es una inversión que crea un activo permanente, a diferencia de la publicidad en Google Ads donde debes pagar indefinidamente por cada clic.',
    },
    {
      question: '¿Cómo posicionarse en Google gratis?',
      answer:
        'Aparecer de forma orgánica no requiere pagarle a Google. Puedes hacerlo de forma gratuita reclamando y verificando tu perfil en Google Business Profile, asegurándote de que tu web esté indexada mediante Google Search Console y redactando contenido que responda directamente a las preguntas de tus clientes. Sin embargo, para superar a competidores establecidos se requiere experiencia técnica en código limpio, datos estructurados y autoridad de enlaces.',
    },
    {
      question: '¿Cómo hacer para que mi página web salga de primero en Google?',
      answer:
        'Para alcanzar el primer lugar se debe superar a los competidores actuales en tres áreas clave: velocidad de carga y estabilidad móvil (Core Web Vitals), calidad y relevancia del contenido que responde a la intención de búsqueda exacta, y autoridad de marca y reseñas. Nadie puede prometer el puesto #1 por contrato, pero una arquitectura técnica impecable maximiza enormemente las probabilidades de liderar.',
    },
    {
      question: '¿Qué es el SEO y un ejemplo real para una empresa?',
      answer:
        'El SEO (Search Engine Optimization) es la disciplina de diseñar y optimizar tu presencia digital para que Google muestre tu negocio ante búsquedas relevantes. Por ejemplo: si tienes una clínica dental y alguien busca "diseño de sonrisa en Cali", el SEO logra que tu clínica aparezca en el mapa y entre las 3 primeras opciones recomendadas, generando citas directas sin pagar por anuncios patrocinados.',
    },
    {
      question: '¿Cuánto tiempo tarda una página web en llegar a la primera página de Google?',
      answer:
        'Un trabajo riguroso de SEO técnico y optimización local en Google Maps suele generar las primeras llamadas y solicitudes entre el primer y segundo mes. Para términos altamente competidos a nivel nacional, consolidar y retener la primera página toma habitualmente entre 3 y 6 meses de trabajo continuo en arquitectura de contenidos, velocidad y autoridad.',
    },
    {
      question: '¿Cuál es la diferencia entre pagar anuncios (Google Ads) y el posicionamiento SEO?',
      answer:
        'Con Google Ads compras visibilidad temporal: pagas por cada clic y en el segundo en que se agota tu saldo diario, tu empresa desaparece por completo del buscador. El posicionamiento SEO construye un activo permanente de tu negocio: una vez optimizada tu estructura y ganadas las primeras posiciones, continúas recibiendo prospectos calificados todos los días sin pagarle a Google por cada visita.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#1a1a1e] font-sans antialiased selection:bg-black selection:text-white relative">
      <MetaTags
        title="Posicionar Web en Google: Cómo Aparecer de Primero — JP Studios"
        description="Aprende cómo hacer que tu empresa aparezca en Google y Google Maps. Servicios de SEO para empresas y posicionamiento web para captar clientes en Colombia."
        canonicalUrl="https://jpchacon.com/posicionar-web-en-google"
      />

      {/* Schema.org Structured Data (JSON-LD) para Rich Snippets, Breadcrumbs y AEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://jpchacon.com/posicionar-web-en-google#webpage',
                url: 'https://jpchacon.com/posicionar-web-en-google',
                name: 'Posicionar Web en Google: Cómo Aparecer de Primero — JP Studios',
                description: 'Aprende cómo hacer que tu empresa aparezca en Google y Google Maps. Servicios de SEO para empresas y posicionamiento web para captar clientes en Colombia.',
                isPartOf: {
                  '@id': 'https://jpchacon.com/#website',
                },
                about: {
                  '@id': 'https://jpchacon.com/#organization',
                },
                breadcrumb: {
                  '@id': 'https://jpchacon.com/posicionar-web-en-google#breadcrumb',
                },
                inLanguage: 'es-CO',
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://jpchacon.com/posicionar-web-en-google#breadcrumb',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Inicio',
                    item: 'https://jpchacon.com/',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Posicionar Web en Google',
                    item: 'https://jpchacon.com/posicionar-web-en-google',
                  },
                ],
              },
              {
                '@type': 'Service',
                '@id': 'https://jpchacon.com/posicionar-web-en-google#service',
                name: 'Posicionamiento Web en Google y Optimización AEO/GEO en Cali',
                provider: {
                  '@id': 'https://jpchacon.com/#organization',
                },
                serviceType: 'Search Engine Optimization',
                areaServed: {
                  '@type': 'City',
                  name: 'Cali',
                },
                description: 'Servicio de posicionamiento web técnico, SEO local para Google Maps y optimización para motores de Inteligencia Artificial (AEO & GEO: ChatGPT, Gemini, Perplexity) para empresas en Colombia.',
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://jpchacon.com/posicionar-web-en-google#faq',
                mainEntity: faqItems.map((item) => ({
                  '@type': 'Question',
                  name: item.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />

      {/* Header Oficial Reutilizable */}
      <Header />

      <main className="pt-6 sm:pt-10 pb-20 overflow-hidden">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeTransition }}
          className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 mb-6 sm:mb-8"
        >
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-black/50">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
              className="hover:text-black transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded-sm"
            >
              Inicio
            </a>
            <span>/</span>
            <span className="text-black/80 font-medium">Posicionar Web en Google</span>
          </nav>
        </motion.div>

        {/* ========================================================================= */}
        {/* 1. HERO SECTION (Split Asimétrico: Tipografía Fuerte + Mockup de Google Maps) */}
        {/* ========================================================================= */}
        <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 mb-16 sm:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left">
              {/* Monumental Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easeTransition }}
                className="text-[2.65rem] sm:text-5xl lg:text-[3.85rem] xl:text-[4.2rem] font-semibold tracking-tight text-[#111111] leading-[1.05] mb-6 select-none"
              >
                {highlightBrandKeywords('Posicionar web en Google: cómo hacer que tu empresa aparezca de primero en 2026.')}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: easeTransition }}
                className="text-base sm:text-lg lg:text-[1.15rem] text-black/75 font-sans leading-relaxed mb-8 max-w-2xl"
              >
                {highlightBrandKeywords('Tener una página web bonita no sirve de nada si tus clientes no pueden encontrarte. Descubre el sistema técnico de SEO para empresas, autoridad local en Google Maps y optimización para Inteligencia Artificial que transforma búsquedas en llamadas y ventas reales.')}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: easeTransition }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
              >
                <a
                  href={siteConfig.profile.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick({ location: 'posicionar_web', label: 'Pedir Diagnostico WhatsApp - Top CTA' })}
                  className="px-7 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-[#141517] hover:bg-black text-white text-sm font-medium flex items-center justify-between sm:justify-start gap-3 shadow-sm hover:shadow-md transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 group"
                >
                  <span>Pedir Diagnóstico de mi Empresa en WhatsApp</span>
                  <span className="text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all font-sans text-xs">
                    ↗
                  </span>
                </a>

                <a
                  href="#pasos"
                  className="px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-black/[0.04] hover:bg-black/[0.08] text-black/80 hover:text-black text-sm font-medium flex items-center justify-center gap-2 border border-black/[0.06] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 group"
                >
                  <span>Ver los 4 Pasos del Sistema</span>
                  <span className="text-xs text-black/50 group-hover:translate-y-0.5 transition-transform">↓</span>
                </a>
              </motion.div>
            </div>

            {/* Right Column: Exact GPT Visual Composition (Behind Background + Phone Mockup Layer) */}
            <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end py-10 sm:py-14 lg:py-16">
              <HeroPhoneMockup />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. SECCIÓN DIAGNÓSTICO (El Dolor del Negocio + Card de Búsqueda Local)   */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 border-y border-black/[0.08] bg-black/[0.015]">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              {/* Left Column: Heading + Local Atmosphere Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: easeTransition }}
                className="lg:col-span-5 space-y-6"
              >
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-semibold tracking-tight text-[#111111] leading-tight">
                    {highlightBrandKeywords('¿Cómo hacer que mi negocio aparezca en Google cuando los clientes buscan comprar?')}
                  </h2>
                </div>

                {/* Atmospheric Local Search Card with subtle scale hover */}
                <div className="rounded-2xl overflow-hidden border border-black/[0.08] shadow-md hover:shadow-xl transition-all duration-500 group">
                  <picture className="w-full h-auto block">
                    <source type="image/webp" srcSet="/cali-atmosphere.webp" />
                    <img
                      src="/cali-atmosphere.png"
                      alt="Panorámica urbana de Cali y entorno comercial para posicionamiento local de empresas en Google y Google Maps"
                      className="w-full h-auto object-cover object-center block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                      width={480}
                      height={160}
                    />
                  </picture>
                </div>
              </motion.div>

              {/* Right Column: Clear Explanatory Paragraphs (Typographic measure constrained to <80 chars) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.15, ease: easeTransition }}
                className="lg:col-span-7 space-y-4 text-sm sm:text-base text-black/75 leading-relaxed pt-1 max-w-[68ch]"
              >
                <p>
                  {highlightBrandKeywords('Todos los días, cientos de personas en Colombia entran a su teléfono o computador buscando exactamente los servicios o productos que tú vendes. Sin embargo, si tu negocio no figura en las 3 primeras posiciones de Google o en el mapa local, ')}<strong>el 92% de esos clientes terminan contratando a tu competencia directa</strong>.
                </p>
                <p>
                  {highlightBrandKeywords('La mayoría de páginas web en el país sufren de tres problemas invisibles: fueron construidas con constructores lentos llenos de plugins (como WordPress), no tienen datos estructurados que Googlebot pueda interpretar, y su ficha de Google Maps está incompleta o sin reseñas verificadas.')}
                </p>
                <p className="pt-2 text-black/90 font-medium">
                  Para quienes además necesitan una plataforma comercial completa y veloz, en JP Studios combinamos este servicio con nuestro desarrollo de{' '}
                  <button
                    type="button"
                    onClick={onNavigateHome}
                    className="text-black underline underline-offset-4 decoration-black/40 hover:decoration-black cursor-pointer font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded-sm"
                  >
                    diseño de páginas web en Cali
                  </button>{' '}
                  y a nivel nacional.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. METODOLOGÍA: LOS 4 PASOS ESTRUCTURADOS (4-Column Bento Cards)          */}
        {/* ========================================================================= */}
        <section id="pasos" className="py-16 sm:py-24 border-b border-black/[0.08]">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: easeTransition }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16"
            >
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold tracking-tight text-[#111111] leading-tight">
                  {highlightBrandKeywords('Los 4 pasos para posicionar tu página web en Google con éxito.')}
                </h2>
              </div>
              <div className="text-xs sm:text-sm font-sans text-black/50 text-left md:text-right">
                <span className="block font-medium text-black/70">Un sistema claro.</span>
                <span>Resultados reales.</span>
              </div>
            </motion.div>

            {/* 4 Columns Bento Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
              {bentoSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.55, delay: index * 0.08, ease: easeTransition }}
                    className="relative group"
                  >
                    {/* Skeleton estructural invisible: solo activo en desktop (hidden lg:flex) para fijar la altura base sin ocupar espacio en móviles/tablets */}
                    <div
                      aria-hidden="true"
                      className="hidden lg:flex invisible pointer-events-none p-6 sm:p-7 rounded-2xl border border-transparent flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-display font-bold">{step.num}</span>
                          <div className="w-8 h-8" />
                        </div>
                        <div className="text-base sm:text-lg font-semibold leading-snug mb-3">
                          {step.title}
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed mb-4">
                          {step.desc}
                        </p>
                      </div>
                      <div className="border-t border-transparent pt-3" />
                    </div>

                    {/* Tarjeta interactiva: en desktop flota desde top-0 con min-h-full y se expande en hover sin desplazar las demás ni la línea inferior */}
                    <div className="lg:absolute lg:inset-x-0 lg:top-0 lg:min-h-full p-6 sm:p-7 rounded-2xl bg-white border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.02)] group-hover:border-black/20 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group-hover:-translate-y-1 transition-all duration-300 ease-out z-10 group-hover:z-30 cursor-default flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-display font-bold text-black/70 group-hover:text-black transition-colors duration-200">{step.num}</span>
                          <div className="w-8 h-8 rounded-full bg-black/[0.03] border border-black/[0.06] flex items-center justify-center text-black/70 group-hover:text-black group-hover:bg-black/[0.07] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 ease-out">
                            <IconComponent className="w-4 h-4 stroke-[1.7]" />
                          </div>
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-[#111111] leading-snug mb-3">
                          {highlightBrandKeywords(step.title)}
                        </h3>
                        <p className="text-xs sm:text-sm text-black/70 leading-relaxed mb-4">
                          {highlightBrandKeywords(step.desc)}
                        </p>
                      </div>

                      {/* Línea inferior fija (NO se mueve nunca) */}
                      <div className="border-t border-black/[0.08] pt-3">
                        {/* Texto desplegable exclusivamente al pasar el cursor */}
                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                          <div className="overflow-hidden">
                            <div className="text-xs sm:text-[13px] font-sans text-black/75 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 pt-1">
                              <strong>{step.tag}:</strong> {highlightBrandKeywords(step.detail)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. PREGUNTAS FRECUENTES (Acordeón Interactivo Split)                      */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Heading */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: easeTransition }}
                className="lg:col-span-5"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold tracking-tight text-[#111111] leading-tight">
                  {highlightBrandKeywords('Preguntas frecuentes sobre cómo posicionar una página web en Google.')}
                </h2>
              </motion.div>

              {/* Right Column: Interactive Accordion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1, ease: easeTransition }}
                className="lg:col-span-7 space-y-3.5"
              >
                {faqItems.map((item, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl bg-white border border-black/[0.08] hover:border-black/20 transition-colors duration-200 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
                    >
                      <button
                        id={`faq-trigger-${index}`}
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none hover:bg-black/[0.01] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded-2xl"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${index}`}
                      >
                        <h3 className="text-sm sm:text-base font-semibold text-[#111111] leading-snug m-0 p-0 text-left">
                          {highlightBrandKeywords(item.question)}
                        </h3>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25, ease: easeTransition }}
                          className="w-7 h-7 rounded-full bg-black/[0.03] border border-black/[0.06] flex items-center justify-center text-black/60 shrink-0"
                        >
                          <ChevronDown className="w-4 h-4 stroke-[1.8]" />
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-panel-${index}`}
                            role="region"
                            aria-labelledby={`faq-trigger-${index}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: easeTransition }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-black/75 leading-relaxed border-t border-black/[0.05]">
                              {highlightBrandKeywords(item.answer)}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. CIERRE HEROICO EN NEGRO SÓLIDO (Banner Negro de Alta Conversión)      */}
        {/* ========================================================================= */}
        <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: easeTransition }}
            className="rounded-3xl bg-[#030303] text-white border border-white/10 shadow-2xl relative overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end relative z-10">
              {/* Left Column: Official Laptop Mockup anchored directly to the bottom edge */}
              <div className="lg:col-span-6 flex justify-center lg:justify-start self-end">
                <div className="w-full max-w-[500px] sm:max-w-[580px] lg:max-w-[660px] -mb-1 overflow-hidden">
                  <picture>
                    <source type="image/webp" srcSet="/portatil-sobre-roca.webp" />
                    <motion.img
                      initial={{ opacity: 0, y: 24, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.15, ease: easeTransition }}
                      src="/portatil-sobre-roca.png"
                      alt="Diagnóstico de visibilidad en Google en Laptop sobre la roca"
                      className="w-full h-auto object-contain block transition-transform duration-700 ease-out group-hover:scale-[1.015] group-hover:-translate-y-0.5"
                      loading="lazy"
                      width={1746}
                      height={901}
                    />
                  </picture>
                </div>
              </div>

              {/* Right Column: Copy & CTA with generous padding */}
              <div className="lg:col-span-6 flex flex-col items-start text-left p-8 sm:p-12 lg:py-16 lg:pr-14 lg:pl-4 relative">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">
                  {highlightBrandKeywords('Diagnóstico de Visibilidad en Google en 90 Segundos')}
                </h2>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-7 max-w-xl">
                  Escríbenos directamente por WhatsApp con el enlace de tu página web actual o el nombre de tu empresa. Te responderemos personalmente con una revisión en pantalla mostrándote por qué no estás rankeando y qué pasos exactos necesitas para superar a tu competencia.
                </p>

                <div className="w-full sm:w-auto">
                  <a
                    href={siteConfig.profile.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick({ location: 'posicionar_web', label: 'Solicitar Diagnostico Gratuito WhatsApp - Bottom CTA' })}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-neutral-100 text-black text-sm font-semibold flex items-center justify-center sm:justify-start gap-2 shadow-sm transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 group/btn"
                  >
                    <span>Solicitar Diagnóstico Gratuito por WhatsApp</span>
                    <span className="text-xs font-sans group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer Oficial */}
      <Footer />
    </div>
  );
};
