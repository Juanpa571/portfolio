import React, { useEffect, useState } from 'react';

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
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Brief pause at 100% before curtain sweep
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        // Unlock body scroll immediately so the page is interactive as curtain lifts
        document.body.style.overflow = '';
        if (onComplete) onComplete();
      }, 250);

      // Unmount after curtain animation completes
      const goneTimer = setTimeout(() => {
        setIsGone(true);
        document.body.style.overflow = '';
        window.dispatchEvent(new Event('resize'));
        window.dispatchEvent(new Event('scroll'));
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
      <div className="flex items-center justify-between text-xs font-mono text-white/50 tracking-wider">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-white font-semibold">JP STUDIOS</span>
        </div>
        <div>
          <span>CALI, COLOMBIA (UTC-5)</span>
        </div>
      </div>

      {/* Center Monumental Counter & Status */}
      <div className="my-auto space-y-4">
        <div className="text-8xl sm:text-[14vw] font-bold font-display tracking-tighter text-white leading-none">
          {progress}<span className="text-white/30 text-5xl sm:text-[6vw] font-light font-mono">%</span>
        </div>
        <div className="text-xs sm:text-sm font-mono text-white/60 tracking-tight flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>
            {progress < 30
              ? 'Calibrating typography & viewport...'
              : progress < 75
              ? 'Compiling production architecture...'
              : progress < 100
              ? 'Initializing hardware acceleration...'
              : 'Stage ready.'}
          </span>
        </div>
      </div>

      {/* Bottom Progress Hairline */}
      <div className="space-y-4">
        <div className="flex justify-between text-[11px] font-mono text-white/40">
          <span>Solo Creative Studio</span>
          <span>Design & Engineering</span>
        </div>
        <div className="w-full h-[1.5px] bg-white/10 overflow-hidden rounded-full">
          <div
            className="h-full bg-white transition-[width] duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
