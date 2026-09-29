import React, { useState } from 'react';
import { MetaTags } from '../components/seo/MetaTags';
import { GlowingEdgeCard } from '../components/ui/GlowingEdgeCard';

export const AuditoriaGooglePage: React.FC = () => {
  const [domain, setDomain] = useState('');
  const [keyword, setKeyword] = useState('');
  const [city, setCity] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  // Sanitización de dominio para que funcione limpio en Google queries
  const cleanDomain = domain
    .trim()
    .replace(/^https?:\/\//i, '')
    .replace(/^www\./i, '')
    .replace(/\/.*$/, '');

  const cleanKeyword = keyword.trim();
  const cleanCity = city.trim();

  // URLs de auditoría oficial de Google
  const googleSiteQuery = cleanDomain 
    ? `https://www.google.com/search?q=site%3A${encodeURIComponent(cleanDomain)}`
    : 'https://www.google.com/';

  const searchQuery = cleanKeyword 
    ? (cleanCity ? `${cleanKeyword} en ${cleanCity}` : cleanKeyword)
    : (cleanCity ? `servicios en ${cleanCity}` : '');

  const googleMarketQuery = searchQuery 
    ? `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`
    : 'https://www.google.com/';

  const googleRichResultsUrl = cleanDomain
    ? `https://search.google.com/test/rich-results?url=https%3A%2F%2F${encodeURIComponent(cleanDomain)}`
    : 'https://search.google.com/test/rich-results';

  const googlePageSpeedUrl = cleanDomain
    ? `https://pagespeed.web.dev/analysis?url=https%3A%2F%2F${encodeURIComponent(cleanDomain)}`
    : 'https://pagespeed.web.dev/';

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (cleanDomain || cleanKeyword) {
      setHasSearched(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-black">
      <MetaTags
        title="Auditor de Visibilidad en Google | Diagnóstico de Posicionamiento — JP Studios"
        description="Herramienta de auditoría empírica para comprobar si tu página web está indexada en Google, figura en los primeros resultados locales o es invisible para tus clientes."
        canonicalUrl="https://jpchacon.com/auditar-posicionamiento"
      />

      {/* Barra Superior Sobria */}
      <header className="border-b border-white/[0.08] bg-[#08090C]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/v2" className="flex items-center gap-2 text-white font-bold tracking-tight text-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <span>JP Studios<span className="text-cyan-400">.</span></span>
          </a>
          <a 
            href="/v2" 
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>← Volver al sitio principal</span>
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        {/* Cabecera Editorial */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>Herramienta de Diagnóstico Empírico Oficial</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
            ¿Tu página web existe en Google o es <span className="text-cyan-400">100% invisible</span>?
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Ingresa tu dominio y tu actividad comercial para auditar directamente en los motores de búsqueda si tu negocio figura en los primeros lugares o si tus competidores se están quedando con todos los clientes.
          </p>
        </div>

        {/* Formulario de Entrada */}
        <div className="max-w-3xl mx-auto mb-16">
          <GlowingEdgeCard
            mode="dark"
            glowColor="185deg 100% 65%"
            className="w-full"
          >
            <form onSubmit={handleGenerate} className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Campo 1: Dominio */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    1. Dirección de tu página web (Dominio)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500">
                      https://
                    </span>
                    <input
                      type="text"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      placeholder="tuempresa.com"
                      className="w-full pl-20 pr-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                    />
                  </div>
                </div>

                {/* Campo 2: Servicio Principal */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    2. ¿Qué producto o servicio vendes?
                  </label>
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="ej. papelería al por mayor, diseño estructural"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                {/* Campo 3: Ciudad */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    3. Ciudad o mercado principal (Opcional)
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="ej. Cali, Bogotá, Medellín"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm sm:text-base tracking-wide transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_4px_14px_-2px_rgba(6,182,212,0.45)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Generar Diagnóstico en Motores de Búsqueda</span>
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </GlowingEdgeCard>
        </div>

        {/* Panel de 4 Pruebas Oficiales (Desbloqueado o Guía) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Las 4 Pruebas Oficiales de Diagnóstico
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Haz clic en cada prueba para comprobar el estado real de tu sitio directamente en los servidores de Google.
              </p>
            </div>
            {hasSearched && (
              <span className="text-xs font-mono text-cyan-400 font-semibold px-3 py-1 rounded-md bg-cyan-400/10 border border-cyan-400/20">
                Filtros Aplicados
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* PRUEBA 01: RASTREO SITE: */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between space-y-6 group hover:border-white/20 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-500">PRUEBA 01 / INDEXACIÓN</span>
                  <span className="text-xs font-mono text-amber-400 font-semibold">Google Index</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  1. Prueba de Existencia en Googlebot (`site:`)
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Lanza una orden de consulta interna a Google. Si el buscador responde con <strong className="text-white">«No se han encontrado resultados»</strong>, significa que tu web no está indexada y ningún cliente puede encontrarte orgánicamente.
                </p>
              </div>

              <a
                href={googleSiteQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 text-xs font-mono font-semibold flex items-center justify-between group/link transition-all"
              >
                <span>Ejecutar consulta en Google</span>
                <span className="text-cyan-400 group-hover/link:translate-x-0.5 transition-transform">↗</span>
              </a>
            </div>

            {/* PRUEBA 02: POSICIÓN DE MERCADO */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between space-y-6 group hover:border-white/20 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-500">PRUEBA 02 / ADQUISICIÓN</span>
                  <span className="text-xs font-mono text-cyan-400 font-semibold">SERP & Maps</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  2. Quién lidera las búsquedas en tu sector
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Abre la página de resultados donde tus clientes buscan contratar. Comprueba si tu empresa aparece en los <strong className="text-white">primeros 3 lugares de Google y Google Maps</strong> o si tu competencia se está llevando todos los contactos comerciales.
                </p>
              </div>

              <a
                href={googleMarketQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 text-xs font-mono font-semibold flex items-center justify-between group/link transition-all"
              >
                <span>Ver competencia en Google</span>
                <span className="text-cyan-400 group-hover/link:translate-x-0.5 transition-transform">↗</span>
              </a>
            </div>

            {/* PRUEBA 03: DATOS ESTRUCTURADOS / IA */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between space-y-6 group hover:border-white/20 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-500">PRUEBA 03 / INTELIGENCIA ARTIFICIAL</span>
                  <span className="text-xs font-mono text-purple-400 font-semibold">Rich Results</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  3. Marcado para Motores de Búsqueda e IA
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Lanza el validador oficial de Google para comprobar si tu sitio tiene marcado Schema.org (`LocalBusiness` o `Organization`). Sin esto, motores de IA como <strong className="text-white">ChatGPT y Gemini</strong> no pueden interpretar tus datos.
                </p>
              </div>

              <a
                href={googleRichResultsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 text-xs font-mono font-semibold flex items-center justify-between group/link transition-all"
              >
                <span>Auditar marcado en Google Test</span>
                <span className="text-purple-400 group-hover/link:translate-x-0.5 transition-transform">↗</span>
              </a>
            </div>

            {/* PRUEBA 04: VELOCIDAD PAGESPEED */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between space-y-6 group hover:border-white/20 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-500">PRUEBA 04 / RENDIMIENTO</span>
                  <span className="text-xs font-mono text-rose-400 font-semibold">Core Web Vitals</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  4. Velocidad de carga en celulares
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Mide el rendimiento físico de tu sitio web en el velocímetro oficial de Google PageSpeed. Si tu puntaje móvil está en <strong className="text-rose-400">rojo (&lt; 50/100)</strong>, estás perdiendo más de la mitad de las visitas antes de que lean tu oferta.
                </p>
              </div>

              <a
                href={googlePageSpeedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 text-xs font-mono font-semibold flex items-center justify-between group/link transition-all"
              >
                <span>Auditar en Google PageSpeed</span>
                <span className="text-rose-400 group-hover/link:translate-x-0.5 transition-transform">↗</span>
              </a>
            </div>

          </div>
        </div>

        {/* Banner de Cierre: El Puente hacia la Solución */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-transparent border border-white/10">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              Solución de Ingeniería Web
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              ¿Tu página web no aparece o no convierte visitantes en clientes?
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
              En JP Studios diseñamos y desarrollamos plataformas en React 19 concebidas desde la primera línea de código para liderar en Google y Google Maps, cargar en fracciones de segundo y convertir visitas en solicitudes comerciales directas.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20hice%20el%20diagn%C3%B3stico%20de%20mi%20p%C3%A1gina%20web%20y%20quiero%20cotizar%20un%20redise%C3%B1o%20de%20alto%20rendimiento"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_4px_14px_-2px_rgba(6,182,212,0.45)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>Solicitar diagnóstico y propuesta formal</span>
                <span>→</span>
              </a>
              <a
                href="/v2"
                className="px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/10 text-sm font-medium transition-all"
              >
                <span>Ver cómo trabajamos</span>
              </a>
            </div>
          </div>
        </div>

      </main>

      <footer className="border-t border-white/[0.08] py-8 text-center text-xs font-mono text-slate-500">
        JP Studios © 2026 — Auditoría de Posicionamiento Web & Alto Rendimiento.
      </footer>
    </div>
  );
};
