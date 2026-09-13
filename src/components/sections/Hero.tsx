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

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: '+=70%',
            pin: true,
            anticipatePin: 1,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        // Function to calculate exact target vector to the 3-line button center
        const getDelta = (element: HTMLElement) => {
          const btnRect = btn?.getBoundingClientRect();
          const targetX = btnRect ? btnRect.left + btnRect.width / 2 : window.innerWidth - 60;
          const targetY = btnRect ? btnRect.top + btnRect.height / 2 : 60;

          const elRect = element.getBoundingClientRect();
          return {
            x: targetX - (elRect.left + elRect.width * 0.45),
            y: targetY - (elRect.top + elRect.height / 2),
          };
        };

        const d3 = getDelta(s3);
        const d2 = getDelta(s2);
        const d1 = getDelta(s1);

        // A. Bottom telemetry bar fades and tucks out
        tl.to(
          telemetry,
          {
            y: -25,
            opacity: 0,
            scale: 0.9,
            duration: 0.25,
            ease: 'power2.in',
          },
          0
        )
        // B. Line 3 ("Design & Production Code.") gets sucked in first
        .to(
          s3,
          {
            x: d3.x,
            y: d3.y,
            scale: 0.025,
            rotate: 16,
            opacity: 0,
            filter: 'blur(4px)',
            transformOrigin: 'center center',
            duration: 0.65,
            ease: 'power3.in',
          },
          0.05
        )
        // C. Line 2 ("Chacón.") follows right behind, curving towards the top right
        .to(
          s2,
          {
            x: d2.x,
            y: d2.y,
            scale: 0.025,
            rotate: 20,
            opacity: 0,
            filter: 'blur(5px)',
            transformOrigin: 'center center',
            duration: 0.7,
            ease: 'power3.in',
          },
          0.15
        )
        // D. Line 1 ("Juan Pablo") plunges straight into the center of the 3-line icon
        .to(
          s1,
          {
            x: d1.x,
            y: d1.y,
            scale: 0.02,
            rotate: 24,
            opacity: 0,
            filter: 'blur(6px)',
            transformOrigin: 'center center',
            duration: 0.75,
            ease: 'power3.in',
          },
          0.25
        );

        // E. The 3-Line Corner Button Absorption Reaction
        if (btn) {
          tl.fromTo(
            btn,
            { scale: 1 },
            {
              scale: 1.22,
              boxShadow: '0 0 35px rgba(255, 255, 255, 0.6), 0 20px 40px rgba(0, 0, 0, 0.45)',
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
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
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

    // Ensure ScrollTrigger triggers recalculate properly after mount
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
      className="relative min-h-[calc(100vh-5.5rem)] min-h-[calc(100dvh-5.5rem)] flex flex-col justify-between bg-[#fafaf8] border-b border-black/[0.08] overflow-hidden"
    >
      {/* Centered Monumental Content Area */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 flex-1 flex flex-col justify-center py-8 sm:py-12">
        
        {/* Monumental Asymmetric Typographic Statement with 3D Depth Layers */}
        <div className="space-y-2 sm:space-y-4 select-none">
          
          {/* Line 1: Suction Wrapper -> Depth Layer 1 — First Name */}
          <div ref={suction1Ref} className="will-change-transform">
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

          {/* Line 2: Suction Wrapper -> Depth Layer 2 — Last Name with Asymmetric Indent */}
          <div ref={suction2Ref} className="will-change-transform sm:pl-14 md:pl-20 lg:pl-28">
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

          {/* Line 3: Suction Wrapper -> Depth Layer 3 — Core Dual Discipline Statement */}
          <div ref={suction3Ref} className="will-change-transform sm:pl-2">
            <div
              ref={line3Ref}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2vw] font-light font-display tracking-[-0.01em] text-black/50 hover:text-black/80 leading-[1.08] sm:leading-[1.12] pb-1 pt-2 sm:pt-4 cursor-default will-change-transform opacity-0 transition-colors duration-500"
              data-interactive
            >
              <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                Design <span className="italic font-light text-black/35">&</span> Production Code.
              </span>
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
