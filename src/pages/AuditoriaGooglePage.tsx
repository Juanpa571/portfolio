import React, { useState, useEffect, useRef } from 'react';
import { MetaTags } from '../components/seo/MetaTags';
import { GlowingEdgeCard } from '../components/ui/GlowingEdgeCard';
import { AuditoriaBackground } from '../components/v2/AuditoriaBackground';
import { HeaderV2 } from '../components/v2/HeaderV2';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';

interface AuditoriaGooglePageProps {
  onNavigateHome?: () => void;
}

export const AuditoriaGooglePage: React.FC<AuditoriaGooglePageProps> = ({ onNavigateHome }) => {
  const [domain, setDomain] = useState('');
  const [keyword, setKeyword] = useState('');
  const [city, setCity] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [domainError, setDomainError] = useState<string | null>(null);

  const timer1Ref = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timer2Ref = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer1Ref.current) clearTimeout(timer1Ref.current);
      if (timer2Ref.current) clearTimeout(timer2Ref.current);
    };
  }, []);

  // Validación estricta de formato URL o nombre de dominio
  const isValidUrlOrDomain = (input: string): boolean => {
    if (!input.trim()) return false;
    const cleaned = input
      .trim()
      .replace(/^https?:\/\//i, '')
      .replace(/^www\./i, '')
      .split('/')[0]
      .split('?')[0]
      .split('#')[0];

    // Formato RFC/DNS: al menos una extensión válida (.com, .co, .net, etc.) sin caracteres extraños ni espacios
    const domainRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
    return domainRegex.test(cleaned);
  };

  const handleDomainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.trimStart();
    // Limpieza automática si pegan el protocolo https:// o http://
    if (val.startsWith('https://')) {
      val = val.slice(8);
    } else if (val.startsWith('http://')) {
      val = val.slice(7);
    }
    setDomain(val);
    if (domainError) {
      setDomainError(null);
    }
  };

  const isDomainValid = domain ? isValidUrlOrDomain(domain) : false;

  // Sanitización estricta de dominio para Google queries
  const cleanDomain = domain
    .trim()
    .replace(/^https?:\/\//i, '')
    .replace(/^www\./i, '')
    .replace(/\/.*$/, '');

  const cleanKeyword = keyword.trim();
  const cleanCity = city.trim();

  // URLs de auditoría empírica oficial
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
    if (!domain.trim()) {
      setDomainError('Por favor ingresa la dirección de tu página web (ej. tuempresa.com)');
      return;
    }
    if (!isValidUrlOrDomain(domain)) {
      setDomainError('Ingresa un dominio o URL válida (ej. tuempresa.com o https://tuempresa.com)');
      return;
    }
    setDomainError(null);
    setIsLoading(true);
    setLoadingStep(1);

    if (timer1Ref.current) clearTimeout(timer1Ref.current);
    if (timer2Ref.current) clearTimeout(timer2Ref.current);

    timer1Ref.current = setTimeout(() => {
      setLoadingStep(2);
    }, 550);

    timer2Ref.current = setTimeout(() => {
      setIsLoading(false);
      setHasSearched(true);
      setLoadingStep(0);

      // Desplazamiento fluido hacia los resultados generados
      const target = document.getElementById('pruebas-diagnostico');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 1250);
  };

  const handleReturnHome = (e: React.MouseEvent) => {
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
    }
  };

  return (
    <div className="min-h-screen bg-[#060709] text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-black relative">
      <MetaTags
        title="Auditor de Visibilidad en Google | Diagnóstico de Posicionamiento — JP Studios"
        description="Herramienta de auditoría empírica para comprobar si tu página web está indexada en Google, figura en los primeros resultados locales o es invisible para tus clientes."
        canonicalUrl="https://jpchacon.com/auditar-posicionamiento"
      />

      {/* Fondo cinético con emblema 3D desenfocado (blur por código en PC, textura optimizada en móvil) */}
      <AuditoriaBackground />

      {/* Barra de navegación oficial idéntica a la Landing Page */}
      <HeaderV2 onNavigateHome={onNavigateHome} />

      {/* Contenido Principal con capas relativas para posicionarse sobre el fondo */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-16 sm:pb-24">
        
        {/* Cabecera Editorial */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
            ¿Tu página web existe en Google o es <span className="text-cyan-400">100% invisible</span>?
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Ingresa tu dominio y tu actividad comercial para auditar directamente en los motores de búsqueda si tu negocio figura en los primeros lugares o si tus competidores se están quedando con todos los clientes.
          </p>
        </div>

        {/* Formulario de Entrada */}
        <div className="max-w-3xl mx-auto mb-16 sm:mb-20">
          <GlowingEdgeCard
            mode="dark"
            glowColor="185deg 100% 65%"
            className="w-full"
          >
            <form onSubmit={handleGenerate} className="p-6 sm:p-9 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Campo 1: Dominio */}
                <div className="sm:col-span-2">
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                      1. Dirección de tu página web (Dominio) <span className="text-cyan-400">*</span>
                    </label>
                    {isDomainValid && domain && (
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                        ✓ Dominio válido
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 pointer-events-none select-none">
                      https://
                    </span>
                    <input
                      type="text"
                      inputMode="url"
                      autoCapitalize="none"
                      autoCorrect="off"
                      spellCheck={false}
                      value={domain}
                      onChange={handleDomainChange}
                      onBlur={() => {
                        if (domain && !isValidUrlOrDomain(domain)) {
                          setDomainError('Ingresa un dominio o URL válida (ej. tuempresa.com o https://tuempresa.com)');
                        }
                      }}
                      placeholder="tuempresa.com"
                      className={`w-full pl-20 pr-4 py-3.5 rounded-xl bg-white/[0.03] border text-white placeholder-slate-600 text-sm focus:outline-none transition-all font-mono ${
                        domainError
                          ? 'border-rose-500/80 focus:border-rose-400 focus:ring-1 focus:ring-rose-400/40'
                          : 'border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                      }`}
                    />
                  </div>
                  {domainError && (
                    <p className="mt-2 text-xs text-rose-400 flex items-center gap-1.5 font-mono">
                      <span>⚠</span>
                      <span>{domainError}</span>
                    </p>
                  )}
                </div>

                {/* Campo 2: Servicio Principal */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
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
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
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
                disabled={isLoading}
                className={`w-full px-4 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-base tracking-wide transition-all flex items-center justify-center gap-2 ${
                  isLoading
                    ? 'bg-cyan-500/80 text-slate-950 cursor-wait opacity-95 shadow-[0_0_22px_rgba(6,182,212,0.35)]'
                    : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_4px_18px_-2px_rgba(6,182,212,0.4)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer'
                }`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin w-4 h-4 text-slate-950 shrink-0" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                      <path className="opacity-85" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    <span className="truncate">
                      {loadingStep === 1 ? (
                        <>
                          <span className="sm:hidden">Consultando Google...</span>
                          <span className="hidden sm:inline">Conectando con Google Search & Maps...</span>
                        </>
                      ) : (
                        <>
                          <span className="sm:hidden">Generando las 4 pruebas...</span>
                          <span className="hidden sm:inline">Estructurando las 4 pruebas oficiales...</span>
                        </>
                      )}
                    </span>
                  </>
                ) : (
                  <span className="inline-flex items-center justify-center gap-2 text-center whitespace-nowrap">
                    <span className="sm:hidden">Generar Diagnóstico en Google</span>
                    <span className="hidden sm:inline">Generar Diagnóstico en Motores de Búsqueda</span>
                    <svg className="w-4 h-4 fill-none stroke-current shrink-0" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                )}
              </button>
            </form>
          </GlowingEdgeCard>
        </div>

        {/* Panel de 4 Pruebas Oficiales */}
        <div id="pruebas-diagnostico" className="space-y-6 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Las 4 Pruebas Oficiales de Diagnóstico
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Haz clic en cada prueba para comprobar el estado real de tu sitio directamente en los servidores de Google.
              </p>
            </div>
            {hasSearched && (
              <span className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Filtros aplicados para: <strong className="text-white">{cleanDomain || 'General'}</strong></span>
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* PRUEBA 01: RASTREO SITE: (ROJO / PELIGRO DE INVISIBILIDAD) */}
            <GlowingEdgeCard
              mode="dark"
              glowColor="350deg 100% 64%"
              className="flex flex-col h-full"
            >
              <div className="p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-400 font-medium">PRUEBA 01 / INDEXACIÓN</span>
                    <span className="text-xs font-mono text-rose-400 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                      <span>Peligro de Invisibilidad</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    1. Prueba de Existencia en Googlebot (`site:`)
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Lanza una orden de consulta interna a Google. Si el buscador responde con <strong className="text-rose-400 font-semibold">«No se han encontrado resultados»</strong>, tu web no existe en el índice y ningún cliente podrá encontrarte de forma orgánica.
                  </p>
                </div>

                <a
                  href={googleSiteQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-rose-500/[0.08] hover:bg-rose-500/[0.16] text-white border border-rose-500/25 hover:border-rose-500/50 text-xs font-mono font-semibold flex items-center justify-between group/link transition-all"
                >
                  <span>Ejecutar consulta de existencia</span>
                  <span className="text-rose-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">↗</span>
                </a>
              </div>
            </GlowingEdgeCard>

            {/* PRUEBA 02: POSICIÓN DE MERCADO (VERDE / DINERO & CLIENTES COMERCIALES) */}
            <GlowingEdgeCard
              mode="dark"
              glowColor="148deg 85% 55%"
              className="flex flex-col h-full"
            >
              <div className="p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-400 font-medium">PRUEBA 02 / ADQUISICIÓN</span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>Captura de Clientes & Ventas</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    2. Quién lidera las búsquedas en tu sector
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Abre la página de resultados donde tus clientes buscan contratar. Comprueba si tu empresa aparece en los <strong className="text-emerald-400 font-semibold">primeros 3 lugares de Google y Google Maps</strong> o si tu competencia se está quedando con los contratos y la facturación.
                  </p>
                </div>

                <a
                  href={googleMarketQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-500/[0.08] hover:bg-emerald-500/[0.16] text-white border border-emerald-500/25 hover:border-emerald-500/50 text-xs font-mono font-semibold flex items-center justify-between group/link transition-all"
                >
                  <span>Ver competencia en Google & Maps</span>
                  <span className="text-emerald-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">↗</span>
                </a>
              </div>
            </GlowingEdgeCard>

            {/* PRUEBA 03: DATOS ESTRUCTURADOS / IA (PÚRPURA / INTELIGENCIA ARTIFICIAL) */}
            <GlowingEdgeCard
              mode="dark"
              glowColor="270deg 90% 70%"
              className="flex flex-col h-full"
            >
              <div className="p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-400 font-medium">PRUEBA 03 / INTELIGENCIA ARTIFICIAL</span>
                    <span className="text-xs font-mono text-purple-400 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                      <span>Motores de IA & Schema</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    3. Marcado para Buscadores e IA
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Lanza el validador oficial de Google para comprobar si tu sitio tiene marcado Schema.org (`LocalBusiness` u `Organization`). Sin esto, motores de IA como <strong className="text-purple-300 font-semibold">ChatGPT, Gemini y Perplexity</strong> no pueden recomendar tus servicios.
                  </p>
                </div>

                <a
                  href={googleRichResultsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-purple-500/[0.08] hover:bg-purple-500/[0.16] text-white border border-purple-500/25 hover:border-purple-500/50 text-xs font-mono font-semibold flex items-center justify-between group/link transition-all"
                >
                  <span>Auditar marcado en Google Test</span>
                  <span className="text-purple-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">↗</span>
                </a>
              </div>
            </GlowingEdgeCard>

            {/* PRUEBA 04: VELOCIDAD PAGESPEED (AMARILLO / VELOZ & RENDIMIENTO) */}
            <GlowingEdgeCard
              mode="dark"
              glowColor="45deg 100% 55%"
              className="flex flex-col h-full"
            >
              <div className="p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-400 font-medium">PRUEBA 04 / VELOCIDAD</span>
                    <span className="text-xs font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      <span>Velocidad & Core Web Vitals</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    4. Velocidad de carga en celulares
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Mide el rendimiento físico de tu sitio web en el velocímetro oficial de Google PageSpeed. Cada segundo de retraso en redes móviles reduce un <strong className="text-amber-400 font-semibold">20% tu tasa de conversión</strong> y aumenta el rebote antes de que lean tu oferta.
                  </p>
                </div>

                <a
                  href={googlePageSpeedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-amber-500/[0.08] hover:bg-amber-500/[0.16] text-white border border-amber-500/25 hover:border-amber-500/50 text-xs font-mono font-semibold flex items-center justify-between group/link transition-all"
                >
                  <span>Medir velocidad en PageSpeed</span>
                  <span className="text-amber-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">↗</span>
                </a>
              </div>
            </GlowingEdgeCard>

          </div>
        </div>

        {/* Banner de Cierre: El Puente hacia la Solución */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/[0.05] via-white/[0.02] to-transparent border border-white/10 backdrop-blur-md">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 font-medium">
              Solución de Ingeniería Web
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              ¿Tu página web no aparece o no convierte visitantes en clientes?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              En JP Studios diseño y desarrollo plataformas en React 19 concebidas desde la primera línea de código para liderar en Google y Google Maps, cargar en fracciones de segundo y convertir visitas en solicitudes comerciales directas.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20hice%20el%20diagn%C3%B3stico%20de%20mi%20p%C3%A1gina%20web%20y%20quiero%20cotizar%20un%20redise%C3%B1o%20de%20alto%20rendimiento"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_4px_18px_-2px_rgba(6,182,212,0.4)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Solicitar diagnóstico y propuesta formal</span>
                <span>→</span>
              </a>
              <a
                href="/"
                onClick={handleReturnHome}
                className="px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-sm font-medium transition-all cursor-pointer"
              >
                <span>Ver cómo trabajo</span>
              </a>
            </div>
          </div>
        </div>

      </main>

      <footer className="relative z-10 border-t border-white/[0.08] py-8 text-center text-xs font-mono text-slate-400">
        JP Studios © 2026 — Auditoría de Posicionamiento Web & Alto Rendimiento.
      </footer>
    </div>
  );
};
