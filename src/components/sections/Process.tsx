import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { highlightBrandKeywords } from '../../utils/textHighlight';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Process: React.FC = () => {
  const { t, language } = useLanguage();
  const isSpanish = language === 'es';
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const rowsContainerRef = useRef<HTMLDivElement | null>(null);

  // Expands on hover (step 0 open by default for accessible, visible content at rest)
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

      // Staggered reveal for process cards on scroll
      if (rowsContainerRef.current) {
        const rows = rowsContainerRef.current.querySelectorAll('.process-card-row');
        gsap.fromTo(
          rows,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rowsContainerRef.current,
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
      className="py-10 sm:py-24 lg:py-32 border-b border-black/[0.08] bg-[#fafaf8] relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        {/* Clean Section Header */}
        <div ref={headerRef} className="relative mb-8 sm:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 lg:gap-12">
            <div className="max-w-3xl">
              <h2
                ref={titleRef}
                className="text-[2.35rem] sm:text-4xl lg:text-[3.25rem] font-semibold tracking-tight text-[#111111] leading-[1.1] select-none"
              >
                <span className="block">{t.process.headerLine1.trim()}{' '}</span>
                <span className="block text-[#111111]">{highlightBrandKeywords(t.process.headerLine2)}</span>
              </h2>
            </div>

            {/* SEO Description to the right */}
            <div className="lg:max-w-md pb-1">
              <p
                ref={descRef}
                className="text-sm sm:text-base text-black/75 font-sans font-normal leading-relaxed pt-1 sm:pt-0"
              >
                {highlightBrandKeywords(t.process.seoDescription)}
              </p>
            </div>
          </div>
        </div>

        {/* Conduit Timeline Connected Architecture (Opción 1) */}
        <div ref={rowsContainerRef} className="relative pl-8 sm:pl-12 space-y-3.5 sm:space-y-8">
          {/* Continuous Vertical Conduit Line */}
          <div className="absolute left-4 sm:left-6 top-8 bottom-10 w-[1px] bg-black/15 -translate-x-1/2 pointer-events-none" />

          {t.process.steps.map((step, idx) => {
            const isOpen = expandedRow === idx;
            return (
              <div
                key={idx}
                className="process-card-row relative group will-change-[transform,opacity]"
                onMouseEnter={() => {
                  if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
                    setExpandedRow(idx);
                  }
                }}
                onMouseLeave={() => {
                  if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
                    setExpandedRow(null);
                  }
                }}
              >
                {/* Node anchored on the conduit line: Number above + Solid/Ring dot below */}
                <div className="absolute -left-8 sm:-left-12 w-8 sm:w-12 top-2.5 sm:top-5 flex flex-col items-center z-10 select-none pointer-events-none">
                  {/* Step number above */}
                  <span
                    className={`text-[11px] sm:text-xs font-mono transition-colors duration-300 mb-1 sm:mb-1.5 ${
                      isOpen ? 'text-black font-semibold' : 'text-black/40 font-normal group-hover:text-black/70'
                    }`}
                  >
                    {step.number}
                  </span>

                  {/* Dot: Solid black if open, hollow ring if closed */}
                  <div
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      isOpen
                        ? 'bg-black ring-4 ring-[#fafaf8] scale-110'
                        : 'border-[1.5px] border-black/35 bg-[#fafaf8] group-hover:border-black/70'
                    }`}
                  />
                </div>

                {/* Step Card Container (Expands on Hover/Tap) */}
                <div
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-controls={`process-step-content-${idx}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setExpandedRow((prev) => (prev === idx ? null : idx));
                    }
                  }}
                  onClick={() => setExpandedRow((prev) => (prev === idx ? null : idx))}
                  className={`p-4 sm:p-8 rounded-2xl sm:rounded-[2.2rem] border transition-all duration-300 cursor-pointer ${
                    isOpen
                      ? 'bg-white border-black/15 shadow-md -translate-y-0.5'
                      : 'bg-white/70 border-black/[0.07] hover:bg-white hover:border-black/15'
                  }`}
                >
                  {/* Mobile Header (md:hidden) */}
                  <div className="md:hidden">
                    {isOpen ? (
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-sans font-medium tracking-wide text-black/50 select-none">
                            {isSpanish ? `Paso ${step.number}` : `Step ${step.number}`}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedRow(null);
                            }}
                            className="w-7 h-7 rounded-full bg-black/[0.05] flex items-center justify-center text-black/60 hover:bg-black/10 transition-colors"
                            aria-label="Cerrar paso"
                          >
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18"/>
                              <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                          </button>
                        </div>

                        <div className="flex items-start justify-between gap-3 pt-0.5">
                          <div className="text-xl font-bold font-display text-[#111111] tracking-tight leading-snug">
                            {highlightBrandKeywords(step.title)}
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] text-xs font-sans font-medium text-black/75 whitespace-nowrap shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5 text-black/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                            </svg>
                            <span>{step.timeframe}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-lg font-display font-semibold text-[#111111] tracking-tight leading-snug">
                          {highlightBrandKeywords(step.title)}
                        </div>
                        <div className="flex items-center gap-2 shrink-0 pt-0.5">
                          <span className="text-[11px] font-sans font-medium text-black/60 px-2.5 py-0.5 rounded-full bg-black/[0.04] whitespace-nowrap">
                            {step.timeframe}
                          </span>
                          <span className="text-base font-light text-black/40">
                            +
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Desktop Header (hidden md:flex) - 100% UNTOUCHED */}
                  <div className="hidden md:flex items-center justify-between gap-4">
                    <h3 className="text-xl sm:text-2xl lg:text-[1.65rem] font-display font-semibold text-[#111111] tracking-tight leading-snug">
                      {highlightBrandKeywords(step.title)}
                    </h3>

                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-xs font-sans font-medium text-black/60 px-3 py-1 rounded-full bg-black/[0.04] whitespace-nowrap">
                        {step.timeframe}
                      </span>
                      <span
                        className={`text-base font-light text-black/40 transition-transform duration-300 ${
                          isOpen ? 'rotate-45 text-black' : 'group-hover:text-black'
                        }`}
                      >
                        +
                      </span>
                    </div>
                  </div>

                  {/* Silky CSS Grid-Rows Height Expansion */}
                  <div
                    id={`process-step-content-${idx}`}
                    className={`grid transition-all duration-300 ease-out overflow-hidden ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-black/[0.06]'
                        : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0'
                    }`}
                  >
                    <div className="min-h-0">
                      {/* Mobile Expanded View matching user reference exact structure */}
                      <div className="space-y-4 md:hidden">
                        {/* Qué resolvemos */}
                        <div className="flex items-start gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="11" cy="11" r="8"/>
                              <path d="m21 21-4.35-4.35"/>
                            </svg>
                          </div>
                          <div className="space-y-1 pt-0.5">
                            <div className="text-sm font-bold text-[#111111] tracking-tight">
                              {isSpanish ? 'Qué resolvemos' : 'What we solve'}
                            </div>
                            <p className="text-xs text-black/70 font-sans leading-relaxed">
                              {highlightBrandKeywords(step.description)}
                            </p>
                          </div>
                        </div>

                        {/* Tu tiempo invertido */}
                        <div className="flex items-start gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                              <circle cx="12" cy="7" r="4"/>
                            </svg>
                          </div>
                          <div className="space-y-1 pt-0.5">
                            <div className="text-sm font-bold text-[#111111] tracking-tight">
                              {isSpanish ? 'Tu tiempo invertido' : 'Your time investment'}
                            </div>
                            <p className="text-xs text-black/70 font-sans leading-relaxed">
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
                        </div>

                        {/* Entregable verificado */}
                        <div className="bg-[#f0f9f4] border border-emerald-900/10 rounded-xl p-3.5 flex items-start gap-3 mt-4">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1 shrink-0" />
                          <div className="space-y-0.5">
                            <span className="block text-[11px] font-semibold text-emerald-700">
                              {isSpanish ? 'Entregable verificado' : 'Verified deliverable'}
                            </span>
                            <p className="text-xs font-medium text-black">
                              {highlightBrandKeywords(step.deliverable)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Desktop Expanded View (hidden md:grid) - 100% UNTOUCHED */}
                      <div className="hidden md:grid md:grid-cols-12 gap-4 sm:gap-6 items-start">
                        <div className="md:col-span-5 space-y-1 sm:space-y-1.5">
                          <h4 className="text-xs sm:text-sm font-display font-medium text-black tracking-tight m-0">
                            {isSpanish ? 'Qué resolvemos' : 'What we solve'}
                          </h4>
                          <p className="text-xs sm:text-sm text-black/70 font-sans leading-relaxed">
                            {highlightBrandKeywords(step.description)}
                          </p>
                        </div>

                        <div className="md:col-span-3 space-y-1 sm:space-y-1.5">
                          <h4 className="text-xs sm:text-sm font-display font-medium text-black tracking-tight m-0">
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

                        <div className="md:col-span-4 md:pl-6 md:border-l border-black/10 space-y-1 sm:space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="text-[10px] sm:text-[11px] font-sans text-black/50 font-medium">
                              {isSpanish ? 'Entregable verificado' : 'Verified deliverable'}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm font-display text-black font-normal leading-snug">
                            {highlightBrandKeywords(step.deliverable)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
