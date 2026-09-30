import React, { useRef, useEffect } from 'react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const HeroV2: React.FC = () => {
  const stageRef = useRef<HTMLDivElement | null>(null);

  // Efecto de levitación física por paralaje suave (translate3d sin deformación angular)
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !window.matchMedia('(pointer: fine)').matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rAFId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalizado respecto a la ventana (Cero reflows / cero getBoundingClientRect)
      const normX = (e.clientX / window.innerWidth) - 0.5;
      const normY = (e.clientY / window.innerHeight) - 0.5;
      targetX = normX * 22; // Desplazamiento sutil en px
      targetY = normY * 16;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    let parallaxRunning = false;
    const updateParallax = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      // Redondear a décima de pixel para evitar raster downsampling difuso en el compositor GPU
      const posX = Math.abs(currentX) < 0.05 ? 0 : Number(currentX.toFixed(1));
      const posY = Math.abs(currentY) < 0.05 ? 0 : Number(currentY.toFixed(1));
      stage.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      // Sleep when converged instead of running 60fps indefinitely
      if (Math.abs(currentX - targetX) > 0.1 || Math.abs(currentY - targetY) > 0.1) {
        rAFId = requestAnimationFrame(updateParallax);
      } else {
        parallaxRunning = false;
      }
    };

    const startParallax = () => {
      if (!parallaxRunning) {
        parallaxRunning = true;
        rAFId = requestAnimationFrame(updateParallax);
      }
    };

    const handleMouseMoveWrapped = (e: MouseEvent) => {
      handleMouseMove(e);
      startParallax();
    };

    const handleMouseLeaveWrapped = () => {
      handleMouseLeave();
      startParallax();
    };

    window.addEventListener('mousemove', handleMouseMoveWrapped, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeaveWrapped);

    return () => {
      window.removeEventListener('mousemove', handleMouseMoveWrapped);
      window.removeEventListener('mouseleave', handleMouseLeaveWrapped);
      cancelAnimationFrame(rAFId);
    };
  }, []);

  return (
    <section id="hero" data-ambient-theme="cyan" className="relative min-h-screen pt-32 pb-16 lg:pt-[8.5rem] lg:pb-24 xl:pb-28 bg-transparent text-slate-100 flex flex-col justify-center">

      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        
        {/* ========================================================= */}
        {/* GRID PRINCIPAL: TEXTO EDITORIAL (IZQ) + PRODUCTO LIBRE (DER) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          
          {/* --------------------------------------------------------- */}
          {/* COLUMNA IZQUIERDA: COPYWRITING BASADO EN KEYWORD RESEARCH */}
          {/* --------------------------------------------------------- */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 lg:space-y-7">
            
            {/* Titular H1 Monumental Preservando estructura y proporción */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] 2xl:text-[4.75rem] font-extrabold tracking-[-0.04em] text-white leading-[1.03]">
              Diseño de páginas web en Cali{' '}
              <br />
              <span className="text-cyan-400 inline-block">
                para vender más.
              </span>
            </h1>

            {/* Texto de soporte calibrado */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Estructuro tu sitio para que aparezca tanto en Google (SEO) como en motores de inteligencia artificial (ChatGPT y Gemini), conecte con clientes interesados y multiplique tus oportunidades de venta.
            </p>

            {/* Acciones principales con foco de conversión magnético */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20quiero%20cotizar%20el%20dise%C3%B1o%20y%20desarrollo%20web%20para%20mi%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm sm:text-base tracking-wide transition-all duration-200 border border-white hover:border-slate-200 shadow-[0_0_24px_rgba(255,255,255,0.25)] hover:shadow-[0_0_32px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5 group cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current shrink-0" />
                <span>Solicitar cotización</span>
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#proyectos"
                className="px-6 py-4 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 hover:border-white/20 text-sm sm:text-base font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] flex items-center gap-2"
              >
                <span>Ver proyectos reales</span>
                <svg 
                  className="w-4 h-4 text-slate-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Fila de Pilares Reales */}
            <div className="pt-6 sm:pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 sm:gap-8">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-400 tracking-tight">
                  24/7
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1">
                  Visibilidad en Google
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-snug">
                  Tu negocio activo cuando buscan tus servicios
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-400 tracking-tight">
                  1 Clic
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1">
                  Contacto Directo
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-snug">
                  Rutas fáciles para llamadas y cotizaciones
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFCC00] tracking-tight">
                  &lt; 2s
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1">
                  Carga Rápida
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-snug">
                  Navegación fluida en cualquier celular
                </div>
              </div>
            </div>

          </div>

          {/* --------------------------------------------------------- */}
          {/* COLUMNA DERECHA: IMAGEN CON ESCALA EQUILIBRADA             */}
          {/* --------------------------------------------------------- */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end items-center">
            
            {/* Resplandor ambiental de pantalla (Ambilight) que proyecta la luz real de Maranatha */}
            <div 
              aria-hidden="true" 
              className="absolute -inset-10 bg-gradient-to-tr from-rose-500/[0.12] via-fuchsia-500/[0.08] to-pink-500/[0.10] blur-[20px] md:blur-[100px] rounded-full pointer-events-none" 
            />

            {/* Objeto visual libre con escala calibrada para llenar el espacio sin desbordar el alto */}
            <div 
              ref={stageRef}
              className="relative w-full max-w-[760px] lg:max-w-[840px] xl:max-w-[920px] 2xl:max-w-[980px] transition-transform duration-75 ease-out will-change-transform"
            >
              <picture>
                {/* Móvil optimizado (Pantallas hasta 768px / smartphones Retina) */}
                <source 
                  media="(max-width: 768px)"
                  type="image/webp" 
                  srcSet="/hero-showcase-sm.webp 400w, /hero-showcase-mobile.webp 720w" 
                  sizes="(max-width: 480px) 380px, (max-width: 768px) 100vw, 840px"
                  width="720"
                  height="405"
                />
                {/* Escritorio y pantallas grandes (Desktop / Retina 2x) */}
                <source 
                  media="(min-width: 769px)"
                  type="image/webp" 
                  srcSet="/hero-showcase-desktop.webp 1x, /hero-showcase.webp 2x" 
                  width="840"
                  height="473"
                />
                <img
                  src="/hero-showcase-mobile.webp"
                  srcSet="/hero-showcase-sm.webp 400w, /hero-showcase-mobile.webp 720w, /hero-showcase-desktop.webp 840w"
                  sizes="(max-width: 480px) 380px, (max-width: 768px) 100vw, 840px"
                  alt="Sitio web y catálogo interactivo para Maranatha Papelería en Cali optimizado para vender en laptop y celular por JP Studios"
                  className="w-full h-auto object-contain cursor-default transition-all duration-300 ease-out md:drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)] md:[filter:drop-shadow(0px_10px_30px_rgba(180,80,255,0.25))_drop-shadow(0px_25px_50px_rgba(0,0,0,0.8))] hover:md:[filter:drop-shadow(0px_15px_40px_rgba(180,80,255,0.45))_drop-shadow(0px_0px_50px_rgba(6,182,212,0.30))_drop-shadow(0px_30px_60px_rgba(0,0,0,0.95))] hover:md:-translate-y-[5px]"
                  style={{
                    imageRendering: 'auto',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                  width="840"
                  height="473"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  onLoad={() => {
                    (window as any).__heroLoaded = true;
                    window.dispatchEvent(new Event('hero-loaded'));
                  }}
                />
              </picture>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
