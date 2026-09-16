import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StrategyGlyph } from './process/StrategyGlyph';
import { CraftGlyph } from './process/CraftGlyph';
import { LaunchGlyph } from './process/LaunchGlyph';

gsap.registerPlugin(ScrollTrigger);

export const Process: React.FC = () => {
  const { t, language } = useLanguage();
  const isSpanish = language === 'es';
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const line1FillRef = useRef<HTMLSpanElement | null>(null);
  const line2FillRef = useRef<HTMLSpanElement | null>(null);
  const [expandedRow, setExpandedRow] = useState<number | null>(0);

  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 88%',
          end: 'top 35%',
          scrub: 0.7,
        },
      });

      if (line1FillRef.current) {
        tl.fromTo(
          line1FillRef.current,
          { clipPath: 'inset(0 100% 0 0)', scale: 1.03, y: 6 },
          { clipPath: 'inset(0 0% 0 0)', scale: 1, y: 0, ease: 'power2.out', duration: 0.9 },
          0
        );
      }

      if (line2FillRef.current) {
        tl.fromTo(
          line2FillRef.current,
          { clipPath: 'inset(0 100% 0 0)', scale: 1.03, x: -10 },
          { clipPath: 'inset(0 0% 0 0)', scale: 1, x: 0, ease: 'power2.out', duration: 0.9 },
          0.15
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 border-b border-black/[0.08] bg-[#fafaf8] relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        {/* Section Header with Refokus-style Kinetic Ink Sweep */}
        <div ref={headerRef} className="mb-14 sm:mb-20">
          <div className="space-y-2 sm:space-y-3 max-w-4xl">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal font-display tracking-[-0.01em] leading-[1.12] sm:leading-[1.15]">
              {/* Line 1 */}
              <div className="relative inline-block pb-1">
                <span className="text-transparent [-webkit-text-stroke:1.2px_rgba(0,0,0,0.3)] sm:[-webkit-text-stroke:1.5px_rgba(0,0,0,0.35)] select-none">
                  {t.process.headerLine1}
                </span>
                <span
                  ref={line1FillRef}
                  className="absolute inset-0 text-black select-none will-change-transform"
                  style={{ clipPath: 'inset(0 100% 0 0)' }}
                >
                  {t.process.headerLine1}
                </span>
              </div>
              <br />
              {/* Line 2 with asymmetric offset */}
              <div className="relative inline-block sm:pl-10 lg:pl-16 pb-1">
                <span className="text-transparent [-webkit-text-stroke:1.2px_rgba(0,0,0,0.3)] sm:[-webkit-text-stroke:1.5px_rgba(0,0,0,0.35)] select-none">
                  {t.process.headerLine2}
                </span>
                <span
                  ref={line2FillRef}
                  className="absolute inset-0 sm:pl-10 lg:pl-16 text-black select-none will-change-transform"
                  style={{ clipPath: 'inset(0 100% 0 0)' }}
                >
                  {t.process.headerLine2}
                </span>
              </div>
            </h2>

            <p className="pt-4 text-base sm:text-lg text-black/60 max-w-2xl font-sans font-normal leading-relaxed">
              {t.process.tagline}
            </p>
          </div>
        </div>

        {/* Monumental Editorial Ledger Rows */}
        <div className="space-y-12">
          <div className="border-y border-black/[0.12] divide-y divide-black/[0.08]">
            {/* Row 01 */}
            <div
              className="py-8 sm:py-10 transition-colors duration-300 group cursor-pointer"
              onClick={() => setExpandedRow(expandedRow === 0 ? null : 0)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4 sm:gap-6">
                  <StrategyGlyph />
                  <h3 className="text-2xl sm:text-4xl font-display font-normal text-black tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
                    {isSpanish ? 'Diagnóstico Estratégico y Propuesta' : 'Strategic Diagnosis & Architecture'}
                  </h3>
                </div>

                <div className="flex items-center gap-6 self-end md:self-auto">
                  <span className="text-xs font-sans font-medium text-black/60 px-3 py-1 rounded-full bg-black/5">
                    48 Horas
                  </span>
                  <span className="text-lg font-light text-black/40 group-hover:text-black transition-transform duration-300">
                    {expandedRow === 0 ? '—' : '+'}
                  </span>
                </div>
              </div>

              {/* Smooth Expandable Content */}
              {expandedRow === 0 && (
                <div className="mt-8 pt-6 border-t border-black/[0.06] grid grid-cols-1 md:grid-cols-12 gap-8 items-start animate-in fade-in duration-200">
                  <div className="md:col-span-5 space-y-2.5">
                    <h4 className="text-base sm:text-lg font-display font-medium text-black tracking-tight">
                      {isSpanish ? 'Qué resolvemos' : 'What we solve'}
                    </h4>
                    <p className="text-sm text-black/70 font-sans leading-relaxed">
                      {isSpanish
                        ? 'Analizamos tus servicios más rentables, la competencia en tu sector y el comportamiento de tus clientes. Diseñamos la arquitectura de la página y organizamos tus contenidos con enfoque en conversión y claridad.'
                        : 'We analyze your highest-value services, competitor landscape, and target clients. We structure the information architecture and refine your content messaging for maximum clarity.'}
                    </p>
                  </div>

                  <div className="md:col-span-3 space-y-2.5">
                    <h4 className="text-base sm:text-lg font-display font-medium text-black tracking-tight">
                      {isSpanish ? 'Tu tiempo invertido' : 'Your time investment'}
                    </h4>
                    <p className="text-sm text-black/70 font-sans leading-relaxed">
                      {isSpanish
                        ? 'Una videollamada de 30 minutos y el envío de tus insumos básicos de marca.'
                        : 'A single 30-minute kick-off call and providing your basic brand assets.'}
                    </p>
                  </div>

                  <div className="md:col-span-4 p-5 rounded-2xl bg-white border border-black/10 shadow-xs space-y-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-xs font-sans text-emerald-800 font-medium tracking-wide">
                        {isSpanish ? 'Entregable firmado' : 'Signed deliverable'}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-display font-medium text-black leading-snug">
                      {isSpanish ? 'Estructura Estratégica & Arquitectura Web' : 'Strategic Architecture & Content Structure'}
                    </h4>
                  </div>
                </div>
              )}
            </div>

            {/* Row 02 */}
            <div
              className="py-8 sm:py-10 transition-colors duration-300 group cursor-pointer"
              onClick={() => setExpandedRow(expandedRow === 1 ? null : 1)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4 sm:gap-6">
                  <CraftGlyph />
                  <h3 className="text-2xl sm:text-4xl font-display font-normal text-black tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
                    {isSpanish ? 'Maquetación Interactiva y Pruebas en Móvil' : 'Interactive Craft & Live Mobile Staging'}
                  </h3>
                </div>

                <div className="flex items-center gap-6 self-end md:self-auto">
                  <span className="text-xs font-sans font-medium text-black/60 px-3 py-1 rounded-full bg-black/5">
                    Días 3 al 10
                  </span>
                  <span className="text-lg font-light text-black/40 group-hover:text-black transition-transform duration-300">
                    {expandedRow === 1 ? '—' : '+'}
                  </span>
                </div>
              </div>

              {/* Smooth Expandable Content */}
              {expandedRow === 1 && (
                <div className="mt-8 pt-6 border-t border-black/[0.06] grid grid-cols-1 md:grid-cols-12 gap-8 items-start animate-in fade-in duration-200">
                  <div className="md:col-span-5 space-y-2.5">
                    <h4 className="text-base sm:text-lg font-display font-medium text-black tracking-tight">
                      {isSpanish ? 'Qué resolvemos' : 'What we solve'}
                    </h4>
                    <p className="text-sm text-black/70 font-sans leading-relaxed">
                      {isSpanish
                        ? 'Construimos tu plataforma web con código puro en React 19 y TypeScript, sin plantillas genéricas. Carga instantánea sub-segundo, animaciones fluidas aceleradas por hardware y ruteo directo hacia tus canales de venta.'
                        : 'We craft your bespoke web platform in pure React 19 and TypeScript—zero generic templates. Sub-second load speed, hardware-accelerated motion, and frictionless routing.'}
                    </p>
                  </div>

                  <div className="md:col-span-3 space-y-2.5">
                    <h4 className="text-base sm:text-lg font-display font-medium text-black tracking-tight">
                      {isSpanish ? 'Tu tiempo invertido' : 'Your time investment'}
                    </h4>
                    <p className="text-sm text-black/70 font-sans leading-relaxed">
                      {isSpanish
                        ? 'Probar y navegar la web en vivo desde tu propio móvil en un enlace privado.'
                        : 'Navigating and testing the experience live on your smartphone via private staging.'}
                    </p>
                  </div>

                  <div className="md:col-span-4 p-5 rounded-2xl bg-white border border-black/10 shadow-xs space-y-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-xs font-sans text-emerald-800 font-medium tracking-wide">
                        {isSpanish ? 'Entregable firmado' : 'Signed deliverable'}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-display font-medium text-black leading-snug">
                      {isSpanish ? 'Enlace Privado de Staging en Vivo' : 'Private Live Staging Preview Link'}
                    </h4>
                  </div>
                </div>
              )}
            </div>

            {/* Row 03 */}
            <div
              className="py-8 sm:py-10 transition-colors duration-300 group cursor-pointer"
              onClick={() => setExpandedRow(expandedRow === 2 ? null : 2)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4 sm:gap-6">
                  <LaunchGlyph />
                  <h3 className="text-2xl sm:text-4xl font-display font-normal text-black tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
                    {isSpanish ? 'Puesta en Marcha y Entrega Llave en Mano' : 'Turnkey Launch & Handover'}
                  </h3>
                </div>

                <div className="flex items-center gap-6 self-end md:self-auto">
                  <span className="text-xs font-sans font-medium text-black/60 px-3 py-1 rounded-full bg-black/5">
                    Días 11 al 14
                  </span>
                  <span className="text-lg font-light text-black/40 group-hover:text-black transition-transform duration-300">
                    {expandedRow === 2 ? '—' : '+'}
                  </span>
                </div>
              </div>

              {/* Smooth Expandable Content */}
              {expandedRow === 2 && (
                <div className="mt-8 pt-6 border-t border-black/[0.06] grid grid-cols-1 md:grid-cols-12 gap-8 items-start animate-in fade-in duration-200">
                  <div className="md:col-span-5 space-y-2.5">
                    <h4 className="text-base sm:text-lg font-display font-medium text-black tracking-tight">
                      {isSpanish ? 'Qué resolvemos' : 'What we solve'}
                    </h4>
                    <p className="text-sm text-black/70 font-sans leading-relaxed">
                      {isSpanish
                        ? 'Conectamos tu dominio corporativo, activamos certificado SSL en el edge, integramos tus canales prioritarios de contacto y configuramos el SEO técnico con indexación oficial. Recibes el 100% de la propiedad sin ataduras.'
                        : 'We connect your corporate domain, deploy SSL security on the global edge, integrate your direct contact channels, and configure technical SEO. You receive 100% full ownership with zero lock-in.'}
                    </p>
                  </div>

                  <div className="md:col-span-3 space-y-2.5">
                    <h4 className="text-base sm:text-lg font-display font-medium text-black tracking-tight">
                      {isSpanish ? 'Tu tiempo invertido' : 'Your time investment'}
                    </h4>
                    <p className="text-sm text-black/70 font-sans leading-relaxed">
                      {isSpanish
                        ? 'Recibir tus accesos y comenzar a operar con tu nueva presencia web.'
                        : 'Receiving your credentials and operating with your new web presence.'}
                    </p>
                  </div>

                  <div className="md:col-span-4 p-5 rounded-2xl bg-white border border-black/10 shadow-xs space-y-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-xs font-sans text-emerald-800 font-medium tracking-wide">
                        {isSpanish ? 'Entregable firmado' : 'Signed deliverable'}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-display font-medium text-black leading-snug">
                      {isSpanish ? 'Web en Producción & Propiedad Total Transferida' : 'Live Production Site & Full Ownership Transfer'}
                    </h4>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 14-Day Delivery Sprint Commitment */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#1C1D20] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-sans text-emerald-400 font-medium block">
                {isSpanish ? 'Compromiso de ejecución rigurosa' : 'Phased delivery commitment'}
              </span>
              <h4 className="text-xl sm:text-2xl font-normal font-display text-white">
                {isSpanish
                  ? 'Metodología ágil en 14 días laborables'
                  : 'Agile 14-business-day delivery sprint'}
              </h4>
              <p className="text-xs sm:text-sm text-white/70 font-sans font-light max-w-xl">
                {isSpanish
                  ? 'Sprints cerrados con fechas exactas de revisión y entregables tangibles en cada etapa. Cero proyectos estancados ni demoras de meses típicas de agencias tradicionales.'
                  : 'Structured sprints with clear review milestones and tangible deliverables at every phase. Zero stalled projects or multi-month agency delays.'}
              </p>
            </div>

            <div className="px-5 py-3 rounded-xl bg-white/10 border border-white/15 text-xs font-sans text-white/90 font-medium text-center shrink-0">
              {isSpanish ? '14 Días • 100% Llave en Mano' : '14 Days • 100% Turnkey'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
