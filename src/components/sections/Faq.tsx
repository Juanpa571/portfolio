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
      className="py-16 sm:py-24 lg:py-32 border-b border-black/[0.08] bg-[#fafaf8] relative"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Heading & WhatsApp Assistance (Col 1-5) */}
          <div ref={headerRef} className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Editorial Category Label above Title (Clean Text, No Capsule) */}
              <div className="mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-sans font-medium text-black/50 tracking-wide select-none">
                  {t.faq.tag}
                </span>
              </div>

              <h2
                ref={titleRef}
                className="text-4xl sm:text-5xl lg:text-6xl font-normal font-display tracking-[-0.02em] text-[#111111] leading-[1.12] select-none"
              >
                <span className="block">{t.faq.headerLine1}</span>
                <span className="block sm:pl-6 lg:pl-10 text-black/60">{t.faq.headerLine2}</span>
              </h2>

              <p className="text-base text-black/60 font-sans font-normal leading-relaxed pt-2 max-w-md">
                {t.faq.tagline}
              </p>
            </div>

            {/* Direct WhatsApp Contact Assistance Block */}
            <div className="pt-8 sm:pt-12 mt-8 sm:mt-12 border-t border-black/[0.08] space-y-4">
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
          <div ref={faqListRef} className="lg:col-span-7 divide-y divide-black/[0.08] border-y border-black/[0.08]">
            {t.faq.items.map((item, idx) => {
              const isOpen = openIndex === idx;
              const formattedNumber = String(idx + 1).padStart(2, '0');

              return (
                <div
                  key={idx}
                  className="faq-accordion-item will-change-[transform,opacity] py-6 sm:py-7 group cursor-pointer"
                  onMouseEnter={() => setOpenIndex(idx)}
                  onMouseLeave={() => setOpenIndex(null)}
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
    </section>
  );
};
