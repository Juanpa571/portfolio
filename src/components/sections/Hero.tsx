import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '../../config/site';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
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
    const container = containerRef.current;
    const heroCard = heroCardRef.current;
    const compressContent = compressContentRef.current;
    const telemetry = telemetryBarRef.current;

    if (!l1 || !l2 || !l3 || !container || !heroCard || !compressContent || !telemetry) return;

    const ctx = gsap.context(() => {
      // 1. Split-Line Entry Reveal on Load
      const lines = [l1, l2, l3];
      gsap.fromTo(
        lines,
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

      // 2. Interactive Scroll Compression Stage (Compresses into floating rounded stage on scroll down)
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const isMobile = window.innerWidth < 768;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: isMobile ? '+=50%' : '+=75%',
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });

        // A. Compress the entire hero stage card (scale down, round corners, elevate with shadow)
        tl.to(
          heroCard,
          {
            scale: isMobile ? 0.93 : 0.89,
            borderRadius: isMobile ? 28 : 44,
            borderColor: 'rgba(0, 0, 0, 0.12)',
            boxShadow: '0 35px 95px -20px rgba(0, 0, 0, 0.16)',
            yPercent: isMobile ? 3 : 5,
            ease: 'power1.inOut',
            duration: 1,
          },
          0
        )
        // B. Vertically compress the massive typography container (accordion squeeze)
        .to(
          compressContent,
          {
            scaleY: 0.88,
            yPercent: 6,
            transformOrigin: 'center center',
            ease: 'power1.inOut',
            duration: 1,
          },
          0
        )
        // C. Squeeze the bottom telemetry bar inward/upward
        .to(
          telemetry,
          {
            yPercent: -28,
            opacity: 0.45,
            ease: 'power1.inOut',
            duration: 1,
          },
          0
        )
        // D. Gentle depth fade as the compression reaches completion
        .to(
          heroCard,
          {
            opacity: 0.4,
            duration: 0.3,
            ease: 'power2.in',
          },
          0.7
        );
      }

      // 3. 3D Multi-Layer Depth Parallax on Mouse Move (Operates independently on child elements)
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
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          container.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#eeebe4] overflow-hidden"
    >
      {/* Compressing Hero Stage Card (Scales, rounds corners, and compresses on scroll) */}
      <div
        ref={heroCardRef}
        className="relative w-full min-h-[calc(100vh-5.5rem)] min-h-[calc(100dvh-5.5rem)] flex flex-col justify-between bg-[#fafaf8] border border-transparent will-change-transform overflow-hidden"
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
    </section>
  );
};
