import React from 'react';

/**
 * ProjectsV2
 * 
 * Sección 04: Portafolio de Casos Reales & Evidencia Empírica de Negocio.
 * Construido bajo la Antigravity SEO Bible (Money Page, E-E-A-T real, 0 CLS).
 * 
 * - Caso 01: Maranatha Papelería Creativa (Cali, Colombia).
 *   Desarrollo de catálogo interactivo en React 19 + WhatsApp conversion.
 * - Caso 02: "Próximo Proyecto" (Reserva estratégica para nuevo cliente).
 * - Cumplimiento estricto: Voz en singular independiente (Regla #10).
 * - Cero píldoras decorativas, tipografía sobria Geist Sans y jerarquía pura.
 */
export const ProjectsV2: React.FC = () => {
  return (
    <section 
      id="proyectos" 
      data-ambient-theme="platinum"
      className="relative py-28 sm:py-36 lg:py-44 xl:py-48 bg-transparent text-slate-100"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* ENCABEZADO EDITORIAL DEL BLOQUE: LA EVIDENCIA REAL        */}
        {/* ========================================================= */}
        <div id="proyectos-header" className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono tracking-wider text-slate-300 uppercase mb-4">
            Casos de Estudio
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
            Proyectos reales en{' '}
            <span className="text-white">producción.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Cada proyecto es una plataforma web desarrollada a la medida, alojada en producción y optimizada para indexar en Google y convertir visitas reales en ventas directas.
          </p>
        </div>

        {/* ========================================================= */}
        {/* CASO 01: MARANATHA PAPELERÍA CREATIVA (PROTAGONISTA REAL) */}
        {/* ========================================================= */}
        <div className="space-y-12 sm:space-y-16">
          
          <article className="rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.14] transition-all duration-300 p-6 sm:p-10 lg:p-12 backdrop-blur-sm overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Columna Izquierda: Arquitectura del Caso y Métricas Reales */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-3">
                    <span className="text-white font-bold">CASO 01</span>
                    <span>/</span>
                    <span>CALI, COLOMBIA</span>
                    <span>/</span>
                    <span className="text-slate-200">REACT 19 + TYPESCRIPT</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    Maranatha Papelería Creativa
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-300 mt-2 font-medium">
                    Catálogo digital de productos y sistema de cotizaciones directas a WhatsApp.
                  </p>

                  <p className="mt-5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Maranatha dependía de catálogos en PDF pesados de más de 40 MB que los clientes no abrían en celulares por lentitud. Desarrollé una plataforma web ultrarrápida a la medida en React con búsqueda y filtrado instantáneo en memoria (0ms de latencia) para decenas de referencias de papelería, stickers y empaques empresariales, con botones directos para cotizar en WhatsApp sin fricción de formularios. Además, la arquitectura está estructurada semánticamente para captar crecimiento orgánico en Google y motores de búsqueda basados en inteligencia artificial.
                  </p>
                </div>

                {/* Grid de Métricas Clave Auditadas (Alineadas con los 3 Pilares del Estudio) */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.08]">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black font-mono text-[#FFCC00]">
                      &lt; 2.6s
                    </div>
                    <div className="text-xs text-slate-400 mt-1 leading-snug">
                      Carga LCP en redes 4G móviles
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">
                      0 ms
                    </div>
                    <div className="text-xs text-slate-400 mt-1 leading-snug">
                      Búsqueda en catálogo sin recarga
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl sm:text-3xl font-black font-mono text-sky-400">
                      100%
                    </div>
                    <div className="text-xs text-slate-400 mt-1 leading-snug">
                      Indexación semántica en Google
                    </div>
                  </div>
                </div>

                {/* Acciones y Enlaces Externos Reales */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href="https://maranathapapeleria.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-200 text-slate-950 text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md shadow-white/10 group/btn"
                  >
                    <span>Ver Sitio Web en Vivo</span>
                    <span className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
                  </a>

                  <a
                    href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fmaranathapapeleria.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] text-slate-300 hover:text-white border border-white/10 text-xs font-mono transition-all"
                  >
                    <span>Auditar en PageSpeed</span>
                    <span className="text-slate-500">↗</span>
                  </a>
                </div>
              </div>

              {/* Columna Derecha: Mockup Visual Clickeable con Flecha Minimalista */}
              <div className="lg:col-span-6">
                <a
                  href="https://maranathapapeleria.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/preview block relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 bg-slate-950/60 shadow-2xl transition-colors duration-300 cursor-pointer"
                  aria-label="Abrir sitio web de Maranatha Papelería Creativa en una nueva pestaña"
                >
                  {/* Aspect Ratio 1440/1000 Exacto sin zoom */}
                  <div className="aspect-[1440/1000] w-full overflow-hidden relative bg-[#060709]">
                    <img 
                      src="/projects/maranatha-hero.webp" 
                      alt="Catálogo web interactivo desarrollado para Maranatha Papelería Creativa en Cali"
                      width={1440}
                      height={1000}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain object-center transition-all duration-500 group-hover/preview:blur-sm group-hover/preview:brightness-[0.45]"
                    />
                    
                    {/* Viñeta sutil estática */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060709]/20 via-transparent to-transparent pointer-events-none" />

                    {/* Flecha minimalista blanca en el centro (sin cápsula, círculo ni contenedor) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="opacity-0 group-hover/preview:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/preview:translate-y-0">
                        <svg 
                          className="w-12 h-12 sm:w-14 sm:h-14 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          strokeWidth="2.2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </article>

          {/* ======================================================= */}
          {/* CASO 02: "PRÓXIMO PROYECTO" (INVITACIÓN COMERCIAL)      */}
          {/* ======================================================= */}
          <article className="rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.06] p-6 sm:p-10 lg:p-12 backdrop-blur-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-3">
                  <span className="text-slate-400 font-bold">CASO 02</span>
                  <span>/</span>
                  <span>ESPACIO DISPONIBLE</span>
                  <span>/</span>
                  <span className="text-slate-400">TU EMPRESA EN CALI O GLOBAL</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Tu próximo proyecto web
                </h3>

                <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
                  Una plataforma rápida para posicionar tu marca y vender más. Diseño y desarrollo sitios web de alto rendimiento programados a la medida. Sin intermediarios, sin plantillas genéricas lentas y con comunicación directa de ingeniería. Entrego tu plataforma lista para competir en Google en 14 a 21 días.
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <a
                  href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20quiero%20cotizar%20un%20proyecto%20web%20para%20mi%20empresa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 text-sm font-semibold transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Reservar mi proyecto</span>
                  <svg className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

            </div>
          </article>

        </div>

      </div>
    </section>
  );
};
