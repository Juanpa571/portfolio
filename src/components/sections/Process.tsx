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
  const rowsContainerRef = useRef<HTMLDivElement | null>(null);
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

      // Process ledger rows staggered reveal on scroll
      if (rowsContainerRef.current) {
        const rows = rowsContainerRef.current.querySelectorAll('.process-row-item');
        gsap.fromTo(
          rows,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
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
        {/* Section Header with Refokus-style Kinetic Ink Sweep */}
        <div ref={headerRef} className="mb-14 sm:mb-20">
          <div className="space-y-2 sm:space-y-3 max-w-4xl">
            {/* H2 Semántico Limpio para SEO */}
            <h2 className="sr-only">
              {t.process.headerLine1} {t.process.headerLine2}
            </h2>

            {/* Presentación Visual Cinética */}
            <div aria-hidden="true" className="text-4xl sm:text-6xl lg:text-7xl font-normal font-display tracking-[-0.01em] leading-[1.12] sm:leading-[1.15]">
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
            </div>

            <p className="pt-4 text-base sm:text-lg text-black/60 max-w-2xl font-sans font-normal leading-relaxed">
              {t.process.tagline}
            </p>
          </div>
        </div>

        {/* Monumental Editorial Ledger Rows */}
        <div className="space-y-12">
          <div ref={rowsContainerRef} className="border-y border-black/[0.12] divide-y divide-black/[0.08]">
            {/* Row 01 */}
            <div
              className="process-row-item will-change-[transform,opacity] py-8 sm:py-10 transition-colors duration-300 group cursor-pointer"
              onClick={() => setExpandedRow(expandedRow === 0 ? null : 0)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4 sm:gap-6">
                  <StrategyGlyph />
                  <h3 className="text-2xl sm:text-4xl font-display font-normal text-black tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
                    {t.process.steps[0].title}
                  </h3>
                </div>

                <div className="flex items-center gap-6 self-end md:self-auto">
                  <span className="text-xs font-sans font-medium text-black/60 px-3 py-1 rounded-full bg-black/5">
                    {t.process.steps[0].timeframe}
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
                      {t.process.steps[0].description}
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

                  <div className="md:col-span-4 md:pl-6 md:border-l border-black/10 space-y-2 py-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-xs font-sans text-black/50 font-medium tracking-normal">
                        {isSpanish ? 'Entregable verificado' : 'Verified deliverable'}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-display font-normal text-black leading-snug">
                      {t.process.steps[0].deliverable}
                    </h4>
                  </div>
                </div>
              )}
            </div>

            {/* Row 02 */}
            <div
              className="process-row-item will-change-[transform,opacity] py-8 sm:py-10 transition-colors duration-300 group cursor-pointer"
              onClick={() => setExpandedRow(expandedRow === 1 ? null : 1)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4 sm:gap-6">
                  <CraftGlyph />
                  <h3 className="text-2xl sm:text-4xl font-display font-normal text-black tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
                    {t.process.steps[1].title}
                  </h3>
                </div>

                <div className="flex items-center gap-6 self-end md:self-auto">
                  <span className="text-xs font-sans font-medium text-black/60 px-3 py-1 rounded-full bg-black/5">
                    {t.process.steps[1].timeframe}
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
                      {t.process.steps[1].description}
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

                  <div className="md:col-span-4 md:pl-6 md:border-l border-black/10 space-y-2 py-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-xs font-sans text-black/50 font-medium tracking-normal">
                        {isSpanish ? 'Entregable verificado' : 'Verified deliverable'}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-display font-normal text-black leading-snug">
                      {t.process.steps[1].deliverable}
                    </h4>
                  </div>
                </div>
              )}
            </div>

            {/* Row 03 */}
            <div
              className="process-row-item will-change-[transform,opacity] py-8 sm:py-10 transition-colors duration-300 group cursor-pointer"
              onClick={() => setExpandedRow(expandedRow === 2 ? null : 2)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4 sm:gap-6">
                  <LaunchGlyph />
                  <h3 className="text-2xl sm:text-4xl font-display font-normal text-black tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
                    {t.process.steps[2].title}
                  </h3>
                </div>

                <div className="flex items-center gap-6 self-end md:self-auto">
                  <span className="text-xs font-sans font-medium text-black/60 px-3 py-1 rounded-full bg-black/5">
                    {t.process.steps[2].timeframe}
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
                      {t.process.steps[2].description}
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

                  <div className="md:col-span-4 md:pl-6 md:border-l border-black/10 space-y-2 py-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-xs font-sans text-black/50 font-medium tracking-normal">
                        {isSpanish ? 'Entregable verificado' : 'Verified deliverable'}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-display font-normal text-black leading-snug">
                      {t.process.steps[2].deliverable}
                    </h4>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
