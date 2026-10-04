import React, { useState } from 'react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

type ProjectType = 'landing' | 'corporativa' | 'ecommerce';
type StartingState = 'desde-cero' | 'rediseno';
type ConversionGoal = 'whatsapp' | 'pasarela';

export const PresupuestoRapidoCalculator: React.FC = () => {
  const [projectType, setProjectType] = useState<ProjectType>('corporativa');
  const [startingState, setStartingState] = useState<StartingState>('desde-cero');
  const [conversionGoal, setConversionGoal] = useState<ConversionGoal>('whatsapp');

  // Lógica de cálculo reactivo realista según las 3 variables:
  // 1. Tipo de Proyecto (Base)
  // 2. Estado (Desde cero requiere arquitectura y copywriting; Rediseño aprovecha base pero optimiza)
  // 3. Conversión (WhatsApp es directo y ágil; Pasarela requiere webhook, seguridad SSL, checkout y pruebas bancarias)
  const getCalculation = () => {
    let minPrice = 0;
    let maxPrice = 0;
    let minDays = 0;
    let maxDays = 0;
    const highlights: string[] = [];

    // Base según Tipo (con jerarquía acumulativa explícita)
    if (projectType === 'landing') {
      minPrice = 1200000;
      maxPrice = 1600000;
      minDays = 8;
      maxDays = 12;
      highlights.push('Base: Carga ultrarrápida en móviles (< 2s en 4G) + Hosting $0/mes');
      highlights.push('Estructura directa orientada 100% a conversión y ventas');
    } else if (projectType === 'corporativa') {
      minPrice = 2200000;
      maxPrice = 3200000;
      minDays = 12;
      maxDays = 18;
      highlights.push('Incluye todo lo de Landing Page (velocidad, hosting $0 y alta conversión)');
      highlights.push('+ Extra Corporativo: Arquitectura multi-página (Inicio, Servicios, Casos, FAQ)');
      highlights.push('+ Extra SEO: Marcado Schema.org LocalBusiness para posicionar en Google y Google Maps');
    } else {
      // ecommerce / plataforma
      minPrice = 3500000;
      maxPrice = 4800000;
      minDays = 20;
      maxDays = 30;
      highlights.push('Incluye todo lo de Web Corporativa (velocidad <2s, SEO Local, multi-página)');
      highlights.push('+ Extra Transaccional: Catálogo interactivo con filtros y cotizador en tiempo real');
      highlights.push('+ Extra Operativo: Panel de control de productos y pedidos sin suscripciones mensuales');
    }

    // Modificador por Estado:
    // "Desde cero": requiere arquitectura de información, redacción comercial y estructuración de activos (+15% a +25%)
    // "Rediseño": se tiene material base, pero requiere auditoría previa y migración limpia
    if (startingState === 'desde-cero') {
      minPrice += projectType === 'landing' ? 200000 : 400000;
      maxPrice += projectType === 'landing' ? 300000 : 600000;
      minDays += 2;
      maxDays += 3;
      highlights.push('Incluye arquitectura de información y redacción comercial base');
    } else {
      highlights.push('Auditoría técnica de lo existente y migración sin perder posicionamiento');
    }

    // Modificador por Ruta de Conversión:
    // "Pagos en línea": requiere pasarela colombiana (Wompi/Bold), webhooks de confirmación, estados de pago y pruebas en sandbox (+600k a +1.2M y +5 a +8 días)
    // "WhatsApp": directo, sin fricción ni pasarelas costosas
    if (conversionGoal === 'pasarela') {
      minPrice += 800000;
      maxPrice += 1200000;
      minDays += 5;
      maxDays += 8;
      highlights.push('Integración pasarela colombiana (Wompi / Bold / PSE) + Webhooks');
    } else {
      highlights.push('Ruta de contacto directa a WhatsApp sin fricción para el usuario');
    }

    highlights.push('Propiedad patrimonial total del código sin mensualidades forzadas');

    // Formateador de moneda colombiana limpio
    const formatCop = (num: number) => `$${num.toLocaleString('es-CO')}`;

    return {
      title: projectType === 'landing' ? 'Landing Page de Alta Conversión' : projectType === 'corporativa' ? 'Web Corporativa con Catálogo' : 'Tienda Virtual o Plataforma a Medida',
      priceRange: `${formatCop(minPrice)} – ${formatCop(maxPrice)} COP`,
      timeEstimate: `${minDays} a ${maxDays} días hábiles`,
      hostingEstimate: '$0 COP/mes (Arquitectura Cloudflare)',
      includedHighlights: highlights,
    };
  };

  const calc = getCalculation();

  // Generación del enlace dinámico a WhatsApp
  const generateWhatsAppUrl = () => {
    const typeLabel = 
      projectType === 'landing' ? 'Landing Page' : 
      projectType === 'corporativa' ? 'Web Corporativa' : 'Tienda / Plataforma';
    const stateLabel = startingState === 'desde-cero' ? 'desde cero' : 'rediseño de web existente';
    const goalLabel = conversionGoal === 'whatsapp' ? 'con contacto a WhatsApp' : 'con pasarela de pagos';

    const text = `Hola Juan Pablo, utilicé la calculadora rápida de tu guía de precios. Mi proyecto es: ${typeLabel} (${stateLabel}, ${goalLabel}). Rango estimado: ${calc.priceRange}. ¿Podrías darme una cotización cerrada y fechas disponibles para mi empresa?`;
    
    return `https://wa.me/573177371301?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.015] border border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.5)] font-sans">
      {/* Encabezado del Widget */}
      <div className="border-b border-white/[0.08] pb-5 mb-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
          Calcula el rango de inversión justo para tu proyecto.
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-normal max-w-xl">
          Selecciona las características básicas de tu negocio para obtener una estimación objetiva de mercado en Colombia sin costos inflados ni mensualidades ocultas.
        </p>
      </div>

      {/* Selectores Interactivos con Geist Sans puro */}
      <div className="space-y-6">
        {/* Selector 1: Tipo de Proyecto */}
        <div className="space-y-2.5">
          <label className="text-xs sm:text-sm font-sans font-medium text-slate-300 block">
            1. ¿Qué tipo de plataforma necesita tu empresa?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <button
              type="button"
              onClick={() => setProjectType('landing')}
              className={`p-3.5 text-left rounded-xl border text-xs font-sans transition-all duration-150 active:scale-[0.98] cursor-pointer ${
                projectType === 'landing'
                  ? 'border-cyan-400/70 bg-cyan-950/30 text-white shadow-[0_0_15px_rgba(6,182,212,0.15)] ring-1 ring-cyan-400/40'
                  : 'border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              <span className="font-bold block text-sm mb-1 text-white">Landing Page</span>
              <span className="text-[11px] text-slate-400 leading-snug block font-normal">Base: Carga &lt;2s + conversión a 1 producto o servicio</span>
            </button>

            <button
              type="button"
              onClick={() => setProjectType('corporativa')}
              className={`p-3.5 text-left rounded-xl border text-xs font-sans transition-all duration-150 active:scale-[0.98] cursor-pointer ${
                projectType === 'corporativa'
                  ? 'border-cyan-400/70 bg-cyan-950/30 text-white shadow-[0_0_15px_rgba(6,182,212,0.15)] ring-1 ring-cyan-400/40'
                  : 'border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              <span className="font-bold block text-sm mb-1 text-white">Web Corporativa</span>
              <span className="text-[11px] text-slate-400 leading-snug block font-normal">Landing + Multi-página + SEO en Google Maps</span>
            </button>

            <button
              type="button"
              onClick={() => setProjectType('ecommerce')}
              className={`p-3.5 text-left rounded-xl border text-xs font-sans transition-all duration-150 active:scale-[0.98] cursor-pointer ${
                projectType === 'ecommerce'
                  ? 'border-cyan-400/70 bg-cyan-950/30 text-white shadow-[0_0_15px_rgba(6,182,212,0.15)] ring-1 ring-cyan-400/40'
                  : 'border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              <span className="font-bold block text-sm mb-1 text-white">Tienda / Software</span>
              <span className="text-[11px] text-slate-400 leading-snug block font-normal">Corporativa + Catálogo transaccional o a medida</span>
            </button>
          </div>
        </div>

        {/* Selector 2: Estado del sitio y Canal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2.5">
            <label className="text-xs sm:text-sm font-sans font-medium text-slate-300 block">
              2. ¿Partes desde cero o es rediseño?
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setStartingState('desde-cero')}
                className={`py-2.5 px-3 rounded-lg border text-xs font-sans transition-all duration-150 active:scale-[0.98] cursor-pointer ${
                  startingState === 'desde-cero'
                    ? 'border-cyan-400/60 bg-cyan-950/20 text-white font-semibold'
                    : 'border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20'
                }`}
              >
                Desde cero
              </button>
              <button
                type="button"
                onClick={() => setStartingState('rediseno')}
                className={`py-2.5 px-3 rounded-lg border text-xs font-sans transition-all duration-150 active:scale-[0.98] cursor-pointer ${
                  startingState === 'rediseno'
                    ? 'border-cyan-400/60 bg-cyan-950/20 text-white font-semibold'
                    : 'border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20'
                }`}
              >
                Rediseño web
              </button>
            </div>
          </div>

          <div className="space-y-2.5">
            <label className="text-xs sm:text-sm font-sans font-medium text-slate-300 block">
              3. ¿Cuál será la ruta de conversión?
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setConversionGoal('whatsapp')}
                className={`py-2.5 px-3 rounded-lg border text-xs font-sans transition-all duration-150 active:scale-[0.98] cursor-pointer ${
                  conversionGoal === 'whatsapp'
                    ? 'border-cyan-400/60 bg-cyan-950/20 text-white font-semibold'
                    : 'border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20'
                }`}
              >
                Chat WhatsApp
              </button>
              <button
                type="button"
                onClick={() => setConversionGoal('pasarela')}
                className={`py-2.5 px-3 rounded-lg border text-xs font-sans transition-all duration-150 active:scale-[0.98] cursor-pointer ${
                  conversionGoal === 'pasarela'
                    ? 'border-cyan-400/60 bg-cyan-950/20 text-white font-semibold'
                    : 'border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20'
                }`}
              >
                Pagos en línea
              </button>
            </div>
          </div>
        </div>

        {/* Caja de Resultados y Diagnóstico en Vivo */}
        <div className="pt-6 border-t border-white/[0.08] bg-black/40 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8 rounded-b-2xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-sans text-slate-400 block mb-1">
                Presupuesto justo de mercado en Colombia:
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold font-sans text-cyan-400 tracking-tight">
                {calc.priceRange}
              </div>
            </div>

            <div className="text-left sm:text-right space-y-0.5 text-xs font-sans text-slate-400">
              <div>Plazo de entrega: <span className="text-white font-medium">{calc.timeEstimate}</span></div>
              <div>Hospedaje: <span className="text-emerald-400 font-medium">{calc.hostingEstimate}</span></div>
            </div>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-white/[0.06] text-xs font-sans text-slate-300 font-normal">
            {calc.includedHighlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold shrink-0">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs font-sans tracking-wide transition-all duration-150 shadow-lg flex items-center justify-center gap-2.5 cursor-pointer group active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-4 h-4 fill-slate-950 shrink-0" />
              <span>Validar este cálculo con Juan Pablo por WhatsApp</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <p className="text-xs text-center text-slate-400 mt-2.5 font-sans">
              Respuesta directa en menos de 2 horas hábiles · Cero intermediarios
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
