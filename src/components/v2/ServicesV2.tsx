import React from 'react';

interface MetricHighlightProps {
  value: string;
  colorClass?: string;
  ariaLabel: string;
}

const MetricHighlight: React.FC<MetricHighlightProps> = ({
  value,
  colorClass = 'text-emerald-400',
  ariaLabel,
}) => {
  return (
    <div 
      className="h-14 sm:h-16 flex items-baseline relative" 
      aria-label={ariaLabel}
    >
      <span className="sr-only">{ariaLabel}</span>
      <span
        className={`text-5xl sm:text-6xl font-black font-sans tracking-tight inline-block ${colorClass}`}
        aria-hidden="true"
      >
        {value}
      </span>
    </div>
  );
};

export const ServicesV2: React.FC = () => {
  return (
    <section 
      id="servicios" 
      data-ambient-theme="emerald"
      className="relative py-28 sm:py-36 lg:py-44 xl:py-48 bg-transparent text-slate-100"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* ENCABEZADO EDITORIAL DEL BLOQUE: LA SOLUCIÓN ESTRUCTURADA */}
        {/* ========================================================= */}
        <div id="servicios-header" className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-sans font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            Pilares del Servicio
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
            Desarrollo web a la medida{' '}
            <span className="text-emerald-400">
              para captar clientes.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            No instalo temas prediseñados ni plugins pesados que se rompen con las actualizaciones. Construyo tu página desde cero con tecnología moderna para que cargue de forma ágil (&lt; 2.5s), compita con solidez en Google en tu nicho y convierta a las personas interesadas en clientes directos.
          </p>
        </div>

        {/* ========================================================= */}
        {/* FILAS DE ESTUDIO CON ESTADÍSTICAS PROTAGONISTAS           */}
        {/* ========================================================= */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          
          {/* ------------------------------------------------------- */}
          {/* FILA 01: VELOCIDAD Y RENDIMIENTO TÉCNICO                */}
          {/* ------------------------------------------------------- */}
          <div className="py-12 sm:py-16 transition-colors duration-300 hover:bg-white/[0.015] px-4 sm:px-6 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Columna Métrica Protagonista (Misma lógica que Diagnóstico) */}
              <div className="lg:col-span-3">
                <MetricHighlight
                  value="< 1.5s"
                  colorClass="text-emerald-400"
                  ariaLabel="Tiempo de carga en celulares garantizado en menos de 1.5 segundos"
                />
                <div className="text-sm font-bold text-white mt-2 leading-snug">
                  Tiempo de carga en celulares
                </div>
                <div className="text-xs font-sans font-medium text-slate-400 mt-1">
                  Tecnología moderna sin WordPress lento
                </div>
              </div>

              {/* Columna Central: Título H3 + Explicación */}
              <div className="lg:col-span-5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                  Velocidad de carga optimizada
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  Construyo tu página a la medida para que nunca sufra por lentitud, plugins rotos ni fallas de seguridad. Tu web abre al instante en cualquier teléfono con red móvil y supera con nota verde las pruebas oficiales de Google.
                </p>
              </div>

              {/* Columna Derecha: Entregables Honestos + Acción */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full">
                <div>
                  <div className="text-xs font-sans font-semibold text-slate-400 uppercase tracking-widest mb-3">
                    Garantías de Velocidad:
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-slate-300 font-bold shrink-0">✓</span>
                      <span>Velocidad verde (90-100) en la prueba oficial de Google PageSpeed.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-slate-300 font-bold shrink-0">✓</span>
                      <span>Servidores de alta velocidad con protección contra caídas.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-slate-300 font-bold shrink-0">✓</span>
                      <span>Cero plugins pesados que dañen o desconfiguren la página.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06]">
                  <a
                    href="https://pagespeed.web.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] active:scale-[0.98] text-slate-300 hover:text-white border border-white/10 hover:border-white/20 text-xs font-sans font-medium transition-all duration-150 group"
                  >
                    <span>Medir web en Google PageSpeed</span>
                    <span className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* FILA 02: VISIBILIDAD LOCAL Y MOTORES DE BÚSQUEDA       */}
          {/* ------------------------------------------------------- */}
          <div className="py-12 sm:py-16 transition-colors duration-300 hover:bg-white/[0.015] px-4 sm:px-6 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Columna Métrica Protagonista (Misma lógica que Diagnóstico) */}
              <div className="lg:col-span-3">
                <MetricHighlight
                  value="92%"
                  colorClass="text-emerald-400"
                  ariaLabel="92% de clientes potenciales buscan en Google antes de contratar en su ciudad"
                />
                <div className="text-sm font-bold text-white mt-2 leading-snug">
                  De clientes potenciales
                </div>
                <div className="text-xs font-sans font-medium text-slate-400 mt-1">
                  Buscan en Google antes de contratar
                </div>
              </div>

              {/* Columna Central: Título H3 + Explicación */}
              <div className="lg:col-span-5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                  Posicionamiento web orgánico
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  Estructuro tu sitio para que compita orgánicamente por las primeras posiciones cuando alguien busque tus servicios en Cali. Configuro la información exacta de tu negocio para que Google, Google Maps y la inteligencia artificial (ChatGPT) recomienden tus servicios y muestren tu teléfono de inmediato.
                </p>
              </div>

              {/* Columna Derecha: Entregables Honestos + Acción */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full">
                <div>
                  <div className="text-xs font-sans font-semibold text-slate-400 uppercase tracking-widest mb-3">
                    Garantías de Posicionamiento:
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-slate-300 font-bold shrink-0">✓</span>
                      <span>Ficha de negocio estructurada para que Google identifique tu empresa.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-slate-300 font-bold shrink-0">✓</span>
                      <span>Optimización para destacar en el mapa local de Google Maps en Cali.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-slate-300 font-bold shrink-0">✓</span>
                      <span>Registro directo en Google para empezar a aparecer en búsquedas.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06]">
                  <a
                    href="/auditar-posicionamiento"
                    className="inline-flex items-center justify-between w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] active:scale-[0.98] text-slate-300 hover:text-white border border-white/10 hover:border-white/20 text-xs font-sans font-medium transition-all duration-150 group"
                  >
                    <span>Auditar visibilidad de mi empresa</span>
                    <span className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">→</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* FILA 03: CATÁLOGO Y CONVERSIÓN COMERCIAL                */}
          {/* ------------------------------------------------------- */}
          <div className="py-12 sm:py-16 transition-colors duration-300 hover:bg-white/[0.015] px-4 sm:px-6 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Columna Métrica Protagonista (Misma lógica que Diagnóstico) */}
              <div className="lg:col-span-3">
                <MetricHighlight
                  value="3x"
                  colorClass="text-emerald-400"
                  ariaLabel="Hasta 3 veces más solicitudes comerciales directas al eliminar fricción"
                />
                <div className="text-sm font-bold text-white mt-2 leading-snug">
                  Más solicitudes comerciales
                </div>
                <div className="text-xs font-sans font-medium text-slate-400 mt-1">
                  Al eliminar la fricción de formularios
                </div>
              </div>

              {/* Columna Central: Título H3 + Explicación */}
              <div className="lg:col-span-5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                  Navegación y ventas sin fricción
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  Catálogos interactivos con búsqueda y filtros instantáneos. El prospecto encuentra lo que necesita y solicita cotización o contacto comercial directo en un solo clic, sin perder tiempo en formularios extensos.
                </p>
              </div>

              {/* Columna Derecha: Entregables Honestos + Acción */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full">
                <div>
                  <div className="text-xs font-sans font-semibold text-slate-400 uppercase tracking-widest mb-3">
                    Garantías de Venta:
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-slate-300 font-bold shrink-0">✓</span>
                      <span>Catálogo interactivo con búsqueda inmediata sin tiempos de espera.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-slate-300 font-bold shrink-0">✓</span>
                      <span>Botones directos para llamadas y cotizaciones por WhatsApp en 1 clic.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-slate-300 font-bold shrink-0">✓</span>
                      <span>Diseño intuitivo que facilita la decisión de compra de tus clientes.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06]">
                  <a
                    href="#proyectos"
                    className="inline-flex items-center justify-between w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] active:scale-[0.98] text-slate-300 hover:text-white border border-white/10 hover:border-white/20 text-xs font-sans font-medium transition-all duration-150 group"
                  >
                    <span>Ver catálogo en caso real</span>
                    <span className="text-slate-400 group-hover:text-white group-hover:translate-y-0.5 transition-all">↓</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* FRANJA DE PROTOCOLO Y AUDITORÍA: QA, GEO, SEO & SPEED     */}
        {/* ========================================================= */}
        <div className="mt-8 sm:mt-16 p-5 sm:p-8 lg:p-9 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-6 pb-4 sm:pb-6 border-b border-white/[0.08]">
            <div className="max-w-2xl">
              <div className="text-[11px] sm:text-xs font-sans text-slate-400 font-semibold tracking-widest uppercase mb-1 sm:mb-2">
                Protocolo de Entrega & Garantía Técnica
              </div>
              <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                Auditoría exhaustiva antes de publicar
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
              Una web certificada y lista para recibir clientes y vender. No publico ninguna página sin validar cada punto crítico con un banco de pruebas riguroso para asegurar una herramienta rápida, visible y libre de fallos técnicos.
            </p>
          </div>

          {/* 4 Filtros de Auditoría Técnica Exhaustiva */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 pt-4 sm:pt-6">
            <div className="group space-y-1 sm:space-y-2 p-3 sm:p-3.5 -m-1 sm:-m-1.5 rounded-xl border border-transparent hover:border-white/[0.08] hover:bg-white/[0.03] transition-all duration-200">
              <div className="flex items-center gap-2">
                <span className="text-xs font-sans text-slate-400 group-hover:text-cyan-400 font-bold transition-colors">01</span>
                <span className="text-xs sm:text-sm font-bold text-white tracking-tight">Control de Calidad en Celulares</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                Pruebas funcionales en celulares reales (iPhone y Android), botones de WhatsApp sin fallas y navegación táctil fluida.
              </p>
            </div>

            <div className="group space-y-1 sm:space-y-2 p-3 sm:p-3.5 -m-1 sm:-m-1.5 rounded-xl border border-transparent hover:border-white/[0.08] hover:bg-white/[0.03] transition-all duration-200">
              <div className="flex items-center gap-2">
                <span className="text-xs font-sans text-slate-400 group-hover:text-emerald-400 font-bold transition-colors">02</span>
                <span className="text-xs sm:text-sm font-bold text-white tracking-tight">Presencia en Google Maps</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                Datos de geolocalización y sincronización para que los clientes de tu ciudad te encuentren al buscar en el mapa.
              </p>
            </div>

            <div className="group space-y-1 sm:space-y-2 p-3 sm:p-3.5 -m-1 sm:-m-1.5 rounded-xl border border-transparent hover:border-white/[0.08] hover:bg-white/[0.03] transition-all duration-200">
              <div className="flex items-center gap-2">
                <span className="text-xs font-sans text-slate-400 group-hover:text-cyan-400 font-bold transition-colors">03</span>
                <span className="text-xs sm:text-sm font-bold text-white tracking-tight">Posicionamiento en Google & IA</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                Estructura clara de contenidos para que Google y asistentes de IA muestren tu negocio como la opción principal en tu ciudad.
              </p>
            </div>

            <div className="group space-y-1 sm:space-y-2 p-3 sm:p-3.5 -m-1 sm:-m-1.5 rounded-xl border border-transparent hover:border-white/[0.08] hover:bg-white/[0.03] transition-all duration-200">
              <div className="flex items-center gap-2">
                <span className="text-xs font-sans text-slate-400 group-hover:text-emerald-400 font-bold transition-colors">04</span>
                <span className="text-xs sm:text-sm font-bold text-white tracking-tight">Prueba Oficial de Velocidad</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                Certificación en Google PageSpeed para garantizar que la web cargue en menos de 2 segundos en cualquier celular con red 4G.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
