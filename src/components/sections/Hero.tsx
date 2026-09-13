import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '../../config/site';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const runwayRef = useRef<HTMLDivElement | null>(null);
  const heroCardRef = useRef<HTMLDivElement | null>(null);
  const compressContentRef = useRef<HTMLDivElement | null>(null);
  const telemetryBarRef = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const line3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const l1 = line1Ref.current;
    const l2 = line2Ref.current;
    const l3 = line3Ref.current;
    const runway = runwayRef.current;
    const heroCard = heroCardRef.current;
    const compressContent = compressContentRef.current;
    const telemetry = telemetryBarRef.current;

    if (!l1 || !l2 || !l3 || !runway || !heroCard || !compressContent || !telemetry) return;

    const ctx = gsap.context(() => {
      // 1. Monumental Typographic Load Reveal
      gsap.fromTo(
        [l1, l2, l3],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.14,
          ease: 'power4.out',
          delay: 0.15,
        }
      );

      // 2. High-Impact Sticky Scroll Compression Stage
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const isMobile = window.innerWidth < 768;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: runway,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        // Compress hero card from full edge into floating rounded card
        tl.to(
          heroCard,
          {
            scale: isMobile ? 0.90 : 0.82,
            borderRadius: isMobile ? 32 : 48,
            borderColor: 'rgba(255, 255, 255, 0.18)',
            boxShadow: '0 40px 120px -20px rgba(0, 0, 0, 0.55)',
            ease: 'power1.inOut',
            duration: 1,
          },
          0
        )
        // Vertically compress internal typography (accordion squeeze)
        .to(
          compressContent,
          {
            scaleY: 0.84,
            y: 20,
            transformOrigin: 'center center',
            ease: 'power1.inOut',
            duration: 1,
          },
          0
        )
        // Compress bottom telemetry bar inward and up
        .to(
          telemetry,
          {
            y: -24,
            opacity: 0.45,
            ease: 'power1.inOut',
            duration: 1,
          },
          0
        )
        // Subtle depth recession at tail end
        .to(
          heroCard,
          {
            opacity: 0.45,
            duration: 0.25,
            ease: 'power2.in',
          },
          0.75
        );
      }

      // 3. 3D Mousemove Depth Parallax
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && !('ontouchstart' in window)) {
        const x1 = gsap.quickTo(l1, 'x', { duration: 0.6, ease: 'power2.out' });
        const y1 = gsap.quickTo(l1, 'y', { duration: 0.6, ease: 'power2.out' });

        const x2 = gsap.quickTo(l2, 'x', { duration: 0.6, ease: 'power2.out' });
        const y2 = gsap.quickTo(l2, 'y', { duration: 0.6, ease: 'power2.out' });

        const x3 = gsap.quickTo(l3, 'x', { duration: 0.6, ease: 'power2.out' });
        const y3 = gsap.quickTo(l3, 'y', { duration: 0.6, ease: 'power2.out' });

        const handleMouseMove = (e: MouseEvent) => {
          const { innerWidth, innerHeight } = window;
          const normX = (e.clientX / innerWidth - 0.5) * 2;
          const normY = (e.clientY / innerHeight - 0.5) * 2;

          x1(normX * 12);
          y1(normY * 6);

          x2(normX * 24);
          y2(normY * 12);

          x3(normX * 38);
          y3(normY * 18);
        };

        const handleMouseLeave = () => {
          x1(0);
          y1(0);
          x2(0);
          y2(0);
          x3(0);
          y3(0);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        runway.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          runway.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }, runwayRef);

    // Initial and periodic refresh to guarantee synchronization with preloader
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 800);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={runwayRef}
      className="relative w-full h-[175vh] sm:h-[190vh] bg-[#1C1D20] overflow-visible"
    >
      {/* Native Sticky Stage (Stays locked in viewport during the 180vh scroll runway) */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden p-0 sm:p-4 lg:p-6">
        
        {/* Compressing Hero Stage Card */}
        <div
          ref={heroCardRef}
          className="relative w-full h-full max-h-screen flex flex-col justify-between bg-[#fafaf8] border border-transparent will-change-transform overflow-hidden shadow-none"
        >
          {/* Centered Monumental Content Area */}
          <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 flex-1 flex flex-col justify-center py-8 sm:py-12">
            
            {/* Monumental Asymmetric Typographic Statement with Compression Wrapper */}
            <div
              ref={compressContentRef}
              className="space-y-2 sm:space-y-4 select-none will-change-transform"
            >
              {/* Line 1: Depth Layer 1 — First Name */}
              <div
                ref={line1Ref}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] font-normal font-display tracking-[-0.01em] text-black leading-[1.06] sm:leading-[1.1] pb-1 cursor-default will-change-transform opacity-0"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  Juan Pablo
                </span>
              </div>

              {/* Line 2: Depth Layer 2 — Last Name with Asymmetric Indent */}
              <div
                ref={line2Ref}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] font-normal font-display tracking-[-0.01em] text-black leading-[1.06] sm:leading-[1.1] pb-1 sm:pl-14 md:pl-20 lg:pl-28 cursor-default will-change-transform opacity-0"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  Chacón.
                </span>
              </div>

              {/* Line 3: Depth Layer 3 — Core Dual Discipline Statement */}
              <div
                ref={line3Ref}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2vw] font-light font-display tracking-[-0.01em] text-black/50 hover:text-black/80 leading-[1.08] sm:leading-[1.12] pb-1 pt-2 sm:pt-4 sm:pl-2 cursor-default will-change-transform opacity-0 transition-colors duration-500"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  Design <span className="italic font-light text-black/35">&</span> Production Code.
                </span>
              </div>
            </div>

          </div>

          {/* Clean Bottom Orientation Bar (Pneumatically Compresses Inward on Scroll) */}
          <div
            ref={telemetryBarRef}
            className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 pb-8 sm:pb-10 flex items-center justify-between text-xs font-mono text-black/60 select-none will-change-transform"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>{siteConfig.profile.location}</span>
              <span className="text-black/20">•</span>
              <span className="text-black/50">Independent Studio</span>
            </div>
            <div className="text-black/40 font-mono text-[11px]">
              {siteConfig.profile.role}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
