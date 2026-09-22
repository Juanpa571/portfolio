import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/site';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Faq: React.FC = () => {
  const { t } = useLanguage();
  // Initially null so items expand on hover
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const faqListRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      // Clean minimalist fade-and-rise entrance for title
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

      // Accordion items entrance on scroll
      if (faqListRef.current) {
        const items = faqListRef.current.querySelectorAll('.faq-accordion-item');
        gsap.fromTo(
          items,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.06,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: faqListRef.current,
              start: 'top 90%',
              once: true,
            },
          }
        );
      }
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 lg:py-32 border-b border-black/[0.08] bg-[#fafaf8] relative scroll-mt-24"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
          {/* Left Column: Heading & WhatsApp Assistance (Col 1-5) */}
          <div ref={headerRef} className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-3 sm:space-y-4">
              {/* Editorial Category Label above Title (Clean Text, No Capsule) */}
              <div className="mb-2 sm:mb-4">
                <span className="text-xs sm:text-sm font-sans font-medium text-black/50 tracking-wide select-none">
                  {t.faq.tag}
                </span>
              </div>

              <h2
                ref={titleRef}
                className="text-[2.55rem] sm:text-5xl lg:text-6xl font-bold sm:font-normal font-display tracking-tight sm:tracking-[-0.02em] text-[#111111] leading-[1.06] sm:leading-[1.12] select-none"
              >
                <span className="block">{t.faq.headerLine1}</span>
                <span className="block text-black/60 sm:pl-6 lg:pl-10">{t.faq.headerLine2}</span>
              </h2>

              <p className="text-sm sm:text-base text-black/70 font-sans font-normal leading-relaxed pt-2 max-w-md">
                {t.faq.tagline}
              </p>

              {/* Mobile WhatsApp Assistance Banner (lg:hidden) matching user reference */}
              <div className="lg:hidden pt-3 sm:pt-4">
                <div className="p-3.5 rounded-2xl bg-white border border-black/[0.07] shadow-xs flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100/80 flex items-center justify-center shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs text-black/75 font-sans leading-snug">
                      {t.faq.whatsappPrompt}
                    </p>
                  </div>
                  <a
                    href={siteConfig.profile.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#111111] text-white text-xs font-sans font-medium hover:bg-black transition-colors shrink-0 shadow-xs active:scale-95"
                  >
                    <span>{t.faq.whatsappButton}</span>
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop Direct WhatsApp Contact Assistance Block (hidden lg:block - 100% UNTOUCHED) */}
            <div className="hidden lg:block pt-8 sm:pt-12 mt-8 sm:mt-12 border-t border-black/[0.08] space-y-4">
              <p className="text-sm sm:text-base text-black/75 font-sans leading-relaxed">
                {t.faq.whatsappPrompt}
              </p>
              <a
                href={siteConfig.profile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#111111] text-white text-xs sm:text-sm font-sans font-medium hover:bg-black/85 transition-all duration-300 active:scale-95 group cursor-pointer shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.faq.whatsappButton}</span>
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion Items (Col 6-12) */}
          <div ref={faqListRef} className="lg:col-span-7">
            {/* Mobile Card List (lg:hidden) matching user reference image */}
            <div className="lg:hidden space-y-3">
              {t.faq.items.map((item, idx) => {
                const isOpen = openIndex === idx;
                const formattedNumber = String(idx + 1).padStart(2, '0');

                return (
                  <div
                    key={idx}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-mobile-${idx}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleItem(idx);
                      }
                    }}
                    className="faq-accordion-item will-change-[transform,opacity] p-4 rounded-2xl bg-white border border-black/[0.07] shadow-xs hover:border-black/15 transition-all cursor-pointer select-none"
                    onClick={() => toggleItem(idx)}
                  >
                    <div className="w-full flex items-center justify-between text-left gap-3">
                      <div className="flex items-center flex-1 min-w-0">
                        <span className="text-xs font-mono font-medium text-black/40 pr-3.5 mr-3.5 border-r border-black/[0.08] flex items-center shrink-0">
                          {formattedNumber}
                        </span>
                        <h3 className="text-sm font-display font-medium text-[#111111] tracking-tight leading-snug">
                          {item.question}
                        </h3>
                      </div>

                      <span
                        className={`w-8 h-8 rounded-full bg-black/[0.04] flex items-center justify-center flex-shrink-0 text-black/60 transition-transform duration-300 ${
                          isOpen ? 'rotate-45 bg-black/[0.08] text-black' : ''
                        }`}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 1V11M1 6H11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </div>

                    {/* Silky Grid Transition for Answer */}
                    <div
                      id={`faq-answer-mobile-${idx}`}
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-black/[0.06]'
                          : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-xs text-black/70 font-sans font-normal leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop Accordion List (hidden lg:block - 100% UNTOUCHED) */}
            <div className="hidden lg:block divide-y divide-black/[0.08] border-y border-black/[0.08]">
              {t.faq.items.map((item, idx) => {
                const isOpen = openIndex === idx;
                const formattedNumber = String(idx + 1).padStart(2, '0');

                return (
                  <div
                    key={idx}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-desktop-${idx}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleItem(idx);
                      }
                    }}
                    className="faq-accordion-item will-change-[transform,opacity] py-6 sm:py-7 group cursor-pointer"
                    onMouseEnter={() => {
                      if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
                        setOpenIndex(idx);
                      }
                    }}
                    onMouseLeave={() => {
                      if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
                        setOpenIndex(null);
                      }
                    }}
                    onClick={() => toggleItem(idx)}
                  >
                    <div className="w-full flex items-center justify-between text-left gap-6 select-none">
                      <div className="flex items-baseline gap-4 sm:gap-6 flex-1 pr-4">
                        <span
                          className={`text-xs sm:text-sm font-mono font-medium transition-colors duration-200 ${
                            isOpen ? 'text-black' : 'text-black/35 group-hover:text-black/60'
                          }`}
                        >
                          {formattedNumber}
                        </span>
                        <h3 className="text-lg sm:text-xl font-normal font-display text-black group-hover:text-black/70 transition-colors leading-snug">
                          {item.question}
                        </h3>
                      </div>

                      <span
                        className={`w-8 h-8 rounded-full border border-black/15 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isOpen
                            ? 'rotate-45 bg-[#111111] text-white border-[#111111]'
                            : 'text-black/60 group-hover:border-black/40'
                        }`}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-transform duration-300"
                        >
                          <path
                            d="M6 1V11M1 6H11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </div>

                    {/* Silky Grid Transition for Answer */}
                    <div
                      id={`faq-answer-desktop-${idx}`}
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100 mt-4'
                          : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
                      }`}
                    >
                      <div className="overflow-hidden pl-7 sm:pl-10">
                        <p className="max-w-[50ch] text-sm sm:text-base body-copy text-black/70 font-sans font-normal leading-relaxed pr-6 sm:pr-12">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
