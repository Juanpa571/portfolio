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
          <div className="text-xs font-mono tracking-wider text-rose-400 uppercase mb-4">
            Diagnóstico
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
            Velocidad de carga y estructura:{' '}
            <span className="text-rose-400">
              por qué tu página web no genera ventas.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            La mayoría de negocios y empresas no pierden clientes por falta de calidad, sino porque su página web carga demasiado lento en celulares, no aparece cuando buscan sus servicios en Google y no ofrece una ruta clara y directa para cotizar o ponerse en contacto.
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
                  Clientes perdidos por carga lenta
                </h3>

                {/* Letra capital numérica + frase destacada */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="text-5xl sm:text-6xl font-black font-mono text-rose-400 tracking-tight shrink-0 leading-none select-none">
                    53%
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white leading-snug">
                    De las visitas en celulares abandonan un sitio si tarda más de 3 segundos en abrir.
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed">
                  La velocidad de carga define si vendes o pierdes dinero. Los sitios pesados y sin optimizar en Core Web Vitals se quedan congelados en redes móviles locales. Si tu página tarda 5 segundos en abrir, el cliente regresa a Google y entra a la web de tu competidor.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06]">
                <a
                  href="https://pagespeed.web.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-rose-500/10 text-slate-300 hover:text-rose-300 border border-white/10 hover:border-rose-500/30 text-xs font-mono transition-all duration-200 group/btn"
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
            glowColor="205deg 100% 65%"
            className="flex flex-col h-full"
          >
            <div className="p-7 sm:p-9 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug mb-6">
                  Aparecer en Google y Google Maps
                </h3>

                {/* Letra capital numérica + frase destacada */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="text-5xl sm:text-6xl font-black font-mono text-sky-400 tracking-tight shrink-0 leading-none select-none">
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
                  href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20quiero%20auditar%20la%20visibilidad%20de%20mi%20empresa%20en%20Google"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-sky-500/10 text-slate-300 hover:text-sky-300 border border-white/10 hover:border-sky-500/30 text-xs font-mono transition-all duration-200 group/btn"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>Auditar mi visibilidad en Google</span>
                  </span>
                  <span className="text-slate-500 group-hover/btn:text-sky-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all">↗</span>
                </a>
              </div>
            </div>
          </GlowingEdgeCard>

          {/* ------------------------------------------------------- */}
          {/* FICHA 03: LA FRICCIÓN EN LA CONVERSIÓN                  */}
          {/* ------------------------------------------------------- */}
          <GlowingEdgeCard
            mode="dark"
            glowColor="150deg 100% 60%"
            className="flex flex-col h-full"
          >
            <div className="p-7 sm:p-9 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug mb-6">
                  Estructura web para vender productos y servicios
                </h3>

                {/* Letra capital numérica + frase destacada */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="text-5xl sm:text-6xl font-black font-mono text-emerald-400 tracking-tight shrink-0 leading-none select-none">
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
                  className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/30 text-xs font-mono transition-all duration-200 group/btn"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Ver cómo resuelvo la conversión</span>
                  </span>
                  <span className="text-slate-500 group-hover/btn:text-emerald-400 group-hover/btn:translate-y-0.5 transition-all">↓</span>
                </a>
              </div>
            </div>
          </GlowingEdgeCard>

        </div>

        {/* ========================================================= */}
        {/* PANEL COMPARATIVO DE CONTRASTE: EL PUENTE HACIA LA SOLUCIÓN*/}
        {/* ========================================================= */}
        <div className="mt-7 sm:mt-14 lg:mt-16 p-5 sm:p-8 lg:p-10 rounded-2xl bg-gradient-to-r from-white/[0.03] via-white/[0.02] to-transparent border border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
            
            <div className="lg:col-span-8">
              <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-snug">
                Folleto decorativo vs. Web para vender
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 sm:mt-3 leading-relaxed">
                Mientras una web tradicional tarda 5 segundos en cargar y espera pasivamente a que alguien llene un formulario, una web de alto rendimiento comunica valor en los primeros 3 segundos, aparece primero en Google y convierte el interés del visitante en solicitudes comerciales directas.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="#proyectos"
                className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/10 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Ver cómo lo resuelvo</span>
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
