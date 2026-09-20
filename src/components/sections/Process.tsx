import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
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

  // Expands on hover (null by default so it opens on cursor enter and closes on cursor leave)
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

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
      className="py-16 sm:py-24 lg:py-32 border-b border-black/[0.08] bg-[#fafaf8] relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        {/* Clean Editorial Section Header */}
        <div ref={headerRef} className="relative mb-12 sm:mb-16">
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

        {/* Conduit Timeline Connected Architecture (Opción A) */}
        <div ref={rowsContainerRef} className="relative pl-6 sm:pl-10 space-y-6 sm:space-y-8">
          {/* Continuous Vertical Conduit Line */}
          <div className="absolute left-2.5 sm:left-4 top-6 bottom-8 w-[1.5px] bg-black/[0.12] -translate-x-1/2 pointer-events-none" />

          {t.process.steps.map((step, idx) => {
            const isOpen = expandedRow === idx;
            return (
              <div
                key={idx}
                className="process-card-row relative group will-change-[transform,opacity]"
                onMouseEnter={() => setExpandedRow(idx)}
                onMouseLeave={() => setExpandedRow(null)}
              >
                {/* Node anchored on the conduit line */}
                <div
                  className={`absolute -left-6 sm:-left-10 top-5 w-6 h-6 sm:w-8 sm:h-8 rounded-full border transition-all duration-300 flex items-center justify-center -translate-x-1/2 z-10 select-none ${
                    isOpen
                      ? 'bg-[#111111] border-[#111111] text-white scale-110 shadow-md'
                      : 'bg-white border-black/20 text-black/60 group-hover:border-black group-hover:text-black'
                  }`}
                >
                  <span className="text-[10px] sm:text-xs font-mono font-medium">{step.number}</span>
                </div>

                {/* Step Card Container (Expands on Hover) */}
                <div
                  onClick={() => setExpandedRow(isOpen ? null : idx)}
                  className={`p-6 sm:p-8 rounded-[1.8rem] sm:rounded-[2.2rem] border transition-all duration-300 cursor-pointer ${
                    isOpen
                      ? 'bg-white border-black/15 shadow-md -translate-y-0.5'
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
                    className={`grid transition-all duration-300 ease-out overflow-hidden ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-black/[0.06]'
                        : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0'
                    }`}
                  >
                    <div className="min-h-0">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
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
