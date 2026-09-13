import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TRACK_1 = [
  { text: 'Production Code', filled: true },
  { text: 'Bespoke Design', filled: false },
  { text: 'System Architecture', filled: true },
  { text: 'Clear Communication', filled: false },
  { text: 'Dependable Engineering', filled: true },
  { text: 'High-Fidelity Interfaces', filled: false },
  { text: 'Scalable Cloud', filled: true },
  { text: 'Figma to Production', filled: false },
];

const TRACK_2 = [
  { text: 'Transparent Process', filled: false },
  { text: 'Cali / Remote Worldwide', filled: true },
  { text: 'Honest Collaboration', filled: false },
  { text: 'Radical Simplicity', filled: true },
  { text: 'Weekly Deployments', filled: false },
  { text: 'Measurable Performance', filled: true },
  { text: 'Full-Stack Craft', filled: false },
  { text: 'Continuous Iteration', filled: true },
];

export const VelocityTicker: React.FC = () => {
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

      // Loop thresholds based on half content width
      if (row1Ref.current) {
        const halfWidth1 = row1Ref.current.scrollWidth / 2;
        if (x1 <= -halfWidth1) x1 += halfWidth1;
        if (x1 > 0) x1 -= halfWidth1;
        row1Ref.current.style.transform = `translate3d(${x1}px, 0, 0)`;
      }

      if (row2Ref.current) {
        const halfWidth2 = row2Ref.current.scrollWidth / 2;
        if (x2 >= 0) x2 -= halfWidth2;
        if (x2 < -halfWidth2) x2 += halfWidth2;
        row2Ref.current.style.transform = `translate3d(${x2}px, 0, 0)`;
      }
    };

    gsap.ticker.add(updateTicker);

    return () => {
      gsap.ticker.remove(updateTicker);
      scrollTrigger.kill();
    };
  }, []);

  // Duplicate items 4 times to ensure infinite seamless loop on any screen width
  const renderItems = (items: typeof TRACK_1) => (
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
            {renderItems(TRACK_1)}
          </div>
        </div>

        {/* Row 2: Flowing Right (Inverted Flow) */}
        <div className="overflow-hidden whitespace-nowrap will-change-transform py-2">
          <div
            ref={row2Ref}
            className="inline-flex items-center text-2xl sm:text-4xl lg:text-5xl font-display tracking-tight"
            style={{ willChange: 'transform' }}
          >
            {renderItems(TRACK_2)}
          </div>
        </div>
      </div>
    </section>
  );
};
