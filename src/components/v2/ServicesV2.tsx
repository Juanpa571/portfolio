import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface KineticMetricProps {
  values: string[];
  colorClass: string;
  ariaLabel: string;
  intervalMs?: number;
  direction?: 'up' | 'down';
}

const KineticMetric: React.FC<KineticMetricProps> = ({
  values,
  colorClass,
  ariaLabel,
  intervalMs = 2400,
  direction = 'up',
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % values.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [values.length, intervalMs]);

  const initialY = direction === 'down' ? '-100%' : '100%';
  const exitY = direction === 'down' ? '100%' : '-100%';

  return (
    <div 
      className="h-14 sm:h-16 flex items-center overflow-hidden relative" 
      aria-label={ariaLabel}
    >
      <span className="sr-only">{ariaLabel}</span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={values[index]}
          initial={{ y: initialY, opacity: 0, filter: 'blur(3px)' }}
          animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: exitY, opacity: 0, filter: 'blur(3px)' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={`text-5xl sm:text-6xl font-black font-mono tracking-tight inline-block ${colorClass}`}
          aria-hidden="true"
        >
          {values[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export const ServicesV2: React.FC = () => {
  return (
    <section 
      id="servicios" 
      data-ambient-theme="emerald"
      className="relative py-28 sm:py-36 lg:py-44 xl:py-48 bg-transparent text-slate-100 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* ENCABEZADO EDITORIAL DEL BLOQUE: LA SOLUCIÓN ESTRUCTURADA */}
        {/* ========================================================= */}
        <div id="servicios-header" className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono tracking-wider text-emerald-400 uppercase mb-4">
            Pilares del Servicio
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
            Desarrollo web a la medida{' '}
            <span className="text-emerald-400">
              y estructura enfocada en captar clientes.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            No instalo temas prediseñados ni plugins pesados que se rompen con las actualizaciones. Programo cada sitio desde cero con código optimizado para cargar en menos de 2.5 segundos, posicionar en los primeros puestos de Google de forma orgánica y convertir visitas en clientes directos.
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
                <KineticMetric
                  values={['< 2.6s', '< 2.3s', '< 2.0s', '< 1.8s', '< 1.5s']}
                  direction="down"
                  colorClass="text-[#FFCC00]"
                  ariaLabel="Tiempo de carga en celulares descendiendo hasta menos de 1.5 segundos"
                  intervalMs={2400}
                />
                <div className="text-sm font-bold text-white mt-2 leading-snug">
                  Tiempo de carga en celulares
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  Arquitectura limpia en React
                </div>
              </div>

              {/* Columna Central: Título H3 + Explicación */}
              <div className="lg:col-span-5">
                <div className="text-xs font-mono text-[#FFCC00] font-semibold tracking-wider mb-2">
                  01 - RENDIMIENTO
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                  Velocidad de carga optimizada
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  Tu página web lista en menos de 2.5 segundos. Cada componente se programa desde cero en React y TypeScript, sin plantillas lentas ni dependencias innecesarias. El sitio responde con fluidez en redes móviles reales y cumple los parámetros de rendimiento de Google.
                </p>
              </div>

              {/* Columna Derecha: Entregables Honestos + Acción */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full">
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Entregables de Ingeniería:
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#FFCC00] font-bold shrink-0">✓</span>
                      <span>Core Web Vitals en rango óptimo recomendado por Google.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#FFCC00] font-bold shrink-0">✓</span>
                      <span>Alojamiento en red perimetral global (CDN ultrarrápida).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#FFCC00] font-bold shrink-0">✓</span>
                      <span>Cero plugins obsoletos ni constructores visuales pesados.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06]">
                  <a
                    href="https://pagespeed.web.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-[#FFCC00]/10 text-slate-300 hover:text-[#FFCC00] border border-white/10 hover:border-[#FFCC00]/30 text-xs font-mono transition-all group"
                  >
                    <span>Medir web en Google PageSpeed</span>
                    <span className="text-slate-400 group-hover:text-[#FFCC00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
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
                <KineticMetric
                  values={['80%', '85%', '90%', '95%']}
                  colorClass="text-sky-400"
                  ariaLabel="Entre 80% y 95% de clientes potenciales buscan en Google antes de contratar"
                  intervalMs={2600}
                />
                <div className="text-sm font-bold text-white mt-2 leading-snug">
                  De clientes potenciales
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  Buscan en Google antes de contratar
                </div>
              </div>

              {/* Columna Central: Título H3 + Explicación */}
              <div className="lg:col-span-5">
                <div className="text-xs font-mono text-sky-400 font-semibold tracking-wider mb-2">
                  02 - ADQUISICIÓN
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                  Posicionamiento web orgánico
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  Cómo hacer que tu empresa aparezca en Google, Maps y motores de IA. Marcado semántico Schema.org y optimización técnica para que los motores de búsqueda tradicionales y asistentes de inteligencia artificial reconozcan la ubicación, servicios y datos de contacto de tu negocio.
                </p>
              </div>

              {/* Columna Derecha: Entregables Honestos + Acción */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full">
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Entregables de Adquisición:
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-sky-400 font-bold shrink-0">✓</span>
                      <span>Marcado Schema.org completo (LocalBusiness y Organization).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-sky-400 font-bold shrink-0">✓</span>
                      <span>Estructura técnica para competir en el paquete local de Google Maps.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-sky-400 font-bold shrink-0">✓</span>
                      <span>Sitemap XML limpio e indexación directa en Google Search.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06]">
                  <a
                    href="/auditar-posicionamiento"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-sky-500/10 text-slate-300 hover:text-sky-300 border border-white/10 hover:border-sky-500/30 text-xs font-mono transition-all group"
                  >
                    <span>Auditar visibilidad de mi empresa</span>
                    <span className="text-slate-400 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
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
                <KineticMetric
                  values={['2x', '3x', '4x', '5x']}
                  colorClass="text-emerald-400"
                  ariaLabel="Crecimiento estimado de 2x a 5x en solicitudes comerciales"
                  intervalMs={2400}
                />
                <div className="text-sm font-bold text-white mt-2 leading-snug">
                  Más solicitudes comerciales
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  Al eliminar la fricción de formularios
                </div>
              </div>

              {/* Columna Central: Título H3 + Explicación */}
              <div className="lg:col-span-5">
                <div className="text-xs font-mono text-emerald-400 font-semibold tracking-wider mb-2">
                  03 - CONVERSIÓN
                </div>
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
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Entregables de Conversión:
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-400 font-bold shrink-0">✓</span>
                      <span>Catálogo de productos interactivo sin recargas de página.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-400 font-bold shrink-0">✓</span>
                      <span>Rutas directas de cotización (llamada, WhatsApp y correo B2B).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-400 font-bold shrink-0">✓</span>
                      <span>Jerarquía visual enfocada en la toma de decisión del cliente.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06]">
                  <a
                    href="#proyectos"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/30 text-xs font-mono transition-all group"
                  >
                    <span>Ver catálogo en caso real</span>
                    <span className="text-slate-500 group-hover:text-emerald-400 group-hover:translate-y-0.5 transition-all">↓</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* FRANJA DE PROTOCOLO Y AUDITORÍA: QA, GEO, SEO & SPEED     */}
        {/* ========================================================= */}
        <div className="mt-12 sm:mt-16 p-7 sm:p-9 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="max-w-2xl">
              <div className="text-xs font-mono text-slate-400 font-semibold tracking-wider uppercase mb-2">
                Protocolo de Entrega & Garantía Técnica
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                Auditoría exhaustiva antes de publicar
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
              Una web certificada y lista para recibir clientes y vender. No publico ninguna página sin validar cada punto crítico con un banco de pruebas riguroso para asegurar una herramienta rápida, visible y libre de fallos técnicos.
            </p>
          </div>

          {/* 4 Filtros de Auditoría Técnica Exhaustiva */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400 font-bold">01</span>
                <span className="text-sm font-bold text-white tracking-tight">QA & Control de Calidad</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pruebas funcionales en celulares reales (iOS y Android), formularios sin fugas, enlaces validados y navegación táctil sin errores.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400 font-bold">02</span>
                <span className="text-sm font-bold text-white tracking-tight">Optimización GEO Local</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Marcado de geolocalización, sincronización con Google Maps y estructura semántica para búsquedas con intención local en tu ciudad.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400 font-bold">03</span>
                <span className="text-sm font-bold text-white tracking-tight">SEO Técnico & Schema</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sitemaps XML limpios, etiquetas canónicas, jerarquía de encabezados e indexación en buscadores y motores de respuesta con IA.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400 font-bold">04</span>
                <span className="text-sm font-bold text-white tracking-tight">Auditoría Speed en Vivo</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Certificación en Google PageSpeed y Core Web Vitals (LCP, FID/INP, CLS) para asegurar que la web cargue en menos de 2.5s en redes 4G.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
