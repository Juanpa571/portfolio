import React, { useEffect, useRef } from 'react';
import { siteConfig } from '../../config/site';
import { Magnetic } from '../ui/Magnetic';
import { useLanguage } from '../../context/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Intro: React.FC = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const photoRef = useRef<HTMLDivElement | null>(null);
  const statementRef = useRef<HTMLParagraphElement | null>(null);
  const actionsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const isMobile =
      window.innerWidth < 1024 ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0;

    if (isMobile) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      if (photoRef.current) {
        tl.fromTo(
          photoRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
          0
        );
      }

      if (statementRef.current) {
        tl.fromTo(
          statementRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
          0.1
        );
      }

      if (actionsRef.current) {
        const buttons = actionsRef.current.children;
        tl.fromTo(
          buttons,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: 'power3.out' },
          0.25
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="intro"
      data-theme="dark"
      ref={sectionRef} 
      className="py-14 sm:py-16 lg:py-20 bg-[#111111] text-white relative z-10 overflow-hidden"
    >
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Juan Pablo's Portrait (Col 1-5) */}
          <div ref={photoRef} className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px] xl:max-w-[410px] max-h-[58vh] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/[0.08] group will-change-[transform,opacity]">
              <picture className="w-full h-full">
                <source media="(max-width: 640px)" type="image/webp" srcSet="/hero-portrait-sm.webp" />
                <source type="image/webp" srcSet="/hero-portrait.webp" />
                <img
                  src="/hero-portrait.webp"
                  alt="Juan Pablo Chacón — Diseñador e ingeniero de software web en Cali, fundador de JP Studios"
                  className="w-full h-full object-cover object-top filter grayscale contrast-[1.03] group-hover:grayscale-0 transition-all duration-700 ease-out"
                  width={840}
                  height={1120}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </div>

          {/* Right Column: Statement Text + Contact Buttons (Col 6-12) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div
              ref={statementRef}
              className="space-y-4 sm:space-y-5 text-lg sm:text-xl md:text-2xl lg:text-[1.85rem] xl:text-[2.05rem] text-white/80 font-sans font-normal leading-[1.52] sm:leading-[1.56] lg:leading-[1.6] tracking-tight will-change-[transform,opacity]"
            >
              {language === 'es' ? (
                <>
                  <p className="m-0">
                    En <span className="text-white font-semibold">JP Studios</span>, liderado por Juan Pablo Chacón, desarrollamos <span className="text-white font-semibold">páginas web en Cali</span> para empresas y negocios que necesitan destacar y facturar.
                  </p>
                  <p className="m-0">
                    Construimos sitios web a medida en código ultrarrápido (React 19), estructurados para <span className="text-white font-semibold">liderar en Google y motores de IA</span>, y optimizados para transformar visitas locales en <span className="text-white font-semibold">ventas directas por WhatsApp</span>.
                  </p>
                </>
              ) : (
                <>
                  <p className="m-0">
                    At <span className="text-white font-semibold">JP Studios</span>, an independent web engineering studio led by Juan Pablo Chacón, we craft <span className="text-white font-semibold">high-performance websites in Cali</span> for businesses that cannot afford to go unnoticed.
                  </p>
                  <p className="m-0">
                    Ultra-fast websites, optimized to <span className="text-white font-semibold">dominate the Google ecosystem and AI search engines</span>, engineered to turn local discovery into <span className="text-white font-semibold">real clients across your primary contact channels</span>.
                  </p>
                </>
              )}
            </div>

            {/* Contact Actions Lockup */}
            <div ref={actionsRef} className="pt-6 sm:pt-8 lg:pt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Magnetic strength={0.3} radius={100} className="w-full sm:w-auto">
                <a
                  href={siteConfig.profile.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-2xl bg-white text-black text-sm font-medium hover:bg-neutral-200 active:scale-[0.98] transition-all duration-300 flex items-center justify-between sm:justify-start gap-3 shadow-sm group"
                  data-interactive
                >
                  <span>{t.intro.startOnWhatsApp}</span>
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 font-sans text-xs">↗</span>
                </a>
              </Magnetic>

              <Magnetic strength={0.25} radius={90} className="w-full sm:w-auto">
                <a
                  href={`mailto:${siteConfig.profile.contact.email}`}
                  className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white text-xs sm:text-sm font-sans font-medium active:scale-[0.98] transition-all duration-300 flex items-center justify-between sm:justify-start gap-4 group"
                  data-interactive
                >
                  <span className="truncate">{siteConfig.profile.contact.email}</span>
                  <span className="text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-all text-xs">{t.intro.direct}</span>
                </a>
              </Magnetic>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
