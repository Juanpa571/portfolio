import React from 'react';

/**
 * ProjectsV2
 * 
 * Sección 04: Portafolio de Casos Reales & Evidencia Empírica de Negocio.
 * Construido bajo la Antigravity SEO Bible (Money Page, E-E-A-T real, 0 CLS).
 * 
 * - Caso Insignia: Maranatha Papelería Creativa (Cali, Colombia).
 *   Desarrollo de catálogo interactivo en React 19 + conversión directa a WhatsApp.
 * - Bloque de Confianza: El Estándar de Ingeniería de JP Studios (Garantías de Entrega).
 * - Cumplimiento estricto: Voz en singular independiente (Regla #10).
 * - Cero píldoras decorativas, tipografía sobria y jerarquía pura.
 */
export const ProjectsV2: React.FC = () => {
  const whatsappUrl = `https://wa.me/573177371301?text=${encodeURIComponent(
    'Hola Juan Pablo, estuve viendo el caso de Maranatha en tu portafolio y quiero cotizar una plataforma web de alto rendimiento para mi empresa.'
  )}`;

  return (
    <section 
      id="proyectos" 
      data-ambient-theme="platinum"
      className="relative py-28 sm:py-36 lg:py-44 xl:py-48 bg-transparent text-slate-100"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* ENCABEZADO EDITORIAL DEL BLOQUE: EVIDENCIA REAL           */}
        {/* ========================================================= */}
        <div id="proyectos-header" className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-sans font-semibold tracking-widest text-cyan-400 uppercase mb-4">
            Evidencia de Ingeniería & Negocio
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
            Casos de estudio donde la técnica{' '}
            <span className="text-white">genera ventas.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Sistemas web reales, con clientes reales y en vivo. No diseño pantallas decorativas: construyo plataformas rápidas pensadas para posicionar en Google y convertir visitas en cotizaciones todos los días.
          </p>
        </div>

        {/* ========================================================= */}
        {/* CASO 01: MARANATHA PAPELERÍA CREATIVA (CASO INSIGNIA)     */}
        {/* ========================================================= */}
        <div className="space-y-12 sm:space-y-16">
          
          <article className="rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.14] transition-all duration-300 p-6 sm:p-10 lg:p-12 backdrop-blur-sm overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Columna Izquierda: Arquitectura del Caso y Métricas Reales */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
                <div>


                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    Maranatha Papelería Creativa
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-300 mt-2 font-medium">
                    Catálogo digital de productos y sistema de cotizaciones directas a WhatsApp.
                  </p>

                  <div className="mt-5 space-y-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    <p>
                      <strong className="text-slate-200 block mb-1">El Dolor de Negocio:</strong>
                      Maranatha dependía casi exclusivamente del «voz a voz». En temporadas bajas, cuando las compras locales caen, los ingresos se veían fuertemente afectados por no tener un canal para captar clientes nuevos. Además, cuando alguien pedía información por WhatsApp, le enviaban un catálogo en PDF de más de 40 MB que casi nadie descargaba en su celular, perdiendo ventas en el momento decisivo.
                    </p>
                    <p>
                      <strong className="text-slate-200 block mb-1">La Solución y Retorno Comercial:</strong>
                      Desarrollé un catálogo digital ultrarrápido que abre al instante en cualquier teléfono y permite explorar decenas de referencias en segundos. Con un solo toque, el cliente envía la referencia exacta a WhatsApp lista para facturar, eliminando fricciones y formularios. A la par, posicioné el sitio en el <strong className="text-white">puesto #1 de Google en Cali</strong>: hoy la web atrae compradores nuevos de forma automática todos los días, estabilizando las ventas incluso en los meses más lentos del año.
                    </p>
                  </div>
                </div>

                {/* Grid de Métricas Clave Auditadas */}
                <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-6 border-t border-white/[0.08]">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight text-white">
                      &lt; 2s
                    </div>
                    <div className="text-xs text-slate-400 mt-1 leading-snug">
                      Apertura inmediata en celulares
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight text-white">
                      1 Clic
                    </div>
                    <div className="text-xs text-slate-400 mt-1 leading-snug">
                      Cotización directa en WhatsApp
                    </div>
                  </div>

                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-sans tracking-tight text-white">
                      #1 en Cali
                    </div>
                    <div className="text-xs text-slate-400 mt-1 leading-snug">
                      Captación orgánica en Google
                    </div>
                  </div>
                </div>

                {/* Acciones y Enlaces Externos Reales */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href="https://maranathapapeleria.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-200 active:scale-[0.97] text-slate-950 text-xs sm:text-sm font-bold tracking-wide transition-all duration-150 shadow-md shadow-white/10 group/btn"
                  >
                    <span>Ver Sitio Web en Vivo</span>
                    <span className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
                  </a>

                  <a
                    href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fmaranathapapeleria.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] active:scale-[0.98] text-slate-300 hover:text-white border border-white/10 text-xs font-sans font-medium transition-all duration-150"
                  >
                    <span>Auditar en PageSpeed (100/100)</span>
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

                    {/* Flecha minimalista blanca en el centro */}
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
          {/* EL ESTÁNDAR DE INGENIERÍA: GARANTÍAS DE ENTREGA         */}
          {/* ======================================================= */}
          <div className="rounded-3xl bg-white/[0.02] border border-white/[0.08] p-8 sm:p-10 lg:p-12 backdrop-blur-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Construido como un activo para tu negocio, no como un gasto que caduca.
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                    Muchas empresas pagan millones por páginas armadas sobre plantillas pesadas que se desconfiguran a los pocos meses o exigen pagar mensualidades eternas para no caerse. Mi estándar es diferente: entrego plataformas ultrarrápidas, 100% tuyas y diseñadas para durar sin depender de nadie. Tres garantías innegociables:
                  </p>
                </div>

                {/* 3 Pilares del Estándar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/[0.06] text-xs">
                  <div className="space-y-1.5">
                    <span className="font-sans text-white font-bold tracking-wider block">01 · CERO PLUGINS LENTOS</span>
                    <p className="text-slate-400 leading-relaxed">
                      Estructurado desde cero para tu negocio. Cero temas inflados de terceros que vuelven lenta la navegación.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="font-sans text-white font-bold tracking-wider block">02 · VELOCIDAD BLINDADA</span>
                    <p className="text-slate-400 leading-relaxed">
                      El 53% de las visitas abandonan páginas lentas. Tu web abrirá al instante en cualquier teléfono con red 4G.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="font-sans text-white font-bold tracking-wider block">03 · PROPIEDAD TOTAL</span>
                    <p className="text-slate-400 leading-relaxed">
                      El código, el dominio y los accesos son de tu empresa. Cero mensualidades forzadas de mantenimiento.
                    </p>
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Llamado a la Acción Directo */}
              <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end space-y-4 border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-6 lg:pt-0 lg:pl-8">
                <div className="lg:text-right">
                  <span className="text-xs font-sans font-medium text-slate-400 uppercase tracking-wider block mb-1">
                    Próxima Entrega Disponible
                  </span>
                  <p className="text-sm font-semibold text-white">
                    Plazo de 14 a 21 días para lanzamiento
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-slate-100 active:scale-[0.97] text-slate-950 font-bold text-xs sm:text-sm tracking-wide transition-all duration-150 shadow-[0_0_24px_rgba(255,255,255,0.2)] hover:shadow-[0_0_32px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Cotizar mi proyecto en WhatsApp</span>
                  <svg className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <p className="text-[11px] text-slate-400 lg:text-right">
                  Comunicación directa con Juan Pablo Chacón · Sin intermediarios
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
