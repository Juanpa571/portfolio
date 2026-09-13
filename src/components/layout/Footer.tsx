import React, { useEffect, useRef, useState } from 'react';
import { siteConfig } from '../../config/site';
import { useLiveTime } from '../../hooks/useLiveTime';
import { TiltCard } from '../ui/TiltCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Footer: React.FC = () => {
  const liveTime = useLiveTime(siteConfig.profile.timezone);
  const [copied, setCopied] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const curvePathRef = useRef<SVGPathElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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
          
          {/* Main Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column (Col 1-7): Monumental Asymmetric Headline & Direct Manifesto */}
            <div className="lg:col-span-7 space-y-8">
              
              <h2
                ref={headlineRef}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] font-bold font-display tracking-tight text-white leading-[0.88] uppercase"
              >
                <div className="overflow-hidden">
                  <span className="reveal-word inline-block will-change-transform">
                    Ready to build
                  </span>
                </div>
                <div className="overflow-hidden sm:pl-14 lg:pl-24 pt-2">
                  <span className="reveal-word inline-block text-white/50 hover:text-white transition-colors duration-500 will-change-transform">
                    something real?
                  </span>
                </div>
              </h2>

              <p className="text-lg sm:text-xl text-white/75 max-w-xl font-normal leading-relaxed font-sans">
                Whether you are validating an early concept, architecting a high-performance React application, or scaling production infrastructure. Direct senior collaboration with zero committees or account executives.
              </p>

              {/* Real-Time Status & Location Telemetry Strip */}
              <div className="pt-3 flex flex-wrap items-center gap-3 text-xs font-mono text-white/60">
                <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90 font-semibold shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Accepting select builds for Q2</span>
                </div>
                <span className="text-white/30">•</span>
                <span>Cali, Colombia ({liveTime || 'COT'})</span>
              </div>

            </div>

            {/* Right Column (Col 8-12): Asymmetric Interactive Action Deck */}
            <div className="lg:col-span-5 space-y-5 lg:-translate-y-4">
              
              {/* WhatsApp Action Monolith with 3D Tilt & Specular Reflection */}
              <TiltCard
                maxTilt={4}
                scale={1.01}
                className="p-8 sm:p-10 rounded-3xl bg-[#14151b] text-white border border-white/10 shadow-2xl hover:border-white/30 transition-all duration-300 group cursor-pointer"
              >
                <a
                  href={siteConfig.profile.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block space-y-7"
                  data-interactive
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono text-white/40 tracking-wider uppercase font-semibold">
                      DIRECT ACTION
                    </span>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-lg font-mono text-white group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                        ↗
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white mb-2 group-hover:translate-x-1 transition-transform">
                      Chat on WhatsApp
                    </div>
                    <p className="text-xs sm:text-sm text-white/65 font-sans leading-relaxed">
                      Instant direct line for project roadmaps, technical feasibility, and timelines.
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-2.5 text-xs font-mono text-white/75 border-t border-white/10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>+61 405667961 — Personal mobile line</span>
                  </div>
                </a>
              </TiltCard>

              {/* Email Direct Terminal Card with Tactile Inversion State */}
              <div
                className="p-8 sm:p-9 rounded-3xl bg-[#14151b] border border-white/10 shadow-xl hover:border-white/25 transition-all duration-300 flex flex-col justify-between space-y-5"
                data-interactive
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-white/40 uppercase tracking-wider font-semibold">
                    ELECTRONIC MAIL
                  </span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className={`text-xs font-mono px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      copied
                        ? 'bg-white text-black font-bold scale-105 shadow-md'
                        : 'bg-white/10 hover:bg-white hover:text-black text-white/80 active:scale-95'
                    }`}
                    data-interactive
                  >
                    {copied ? 'Copied to clipboard ✓' : 'Copy'}
                  </button>
                </div>

                <a
                  href={`mailto:${siteConfig.profile.contact.email}`}
                  className="text-lg sm:text-xl font-display font-bold text-white hover:text-white/75 transition-colors block break-all"
                  data-interactive
                >
                  {siteConfig.profile.contact.email}
                </a>
              </div>

            </div>

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
