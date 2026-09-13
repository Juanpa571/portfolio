import React, { useEffect, useRef } from 'react';
import { siteConfig } from '../../config/site';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Footer: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const curvePathRef = useRef<SVGPathElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Dynamic SVG Horizon Morph (Snellenberg-inspired geometric curve)
      // As the footer enters the viewport, the white curve smoothly flattens from 100px to 0px
      if (curvePathRef.current) {
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
          scrub: 0.5,
          onUpdate: (self) => {
            const currentH = (1 - self.progress) * 100;
            updateCurve(currentH);
          },
        });
      }

      // 2. Monumental Typography staggered entrance
      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll('.reveal-word');
        gsap.fromTo(
          lines,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
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
      id="contact"
      ref={sectionRef}
      className="relative bg-[#0c0d12] text-white min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* Dennis Snellenberg-inspired Morphing Geometric Horizon Curve */}
      <div className="relative w-full overflow-hidden bg-[#0c0d12] -mt-px pointer-events-none">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-16 sm:h-24 md:h-28 block"
          preserveAspectRatio="none"
        >
          <path
            ref={curvePathRef}
            fill="#fafaf8"
            d="M 0 0 L 1440 0 L 1440 0 Q 720 100 0 0 Z"
          />
        </svg>
      </div>

      {/* Subtle Ambient Grain Layer */}
      <div className="absolute inset-0 bg-radial from-white/[0.04] to-transparent opacity-60 pointer-events-none" />

      {/* Content Container with generous breathing room below sticky header */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 lg:px-16 pt-16 sm:pt-24 lg:pt-32 pb-16 flex-1 flex flex-col justify-between relative z-10">
          
          {/* Monumental Headline (Full Width - Zero clipping) */}
          <div className="w-full pb-12 sm:pb-16 lg:pb-20">
            <h2
              ref={headlineRef}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[5vw] xl:text-[5.5rem] font-normal font-display tracking-[-0.01em] text-white leading-[0.95] select-none"
            >
              <div className="py-1">
                <span className="reveal-word inline-block will-change-transform sm:whitespace-nowrap">
                  Ready to build
                </span>
              </div>
              <div className="sm:pl-8 md:pl-16 lg:pl-24 py-1">
                <span className="reveal-word inline-block text-white/50 hover:text-white transition-colors duration-500 will-change-transform sm:whitespace-nowrap">
                  something real?
                </span>
              </div>
            </h2>
          </div>

          {/* Minimalist Action Pills (Dennis Snellenberg Style) */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 pb-8">
            <a
              href={`mailto:${siteConfig.profile.contact.email}`}
              className="px-7 py-4 sm:px-9 sm:py-5 rounded-full border border-white/20 hover:border-white text-white text-sm sm:text-base font-sans font-medium transition-all duration-300 hover:bg-white hover:text-black active:scale-95 inline-flex items-center justify-center cursor-pointer"
              data-interactive
            >
              {siteConfig.profile.contact.email}
            </a>

            <a
              href={siteConfig.profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 sm:px-9 sm:py-5 rounded-full border border-white/20 hover:border-white text-white text-sm sm:text-base font-sans font-medium transition-all duration-300 hover:bg-white hover:text-black active:scale-95 inline-flex items-center justify-center cursor-pointer"
              data-interactive
            >
              +61 405667961
            </a>
          </div>

          {/* Bottom Colophon & Global Coordinates */}
          <div className="pt-16 mt-16 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-xs font-mono text-white/40">
            <div className="space-y-1">
              <div className="font-bold text-white text-sm tracking-tight font-display">
                JP STUDIOS
              </div>
              <div>Designed & engineered by Juan Pablo Chacón.</div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-white/60 text-[11px]">
              <span>Cali, Colombia</span>
              <span className="text-white/20">•</span>
              <span>Remote Worldwide</span>
              <span className="text-white/20">•</span>
              <span>© 2026 Edition</span>
              <span className="text-white/20">•</span>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-white hover:underline cursor-pointer flex items-center gap-1 group"
                data-interactive
              >
                <span>Back to top</span>
                <span className="group-hover:-translate-y-0.5 transition-transform">↑</span>
              </button>
            </div>
          </div>

        </div>
    </footer>
  );
};
