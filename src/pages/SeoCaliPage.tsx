import React from 'react';
import { siteConfig } from '../config/site';
import { MetaTags } from '../components/seo/MetaTags';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { highlightBrandKeywords } from '../utils/textHighlight';

interface SeoCaliPageProps {
  onNavigateHome: () => void;
}

export const SeoCaliPage: React.FC<SeoCaliPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#1a1a1e] font-sans antialiased selection:bg-black selection:text-white relative">
      <MetaTags
        title="Posicionamiento Web Cali | SEO & Google Maps — JP Studios"
        description="Servicio de posicionamiento web y SEO en Cali. Aparece en los primeros resultados de Google, domina Google Maps y sé recomendado por motores de IA."
        canonicalUrl="https://jpchacon.com/posicionamiento-web-cali"
      />

      {/* Header reutilizable */}
      <Header />

      <main className="pt-8 sm:pt-14 pb-20">
        {/* Breadcrumb / Retorno a Home */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 mb-6 sm:mb-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-black/50">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Inicio
            </button>
            <span>/</span>
            <span className="text-black/80 font-medium">Posicionamiento Web en Cali</span>
          </nav>
        </div>

        {/* HERO SECTION DE LA PÁGINA */}
        <section className="max-w-[1400px] mx-auto px-6 sm:px-12 mb-16 sm:mb-24">
          <div className="max-w-4xl">
            {/* Tag semántico funcional */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.08] text-xs font-mono text-black/70 mb-5 sm:mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Servicio Especializado • Cali & Valle del Cauca</span>
            </div>

            <h1 className="text-[2.6rem] sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#111111] leading-[1.08] mb-6 select-none">
              {highlightBrandKeywords('Posicionamiento web en Cali y Google Maps para captar clientes reales.')}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-black/75 font-sans leading-relaxed mb-8 max-w-3xl">
              {highlightBrandKeywords('Optimizamos la infraestructura técnica, semántica y local de tu empresa para que Google, Google Maps y los motores de Inteligencia Artificial (ChatGPT, Gemini) te recomienden exactamente cuando tus clientes potenciales estén buscando contratar en Cali.')}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={siteConfig.profile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-xl bg-[#141517] hover:bg-black text-white text-sm font-medium flex items-center justify-between sm:justify-start gap-3 shadow-sm hover:shadow-md transition-all active:scale-[0.98] group"
              >
                <span>Solicitar Auditoría de Visibilidad en Cali</span>
                <span className="text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs font-sans">
                  ↗
                </span>
              </a>

              <a
                href="#pilares"
                className="px-6 py-4 rounded-xl bg-black/[0.04] hover:bg-black/[0.08] text-black/80 hover:text-black text-sm font-medium flex items-center justify-center gap-2 border border-black/[0.06] transition-all"
              >
                <span>Ver Cómo Funciona el Sistema</span>
                <span className="text-xs text-black/50">↓</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECCIÓN DEL DOLOR COMERCIAL */}
        <section className="py-14 sm:py-20 border-y border-black/[0.08] bg-black/[0.015]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs font-mono uppercase tracking-wider text-black/50 block mb-2">
                  La Realidad del Mercado Caleño
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#111111] leading-tight">
                  Google le está entregando los contratos a tu competencia directa.
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-black/75 leading-relaxed">
                <p>
                  Tener una página web no garantiza que nadie te encuentre. Si alguien abre su celular en Cali y busca tu servicio, Google no muestra webs bonitas; muestra las páginas que cargan más rápido, tienen datos estructurados oficiales y cuentan con autoridad local verificada en Google Maps.
                </p>
                <p>
                  En Cali, la mayoría de competidores tienen páginas lentas en WordPress con títulos mal configurados y fichas de Google Maps descuidadas. Con una optimización técnica seria, superarlos en la SERP local no requiere años ni trucos de magia: requiere ingeniería limpia y respuestas directas.
                </p>
                <p className="pt-2 text-black/90 font-medium">
                  Si además necesitas diseñar una plataforma completa desde cero, conoce nuestro servicio de{' '}
                  <button
                    type="button"
                    onClick={onNavigateHome}
                    className="text-black underline underline-offset-4 decoration-black/40 hover:decoration-black cursor-pointer font-semibold"
                  >
                    diseño de páginas web en Cali
                  </button>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOS 3 PILARES TÉCNICOS */}
        <section id="pilares" className="py-16 sm:py-24 border-b border-black/[0.08]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-mono uppercase tracking-wider text-black/50 block mb-2">
                Arquitectura de Posicionamiento
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111] leading-tight">
                Los 3 frentes para dominar las búsquedas en tu ciudad.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Pilar 1 */}
              <div className="p-7 sm:p-9 rounded-2xl bg-white border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-black/40 font-semibold mb-3 block">01 / LOCAL PACK</span>
                  <h3 className="text-xl font-semibold text-[#111111] mb-3">
                    Google Business Profile & Google Maps
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed">
                    Optimizamos tu ficha comercial en Cali con categorías precisas, alineación NAP (Nombre, Dirección, Teléfono) y una estrategia para conseguir reseñas reales de 5 estrellas que te metan en el codiciado Local 3-Pack de Google Maps.
                  </p>
                </div>
                <div className="pt-6 border-t border-black/[0.06] mt-6 text-xs font-mono text-black/60">
                  Impacto: Captación inmediata en móvil
                </div>
              </div>

              {/* Pilar 2 */}
              <div className="p-7 sm:p-9 rounded-2xl bg-white border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-black/40 font-semibold mb-3 block">02 / AEO & GEO</span>
                  <h3 className="text-xl font-semibold text-[#111111] mb-3">
                    Optimización para Motores de Inteligencia Artificial
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed">
                    Estructuramos tu contenido con bloques de respuesta concisos para que ChatGPT, Perplexity y Gemini entiendan exactamente qué vendes y citen a tu empresa cuando los usuarios pregunten por los mejores proveedores en tu sector.
                  </p>
                </div>
                <div className="pt-6 border-t border-black/[0.06] mt-6 text-xs font-mono text-black/60">
                  Impacto: Visibilidad en la nueva era de búsqueda
                </div>
              </div>

              {/* Pilar 3 */}
              <div className="p-7 sm:p-9 rounded-2xl bg-white border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-black/40 font-semibold mb-3 block">03 / TECHNICAL SEO</span>
                  <h3 className="text-xl font-semibold text-[#111111] mb-3">
                    Datos Estructurados Schema.org & Velocidad
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed">
                    Implementamos grafos de datos oficiales (LocalBusiness, Organization, FAQPage) y eliminamos cuellos de botella de renderizado para garantizar tiempos de carga sub-segundo que premian el rastreo de Googlebot.
                  </p>
                </div>
                <div className="pt-6 border-t border-black/[0.06] mt-6 text-xs font-mono text-black/60">
                  Impacto: Indexación prioritaria y Snippets
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES ESPECIALIZADAS EN SEO */}
        <section className="py-16 sm:py-24">
          <div className="max-w-[1000px] mx-auto px-6 sm:px-12">
            <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-mono uppercase tracking-wider text-black/50 block mb-2">
                Claridad Total
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111]">
                Preguntas frecuentes sobre posicionamiento web en Cali.
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-black/[0.08]">
                <h3 className="text-base sm:text-lg font-semibold text-[#111111] mb-2">
                  ¿Cuánto tiempo toma ver resultados en Google con SEO local?
                </h3>
                <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                  En Google Maps y búsquedas locales con baja competencia en Cali, las primeras mejoras en llamadas y visibilidad suelen verse entre la semana 3 y la semana 6 tras optimizar el perfil y publicar el Schema.org. Para el posicionamiento orgánico competitivo en Google, el tiempo de maduración promedio es de 2 a 4 meses.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-black/[0.08]">
                <h3 className="text-base sm:text-lg font-semibold text-[#111111] mb-2">
                  ¿Garantizan el puesto #1 en Google?
                </h3>
                <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                  No. Ninguna agencia o profesional serio puede garantizar el puesto #1 porque nadie controla los algoritmos propietarios de Google. En JP Studios garantizamos la construcción de la mejor infraestructura técnica, semántica y de contenido posible para maximizar las probabilidades reales de alcanzar el podio.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-black/[0.08]">
                <h3 className="text-base sm:text-lg font-semibold text-[#111111] mb-2">
                  ¿Qué diferencia hay entre pagar pauta en Google Ads y hacer SEO?
                </h3>
                <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                  En Google Ads pagas por cada clic ($30.000 a $70.000 COP en Cali por términos de desarrollo web); en el momento en que apagas la pauta, desapareces. El posicionamiento orgánico construye un activo digital permanente: apareces de forma constante sin pagar por clic.
                </p>
              </div>
            </div>

            {/* CTA Final de la página */}
            <div className="mt-14 sm:mt-18 p-8 sm:p-12 rounded-3xl bg-[#141517] text-white text-center flex flex-col items-center justify-center">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
                ¿Quieres saber por qué tu página no aparece hoy en Google?
              </h3>
              <p className="text-sm sm:text-base text-white/70 max-w-xl mb-7 leading-relaxed">
                Escríbenos directamente por WhatsApp con el enlace de tu web actual o el nombre de tu empresa. Te responderemos con un diagnóstico técnico preliminar sin ningún compromiso.
              </p>
              <a
                href={siteConfig.profile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-white hover:bg-neutral-100 text-black text-sm font-semibold flex items-center gap-2 shadow-sm transition-all active:scale-[0.98]"
              >
                <span>Diagnosticar mi Web en WhatsApp</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
