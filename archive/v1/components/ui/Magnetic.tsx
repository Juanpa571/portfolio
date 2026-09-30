import React, { useRef, useEffect } from 'react';

interface MagneticProps {
  children: React.ReactElement;
  strength?: number;
  radius?: number;
  className?: string;
}

export const Magnetic: React.FC<MagneticProps> = ({
  children,
  strength = 0.38,
  radius = 90,
  className = '',
}) => {
  const magneticRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = magneticRef.current;
    if (!el) return;

    if (
      window.innerWidth < 1024 ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    let active = true;
    let removeListeners: (() => void) | undefined;

    import('gsap').then(({ default: gsap }) => {
      if (!active || !magneticRef.current) return;

      const xTo = gsap.quickTo(el, 'x', { duration: 0.8, ease: 'elastic.out(1, 0.35)' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.8, ease: 'elastic.out(1, 0.35)' });

      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

        if (distance < radius) {
          const deltaX = (e.clientX - centerX) * strength;
          const deltaY = (e.clientY - centerY) * strength;
          xTo(deltaX);
          yTo(deltaY);
        } else {
          xTo(0);
          yTo(0);
        }
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      el.addEventListener('mouseleave', handleMouseLeave);

      removeListeners = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
        xTo(0);
        yTo(0);
      };
    });

    return () => {
      active = false;
      if (removeListeners) removeListeners();
    };
  }, [strength, radius]);

  return (
    <div ref={magneticRef} className={`inline-block will-change-transform ${className}`}>
      {children}
    </div>
  );
};
