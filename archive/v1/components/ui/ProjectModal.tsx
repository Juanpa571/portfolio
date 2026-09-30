import React, { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ProjectItem } from '../../config/site';
import { siteConfig } from '../../config/site';
import { useLanguage } from '../../context/LanguageContext';
import { ConversionTraits } from './ConversionTraits';

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
      ScrollTrigger.refresh();
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
            <h2 className={`text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-tight ${
              project.id === 'maranatha'
                ? "font-['Pacifico',cursive] text-[#7E04A1] font-normal pb-2"
                : "font-normal font-display text-black"
            }`}>
              {projectTitle}
            </h2>

            <p className="text-xl sm:text-2xl lg:text-3xl text-black/80 font-display font-light leading-snug max-w-4xl">
              {projectTagline}
            </p>

            <p className="text-base sm:text-lg text-black/65 font-sans leading-relaxed max-w-[54ch] pt-1">
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
              <div className="flex-1 max-w-sm sm:max-w-md mx-auto px-4 py-1 rounded-md bg-white/90 border border-black/[0.08] text-center text-xs font-sans text-black/60 shadow-2xs">
                {project.id === 'maranatha' ? 'https://maranathapapeleria.com' : 'https://sai.hotel/san-andres'}
              </div>

              {/* Right: Visit Live Link */}
              <div className="w-20 text-right hidden sm:block">
                <a
                  href={project.id === 'maranatha' ? 'https://maranathapapeleria.com' : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-black/70 hover:text-black font-sans font-medium inline-flex items-center gap-1 transition-colors"
                  data-interactive
                >
                  <span>{isSpanish ? 'Visitar' : 'Visit'}</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Seamless Website Preview Content */}
            {project.id === 'maranatha' ? (
              <div className="relative group bg-[#faf5ff] overflow-hidden">
                <div className="relative w-full overflow-hidden">
                  <img
                    src="/projects/maranatha-hero.webp"
                    alt="Maranatha Papelería — Captura de pantalla de la plataforma web en producción"
                    className="w-full h-auto block object-contain object-top transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Hover banner to launch live site */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 sm:p-10 justify-between pointer-events-none">
                    <div className="text-white space-y-1">
                      <p className="text-xs uppercase tracking-wider font-mono text-purple-200">
                        {isSpanish ? 'Sitio Web en Producción' : 'Live Production Website'}
                      </p>
                      <p className="text-sm sm:text-base font-normal font-sans text-white/90">
                        maranathapapeleria.com
                      </p>
                    </div>
                    <a
                      href="https://maranathapapeleria.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-100 text-xs sm:text-sm font-medium transition-all shadow-lg inline-flex items-center gap-1.5 pointer-events-auto"
                      data-interactive
                    >
                      <span>{isSpanish ? 'Abrir sitio en vivo' : 'Open live site'}</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full aspect-[16/10] bg-black/[0.02] flex items-center justify-center">
                <span className="text-xs font-mono text-black/40 uppercase tracking-widest">Preview</span>
              </div>
            )}
          </div>

          {/* 4. Editorial Conversion Breakdown */}
          <div className="max-w-6xl mx-auto pt-12 sm:pt-16 border-t border-black/[0.08] space-y-10 sm:space-y-12">
            <div className="space-y-3 max-w-3xl">
              <p className="text-xs font-mono uppercase tracking-widest text-black/50 select-none">
                {project.id === 'maranatha'
                  ? 'CASO 01 · MARANATHA'
                  : `CASO ${project.number} · ${project.clientTag || project.title}`}
              </p>

              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-semibold font-sans tracking-tight text-black leading-[1.08]">
                {project.id === 'maranatha'
                  ? isSpanish
                    ? 'Logros técnicos y comerciales del caso Maranatha'
                    : 'Technical and commercial achievements for Maranatha'
                  : isSpanish
                    ? 'Cualidades de una web diseñada para convertir visitas en ventas'
                    : 'Key traits of a website engineered to convert visitors into clients'}
              </h3>

              <p className="text-base sm:text-lg text-black/65 font-sans leading-relaxed pt-1">
                {project.id === 'maranatha'
                  ? isSpanish
                    ? 'Cómo transformamos un taller de papelería creativa en una plataforma digital de alto rendimiento con catálogo a WhatsApp y posicionamiento en Cali.'
                    : 'How we transformed a creative stationery workshop into a high-impact digital catalog driving direct WhatsApp orders in Cali.'
                  : isSpanish
                    ? 'La diferencia entre una página que cuesta dinero y una presencia digital que produce llamadas, presupuestos y nuevos clientes todos los meses.'
                    : 'The distinction between a website that sits as an expense and a digital presence that consistently drives inquiries, proposals, and new clients.'}
              </p>
            </div>

            {/* Interactive Asymmetric Editorial Breakdown */}
            <ConversionTraits projectId={project.id} />

            {/* Bottom Conversion Action Strip (Seamless Editorial Section) */}
            <div className="pt-6 sm:pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-8">
              <div className="space-y-1 text-left">
                <h4 className="text-2xl sm:text-3xl font-semibold font-sans text-black tracking-tight leading-snug">
                  {isSpanish
                    ? '¿Quieres este estándar de conversión para tu negocio?'
                    : 'Want this conversion standard for your business?'}
                </h4>
                <p className="text-sm sm:text-base text-black/65 font-sans font-normal leading-relaxed">
                  {isSpanish ? (
                    <>
                      Diseño a medida, entrega en 14 días
                      <br className="hidden sm:inline" />
                      {' '}y atención directa con Juan Pablo Chacón.
                    </>
                  ) : (
                    <>
                      Bespoke web craft, 14-day turnaround
                      <br className="hidden sm:inline" />
                      {' '}and direct work with Juan Pablo.
                    </>
                  )}
                </p>
              </div>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#141517] hover:bg-black text-white text-xs sm:text-sm font-sans font-medium active:scale-95 transition-all text-center shrink-0 shadow-sm"
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
