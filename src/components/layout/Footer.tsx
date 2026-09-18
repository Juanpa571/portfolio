import React, { useEffect, useRef } from 'react';
import { siteConfig } from '../../config/site';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Magnetic } from '../ui/Magnetic';
import { KineticText } from '../ui/KineticText';
import { useLanguage } from '../../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const curvePathRef = useRef<SVGPathElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Monumental SVG Horizon Morph (Aggressive, deep geometric scoop)
      if (curvePathRef.current) {
        const MAX_CURVE_HEIGHT = 320;

        const updateCurve = (h: number) => {
          if (curvePathRef.current) {
            curvePathRef.current.setAttribute(
              'd',
              `M 0 0 L 1440 0 L 1440 0 Q 720 ${Math.max(0, h)} 0 0 Z`
            );
          }
        };

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'top 20%',
          scrub: 0.8,
          onUpdate: (self) => {
            // Cubic falloff for dramatic initial tension and snappy flattening
            const progress = self.progress;
            const currentH = Math.pow(1 - progress, 1.2) * MAX_CURVE_HEIGHT;
            updateCurve(currentH);
          },
        });
      }

      // Parallax upward slide of footer content synced with the horizon reveal
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { y: -100, opacity: 0.7 },
          {
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'top 25%',
              scrub: 0.8,
            },
          }
        );
      }

      // 2. Monumental Typography entrance on container lines (clean separation from letter physics)
      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll('.headline-line');
        gsap.fromTo(
          lines,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 85%',
              end: 'top 45%',
              scrub: 0.5,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="footer"
      ref={sectionRef}
      className="relative bg-[#1C1D20] text-white min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* Dennis Snellenberg-inspired Morphing Geometric Horizon Curve (Monumental Scale) */}
      <div className="relative w-full overflow-hidden bg-[#1C1D20] -mt-px pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-36 sm:h-52 md:h-72 lg:h-80 xl:h-96 block overflow-visible"
          preserveAspectRatio="none"
        >
          <path
            ref={curvePathRef}
            fill="#fafaf8"
            d="M 0 0 L 1440 0 L 1440 0 Q 720 320 0 0 Z"
          />
        </svg>
      </div>

      {/* Content Container with generous breathing room below sticky header */}
      <div
        ref={contentRef}
        className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 lg:px-16 pt-6 sm:pt-12 lg:pt-16 pb-16 flex-1 flex flex-col justify-between relative z-10 will-change-transform"
      >
          
          {/* Monumental Headline (Full Width - Zero clipping) */}
          <div className="w-full pb-12 sm:pb-16 lg:pb-20">
            <div
              ref={headlineRef}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[5vw] xl:text-[5.5rem] font-normal font-display tracking-[-0.01em] text-white leading-[1.08] sm:leading-[1.12]"
            >
              {/* H2 Semántico Limpio para SEO y Lectores de Pantalla */}
              <h2 className="sr-only">
                {t.footer.headlineLine1} {t.footer.headlineLine2}
              </h2>

              {/* Presentación Visual Cinética */}
              <div aria-hidden="true">
                <div className="headline-line py-1 overflow-visible">
                  <KineticText
                    text={t.footer.headlineLine1}
                    as="div"
                    maxDisplacement={38}
                    radius={240}
                    letterClassName="text-white"
                  />
                </div>
                <div className="headline-line sm:pl-8 md:pl-16 lg:pl-24 py-1 overflow-visible">
                  <KineticText
                    text={t.footer.headlineLine2}
                    as="div"
                    maxDisplacement={38}
                    radius={240}
                    letterClassName="text-white/60 hover:text-white transition-colors duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Action Pills with Magnetic Physics (Dennis Snellenberg Style) */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 pb-8">
            <Magnetic strength={0.35} radius={90}>
              <a
                href={`mailto:${siteConfig.profile.contact.email}`}
                className="px-7 py-4 sm:px-9 sm:py-5 rounded-full border border-white/20 hover:border-white text-white text-sm sm:text-base font-sans font-medium transition-all duration-300 hover:bg-white hover:text-black active:scale-95 inline-flex items-center justify-center cursor-pointer"
                data-interactive
              >
                {siteConfig.profile.contact.email}
              </a>
            </Magnetic>

            <Magnetic strength={0.35} radius={90}>
              <a
                href={siteConfig.profile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 sm:px-9 sm:py-5 rounded-full border border-white/20 hover:border-white text-white text-sm sm:text-base font-sans font-medium transition-all duration-300 hover:bg-white hover:text-black active:scale-95 inline-flex items-center justify-center cursor-pointer"
                data-interactive
              >
                {t.footer.whatsappButton(siteConfig.profile.contact.whatsappDisplay || '+57 317 737 1301')}
              </a>
            </Magnetic>
          </div>

          {/* Bottom Colophon & Global Coordinates */}
          <div className="pt-16 mt-16 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-xs font-sans text-white/40">
            <div className="space-y-1">
              <div className="font-bold text-white text-sm tracking-tight font-display">
                {t.footer.brandName}
              </div>
              <div>{t.footer.craftedBy}</div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-white/60 text-[11px]">
              <span>{t.footer.location}</span>
              <span className="text-white/20">•</span>
              <span>{t.footer.remoteWorldwide}</span>
              <span className="text-white/20">•</span>
              <span>{t.footer.edition}</span>
              <span className="text-white/20">•</span>
              <a
                href="#top"
                className="text-white hover:underline cursor-pointer flex items-center gap-1 group"
                data-interactive
              >
                <span>{t.footer.backToTop}</span>
                <span className="group-hover:-translate-y-0.5 transition-transform">↑</span>
              </a>
            </div>
          </div>

        </div>
    </footer>
  );
};
