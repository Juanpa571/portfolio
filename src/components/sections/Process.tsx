import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/site';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Process: React.FC = () => {
  const { t, language } = useLanguage();
  const isSpanish = language === 'es';
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // State to toggle the expandable 14-day technical delivery roadmap
  const [showDetailedProcess, setShowDetailedProcess] = useState<boolean>(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-12 sm:py-20 lg:py-28 border-b border-black/[0.08] bg-[#fafaf8] relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        {/* Main Process Card — Designed after the Executive Overview Spec */}
        <div
          ref={cardRef}
          className="rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-black/[0.08] p-6 sm:p-10 lg:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-300"
        >
          {/* Top Section: Eyebrow + Title/Subtitle + CTA Action Button */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 lg:pb-10 border-b border-black/[0.07]">
            <div className="max-w-3xl space-y-2 sm:space-y-2.5">
              <span className="text-[11px] font-mono font-medium tracking-widest uppercase text-black/45 block">
                {isSpanish ? 'RESULTADOS' : 'RESULTS'}
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.65rem] font-bold font-display text-[#111111] tracking-tight leading-[1.12]">
                {isSpanish
                  ? 'Diagnóstico, estrategia y resultados.'
                  : 'Diagnosis, strategy and results.'}
              </h2>

              <p className="text-sm sm:text-base text-black/60 font-sans leading-relaxed pt-0.5 max-w-2xl">
                {isSpanish
                  ? 'Un proceso claro, enfocado en datos y diseñado para hacer crecer tu negocio en Google.'
                  : 'A clear, data-driven process engineered to scale your business on Google.'}
              </p>
            </div>

            {/* Top Right Action Button */}
            <div className="shrink-0 pt-1 lg:pt-0">
              <button
                type="button"
                onClick={() => setShowDetailedProcess((prev) => !prev)}
                className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-black/15 hover:border-black/35 bg-white hover:bg-black/[0.02] text-xs sm:text-sm font-medium text-black transition-all cursor-pointer shadow-2xs active:scale-[0.98] group"
              >
                <span>
                  {showDetailedProcess
                    ? isSpanish
                      ? 'Ocultar proceso'
                      : 'Hide process'
                    : isSpanish
                      ? 'Ver proceso'
                      : 'Ver proceso'}
                </span>
                <span
                  className={`transition-transform duration-300 ${
                    showDetailedProcess ? '-rotate-90' : 'group-hover:translate-x-0.5'
                  }`}
                >
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Section: 4-Column Horizontal Architectural Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 pt-8 lg:pt-10">
            {/* Column 1: Diagnóstico */}
            <div className="flex items-start gap-4 lg:pr-7">
              <div className="w-11 h-11 rounded-2xl bg-black/[0.04] flex items-center justify-center shrink-0 text-black">
                {/* 3 solid vertical bars with rounded tops matching the spec */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="13" width="3.5" height="8" rx="1.5" />
                  <rect x="10" y="8" width="3.5" height="13" rx="1.5" />
                  <rect x="17" y="3" width="3.5" height="18" rx="1.5" />
                </svg>
              </div>
              <div className="space-y-1 pt-0.5">
                <h3 className="text-sm sm:text-base font-semibold text-[#111111] tracking-tight">
                  {isSpanish ? 'Diagnóstico' : 'Diagnosis'}
                </h3>
                <p className="text-xs sm:text-[13px] text-black/60 font-sans leading-relaxed">
                  {isSpanish
                    ? 'Analizamos tu negocio, competencia y oportunidades reales de crecimiento.'
                    : 'We analyze your business, competitors, and real growth opportunities.'}
                </p>
              </div>
            </div>

            {/* Column 2: Estrategia */}
            <div className="flex items-start gap-4 lg:px-7 lg:border-l border-black/[0.08]">
              <div className="w-11 h-11 rounded-2xl bg-black/[0.04] flex items-center justify-center shrink-0 text-black">
                {/* Bullseye target icon matching spec */}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div className="space-y-1 pt-0.5">
                <h3 className="text-sm sm:text-base font-semibold text-[#111111] tracking-tight">
                  {isSpanish ? 'Estrategia' : 'Strategy'}
                </h3>
                <p className="text-xs sm:text-[13px] text-black/60 font-sans leading-relaxed">
                  {isSpanish
                    ? 'Creamos un plan personalizado con acciones claras y medibles.'
                    : 'We build a tailored roadmap with clear, measurable milestones.'}
                </p>
              </div>
            </div>

            {/* Column 3: Resultados */}
            <div className="flex items-start gap-4 lg:px-7 lg:border-l border-black/[0.08]">
              <div className="w-11 h-11 rounded-2xl bg-black/[0.04] flex items-center justify-center shrink-0 text-black">
                {/* Upward trend arrow matching spec */}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <div className="space-y-1 pt-0.5">
                <h3 className="text-sm sm:text-base font-semibold text-[#111111] tracking-tight">
                  {isSpanish ? 'Resultados' : 'Results'}
                </h3>
                <p className="text-xs sm:text-[13px] text-black/60 font-sans leading-relaxed">
                  {isSpanish
                    ? 'Más visibilidad, más clientes y un negocio que crece.'
                    : 'More visibility, qualified inquiries, and consistent growth.'}
                </p>
              </div>
            </div>

            {/* Column 4: Enfoque Local */}
            <div className="flex flex-col justify-center lg:pl-7 lg:border-l border-black/[0.08] pt-1 lg:pt-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#057a3e] shrink-0" />
                <span className="text-[11px] font-mono font-semibold text-[#057a3e] tracking-wider uppercase">
                  {isSpanish ? 'ENFOQUE LOCAL' : 'LOCAL FOCUS'}
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-black/65 font-sans leading-relaxed mt-1.5">
                {isSpanish
                  ? 'Tu negocio, en las primeras posiciones.'
                  : 'Your business, commanding top search positions.'}
              </p>
            </div>
          </div>

          {/* Interactive Extension: Smoothly expands the 14-day technical delivery flow */}
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              showDetailedProcess
                ? 'grid-rows-[1fr] opacity-100 mt-10 pt-10 border-t border-black/[0.08]'
                : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
            }`}
          >
            <div className="overflow-hidden">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono font-medium text-black/45 uppercase tracking-wider block mb-1">
                    {isSpanish ? 'Metodología en 14 Días' : '14-Day Delivery Methodology'}
                  </span>
                  <h4 className="text-lg sm:text-xl font-display font-semibold text-[#111111] tracking-tight">
                    {isSpanish
                      ? 'De la estrategia inicial a tu web facturando en menos de dos semanas'
                      : 'From initial roadmap to live conversions in under two weeks'}
                  </h4>
                </div>

                <a
                  href={siteConfig.profile.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-black hover:text-emerald-700 transition-colors shrink-0"
                >
                  <span>{isSpanish ? 'Iniciar por WhatsApp' : 'Start on WhatsApp'}</span>
                  <span>↗</span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {t.process.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-[#fafaf8] border border-black/[0.07] flex flex-col justify-between space-y-4 hover:border-black/20 transition-colors"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-semibold text-black/40">
                          {isSpanish ? `Paso ${step.number}` : `Step ${step.number}`}
                        </span>
                        <span className="text-xs font-sans text-black/50">
                          {step.timeframe}
                        </span>
                      </div>
                      <h5 className="text-base font-semibold font-display text-[#111111] leading-snug">
                        {step.title}
                      </h5>
                      <p className="text-xs text-black/65 font-sans leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-black/[0.06] flex items-center gap-2 text-[11px] text-black/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="font-medium text-black/80">{step.deliverable}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
