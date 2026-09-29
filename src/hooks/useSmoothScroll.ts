import { useEffect, useRef } from 'react';

/**
 * useSmoothScroll
 * 
 * Implementación de Scroll Suave de Grado Estudio basada en Lenis.
 * Diseñada para máxima fluidez inercial sin micro-saltos (anti-jumps).
 * 
 * Principios de estabilidad:
 * 1. Cumplimiento de Regla 13: Activo ÚNICAMENTE en escritorio con puntero fino (pointer: fine).
 * 2. Inercia física continua (lerp: 0.088): Elimina micro-tirones al rodar la rueda del ratón.
 * 3. Auto-Resize con ResizeObserver: Adapta dimensiones dinámicas evitando saltos por desincronización de altura.
 * 4. Navegación por anclas sincronizada con offset de header (-80px) y pushState sin saltos nativos.
 * 5. GSAP lagSmoothing calibrado a (500, 33) para prevenir micro-catches en caídas momentáneas de FPS.
 */
export const useSmoothScroll = () => {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Regla 13: Inicializar EXCLUSIVAMENTE en entornos de escritorio con puntero fino
    // En móviles y tablets (pointer: coarse), preservar el scroll inercial nativo de 90/120Hz acelerado por GPU
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    let destroyed = false;
    let cleanup: (() => void) | undefined;

    Promise.all([
      import('lenis'),
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]).then(([{ default: Lenis }, { default: gsap }, { ScrollTrigger }]) => {
      if (destroyed) return;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        lerp: 0.088,              // Inercia continua basada en física; cero cálculos de curvas abruptas
        smoothWheel: true,
        wheelMultiplier: 0.95,    // Pacing controlado para evitar picos de velocidad
        touchMultiplier: 1.0,
        autoResize: true,         // Supervisión continua de altura de página
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        infinite: false,
      });

      lenisRef.current = lenis;
      (window as any).__lenis = lenis;
      (window as any).lenis = lenis;

      // Sincronizar Lenis con GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      const updateTicker = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(updateTicker);
      // Mantener lagSmoothing elástico para evitar saltos si un fotograma tarda un instante de más
      gsap.ticker.lagSmoothing(500, 33);

      // Despachar evento para componentes reactivos al scroll (ej. KineticBackgroundV2)
      window.dispatchEvent(new CustomEvent('lenis-init', { detail: lenis }));

      // Sincronización continua de altura para evitar saltos en carga tardía de fuentes o imágenes
      const handleResize = () => {
        lenis?.resize();
      };

      window.addEventListener('resize', handleResize, { passive: true });
      window.addEventListener('load', handleResize, { passive: true });
      document.fonts?.ready?.then(handleResize);

      let resizeObserver: ResizeObserver | null = null;
      if (typeof ResizeObserver !== 'undefined' && document.body) {
        resizeObserver = new ResizeObserver(() => {
          lenis?.resize();
        });
        resizeObserver.observe(document.body);
      }

      // Navegación suave por anclas sin saltos nativos ni solapamiento de cabecera
      const handleAnchorClick = (e: MouseEvent) => {
        const anchor = (e.target as HTMLElement | null)?.closest('a[href^="#"], a[href^="/#"], a[href*="#"]');
        if (!anchor) return;

        const href = anchor.getAttribute('href');
        if (!href) return;

        if (href === '#' || href === '#top') {
          e.preventDefault();
          lenis.scrollTo(0, { duration: 1.2 });
          return;
        }

        const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
        const isV2 = currentPath === '/v2';
        const isRoot = currentPath === '/';

        const isCurrentPageAnchor =
          href.startsWith('#') ||
          (isRoot && href.startsWith('/#')) ||
          (isV2 && href.startsWith('/v2#'));

        if (isCurrentPageAnchor) {
          const hashIndex = href.indexOf('#');
          if (hashIndex !== -1) {
            const hash = href.substring(hashIndex);
            const targetElement = document.querySelector(hash);
            if (targetElement) {
              e.preventDefault();
              lenis.resize();
              // Offset de -80px para dar respiración debajo del Header flotante
              lenis.scrollTo(targetElement as HTMLElement, {
                offset: -80,
                duration: 1.2,
              });

              if (window.location.hash !== hash) {
                window.history.pushState(null, '', hash);
              }
            }
          }
        }
      };

      document.addEventListener('click', handleAnchorClick);

      cleanup = () => {
        gsap.ticker.remove(updateTicker);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('load', handleResize);
        document.removeEventListener('click', handleAnchorClick);
        if (resizeObserver) resizeObserver.disconnect();
        (window as any).__lenis = null;
        (window as any).lenis = null;
        lenis.destroy();
      };
    }).catch((err) => {
      console.warn('Smooth scroll non-blocking fallback (native scroll preserved):', err);
    });

    return () => {
      destroyed = true;
      if (cleanup) cleanup();
    };
  }, []);

  return lenisRef;
};
