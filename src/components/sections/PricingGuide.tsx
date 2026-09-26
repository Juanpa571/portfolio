import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { highlightBrandKeywords } from '../../utils/textHighlight';
import { trackPricingClick } from '../../utils/analytics';

gsap.registerPlugin(ScrollTrigger);

export const PricingGuide: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const isMobile = window.innerWidth < 1024 || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isMobile) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 92%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(contactEl, { offset: -85, duration: 1.2 });
      } else {
        const headerOffset = 85;
        const elementPosition = contactEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-10 sm:py-14 lg:py-16 border-b border-black/[0.08] bg-[#fafaf8] relative scroll-mt-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* Compact Header Block */}
        <div ref={headerRef} className="max-w-3xl mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold tracking-tight text-[#111111] leading-tight">
            ¿Cuánto cuesta una página web?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-700 font-sans leading-relaxed pt-1.5 max-w-2xl">
            Rangos reales de inversión para empresas en Colombia. Entrega llave en mano con código 100% propio y sin mensualidades forzadas.
          </p>
        </div>

        {/* 3-Card Grid (Exact equal height at rest, independently expands only the hovered card with zero shift below) */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 items-start lg:min-h-[595px]"
        >
          {t.pricing.tiers.map((tier, idx) => {
            const isCenterCard = idx === 1;
            const whatsappUrl = `https://wa.me/573177371301?text=${encodeURIComponent(tier.whatsappSubject)}`;

            return (
              <div
                key={tier.id}
                itemScope
                itemType="https://schema.org/Offer"
                className={`rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col border border-neutral-200/80 transition-all duration-300 shadow-2xs hover:shadow-xl group lg:min-h-[535px] ${
                  isCenterCard ? 'bg-[#f4f4f2]' : 'bg-white'
                }`}
              >
                {/* Microdata tags for Google Rich Snippets */}
                <meta itemProp="price" content={tier.priceAmount.replace(/[^0-9]/g, '')} />
                <meta itemProp="priceCurrency" content="COP" />
                <meta itemProp="availability" content="https://schema.org/InStock" />
                <meta itemProp="url" content="https://jpchacon.com/#pricing" />

                {/* Top Header: Number + Clean Horizontal Rule */}
                <div className="flex items-center justify-between pb-3">
                  <span className="text-xs sm:text-sm font-sans text-neutral-600 font-medium">
                    {tier.number}
                  </span>
                  <span className="h-px bg-neutral-200/90 flex-1 ml-4" aria-hidden="true" />
                </div>

                {/* Title (Locked height and width so 1-line and 2-line titles take identical vertical space) */}
                <div className="h-14 sm:h-16 flex items-start">
                  <h3 itemProp="name" className="text-lg sm:text-[1.25rem] font-semibold tracking-tight text-[#111111] leading-snug max-w-[15rem]">
                    {highlightBrandKeywords(tier.name)}
                  </h3>
                </div>

                {/* Center Visual Graphic (Vector Mockups) */}
                <div className="w-full h-32 flex items-center justify-center relative my-1 select-none pointer-events-none">
                  {idx === 0 && (
                    <div className="relative flex items-center justify-center">
                      {/* Browser Window */}
                      <div className="w-36 sm:w-40 h-22 sm:h-24 rounded-xl bg-white border border-neutral-200 shadow-xs p-2 flex flex-col justify-between">
                        <div className="flex items-center gap-1 pb-1 border-b border-neutral-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                        </div>
                        <div className="flex-1 flex items-center gap-2 pt-1">
                          <div className="w-10 h-8 rounded-md bg-neutral-100 flex items-center justify-center">
                            <svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M4 19h16V5H4v14zm2-2l3.5-4.5 2.5 3.01L15.5 11l4.5 6H6z" />
                            </svg>
                          </div>
                          <div className="space-y-1 flex-1">
                            <div className="w-12 h-1.5 rounded-full bg-neutral-200" />
                            <div className="w-8 h-1.5 rounded-full bg-neutral-200" />
                          </div>
                        </div>
                      </div>
                      {/* Overlapping Phone */}
                      <div className="w-16 sm:w-18 h-24 sm:h-28 rounded-xl bg-white border border-neutral-200/90 shadow-md p-1.5 -ml-7 -mb-2 z-10 flex flex-col justify-between">
                        <div className="w-3.5 h-1 rounded-full bg-neutral-200 mx-auto" />
                        <div className="w-full h-11 rounded-lg bg-neutral-100 my-auto flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-neutral-200/80" />
                        </div>
                        <div className="w-6 h-1 rounded-full bg-neutral-200 mx-auto" />
                      </div>
                    </div>
                  )}

                  {idx === 1 && (
                    <div className="relative flex items-center justify-center">
                      {/* Dark Browser Window */}
                      <div className="w-36 sm:w-40 h-22 sm:h-24 rounded-xl bg-[#1C1D20] text-white p-2 flex flex-col justify-between shadow-md">
                        <div className="flex items-center gap-1 pb-1 border-b border-white/10">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        </div>
                        <div className="space-y-1 pt-1">
                          <div className="w-14 h-1.5 rounded-full bg-white/25" />
                          <div className="w-20 h-1.5 rounded-full bg-white/15" />
                          <div className="w-16 h-1.5 rounded-full bg-white/15" />
                        </div>
                      </div>
                      {/* Overlapping Rising Bar Chart Card */}
                      <div className="w-16 sm:w-18 h-18 sm:h-20 rounded-xl bg-white border border-neutral-200 shadow-md p-2 -ml-7 -mb-2 z-10 flex items-end justify-center gap-1 pb-2">
                        <div className="w-2 h-4 rounded-xs bg-neutral-300" />
                        <div className="w-2 h-7 rounded-xs bg-neutral-500" />
                        <div className="w-2 h-10 rounded-xs bg-[#111111]" />
                      </div>
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="relative flex items-center justify-center">
                      {/* Browser Window with Terminal */}
                      <div className="w-36 sm:w-40 h-22 sm:h-24 rounded-xl bg-white border border-neutral-200 shadow-xs p-2 flex flex-col justify-between">
                        <div className="flex items-center gap-1 pb-1 border-b border-neutral-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                        </div>
                        <div className="w-14 sm:w-16 h-10 sm:h-12 rounded-md bg-[#141517] p-1 flex items-center justify-center font-mono text-[9px] text-white font-bold tracking-widest">
                          &gt; _
                        </div>
                      </div>
                      {/* Overlapping Phone */}
                      <div className="w-16 sm:w-18 h-24 sm:h-28 rounded-xl bg-white border border-neutral-200/90 shadow-md p-1.5 -ml-7 -mb-2 z-10 flex flex-col justify-between">
                        <div className="w-3.5 h-1 rounded-full bg-neutral-200 mx-auto" />
                        <div className="space-y-1 my-auto px-1">
                          <div className="w-full h-7 rounded-md bg-neutral-100 flex items-center justify-center">
                            <span className="w-3 h-3 rounded-full bg-emerald-500/20 text-emerald-600 text-[8px] flex items-center justify-center font-bold">✓</span>
                          </div>
                          <div className="w-8 h-1 rounded-full bg-neutral-200 mx-auto" />
                        </div>
                        <div className="w-6 h-1 rounded-full bg-neutral-200 mx-auto" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Price Block: Desde + Amount + COP */}
                <div className="h-16 flex flex-col justify-center pt-2 pb-1">
                  <div className="text-xs text-neutral-700 font-sans font-medium">
                    {tier.pricePrefix}
                  </div>
                  <div className="flex items-baseline gap-1.5 pt-0.5">
                    <span className="text-2xl sm:text-[1.85rem] font-semibold text-[#111111] tracking-tight">
                      {tier.priceAmount}
                    </span>
                    <span className="text-xs sm:text-sm text-neutral-700 font-medium">
                      {tier.priceCurrency}
                    </span>
                  </div>
                </div>

                {/* Description (Locked height so all 3 cards align down to the pixel) */}
                <div className="h-16 sm:h-[4.5rem] flex items-start pb-2 overflow-hidden">
                  <p itemProp="description" className="text-xs sm:text-[13px] text-neutral-700 font-sans leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                {/* Bottom Section: Separator + Checklist + Expandable Action pinned to bottom */}
                <div className="mt-auto flex flex-col">
                  {/* Subtle Separator */}
                  <div className="w-full h-px bg-neutral-200/80 mb-3" />

                  {/* Features Checklist */}
                  <ul className="space-y-2">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs sm:text-[13px] text-neutral-700 font-sans leading-snug">
                        <span className="text-neutral-800 font-medium text-xs">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Action: Physically hidden at rest (zero wasted space), smoothly expands on hover */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                    <div className="overflow-hidden">
                      <div className="pt-3.5 mt-3.5 border-t border-neutral-200/70 flex items-center">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ver detalles y cotizar ${tier.name} por WhatsApp`}
                          onClick={() => {
                            trackPricingClick({
                              tierId: tier.id,
                              tierName: tier.name,
                              tierNumber: tier.number,
                              priceAmount: tier.priceAmount,
                              whatsappSubject: tier.whatsappSubject,
                            });
                          }}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-900 hover:text-black transition-colors py-0.5 group/link"
                          data-interactive
                        >
                          <span>{tier.actionText}</span>
                          <span className="text-xs transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                            ↗
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Minimalist 1-Line Footer Note (Zero shift on card hover) */}
        <div className="mt-4 sm:mt-5 pt-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-sans text-neutral-500 border-t border-neutral-200/70">
          <span>
            * Valores en COP con entrega llave en mano. Propiedad 100% tuya del código y dominio.
          </span>
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="text-neutral-900 font-medium hover:underline inline-flex items-center gap-1 shrink-0"
            data-interactive
          >
            <span>¿Buscas una cifra a medida? Usar cotizador en 60s</span>
            <span>↓</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default PricingGuide;
