import React, { useRef, useEffect } from 'react';

export const HeroV2: React.FC = () => {
  const stageRef = useRef<HTMLDivElement | null>(null);

  // Efecto de inclinación 3D táctil reactiva al cursor (Sin reflows forzados / GPU pura)
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !window.matchMedia('(pointer: fine)').matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rAFId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 12; // Inclinación suave y controlada
      targetY = -y * 12;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const updateTilt = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      stage.style.transform = `perspective(1200px) rotateY(${currentX.toFixed(2)}deg) rotateX(${currentY.toFixed(2)}deg)`;
      rAFId = requestAnimationFrame(updateTilt);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    stage.addEventListener('mouseleave', handleMouseLeave);
    rAFId = requestAnimationFrame(updateTilt);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      stage.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rAFId);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#070709] text-slate-100 flex items-center">
      
      {/* ------------------------------------------------------------- */}
      {/* ATMÓSFERA Y PROFUNDIDAD ÓPTICA: VOLUMEN DE ESTUDIO             */}
      {/* ------------------------------------------------------------- */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-[750px] h-[550px] bg-gradient-to-b from-cyan-500/10 via-cyan-500/[0.03] to-transparent blur-[140px] pointer-events-none -z-0" 
      />
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)] pointer-events-none" 
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* ========================================================= */}
        {/* GRID DE ALTA TENSIÓN VISUAL: TEXTO (IZQ) + ESCENARIO (DER) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* --------------------------------------------------------- */}
          {/* COLUMNA IZQUIERDA: COPYWRITING BASADO EN KEYWORD RESEARCH */}
          {/* --------------------------------------------------------- */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-7 sm:space-y-8">
            
            {/* Titular H1 Monumental Optimizado para Google y Conversión */}
            <h1 className="text-4xl sm:text-6xl xl:text-[4.5rem] font-extrabold tracking-[-0.04em] text-white leading-[1.02]">
              Diseño de páginas web en Cali{' '}
              <br />
              <span className="text-cyan-400 inline-block">
                para vender más.
              </span>
            </h1>

            {/* Subtítulo H2 Semántico (Opción B Aprobada: Venta y Posicionamiento claro) */}
            <h2 className="text-lg sm:text-xl text-slate-200 font-semibold tracking-tight">
              Páginas web creadas para vender y posicionar tu negocio en Google.
            </h2>

            {/* Texto de soporte calibrado: Posicionamiento SEO + Visibilidad en IA sin redundancia */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
              Estructuramos tu sitio para que aparezca tanto en Google (SEO) como en motores de inteligencia artificial (ChatGPT y Gemini), conecte con clientes interesados y multiplique sus oportunidades de venta.
            </p>

            {/* Acciones principales con captación generalizada */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20quiero%20cotizar%20el%20dise%C3%B1o%20y%20desarrollo%20web%20para%20mi%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-xl shadow-cyan-500/20 flex items-center gap-2.5 group"
              >
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
                className="px-5 py-3.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-sm font-medium transition-all flex items-center gap-2"
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

            {/* Fila de Pilares Reales con Datos Jugosos (Opción 1 Aprobada) */}
            <div className="pt-6 sm:pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 font-mono">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-tight">
                  24/7
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1 font-sans">
                  Visibilidad en Google
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 font-sans leading-tight">
                  Tu negocio activo cuando buscan tus servicios
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  1 Clic
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1 font-sans">
                  Contacto Directo
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 font-sans leading-tight">
                  Rutas fáciles para llamadas y cotizaciones
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  &lt; 2s
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1 font-sans">
                  Carga Rápida
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 font-sans leading-tight">
                  Navegación fluida en cualquier celular
                </div>
              </div>
            </div>

          </div>

          {/* --------------------------------------------------------- */}
          {/* COLUMNA DERECHA: ESCENARIO VISUAL 3D REACTIVO (ALMA/OBJETO)*/}
          {/* --------------------------------------------------------- */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center items-center">
            
            {/* Contenedor con Física 3D reactiva al Cursor */}
            <div 
              ref={stageRef}
              className="relative w-full max-w-[580px] transition-transform duration-200 ease-out will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
            >
              
              {/* Iluminación de silueta posterior (Rim Light cian) */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-cyan-400/5 to-transparent blur-3xl opacity-60 rounded-3xl pointer-events-none" 
              />

              {/* Marco de cristal técnico biselado (La Vitrina del Producto) */}
              <div className="relative rounded-2xl border border-white/[0.12] bg-[#0C0D12]/90 backdrop-blur-xl p-3 sm:p-5 shadow-[0_30px_70px_rgba(0,0,0,0.85)]">
                
                {/* Cabecera del Navegador de Ingeniería */}
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/[0.08] mb-3 sm:mb-4 px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                    <span className="ml-3 text-[11px] font-mono text-slate-400 hidden sm:inline-block">
                      jpchacon.com/casos/maranatha
                    </span>
                  </div>

                  {/* Insignia de proyecto */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono text-cyan-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>CATÁLOGO DIGITAL</span>
                  </div>
                </div>

                {/* Imagen del Portátil en Perspectiva (El Objeto Visual) */}
                <div className="relative overflow-hidden rounded-xl bg-black/40 border border-white/[0.04]">
                  <picture>
                    <source srcSet="/hero-laptop-dashboard.webp" type="image/webp" />
                    <img
                      src="/hero-laptop-dashboard.png"
                      alt="Sitio web y catálogo interactivo optimizado para posicionamiento en Google por JP Studios"
                      className="w-full h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] transition-transform duration-500 hover:scale-[1.02]"
                      width="1920"
                      height="1080"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </picture>

                  {/* Reflejo de cristal biselado sutil */}
                  <div 
                    aria-hidden="true" 
                    className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] via-transparent to-cyan-500/[0.04] pointer-events-none" 
                  />
                </div>

                {/* Pie del Escenario: Telemetría de Producción Real */}
                <div className="mt-3 sm:mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">CASO REAL:</span>
                    <span className="text-white font-medium">Maranatha Papelería (Cali)</span>
                  </div>
                  <div className="flex items-center gap-1 text-cyan-400 font-semibold">
                    <span>VISIBILIDAD EN GOOGLE</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
