import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ProcessOption = 'timeline' | 'pipeline' | 'stacked';

export const Process: React.FC = () => {
  const { t, language } = useLanguage();
  const isSpanish = language === 'es';
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const contentContainerRef = useRef<HTMLDivElement | null>(null);

  const [previewMode, setPreviewMode] = useState<ProcessOption>('timeline');
  const [expandedRow, setExpandedRow] = useState<number | null>(0);

  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      // Clean minimalist fade-and-rise animation for title
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Entrance for SEO description
      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            delay: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Staggered reveal for initial content container
      if (contentContainerRef.current) {
        gsap.fromTo(
          contentContainerRef.current,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentContainerRef.current,
              start: 'top 90%',
              once: true,
            },
          }
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
        {/* Clean Editorial Section Header */}
        <div ref={headerRef} className="relative mb-10 sm:mb-14">
          {/* Editorial Category Label above Title (Clean Text, No Capsule) */}
          <div className="mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-sans font-medium text-black/50 tracking-wide select-none">
              {t.process.tag}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
            <div className="max-w-3xl">
              <h2
                ref={titleRef}
                className="text-4xl sm:text-6xl lg:text-7xl font-normal font-display tracking-[-0.02em] text-[#111111] leading-[1.12] sm:leading-[1.15] select-none"
              >
                <span className="block">{t.process.headerLine1}</span>
                <span className="block sm:pl-10 lg:pl-16 text-black/60">{t.process.headerLine2}</span>
              </h2>
            </div>

            {/* SEO Description to the right */}
            <div className="lg:max-w-md pb-1">
              <p
                ref={descRef}
                className="text-sm sm:text-base text-black/65 font-sans font-normal leading-relaxed"
              >
                {t.process.seoDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Live Interactive Concept Preview Switcher */}
        <div className="mb-10 sm:mb-14 p-2 rounded-2xl bg-black/[0.03] border border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 pl-3">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-xs font-mono text-black/60 font-medium select-none">
              {isSpanish ? 'Previsualización interactiva de conceptos:' : 'Interactive concept preview:'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              type="button"
              onClick={() => setPreviewMode('timeline')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-sans font-medium transition-all duration-200 cursor-pointer ${
                previewMode === 'timeline'
                  ? 'bg-[#111111] text-white shadow-xs'
                  : 'text-black/60 hover:text-black hover:bg-black/[0.04]'
              }`}
            >
              {isSpanish ? 'Opción A: Columna Vertebral' : 'Option A: Conduit Timeline'}
            </button>
            <button
              type="button"
              onClick={() => setPreviewMode('pipeline')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-sans font-medium transition-all duration-200 cursor-pointer ${
                previewMode === 'pipeline'
                  ? 'bg-[#111111] text-white shadow-xs'
                  : 'text-black/60 hover:text-black hover:bg-black/[0.04]'
              }`}
            >
              {isSpanish ? 'Opción B: Pipeline Enlazado' : 'Option B: Step-flow Pipeline'}
            </button>
            <button
              type="button"
              onClick={() => setPreviewMode('stacked')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-sans font-medium transition-all duration-200 cursor-pointer ${
                previewMode === 'stacked'
                  ? 'bg-[#111111] text-white shadow-xs'
                  : 'text-black/60 hover:text-black hover:bg-black/[0.04]'
              }`}
            >
              {isSpanish ? 'Opción C: Tarjetas Escalón' : 'Option C: Interlocking Stepper'}
            </button>
          </div>
        </div>

        {/* Dynamic Display of the 3 Connected Process Architectures */}
        <div ref={contentContainerRef}>
          {/* ============================================================== */}
          {/* OPCIÓN A: Columna Vertebral / Conduit Timeline                  */}
          {/* ============================================================== */}
          {previewMode === 'timeline' && (
            <div className="relative pl-6 sm:pl-10 space-y-8 animate-in fade-in duration-300">
              {/* Continuous Vertical Conduit Line */}
              <div className="absolute left-2.5 sm:left-4 top-6 bottom-8 w-[1.5px] bg-black/[0.12] -translate-x-1/2" />

              {t.process.steps.map((step, idx) => {
                const isOpen = expandedRow === idx;
                return (
                  <div key={idx} className="relative group">
                    {/* Node anchored on the conduit line */}
                    <div
                      className={`absolute -left-6 sm:-left-10 top-5 w-6 h-6 sm:w-8 sm:h-8 rounded-full border transition-all duration-300 flex items-center justify-center -translate-x-1/2 z-10 select-none ${
                        isOpen
                          ? 'bg-[#111111] border-[#111111] text-white scale-110 shadow-xs'
                          : 'bg-white border-black/20 text-black/60 group-hover:border-black group-hover:text-black'
                      }`}
                    >
                      <span className="text-[10px] sm:text-xs font-mono font-medium">{step.number}</span>
                    </div>

                    {/* Step Card Container */}
                    <div
                      onClick={() => setExpandedRow(isOpen ? null : idx)}
                      className={`p-6 sm:p-8 rounded-[1.8rem] sm:rounded-[2.2rem] border transition-all duration-300 cursor-pointer ${
                        isOpen
                          ? 'bg-white border-black/15 shadow-sm'
                          : 'bg-white/70 border-black/[0.07] hover:bg-white hover:border-black/15'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-mono text-black/40 font-medium sm:hidden">
                            {step.number}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-display font-normal text-[#111111] tracking-tight">
                            {step.title}
                          </h3>
                        </div>

                        <div className="flex items-center gap-4 self-end sm:self-auto">
                          <span className="text-xs font-sans font-medium text-black/60 px-3 py-1 rounded-full bg-black/[0.04]">
                            {step.timeframe}
                          </span>
                          <span className="text-base font-light text-black/40 group-hover:text-black transition-transform duration-200">
                            {isOpen ? '—' : '+'}
                          </span>
                        </div>
                      </div>

                      {/* Expandable Breakdown */}
                      {isOpen && (
                        <div className="mt-6 pt-6 border-t border-black/[0.06] grid grid-cols-1 md:grid-cols-12 gap-6 items-start animate-in fade-in duration-200">
                          <div className="md:col-span-5 space-y-1.5">
                            <h4 className="text-sm font-display font-medium text-black tracking-tight">
                              {isSpanish ? 'Qué resolvemos' : 'What we solve'}
                            </h4>
                            <p className="text-xs sm:text-sm text-black/70 font-sans leading-relaxed">
                              {step.description}
                            </p>
                          </div>

                          <div className="md:col-span-3 space-y-1.5">
                            <h4 className="text-sm font-display font-medium text-black tracking-tight">
                              {isSpanish ? 'Tu tiempo invertido' : 'Your time investment'}
                            </h4>
                            <p className="text-xs sm:text-sm text-black/70 font-sans leading-relaxed">
                              {idx === 0 &&
                                (isSpanish
                                  ? 'Una videollamada de 30 minutos y tus insumos básicos.'
                                  : 'A 30-minute kick-off call and basic brand assets.')}
                              {idx === 1 &&
                                (isSpanish
                                  ? 'Probar la experiencia en vivo desde tu propio celular.'
                                  : 'Testing the live experience on your mobile device.')}
                              {idx === 2 &&
                                (isSpanish
                                  ? 'Recibir accesos y comenzar a operar con tu web.'
                                  : 'Receiving credentials and operating your website.')}
                            </p>
                          </div>

                          <div className="md:col-span-4 md:pl-6 md:border-l border-black/10 space-y-1.5">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              <span className="text-[11px] font-sans text-black/50 font-medium">
                                {isSpanish ? 'Entregable verificado' : 'Verified deliverable'}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm font-display text-black font-normal leading-snug">
                              {step.deliverable}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ============================================================== */}
          {/* OPCIÓN B: Pipeline Enlazado / Horizontal Step-flow              */}
          {/* ============================================================== */}
          {previewMode === 'pipeline' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Desktop Connecting Wire Header */}
              <div className="hidden lg:flex items-center justify-between px-12 relative">
                <div className="absolute left-16 right-16 top-1/2 -translate-y-1/2 h-[1px] bg-black/[0.12] z-0" />
                {t.process.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="relative z-10 flex items-center gap-2 bg-[#fafaf8] px-3 py-1 rounded-full border border-black/[0.08]"
                  >
                    <span className="w-2 h-2 rounded-full bg-black/40" />
                    <span className="text-xs font-mono text-black/70 font-medium">
                      {isSpanish ? `Paso ${step.number}` : `Step ${step.number}`} · {step.timeframe}
                    </span>
                  </div>
                ))}
              </div>

              {/* 3 Interconnected Step Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
                {t.process.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-7 sm:p-9 rounded-[2.2rem] bg-white border border-black/[0.08] shadow-xs hover:shadow-xl hover:border-black/20 transition-all duration-300 flex flex-col justify-between h-full group relative"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                        <span className="text-xl sm:text-2xl font-mono font-normal text-black/35 group-hover:text-black transition-colors duration-300 select-none">
                          {step.number}
                        </span>
                        <span className="text-xs font-sans font-medium text-black/60 px-3 py-1 rounded-full bg-black/[0.04]">
                          {step.timeframe}
                        </span>
                      </div>

                      <h3 className="text-2xl font-display font-normal text-[#111111] tracking-tight leading-snug">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-black/70 font-sans leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Step Flow Bridge Indicator */}
                    <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs text-black/55 font-mono">
                      <span>{step.deliverable}</span>
                      {idx < 2 ? (
                        <span className="text-black/30 group-hover:text-black group-hover:translate-x-1 transition-all duration-300">
                          →
                        </span>
                      ) : (
                        <span className="text-emerald-600">✓ Listo</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* OPCIÓN C: Tarjetas Escalón Superpuestas / Interlocking Stepper  */}
          {/* ============================================================== */}
          {previewMode === 'stacked' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              {t.process.steps.map((step, idx) => {
                const nextStep = t.process.steps[idx + 1];
                return (
                  <div key={idx} className="relative group">
                    <div className="p-7 sm:p-9 rounded-[2rem] bg-white border border-black/[0.08] shadow-xs hover:border-black/20 hover:shadow-md transition-all duration-300">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        {/* Giant Minimalist Number */}
                        <div className="lg:col-span-2 flex items-center gap-4">
                          <span className="text-4xl sm:text-5xl lg:text-6xl font-display font-light text-black/25 group-hover:text-black transition-colors duration-300 select-none">
                            {step.number}
                          </span>
                          <span className="text-xs font-sans font-medium text-black/60 px-3 py-1 rounded-full bg-black/[0.04] lg:hidden">
                            {step.timeframe}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div className="lg:col-span-7 space-y-1.5">
                          <h3 className="text-2xl sm:text-3xl font-display font-normal text-[#111111] tracking-tight">
                            {step.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-black/70 font-sans leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Timing & Output Badge */}
                        <div className="lg:col-span-3 lg:text-right space-y-1 border-t lg:border-t-0 lg:border-l border-black/[0.06] pt-4 lg:pt-0 lg:pl-6">
                          <span className="hidden lg:inline-block text-xs font-sans font-medium text-black/60 px-3 py-1 rounded-full bg-black/[0.04]">
                            {step.timeframe}
                          </span>
                          <p className="text-xs text-black/55 font-mono leading-tight">
                            {step.deliverable}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Physical Interlocking Connector to Next Step */}
                    {nextStep && (
                      <div className="flex items-center justify-center -my-2.5 relative z-10">
                        <div className="px-4 py-1 rounded-full bg-[#fafaf8] border border-black/[0.12] text-[11px] font-mono text-black/60 flex items-center gap-2 shadow-xs group-hover:border-black/30 group-hover:text-black transition-colors duration-200">
                          <span>{step.timeframe}</span>
                          <span className="text-black/30">▼</span>
                          <span className="text-black/40">Fase siguiente</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
