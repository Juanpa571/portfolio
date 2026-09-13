import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { siteConfig } from '../../config/site';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const line3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const l1 = line1Ref.current;
    const l2 = line2Ref.current;
    const l3 = line3Ref.current;
    const container = containerRef.current;
    if (!l1 || !l2 || !l3 || !container) return;

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

    // 2. 3D Multi-Layer Depth Parallax on Mouse Move
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || 'ontouchstart' in window) {
      return;
    }

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
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[calc(100vh-5.5rem)] min-h-[calc(100dvh-5.5rem)] flex flex-col justify-between border-b border-black/[0.08] overflow-hidden"
    >
      {/* Centered Monumental Content Area */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 flex-1 flex flex-col justify-center py-8 sm:py-12">
        
        {/* Monumental Asymmetric Typographic Statement with 3D Depth Layers */}
        <div className="space-y-2 sm:space-y-4 select-none">
          
          {/* Line 1: Depth Layer 1 */}
          <div
            ref={line1Ref}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] font-normal font-display tracking-[-0.01em] text-black leading-[1.06] sm:leading-[1.1] pb-1 cursor-default will-change-transform opacity-0"
            data-interactive
          >
            <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
              Design
            </span>{' '}
            <span className="font-light italic text-black/45 normal-case hover:text-black/70 transition-colors duration-300">
              meets
            </span>
          </div>

          {/* Line 2: Depth Layer 2 */}
          <div
            ref={line2Ref}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] font-normal font-display tracking-[-0.01em] text-black leading-[1.06] sm:leading-[1.1] pb-1 sm:pl-8 md:pl-12 lg:pl-14 cursor-default will-change-transform opacity-0"
            data-interactive
          >
            <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
              Production
            </span>
          </div>

          {/* Line 3: Depth Layer 3 */}
          <div
            ref={line3Ref}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] font-normal font-display tracking-[-0.01em] text-black/55 hover:text-black leading-[1.06] sm:leading-[1.1] pb-1 cursor-default will-change-transform opacity-0 transition-colors duration-500"
            data-interactive
          >
            <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
              Code & Architecture.
            </span>
          </div>
        </div>

      </div>

      {/* Clean Bottom Orientation Bar (Within the viewport, above the fold) */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 pb-8 sm:pb-10 flex items-center justify-between text-xs font-mono text-black/60 select-none">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>{siteConfig.profile.location}</span>
        </div>
        <div className="flex items-center gap-2 text-black/40 hover:text-black transition-colors cursor-default">
          <span>Scroll to explore</span>
          <span className="inline-block animate-bounce">↓</span>
        </div>
      </div>

    </section>
  );
};
