import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';
import { highlightBrandKeywords } from '../../utils/textHighlight';

gsap.registerPlugin(ScrollTrigger);

export const VelocityTickerV2: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !row1Ref.current || !row2Ref.current) return;

    let x1 = 0;
    let x2 = -1500;
    let velocityMultiplier = 0;
    let targetVelocity = 0;

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const v = self.getVelocity();
        targetVelocity = Math.max(Math.min(v * 0.0035, 14), -14);
      },
    });

    let halfWidth1 = row1Ref.current.scrollWidth / 2;
    let halfWidth2 = row2Ref.current.scrollWidth / 2;

    const resizeObserver = new ResizeObserver(() => {
      if (row1Ref.current) halfWidth1 = row1Ref.current.scrollWidth / 2;
      if (row2Ref.current) halfWidth2 = row2Ref.current.scrollWidth / 2;
    });

    resizeObserver.observe(row1Ref.current);
    resizeObserver.observe(row2Ref.current);

    let isInView = false;
    const updateTicker = () => {
      if (!isInView) return;
      targetVelocity *= 0.92;
      velocityMultiplier += (targetVelocity - velocityMultiplier) * 0.12;

      const baseSpeed = 1.1;

      x1 -= baseSpeed + (velocityMultiplier >= 0 ? velocityMultiplier * 1.6 : velocityMultiplier * 0.8);
      x2 += baseSpeed - (velocityMultiplier >= 0 ? velocityMultiplier * 1.6 : velocityMultiplier * 0.8);

      const currentSkew = Math.max(Math.min(velocityMultiplier * -0.65, 8), -8);

      if (row1Ref.current && halfWidth1 > 0) {
        if (x1 <= -halfWidth1) x1 += halfWidth1;
        if (x1 > 0) x1 -= halfWidth1;
        row1Ref.current.style.transform = `translate3d(${x1}px, 0, 0) skewX(${currentSkew.toFixed(2)}deg)`;
      }

      if (row2Ref.current && halfWidth2 > 0) {
        if (x2 >= 0) x2 -= halfWidth2;
        if (x2 < -halfWidth2) x2 += halfWidth2;
        row2Ref.current.style.transform = `translate3d(${x2}px, 0, 0) skewX(${(-currentSkew).toFixed(2)}deg)`;
      }
    };

    gsap.ticker.add(updateTicker);

    // Pause ticker when offscreen to save main thread budget
    let viewportObserver: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window && containerRef.current) {
      viewportObserver = new IntersectionObserver(
        (entries) => {
          isInView = entries[0]?.isIntersecting ?? false;
        },
        { rootMargin: '100px 0px' }
      );
      viewportObserver.observe(containerRef.current);
    } else {
      isInView = true;
    }

    return () => {
      gsap.ticker.remove(updateTicker);
      resizeObserver.disconnect();
      scrollTrigger.kill();
      if (viewportObserver) viewportObserver.disconnect();
    };
  }, []);

  const renderItems = (items: Array<{ text: string; filled: boolean }>) => (
    <>
      {[...items, ...items, ...items, ...items].map((item, idx) => (
        <span key={idx} className="inline-flex items-center shrink-0">
          <span
            className={`transition-colors duration-300 ${
              item.filled
                ? 'text-white font-medium'
                : 'text-slate-400 font-light'
            }`}
          >
            {highlightBrandKeywords(item.text)}
          </span>
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-cyan-400 mx-5 sm:mx-8 shadow-sm shadow-cyan-400/50 shrink-0" />
        </span>
      ))}
    </>
  );

  return (
    <section
      ref={containerRef}
      className="py-12 sm:py-16 border-y border-white/[0.08] bg-[#070709]/40 backdrop-blur-sm overflow-hidden select-none relative"
      aria-hidden="true"
    >
      <div className="space-y-4 sm:space-y-6">
        {/* Row 1: Flowing Left */}
        <div className="overflow-hidden whitespace-nowrap will-change-transform py-2">
          <div
            ref={row1Ref}
            className="inline-flex items-center text-2xl sm:text-4xl lg:text-5xl font-display tracking-tight"
            style={{ willChange: 'transform' }}
          >
            {renderItems(t.ticker.track1)}
          </div>
        </div>

        {/* Row 2: Flowing Right */}
        <div className="overflow-hidden whitespace-nowrap will-change-transform py-2">
          <div
            ref={row2Ref}
            className="inline-flex items-center text-2xl sm:text-4xl lg:text-5xl font-display tracking-tight"
            style={{ willChange: 'transform' }}
          >
            {renderItems(t.ticker.track2)}
          </div>
        </div>
      </div>
    </section>
  );
};
