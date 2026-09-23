import React, { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    // Lock body scrolling during preloader
    document.body.style.overflow = 'hidden';

    // Accelerated progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Organic irregular increments
        const increment = Math.floor(Math.random() * 8) + 3;
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
      ScrollTrigger.refresh();
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Brief pause at 100% before curtain sweep
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        if (onComplete) onComplete();
      }, 250);

      // Unmount after curtain animation completes
      const goneTimer = setTimeout(() => {
        setIsGone(true);
        document.body.style.overflow = '';
        ScrollTrigger.refresh();
      }, 1050);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(goneTimer);
      };
    }
  }, [progress, onComplete]);

  if (isGone) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#0c0d12] text-white flex flex-col justify-between p-8 sm:p-14 select-none pointer-events-auto transition-transform duration-[850ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between text-xs font-sans text-white/60">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/70"></span>
          <span className="text-white font-medium">JP Studios</span>
        </div>
        <div>
          <span>Cali, Colombia</span>
        </div>
      </div>

      {/* Center Monumental Counter */}
      <div className="my-auto">
        <div className="text-8xl sm:text-[14vw] font-light font-display tracking-tight text-white leading-none">
          {progress}<span className="text-white/30 text-5xl sm:text-[6vw] font-light font-sans">%</span>
        </div>
      </div>

      {/* Bottom Progress Hairline */}
      <div className="space-y-4">
        <div className="flex justify-between text-xs font-sans text-white/40">
          <span>JP Studios</span>
          <span>Diseño para <span className="text-[#057a3e]">Vender</span></span>
        </div>
        <div className="w-full h-[1.5px] bg-white/10 overflow-hidden rounded-full">
          <div
            className="h-full w-full bg-white origin-left transition-transform duration-75 ease-out will-change-transform"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>
      </div>
    </div>
  );
};
