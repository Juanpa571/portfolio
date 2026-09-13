import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '../../config/site';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const suction1Ref = useRef<HTMLDivElement | null>(null);
  const suction2Ref = useRef<HTMLDivElement | null>(null);
  const suction3Ref = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const line3Ref = useRef<HTMLDivElement | null>(null);
  const telemetryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const l1 = line1Ref.current;
    const l2 = line2Ref.current;
    const l3 = line3Ref.current;
    const s1 = suction1Ref.current;
    const s2 = suction2Ref.current;
    const s3 = suction3Ref.current;
    const telemetry = telemetryRef.current;
    const container = containerRef.current;

    if (!l1 || !l2 || !l3 || !s1 || !s2 || !s3 || !telemetry || !container) return;

    const ctx = gsap.context(() => {
      // 1. Monumental Typographic Entry Reveal on Load
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

      // 2. Interactive Scroll Suction into Top-Right 3-Line Menu Vault
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const btn = document.getElementById('corner-menu-btn');

        // Dynamic vector calculator to the exact center of the 3-line hamburger button
        const getDeltas = () => {
          const btnRect = btn?.getBoundingClientRect();
          const targetX = btnRect ? btnRect.left + btnRect.width / 2 : window.innerWidth - (window.innerWidth < 640 ? 52 : 64);
          const targetY = btnRect ? btnRect.top + btnRect.height / 2 : (window.innerWidth < 640 ? 52 : 64);

          const r1 = s1.getBoundingClientRect();
          const r2 = s2.getBoundingClientRect();
          const r3 = s3.getBoundingClientRect();

          return {
            d1: {
              x: targetX - (r1.left + r1.width / 2),
              y: targetY - (r1.top + r1.height / 2),
            },
            d2: {
              x: targetX - (r2.left + r2.width / 2),
              y: targetY - (r2.top + r2.height / 2),
            },
            d3: {
              x: targetX - (r3.left + r3.width / 2),
              y: targetY - (r3.top + r3.height / 2),
            },
          };
        };

        const { d1, d2, d3 } = getDeltas();

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: '+=85%',
            pin: true,
            anticipatePin: 1,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        // A. Bottom telemetry bar fades and tucks away
        tl.to(
          telemetry,
          {
            y: -28,
            opacity: 0,
            scale: 0.9,
            duration: 0.25,
            ease: 'power2.in',
          },
          0
        )
        // B. Line 3 ("Design & Production Code.") gets sucked in first along a curved path
        .to(
          s3,
          {
            x: d3.x,
            y: d3.y,
            scale: 0.015,
            rotate: 14,
            opacity: 0,
            filter: 'blur(4px)',
            duration: 0.65,
            ease: 'power2.in',
          },
          0.05
        )
        // C. Line 2 ("Chacón.") curves and accelerates towards the 3-line icon
        .to(
          s2,
          {
            x: d2.x,
            y: d2.y,
            scale: 0.015,
            rotate: 18,
            opacity: 0,
            filter: 'blur(5px)',
            duration: 0.7,
            ease: 'power2.in',
          },
          0.18
        )
        // D. Line 1 ("Juan Pablo") plunges straight into the center of the 3 lines
        .to(
          s1,
          {
            x: d1.x,
            y: d1.y,
            scale: 0.015,
            rotate: 22,
            opacity: 0,
            filter: 'blur(6px)',
            duration: 0.75,
            ease: 'power2.in',
          },
          0.30
        );

        // E. 3-Line Corner Button Absorption Pulse (expands and settles as text enters)
        if (btn) {
          tl.fromTo(
            btn,
            { scale: 1 },
            {
              scale: 1.25,
              boxShadow: '0 0 35px rgba(255, 255, 255, 0.7), 0 20px 40px rgba(0, 0, 0, 0.5)',
              borderColor: 'rgba(255, 255, 255, 0.9)',
              duration: 0.15,
              ease: 'power2.out',
            },
            0.75
          )
          .to(
            btn,
            {
              scale: 1,
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              duration: 0.2,
              ease: 'power2.inOut',
            },
            0.9
          );
        }
      }

      // 3. 3D Mousemove Depth Parallax (Independent on inner child elements)
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

    // Refresh ScrollTrigger after initial mount and font rendering
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 600);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-between pt-28 sm:pt-32 pb-8 sm:pb-10 bg-[#fafaf8] border-b border-black/[0.08] overflow-visible"
    >
      {/* Centered Monumental Content Area */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 flex-1 flex flex-col justify-center py-6 sm:py-10">
        
        {/* Monumental Asymmetric Typographic Statement with 3D Depth Layers */}
        <div className="space-y-2 sm:space-y-4 select-none">
          
          {/* Line 1: Suction Wrapper -> Depth Layer 1 — First Name */}
          <div>
            <div ref={suction1Ref} className="inline-block origin-center will-change-transform">
              <div
                ref={line1Ref}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] font-normal font-display tracking-[-0.01em] text-black leading-[1.06] sm:leading-[1.1] pb-1 cursor-default will-change-transform opacity-0"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  Juan Pablo
                </span>
              </div>
            </div>
          </div>

          {/* Line 2: Suction Wrapper -> Depth Layer 2 — Last Name with Asymmetric Indent */}
          <div className="sm:pl-14 md:pl-20 lg:pl-28">
            <div ref={suction2Ref} className="inline-block origin-center will-change-transform">
              <div
                ref={line2Ref}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] font-normal font-display tracking-[-0.01em] text-black leading-[1.06] sm:leading-[1.1] pb-1 cursor-default will-change-transform opacity-0"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  Chacón.
                </span>
              </div>
            </div>
          </div>

          {/* Line 3: Suction Wrapper -> Depth Layer 3 — Core Dual Discipline Statement */}
          <div className="sm:pl-2 pt-2 sm:pt-4">
            <div ref={suction3Ref} className="inline-block origin-center will-change-transform">
              <div
                ref={line3Ref}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2vw] font-light font-display tracking-[-0.01em] text-black/50 hover:text-black/80 leading-[1.08] sm:leading-[1.12] pb-1 cursor-default will-change-transform opacity-0 transition-colors duration-500"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  Design <span className="italic font-light text-black/35">&</span> Production Code.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Clean Bottom Orientation Bar (Pulls in on Scroll) */}
      <div
        ref={telemetryRef}
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

    </section>
  );
};
