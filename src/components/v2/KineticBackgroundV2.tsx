import React, { useEffect, useRef } from 'react';

/**
 * KineticBackgroundV2
 * 
 * Fondo cinético vivo inspirado en Creativeans (presencia monumental de marca)
 * y Haoqi.design (atmósfera cromática fluida y reactiva al scroll).
 * 
 * - Renderizado en GPU mediante HTML5 Canvas ultra-optimizado.
 * - Z-Index garantizado para visibilidad instantánea.
 * - Transición cromática continua basada en distancia de scroll (cero saltos bruscos).
 * - Emblema oficial en cristal 3D con halo prismático y tintado libre de artefactos.
 * - Prevención estricta de Reflows Forzados (Regla 12).
 */
export const KineticBackgroundV2: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let maxScroll = 1;

    let scrollProgress = 0;
    let targetScrollProgress = 0;
    let currentScrollY = 0;
    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;
    let isFinePointer = false;

    // Precarga diferida del activo oficial 3D del emblema en cristal transparente (WebP)
    // No compite con el LCP de la imagen principal durante la carga inicial del Hero
    let emblemImg: HTMLImageElement | null = null;
    let emblemLoaded = false;

    const loadEmblem = () => {
      if (emblemImg) return;
      emblemImg = new Image();
      emblemImg.src = '/jp-emblem-crystal.webp';
      emblemImg.onload = () => {
        emblemLoaded = true;
        requestTick();
      };
    };

    // El emblema en cristal solo se carga bajo demanda cuando el usuario hace scroll hacia abajo (>40px)
    // Cero consumo de ancho de banda o contención durante la carga inicial del Hero

    // Offscreen canvas dedicado para teñir el cristal sin afectar el canvas principal
    const tintCanvas = document.createElement('canvas');
    tintCanvas.width = 512;
    tintCanvas.height = 512;
    const tintCtx = tintCanvas.getContext('2d');

    if (typeof window !== 'undefined') {
      isFinePointer = window.matchMedia('(pointer: fine)').matches;
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    interface ThemePalette {
      c1: [number, number, number];
      c2: [number, number, number];
      c3: [number, number, number];
    }

    // Paletas cromáticas semánticas por bloque
    const THEMES: Record<string, ThemePalette> = {
      cyan: {
        c1: [0, 240, 255],     // Cyan Eléctrico (Hero)
        c2: [37, 99, 235],     // Azul Cobalto
        c3: [79, 70, 229]      // Violeta Nocturno
      },
      rose: {
        c1: [244, 63, 94],     // Carmín Alerta (Diagnóstico del Dolor)
        c2: [190, 18, 60],     // Rubí Profundo
        c3: [76, 5, 25]        // Borgoña Oscuro
      },
      emerald: {
        c1: [16, 185, 129],    // Verde Esmeralda (Ventas & Conversión)
        c2: [5, 150, 105],     // Esmeralda Medio
        c3: [2, 44, 34]        // Verde Bosque Profundo
      }
    };

    const blendColors = (cA: [number, number, number], cB: [number, number, number], t: number): [number, number, number] => {
      const clamped = Math.max(0, Math.min(1, t));
      return [
        Math.round(lerp(cA[0], cB[0], clamped)),
        Math.round(lerp(cA[1], cB[1], clamped)),
        Math.round(lerp(cA[2], cB[2], clamped))
      ];
    };

    const blendPalettes = (pA: ThemePalette, pB: ThemePalette, t: number): ThemePalette => ({
      c1: blendColors(pA.c1, pB.c1, t),
      c2: blendColors(pA.c2, pB.c2, t),
      c3: blendColors(pA.c3, pB.c3, t)
    });

    const curC1: [number, number, number] = [0, 240, 255];
    const curC2: [number, number, number] = [37, 99, 235];
    const curC3: [number, number, number] = [79, 70, 229];

    let diagHeaderTop = 0;
    let servHeaderTop = 0;
    let projHeaderTop = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    let isRunning = false;
    function requestTick() {
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(render);
      }
    }

    // Medición desacoplada mediante rAF para prevenir Layout Thrashing y Forced Reflows (Regla 12)
    let measureRAFId: number | null = null;
    function measureSections() {
      if (measureRAFId !== null) return;
      measureRAFId = requestAnimationFrame(() => {
        const bodyH = document.body ? document.body.clientHeight : 4000;
        maxScroll = Math.max(bodyH - height, 1);
        const diagEl = document.getElementById('diagnostico-header') || document.getElementById('diagnostico');
        const servEl = document.getElementById('servicios-header') || document.getElementById('servicios');
        const projEl = document.getElementById('proyectos-header') || document.getElementById('proyectos');
        const scrollY = window.scrollY || window.pageYOffset || 0;
        if (diagEl) {
          diagHeaderTop = diagEl.getBoundingClientRect().top + scrollY;
        }
        if (servEl) {
          servHeaderTop = servEl.getBoundingClientRect().top + scrollY;
        }
        if (projEl) {
          projHeaderTop = projEl.getBoundingClientRect().top + scrollY;
        }
        measureRAFId = null;
        requestTick();
      });
    }

    function handleScroll() {
      currentScrollY = window.scrollY || window.pageYOffset || 0;
      if (diagHeaderTop === 0) {
        measureSections();
      }
      targetScrollProgress = Math.min(Math.max(currentScrollY / maxScroll, 0), 1);
      if (currentScrollY > 40) {
        loadEmblem();
      }
      requestTick();
    }

    function onResize() {
      resize();
      measureSections();
      handleScroll();
      requestTick();
    }

    // Medición diferida: no bloquea el hilo principal durante el renderizado inicial
    window.addEventListener('load', measureSections, { once: true, passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const onLenisScroll = (e: any) => {
      const scrollY = typeof e.scroll === 'number' ? e.scroll : (window.scrollY || 0);
      currentScrollY = scrollY;
      targetScrollProgress = Math.min(Math.max(currentScrollY / maxScroll, 0), 1);
      if (currentScrollY > 40) {
        loadEmblem();
      }
      requestTick();
    };

    let cleanupLenis: (() => void) | null = null;
    const attachLenis = (lenisInstance: any) => {
      if (lenisInstance && typeof lenisInstance.on === 'function') {
        lenisInstance.on('scroll', onLenisScroll);
        cleanupLenis = () => {
          if (typeof lenisInstance.off === 'function') {
            lenisInstance.off('scroll', onLenisScroll);
          }
        };
      }
    };

    if ((window as any).__lenis) {
      attachLenis((window as any).__lenis);
    } else {
      const onInit = (e: any) => attachLenis(e.detail);
      window.addEventListener('lenis-init', onInit, { once: true });
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isFinePointer) return;
      targetMouseX = e.clientX / width;
      targetMouseY = e.clientY / height;
      requestTick();
    };

    if (isFinePointer) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    const rgba = (rgb: [number, number, number], a: number) => 
      `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${a})`;

    let time = 0;

    /**
     * getTargetPalette: Cálculo cromático continuo basado en scroll.
     * 
     * - Durante el Hero: 100% Cyan.
     * - Al asomar "02 - Diagnóstico": Transición suave de 380px de scroll hacia Carmín.
     * - Durante todo Diagnóstico (incluida la tarjeta de conclusión): 100% Carmín Alerta.
     * - Al asomar "03 - Pilares del Servicio" y "para vender tus productos": Transición progresiva de 380px hacia Esmeralda.
     * - Cero saltos bruscos con un solo clic. Cero cambios prematuros.
     */
    const getTargetPalette = (scrollY: number, innerH: number): ThemePalette => {
      if (scrollY < 80) return THEMES.cyan;
      if (diagHeaderTop === 0 || servHeaderTop === 0) return THEMES.cyan;

      const scrollBottom = scrollY + innerH;
      const transitionDistance = 380; // Distancia en px para una metamorfosis cromática sedosa

      // 1. Zona Hero
      if (scrollBottom < diagHeaderTop) {
        return THEMES.cyan;
      }

      // 2. Transición Hero -> Diagnóstico (conforme el encabezado entra por abajo)
      if (scrollBottom < diagHeaderTop + transitionDistance) {
        const t = (scrollBottom - diagHeaderTop) / transitionDistance;
        return blendPalettes(THEMES.cyan, THEMES.rose, t);
      }

      // 3. Zona Diagnóstico Estable (mientras se lee el diagnóstico y la tarjeta de conclusión)
      if (scrollBottom < servHeaderTop) {
        return THEMES.rose;
      }

      // 4. Transición Diagnóstico -> Servicios (conforme el encabezado verde entra por abajo)
      if (scrollBottom < servHeaderTop + transitionDistance) {
        const t = (scrollBottom - servHeaderTop) / transitionDistance;
        return blendPalettes(THEMES.rose, THEMES.emerald, t);
      }

      // 5. Zona Servicios Estable (mientras se lee la solución y la franja de auditoría)
      if (projHeaderTop === 0 || scrollBottom < projHeaderTop) {
        return THEMES.emerald;
      }

      // 6. Transición Servicios -> Casos de Estudio (conforme el encabezado cyan entra por abajo)
      if (scrollBottom < projHeaderTop + transitionDistance) {
        const t = (scrollBottom - projHeaderTop) / transitionDistance;
        return blendPalettes(THEMES.emerald, THEMES.cyan, t);
      }

      // 7. Zona Casos de Estudio & Cierre (Cyan Eléctrico & Azul Cobalto)
      return THEMES.cyan;
    };

    function render() {
      if (!ctx) return;
      if (document.hidden) {
        isRunning = false;
        return;
      }

      time += 0.012;

      scrollProgress = lerp(scrollProgress, targetScrollProgress, 0.08);
      mouseX = lerp(mouseX, targetMouseX, 0.05);
      mouseY = lerp(mouseY, targetMouseY, 0.05);

      // Calcular la paleta objetivo exacta según la posición de scroll
      const targetPalette = getTargetPalette(currentScrollY, height);

      // Interpolación suave y orgánica por fotograma
      curC1[0] = lerp(curC1[0], targetPalette.c1[0], 0.06);
      curC1[1] = lerp(curC1[1], targetPalette.c1[1], 0.06);
      curC1[2] = lerp(curC1[2], targetPalette.c1[2], 0.06);

      curC2[0] = lerp(curC2[0], targetPalette.c2[0], 0.06);
      curC2[1] = lerp(curC2[1], targetPalette.c2[1], 0.06);
      curC2[2] = lerp(curC2[2], targetPalette.c2[2], 0.06);

      curC3[0] = lerp(curC3[0], targetPalette.c3[0], 0.06);
      curC3[1] = lerp(curC3[1], targetPalette.c3[1], 0.06);
      curC3[2] = lerp(curC3[2], targetPalette.c3[2], 0.06);

      const c1: [number, number, number] = [Math.round(curC1[0]), Math.round(curC1[1]), Math.round(curC1[2])];
      const c2: [number, number, number] = [Math.round(curC2[0]), Math.round(curC2[1]), Math.round(curC2[2])];
      const c3: [number, number, number] = [Math.round(curC3[0]), Math.round(curC3[1]), Math.round(curC3[2])];

      // 1. Fondo base negro obsidiana puro
      ctx.fillStyle = '#060709';
      ctx.fillRect(0, 0, width, height);

      const mouseDx = (mouseX - 0.5) * 100;
      const mouseDy = (mouseY - 0.5) * 80;

      // 2. ORBE PRINCIPAL CROMÁTICO (Atmósfera derecha)
      const orb1X = width * 0.65 + mouseDx + Math.sin(time * 0.9) * 45;
      const orb1Y = height * 0.45 + mouseDy + Math.cos(time * 0.7) * 35;
      const orb1R = Math.max(width * 0.42, 420);

      const grad1 = ctx.createRadialGradient(orb1X, orb1Y, 10, orb1X, orb1Y, orb1R);
      grad1.addColorStop(0, rgba(c1, 0.38));
      grad1.addColorStop(0.35, rgba(c2, 0.22));
      grad1.addColorStop(0.7, rgba(c3, 0.08));
      grad1.addColorStop(1, 'rgba(6, 7, 9, 0)');

      ctx.fillStyle = grad1;
      ctx.beginPath();
      ctx.arc(orb1X, orb1Y, orb1R, 0, Math.PI * 2);
      ctx.fill();

      // 3. ORBE SECUNDARIO (Atmósfera flotante izquierda)
      const orb2X = width * 0.22 - mouseDx * 0.8 + Math.cos(time * 0.8) * 50;
      const orb2Y = height * 0.62 - mouseDy * 0.8 + Math.sin(time * 1.1) * 40;
      const orb2R = Math.max(width * 0.45, 450);

      const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 10, orb2X, orb2Y, orb2R);
      grad2.addColorStop(0, rgba(c2, 0.28));
      grad2.addColorStop(0.4, rgba(c1, 0.14));
      grad2.addColorStop(0.8, rgba(c3, 0.05));
      grad2.addColorStop(1, 'rgba(6, 7, 9, 0)');

      ctx.fillStyle = grad2;
      ctx.beginPath();
      ctx.arc(orb2X, orb2Y, orb2R, 0, Math.PI * 2);
      ctx.fill();

      // 4. EL EMBLEMA OFICIAL EN CRISTAL PRISMÁTICO DE JP STUDIOS
      // En el Hero (scrollProgress < 0.08) permanece oculto para preservar la pureza inicial.
      // Se revela gradualmente con desenfoque óptico profundo conforme el usuario desciende.
      const emblemFade = Math.min(Math.max((scrollProgress - 0.08) / 0.18, 0), 1);

      if (emblemLoaded && emblemImg && emblemFade > 0 && tintCtx) {
        ctx.save();
        const brandX = width * 0.52 + mouseDx * 0.35;
        const brandY = height * 0.48 + mouseDy * 0.35;
        const brandSize = Math.min(width, height) * 0.68;

        ctx.translate(brandX, brandY);
        const breathe = 1 + Math.sin(time * 0.8) * 0.025;
        ctx.rotate(Math.sin(time * 0.3) * 0.025 + (scrollProgress - 0.5) * 0.12);

        const drawSize = brandSize * breathe;

        // A. Teñir el cristal exclusivamente en el offscreen canvas
        // (Garantiza cero cajas cuadradas o artefactos sobre el canvas principal)
        tintCtx.clearRect(0, 0, 512, 512);
        tintCtx.drawImage(emblemImg, 0, 0, 512, 512);
        tintCtx.globalCompositeOperation = 'source-in';
        tintCtx.fillStyle = rgba(c1, 0.85);
        tintCtx.fillRect(0, 0, 512, 512);
        tintCtx.globalCompositeOperation = 'source-over';

        // B. Halo concéntrico suave en el canvas principal
        const ringGrad = ctx.createRadialGradient(0, 0, drawSize * 0.12, 0, 0, drawSize * 0.50);
        ringGrad.addColorStop(0, rgba(c1, 0.20 * emblemFade));
        ringGrad.addColorStop(0.5, rgba(c2, 0.08 * emblemFade));
        ringGrad.addColorStop(1, 'rgba(6, 7, 9, 0)');
        ctx.fillStyle = ringGrad;
        ctx.beginPath();
        ctx.arc(0, 0, drawSize * 0.50, 0, Math.PI * 2);
        ctx.fill();

        // C. Proyectar el cristal con desenfoque óptico calibrado (definición sutil sin interferir en la lectura)
        ctx.filter = 'blur(22px)';
        ctx.globalAlpha = 0.38 * emblemFade;
        ctx.drawImage(emblemImg, -drawSize * 0.5, -drawSize * 0.5, drawSize, drawSize);

        ctx.globalAlpha = 0.30 * emblemFade;
        ctx.drawImage(tintCanvas, -drawSize * 0.5, -drawSize * 0.5, drawSize, drawSize);

        ctx.filter = 'none';
        ctx.restore();
      }

      // 5. MÁSCARA ÓPTICA PARA CONTRASTE PERFECTO DEL TEXTO
      const centerMask = ctx.createRadialGradient(
        width * 0.4,
        height * 0.5,
        width * 0.1,
        width * 0.4,
        height * 0.5,
        width * 0.8
      );
      centerMask.addColorStop(0, 'rgba(6, 7, 9, 0.40)');
      centerMask.addColorStop(0.6, 'rgba(6, 7, 9, 0.15)');
      centerMask.addColorStop(1, 'rgba(6, 7, 9, 0.60)');

      ctx.fillStyle = centerMask;
      ctx.fillRect(0, 0, width, height);

      // Convergence check: sleep when nothing is changing (desktop AND mobile)
      const scrollDelta = Math.abs(scrollProgress - targetScrollProgress);
      const mouseDelta = isFinePointer ? (Math.abs(mouseX - targetMouseX) + Math.abs(mouseY - targetMouseY)) : 0;
      const colorDelta = Math.abs(curC1[0] - targetPalette.c1[0]) +
                         Math.abs(curC1[1] - targetPalette.c1[1]) +
                         Math.abs(curC2[0] - targetPalette.c2[0]) +
                         Math.abs(curC3[0] - targetPalette.c3[0]);
      if (scrollDelta > 0.0005 || colorDelta > 1 || mouseDelta > 0.001) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        scrollProgress = targetScrollProgress;
        mouseX = targetMouseX;
        mouseY = targetMouseY;
        curC1[0] = targetPalette.c1[0]; curC1[1] = targetPalette.c1[1]; curC1[2] = targetPalette.c1[2];
        curC2[0] = targetPalette.c2[0]; curC2[1] = targetPalette.c2[1]; curC2[2] = targetPalette.c2[2];
        curC3[0] = targetPalette.c3[0]; curC3[1] = targetPalette.c3[1]; curC3[2] = targetPalette.c3[2];
        isRunning = false;
      }
    }

    // Arranque inicial calibrado tras declarar todas las funciones
    resize();
    measureSections();
    handleScroll();
    requestTick();

    const onVisibilityChange = () => {
      if (!document.hidden) {
        requestTick();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (measureRAFId !== null) cancelAnimationFrame(measureRAFId);
      window.removeEventListener('load', measureSections);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', handleScroll);
      if (cleanupLenis) cleanupLenis();
      if (isFinePointer) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <canvas 
        ref={canvasRef} 
        className="block w-full h-full"
      />
    </div>
  );
};
