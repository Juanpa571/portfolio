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

            {/* Texto de soporte calibrado: Framing de autoridad e ingeniería B2B */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Ingeniería web y plataformas a la medida para empresas y profesionales en Cali que no pueden permitirse perder clientes por lentitud o invisibilidad en Google. Sitios ultrarrápidos, optimizados para posicionar en Google (SEO) y motores de IA (ChatGPT y Gemini) y convertir visitas en ventas.
            </p>

            {/* Acciones principales con foco de conversión magnético */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <a
                href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20quiero%20cotizar%20el%20dise%C3%B1o%20y%20desarrollo%20web%20para%20mi%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg bg-white hover:bg-slate-100 active:scale-[0.97] text-slate-950 font-bold text-sm sm:text-base tracking-wide transition-all duration-150 border border-white hover:border-slate-200 shadow-[0_0_24px_rgba(255,255,255,0.25)] hover:shadow-[0_0_32px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5 group cursor-pointer"
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
                href="/cuanto-cuesta-una-pagina-web-en-colombia"
                className="px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] active:scale-[0.97] text-slate-200 hover:text-white border border-white/10 hover:border-white/20 text-sm sm:text-base font-medium transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] flex items-center gap-2 group"
              >
                <span>Precios 2026</span>
                <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">↗</span>
              </a>

              <a
                href="#proyectos"
                className="px-4 sm:px-5 py-3.5 sm:py-4 active:scale-[0.97] text-slate-400 hover:text-white text-sm sm:text-base font-medium transition-all duration-150 flex items-center gap-1.5"
              >
                <span>Proyectos</span>
                <svg 
                  className="w-4 h-4 text-slate-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Fila de Pilares Reales (Unificados cromáticamente para máxima sobriedad) */}
            <div className="pt-6 sm:pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 sm:gap-8">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-400 tracking-tight">
                  24/7
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                  Visibilidad en Google
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-snug">
                  Tu negocio activo cuando buscan tus servicios
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-400 tracking-tight">
                  1 Clic
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                  Contacto Directo
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-snug">
                  Rutas fáciles para llamadas y cotizaciones
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-400 tracking-tight">
                  &lt; 2.5s
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                  Carga Rápida
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-snug">
                  Navegación fluida en cualquier celular
                </div>
              </div>
            </div>

          </div>

          {/* --------------------------------------------------------- */}
          {/* COLUMNA DERECHA: AUTORÍA DIRECTA + MOCKUP DE MARANATHA    */}
          {/* --------------------------------------------------------- */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col justify-center items-center lg:items-end">
            
            {/* Resplandor ambiental de pantalla (Ambilight orgánico calibrado con la pantalla lavanda) */}
            <div 
              aria-hidden="true" 
              className="absolute -inset-10 bg-gradient-to-tr from-violet-500/[0.10] via-cyan-500/[0.05] to-transparent blur-[35px] md:blur-[90px] rounded-full pointer-events-none" 
            />

            {/* Objeto visual libre con escala calibrada para llenar el espacio sin desbordar el alto */}
            <div 
              ref={stageRef}
              className="relative w-full max-w-[760px] lg:max-w-[840px] xl:max-w-[920px] 2xl:max-w-[980px] transition-transform duration-75 ease-out will-change-transform"
            >
              {/* Micro-ficha de autoría humana situada justo arriba del showcase */}
              <div className="mb-3.5 flex items-center justify-between gap-3 px-1">
                <div className="flex items-center gap-3">
                  <div className="relative shrink-0">
                    <img
                      src="/juan-pablo-chacon.jpg"
                      alt="Juan Pablo Chacón - Desarrollador Web"
                      width={38}
                      height={38}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-white/20 shadow-md"
                    />
                    <span 
                      className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-slate-950" 
                      title="Disponible para proyectos"
                    />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-center gap-1.5 font-sans">
                      <span>Juan Pablo Chacón</span>
                      <span className="text-slate-600 font-normal">/</span>
                      <span className="text-slate-300 font-sans text-xs font-normal tracking-normal">Desarrollador Web</span>
                    </div>
                    <div className="text-xs text-slate-400 font-sans tracking-normal mt-0.5">
                      Ingeniería y diseño a la medida en Cali
                    </div>
                  </div>
                </div>

                {/* Referencia contextual al proyecto real mostrado */}
                <div className="hidden sm:flex items-center gap-1.5 text-xs font-sans text-slate-400 tracking-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400/80" />
                  <span>Caso real: Maranatha</span>
                </div>
              </div>

              <picture>
                {/* Móvil optimizado (Pantallas hasta 768px / smartphones Retina) */}
                <source 
                  media="(max-width: 768px)"
                  type="image/webp" 
                  srcSet="/hero-showcase-mobile.webp" 
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
                  alt="Sitio web y catálogo interactivo para Maranatha Papelería en Cali optimizado para vender en laptop y celular por Juan Pablo Chacón"
                  className="w-full h-auto object-contain cursor-default transition-all duration-300 ease-out md:drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)] md:[filter:drop-shadow(0px_10px_25px_rgba(167,139,250,0.18))_drop-shadow(0px_25px_50px_rgba(0,0,0,0.85))] hover:md:[filter:drop-shadow(0px_15px_35px_rgba(167,139,250,0.30))_drop-shadow(0px_30px_60px_rgba(0,0,0,0.95))] hover:md:-translate-y-[4px]"
                  style={{
                    imageRendering: 'auto',
                    WebkitBackfaceVisibility: 'hidden',
                    aspectRatio: '840 / 473',
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
