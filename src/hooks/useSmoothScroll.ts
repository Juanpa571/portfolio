import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useSmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    (window as any).__lenis = lenis;

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Smooth scroll for in-page anchors
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest('a[href^="#"]');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const easeInOutQuint = (t: number) =>
            t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;

          if (href === '#' || href === '#top') {
            lenis.scrollTo(0, { duration: 1.45, easing: easeInOutQuint });
          } else {
            const el = document.querySelector(href);
            if (el) {
              lenis.start();
              lenis.scrollTo(el as HTMLElement, {
                offset: -85,
                duration: 1.45,
                easing: easeInOutQuint,
              });
            }
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      gsap.ticker.remove(updateTicker);
      document.removeEventListener('click', handleAnchorClick);
      (window as any).__lenis = null;
      lenis.destroy();
    };
  }, []);

  return lenisRef;
};
