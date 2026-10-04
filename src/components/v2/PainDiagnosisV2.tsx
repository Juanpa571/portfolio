import React from 'react';

import { GlowingEdgeCard } from '../ui/GlowingEdgeCard';

export const PainDiagnosisV2: React.FC = () => {
  return (
    <section 
      id="diagnostico" 
      data-ambient-theme="rose"
      className="relative py-28 sm:py-36 lg:py-44 xl:py-48 bg-transparent text-slate-100"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* ENCABEZADO EDITORIAL DEL BLOQUE: EL ESPEJO DE LA REALIDAD   */}
        {/* ========================================================= */}
        <div id="diagnostico-header" className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-sans font-semibold tracking-widest text-rose-400 uppercase mb-4">
            Diagnóstico
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
            Por qué tu página web{' '}
            <span className="text-rose-400">
              no genera ventas.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Velocidad de carga lenta, invisibilidad en Google y fricción de contacto: la mayoría de empresas no pierden clientes por falta de calidad, sino porque su sitio web tarda en responder en celulares, no figura en búsquedas locales y no ofrece una ruta ágil para cotizar.
          </p>
        </div>

        {/* ========================================================= */}
        {/* GRID DE LOS 3 PUNTOS DE FUGA COMERCIAL CON GLOWING EDGE   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* ------------------------------------------------------- */}
          {/* FICHA 01: EL ABANDONO POR CARGA LENTA                   */}
          {/* ------------------------------------------------------- */}
          <GlowingEdgeCard
            mode="dark"
            glowColor="349deg 100% 70%"
            className="flex flex-col h-full"
          >
            <div className="p-7 sm:p-9 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug mb-6">
                  Clientes perdidos por carga muy lenta
                </h3>

                {/* Letra capital numérica + frase destacada */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="text-5xl sm:text-6xl font-black font-sans text-rose-400 tracking-tight shrink-0 leading-none">
                    53%
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white leading-snug">
                    De las visitas en celulares abandonan un sitio si tarda más de 3 segundos en abrir.
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed">
                  La velocidad de carga define si vendes o pierdes dinero. Los sitios pesados construidos con plantillas saturadas se quedan congelados en el celular del cliente. Si tu página tarda 5 segundos en abrir, la persona se cansa, regresa a Google y entra a la web de tu competidor.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06]">
                <a
                  href="https://pagespeed.web.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-rose-500/10 active:scale-[0.98] text-slate-300 hover:text-rose-300 border border-white/10 hover:border-rose-500/30 text-xs font-sans font-medium transition-all duration-150 group/btn"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Medir mi web en Google PageSpeed</span>
                  </span>
                  <span className="text-slate-500 group-hover/btn:text-rose-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all">↗</span>
                </a>
              </div>
            </div>
          </GlowingEdgeCard>

          {/* ------------------------------------------------------- */}
          {/* FICHA 02: LA INVISIBILIDAD EN GOOGLE Y MAPAS           */}
          {/* ------------------------------------------------------- */}
          <GlowingEdgeCard
            mode="dark"
            glowColor="349deg 100% 70%"
            className="flex flex-col h-full"
          >
            <div className="p-7 sm:p-9 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug mb-6">
                  Aparecer en Google y Google Maps
                </h3>

                {/* Letra capital numérica + frase destacada */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="text-5xl sm:text-6xl font-black font-sans text-rose-400 tracking-tight shrink-0 leading-none">
                    75%
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white leading-snug">
                    De los clics comerciales se concentran en los primeros 3 resultados de Google y Maps.
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed">
                  Tener una página web que no aparece en los primeros lugares de Google equivale a tener un local comercial a puerta cerrada y sin letrero. Si tu negocio no figura en las búsquedas locales ni en motores de IA (ChatGPT y Gemini), tus clientes simplemente contratan a quien sí aparece de primero.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06]">
                <a
                  href="/auditar-posicionamiento"
                  className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-rose-500/10 active:scale-[0.98] text-slate-300 hover:text-rose-300 border border-white/10 hover:border-rose-500/30 text-xs font-sans font-medium transition-all duration-150 group/btn"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>Auditar mi visibilidad en Google</span>
                  </span>
                  <span className="text-slate-500 group-hover/btn:text-rose-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all">→</span>
                </a>
              </div>
            </div>
          </GlowingEdgeCard>

          {/* ------------------------------------------------------- */}
          {/* FICHA 03: LA FRICCIÓN EN LA CONVERSIÓN                  */}
          {/* ------------------------------------------------------- */}
          <GlowingEdgeCard
            mode="dark"
            glowColor="349deg 100% 70%"
            className="flex flex-col h-full"
          >
            <div className="p-7 sm:p-9 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug mb-6">
                  Estructura web para vender productos y servicios
                </h3>

                {/* Letra capital numérica + frase destacada */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="text-5xl sm:text-6xl font-black font-sans text-rose-400 tracking-tight shrink-0 leading-none">
                    &lt; 1%
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white leading-snug">
                    Tasa de contacto en sitios con formularios interminables o canales lentos.
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed">
                  Una verdadera página web para vender elimina la fricción. El cliente calificado busca respuestas ágiles: no quiere llenar formularios de 8 campos obligatorios ni esperar días por una respuesta. Si comunicarse o solicitar una propuesta requiere esfuerzo, simplemente buscará a la competencia.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06]">
                <a
                  href="#proyectos"
                  className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-rose-500/10 active:scale-[0.98] text-slate-300 hover:text-rose-300 border border-white/10 hover:border-rose-500/30 text-xs font-sans font-medium transition-all duration-150 group/btn"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Ver cómo resuelvo la conversión</span>
                  </span>
                  <span className="text-slate-500 group-hover/btn:text-rose-400 group-hover/btn:translate-y-0.5 transition-all">↓</span>
                </a>
              </div>
            </div>
          </GlowingEdgeCard>

        </div>

        {/* ========================================================= */}
        {/* PANEL COMPARATIVO DE CONTRASTE: EL VERDADERO COSTO DE UNA WEB */}
        {/* ========================================================= */}
        <div className="mt-7 sm:mt-14 lg:mt-16 p-6 sm:p-8 lg:p-10 rounded-2xl bg-gradient-to-r from-white/[0.03] via-white/[0.02] to-transparent border border-white/[0.08]">
          <div className="space-y-6">
            <div className="max-w-3xl">
              <div className="text-xs font-sans font-semibold tracking-widest text-slate-400 uppercase mb-2">
                Comparativa de Retorno de Inversión
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
                El verdadero costo de una página web barata
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Una página web de bajo costo construida con plantillas prediseñadas termina costando millones en clientes perdidos. Así se compara una solución genérica frente a ingeniería web construida para facturar:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2">
              {/* Opción A: Web genérica / barata */}
              <div className="p-5 rounded-xl bg-rose-500/[0.04] border border-rose-500/20 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>La plantilla genérica de bajo costo</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 shrink-0 mt-0.5">•</span>
                    <span>Tarda de 5 a 10 segundos en abrir en celulares (más del 50% de visitantes abandonan).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 shrink-0 mt-0.5">•</span>
                    <span>Docenas de plugins pesados que se rompen con actualizaciones o sufren ataques de malware.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 shrink-0 mt-0.5">•</span>
                    <span>Invisible en Google: sin arquitectura semántica, Schema.org ni optimización local.</span>
                  </li>
                </ul>
              </div>

              {/* Opción B: Ingeniería web JP Studios */}
              <div className="p-5 rounded-xl bg-cyan-500/[0.04] border border-cyan-500/20 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ingeniería Web a la Medida (JP Studios)</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 shrink-0 mt-0.5">•</span>
                    <span>Carga ágil en &lt; 2.5s con +90 en rendimiento PageSpeed en redes móviles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 shrink-0 mt-0.5">•</span>
                    <span>Código limpio en React 19 sin dependencias obsoletas ni riesgos de seguridad.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 shrink-0 mt-0.5">•</span>
                    <span>Estructura semántica preparada para competir orgánicamente en los resultados de búsqueda de tu nicho.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06]">
              <span className="text-xs text-slate-400">
                Entrega técnica lista para competir en 14 a 21 días.
              </span>
              <a
                href="#proyectos"
                className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/10 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Ver casos de estudio en vivo</span>
                <svg 
                  className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-y-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
