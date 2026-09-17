import React, { useEffect, useRef } from 'react';
import { siteConfig } from '../../config/site';
import { Magnetic } from '../ui/Magnetic';
import { useLanguage } from '../../context/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Intro: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const statementRef = useRef<HTMLParagraphElement | null>(null);
  const actionsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
          once: true,
        },
      });

      if (statementRef.current) {
        tl.fromTo(
          statementRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
          0
        );
      }

      if (actionsRef.current) {
        const buttons = actionsRef.current.children;
        tl.fromTo(
          buttons,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: 'power3.out' },
          0.15
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 lg:py-36 border-b border-black/[0.08] bg-[#fafaf8]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Direct Human Statement (Col 1-7) */}
          <div className="lg:col-span-7">
            <p
              ref={statementRef}
              className="text-2xl sm:text-3xl lg:text-4xl text-black font-sans font-normal leading-snug tracking-tight will-change-[transform,opacity]"
            >
              {t.intro.statement}
            </p>
          </div>

          {/* Right Column: Direct Actions with Magnetic Physics (Col 8-12) */}
          <div ref={actionsRef} className="lg:col-span-5 flex flex-col gap-3.5">
            <Magnetic strength={0.3} radius={100} className="w-full">
              <a
                href={siteConfig.profile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-7 py-4 sm:py-5 rounded-2xl bg-[#1C1D20] text-white text-sm font-medium hover:bg-black hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.35)] active:scale-[0.98] transition-all duration-300 text-center flex items-center justify-between group border border-white/10"
                data-interactive
              >
                <span>{t.intro.startOnWhatsApp}</span>
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 font-sans text-xs">↗</span>
              </a>
            </Magnetic>

            <Magnetic strength={0.25} radius={90} className="w-full">
              <a
                href={`mailto:${siteConfig.profile.contact.email}`}
                className="w-full px-7 py-4 sm:py-5 rounded-2xl bg-white border border-black/15 text-black text-xs sm:text-sm font-sans font-medium hover:bg-[#1C1D20] hover:text-white hover:border-[#1C1D20] hover:shadow-xl active:scale-[0.98] transition-all duration-300 flex items-center justify-between group"
                data-interactive
              >
                <span className="truncate">{siteConfig.profile.contact.email}</span>
                <span className="text-black/40 group-hover:text-white group-hover:translate-x-0.5 transition-all text-xs">{t.intro.direct}</span>
              </a>
            </Magnetic>
          </div>

        </div>
      </div>
    </section>
  );
};
