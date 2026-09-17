import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Faq: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const line1FillRef = useRef<HTMLSpanElement | null>(null);
  const line2FillRef = useRef<HTMLSpanElement | null>(null);
  const faqListRef = useRef<HTMLDivElement | null>(null);

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
          {/* Left Column: Heading & Context (Col 1-5) */}
          <div ref={headerRef} className="lg:col-span-5 space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-display tracking-[-0.01em] leading-[1.12]">
              <div className="relative inline-block pb-1">
                <span className="text-transparent [-webkit-text-stroke:1.2px_rgba(0,0,0,0.3)] sm:[-webkit-text-stroke:1.5px_rgba(0,0,0,0.35)] select-none">
                  {t.faq.headerLine1}
                </span>
                <span
                  ref={line1FillRef}
                  className="absolute inset-0 text-black select-none will-change-transform"
                  style={{ clipPath: 'inset(0 100% 0 0)' }}
                >
                  {t.faq.headerLine1}
                </span>
              </div>
              <br />
              <div className="relative inline-block sm:pl-6 lg:pl-10 pb-1">
                <span className="text-transparent [-webkit-text-stroke:1.2px_rgba(0,0,0,0.3)] sm:[-webkit-text-stroke:1.5px_rgba(0,0,0,0.35)] select-none">
                  {t.faq.headerLine2}
                </span>
                <span
                  ref={line2FillRef}
                  className="absolute inset-0 sm:pl-6 lg:pl-10 text-black select-none will-change-transform"
                  style={{ clipPath: 'inset(0 100% 0 0)' }}
                >
                  {t.faq.headerLine2}
                </span>
              </div>
            </h2>

            <p className="text-base text-black/60 font-sans font-normal leading-relaxed pt-2 max-w-md">
              {t.faq.tagline}
            </p>
          </div>

          {/* Right Column: Accordion Items (Col 6-12) */}
          <div ref={faqListRef} className="lg:col-span-7 divide-y divide-black/[0.08] border-y border-black/[0.08]">
            {t.faq.items.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={idx} className="faq-accordion-item will-change-[transform,opacity] py-6 sm:py-7 group">
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left gap-6 cursor-pointer focus:outline-none"
                    data-interactive
                  >
                    <span className="text-lg sm:text-xl font-normal font-display text-black group-hover:text-black/70 transition-colors leading-snug">
                      {item.question}
                    </span>

                    <span
                      className={`w-8 h-8 rounded-full border border-black/15 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-45 bg-[#1C1D20] text-white border-[#1C1D20]' : 'text-black/60 group-hover:border-black/40'
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
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[48ch] text-sm sm:text-base body-copy text-black/70 font-sans font-normal leading-relaxed pr-6 sm:pr-12">
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
