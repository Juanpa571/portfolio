import React, { useEffect, useState } from 'react';
import type { ProjectItem } from '../../config/site';
import { siteConfig } from '../../config/site';
import { useLanguage } from '../../context/LanguageContext';
import { HabitatDemo } from '../demos/HabitatDemo';
import { SaiSevenDemo } from '../demos/SaiSevenDemo';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t, language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!project) {
      setIsMounted(false);
      return;
    }

    setIsMounted(true);
    const lenis = (window as any).__lenis;
    lenis?.stop();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      lenis?.start();
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const localizedProject = t.projects.items[project.id];
  const projectTitle = localizedProject?.title || project.title;
  const projectTagline = localizedProject?.tagline || project.theme?.tagline || project.category;
  const projectDescription = localizedProject?.description || project.description;
  const isSpanish = language === 'es';

  const whatsappInquiryUrl = `${siteConfig.profile.contact.whatsapp}%20sobre%20el%20est%C3%A1ndar%20de%20conversi%C3%B3n%20para%20${encodeURIComponent(projectTitle)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      data-lenis-prevent
      className={`fixed inset-0 z-[99999] transition-opacity duration-300 ${
        isMounted ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* 1. Full-Screen Backdrop (Fixes clipping bug behind rounded corners; clicking anywhere on top strip returns to Home) */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 cursor-pointer select-none"
        aria-label={isSpanish ? 'Volver a la portada' : 'Return to Home'}
      />

      {/* 2. Sliding Drawer Container with Sleek 16px Top Radius (No clipping, clean Awwwards architecture) */}
      <div
        data-lenis-prevent
        onWheel={(e) => e.stopPropagation()}
        className={`absolute bottom-0 left-0 right-0 h-[calc(100vh-2.5rem)] sm:h-[calc(100vh-3.5rem)] bg-[#fafaf8] text-[#1a1a1e] rounded-t-2xl shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.45)] border-t border-black/10 flex flex-col overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMounted ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Drawer Scrollable Content Body */}
        <div
          data-lenis-prevent
          onWheel={(e) => e.stopPropagation()}
          className="flex-1 overflow-y-auto overscroll-contain px-6 sm:px-12 lg:px-20 pt-10 sm:pt-14 pb-32 space-y-12 sm:space-y-16"
        >
          {/* Drawer Monumental Header (Zero unnecessary tags, confident scale) */}
          <div className="max-w-6xl mx-auto space-y-4">
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-normal font-display tracking-tight text-black leading-none">
              {projectTitle}
            </h2>

            <p className="text-xl sm:text-2xl lg:text-3xl text-black/80 font-display font-light leading-snug max-w-4xl">
              {projectTagline}
            </p>

            <p className="text-base sm:text-lg text-black/65 font-sans leading-relaxed max-w-3xl pt-1">
              {projectDescription}
            </p>
          </div>

          {/* 3. Unified MacBook Browser Window (A single seamless window frame with authentic colors) */}
          <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-[#fafaf8]">
            {/* MacBook Chrome Bar (Light Apple Silver/Slate) */}
            <div className="px-5 py-3 bg-[#e8e8e6] border-b border-black/[0.08] flex items-center justify-between select-none">
              {/* Authentic macOS Traffic Light Window Controls */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/15 shadow-xs inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/15 shadow-xs inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/15 shadow-xs inline-block" />
              </div>

              {/* Centered URL Address Bar */}
              <div className="flex-1 max-w-sm sm:max-w-md mx-auto px-4 py-1 rounded-md bg-white/90 border border-black/[0.08] text-center text-xs font-mono text-black/60 shadow-2xs">
                {project.id === 'sai-seven' ? 'https://sai.hotel/san-andres' : 'https://habitat.hospital/urgencias'}
              </div>

              {/* Balanced spacer */}
              <div className="w-14 hidden sm:block" />
            </div>

            {/* Seamless Website Preview Content */}
            <div className="w-full">
              {project.id === 'sai-seven' ? <SaiSevenDemo /> : <HabitatDemo />}
            </div>
          </div>

          {/* 4. Editorial Conversion Breakdown */}
          <div className="max-w-6xl mx-auto pt-10 border-t border-black/[0.08] space-y-10">
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-2xl sm:text-4xl font-normal font-display tracking-tight text-black">
                {isSpanish
                  ? 'Cualidades de una web diseñada para convertir visitas en ventas'
                  : 'Key traits of a website engineered to convert visitors into clients'}
              </h3>
              <p className="text-sm sm:text-base text-black/65 font-sans leading-relaxed">
                {isSpanish
                  ? 'La diferencia entre una página que cuesta dinero y una presencia digital que produce llamadas, presupuestos y nuevos clientes todos los meses.'
                  : 'The distinction between a website that sits as an expense and a digital presence that consistently drives inquiries, proposals, and new clients.'}
              </p>
            </div>

            {/* Asymmetric Editorial Row Architecture with Hairline Borders */}
            <div className="border-y border-black/[0.08] divide-y divide-black/[0.08]">
              {/* Point 1 */}
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-4">
                  <span className="text-xs font-mono text-black/40 block mb-1">01 / Rendimiento</span>
                  <h4 className="text-xl font-normal text-black font-display">
                    {isSpanish ? 'Carga instantánea sub-segundo' : 'Sub-second instant loading'}
                  </h4>
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm text-black/75 font-sans leading-relaxed font-normal">
                    {isSpanish
                      ? 'El 53% de los usuarios en teléfonos móviles abandonan un sitio si tarda más de tres segundos en responder. Al compilar a código puro desplegado en la red edge de Cloudflare, la página responde en milisegundos sin pantallas blancas de carga, capturando a clientes que la competencia pierde.'
                      : 'Over 53% of mobile visitors leave a site that takes longer than three seconds to open. Deployed directly to Cloudflare edge network, this architecture responds in milliseconds with zero blank loading states, capturing prospects competitors lose.'}
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-4">
                  <span className="text-xs font-mono text-black/40 block mb-1">02 / Usabilidad</span>
                  <h4 className="text-xl font-normal text-black font-display">
                    {isSpanish ? 'Triaje de decisión en un toque' : 'One-tap decision triage'}
                  </h4>
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm text-black/75 font-sans leading-relaxed font-normal">
                    {isSpanish
                      ? 'Más del 70% de las decisiones de compra en salud, derecho u hotelería ocurren desde el smartphone. Los accesos prioritarios (llamada directa, dirección en Google Maps y botón de WhatsApp) se ubican bajo el pulgar sin exigir desplazamientos innecesarios.'
                      : 'More than 70% of inquiries in medical, legal, or hospitality practices happen via smartphone. Priority actions (direct call, map directions, WhatsApp chat) sit directly under the thumb without unnecessary scrolling.'}
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-4">
                  <span className="text-xs font-mono text-black/40 block mb-1">03 / Autoridad</span>
                  <h4 className="text-xl font-normal text-black font-display">
                    {isSpanish ? 'Psicología de autoridad visual' : 'Visual brand authority'}
                  </h4>
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm text-black/75 font-sans leading-relaxed font-normal">
                    {isSpanish
                      ? 'Los negocios con servicios de alto ticket no pueden verse como una plantilla genérica descuidada. La tipografía editorial sobria y los acabados milimétricos transmiten solvencia técnica instantánea, justificando honorarios prémium frente a alternativas del mercado.'
                      : 'High-ticket practices cannot afford generic template styling. Restrained editorial typography and meticulous finishing establish instant technical authority, justifying premium rates.'}
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-4">
                  <span className="text-xs font-mono text-black/40 block mb-1">04 / Conversión</span>
                  <h4 className="text-xl font-normal text-black font-display">
                    {isSpanish ? 'Enrutamiento directo sin fricción' : 'Frictionless direct routing'}
                  </h4>
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm text-black/75 font-sans leading-relaxed font-normal">
                    {isSpanish
                      ? 'Eliminamos los formularios de diez campos que casi ningún usuario completa en su teléfono. El prospecto conecta en tres segundos mediante enlaces directos a WhatsApp con mensajes contextuales o llamadas a recepción, reduciendo drásticamente el abandono.'
                      : 'We remove ten-field contact forms that mobile users consistently abandon. Prospects connect in seconds through direct WhatsApp routing with contextual prefilled messages, dramatically cutting drop-off.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Conversion Action Strip */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#1C1D20] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-xl sm:text-2xl font-normal font-display text-white tracking-tight">
                  {isSpanish
                    ? '¿Quieres este estándar de conversión para tu negocio?'
                    : 'Want this conversion standard for your business?'}
                </h4>
                <p className="text-xs sm:text-sm text-white/70 font-sans font-light">
                  {isSpanish
                    ? 'Diseño a medida, entrega en 14 días y atención directa con Juan Pablo Chacón.'
                    : 'Bespoke web craft, 14-day turnaround, direct work with Juan Pablo.'}
                </p>
              </div>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white text-black text-xs sm:text-sm font-medium hover:bg-white/90 active:scale-95 transition-all text-center shrink-0"
                data-interactive
              >
                {isSpanish ? 'Conversar sobre este estándar por WhatsApp ↗' : 'Discuss this standard on WhatsApp ↗'}
              </a>
            </div>
          </div>
        </div>

        {/* 5. Awwwards-Style Floating Bottom-Right Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={isSpanish ? 'Cerrar panel y volver a la página principal' : 'Close drawer and return Home'}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#1C1D20] text-white hover:bg-black active:scale-95 shadow-2xl flex items-center justify-center border border-white/20 transition-all duration-300 cursor-pointer group"
          data-interactive
        >
          <span className="text-lg sm:text-xl group-hover:rotate-90 transition-transform duration-300">
            ✕
          </span>
        </button>
      </div>
    </div>
  );
};
