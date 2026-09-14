import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export const VelocityTicker: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !row1Ref.current || !row2Ref.current) return;

    let x1 = 0;
    let x2 = -1500; // Offset initial position for opposing flow
    let velocityMultiplier = 0;
    let targetVelocity = 0;

    // Listen to scroll velocity via ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        // self.getVelocity() returns pixels per second
        const v = self.getVelocity();
        // Normalize and clamp velocity impact
        targetVelocity = Math.max(Math.min(v * 0.0035, 14), -14);
      },
    });

    const updateTicker = () => {
      // Lerp velocity back towards 0 smoothly (inertial damping)
      targetVelocity *= 0.92;
      velocityMultiplier += (targetVelocity - velocityMultiplier) * 0.12;

      // Base cruise speed
      const baseSpeed = 1.1;

      // Row 1 flows leftwards (negative x), accelerates on scroll
      x1 -= baseSpeed + (velocityMultiplier >= 0 ? velocityMultiplier * 1.6 : velocityMultiplier * 0.8);
      // Row 2 flows rightwards (positive x), accelerates inversely on scroll
      x2 += baseSpeed - (velocityMultiplier >= 0 ? velocityMultiplier * 1.6 : velocityMultiplier * 0.8);

      // Dynamic aerodynamic skew based on scroll velocity (clamped to +/- 8deg)
      const currentSkew = Math.max(Math.min(velocityMultiplier * -0.65, 8), -8);

      // Loop thresholds based on half content width
      if (row1Ref.current) {
        const halfWidth1 = row1Ref.current.scrollWidth / 2;
        if (x1 <= -halfWidth1) x1 += halfWidth1;
        if (x1 > 0) x1 -= halfWidth1;
        row1Ref.current.style.transform = `translate3d(${x1}px, 0, 0) skewX(${currentSkew.toFixed(2)}deg)`;
      }

      if (row2Ref.current) {
        const halfWidth2 = row2Ref.current.scrollWidth / 2;
        if (x2 >= 0) x2 -= halfWidth2;
        if (x2 < -halfWidth2) x2 += halfWidth2;
        row2Ref.current.style.transform = `translate3d(${x2}px, 0, 0) skewX(${(-currentSkew).toFixed(2)}deg)`;
      }
    };

    gsap.ticker.add(updateTicker);

    return () => {
      gsap.ticker.remove(updateTicker);
      scrollTrigger.kill();
    };
  }, []);

  // Duplicate items 4 times to ensure infinite seamless loop on any screen width
  const renderItems = (items: Array<{ text: string; filled: boolean }>) => (
    <>
      {[...items, ...items, ...items, ...items].map((item, idx) => (
        <span key={idx} className="inline-flex items-center shrink-0">
          <span
            className={`transition-colors duration-300 ${
              item.filled
                ? 'text-black font-medium'
                : 'text-transparent font-normal [-webkit-text-stroke:1px_rgba(0,0,0,0.35)] hover:[-webkit-text-stroke:1px_rgba(0,0,0,0.8)]'
            }`}
          >
            {item.text}
          </span>
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-500 mx-5 sm:mx-8 shadow-xs shrink-0" />
        </span>
      ))}
    </>
  );

  return (
    <section
      ref={containerRef}
      className="py-12 sm:py-16 border-b border-black/[0.08] bg-[#fafaf8] overflow-hidden select-none relative"
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

        {/* Row 2: Flowing Right (Inverted Flow) */}
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
