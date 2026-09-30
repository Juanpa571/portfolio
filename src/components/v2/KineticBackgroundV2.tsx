import React, { useEffect, useRef } from 'react';

export const KineticBackgroundV2: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
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

    const tintCanvas = document.createElement('canvas');
    tintCanvas.width = 512;
    tintCanvas.height = 512;
    const tintCtx = tintCanvas.getContext('2d');
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    interface ThemePalette {
      c1: [number, number, number];
      c2: [number, number, number];
      c3: [number, number, number];
    }

    const THEMES: Record<string, ThemePalette> = {
      cyan: { c1: [0, 240, 255], c2: [37, 99, 235], c3: [79, 70, 229] },
      rose: { c1: [244, 63, 94], c2: [190, 18, 60], c3: [76, 5, 25] },
      emerald: { c1: [16, 185, 129], c2: [5, 150, 105], c3: [2, 44, 34] }
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
        
        if (diagEl) diagHeaderTop = diagEl.getBoundingClientRect().top + scrollY;
        if (servEl) servHeaderTop = servEl.getBoundingClientRect().top + scrollY;
        if (projEl) projHeaderTop = projEl.getBoundingClientRect().top + scrollY;
        
        measureRAFId = null;
        requestTick();
      });
    }

    function handleScroll() {
      currentScrollY = window.scrollY || window.pageYOffset || 0;
      if (diagHeaderTop === 0) measureSections();
      targetScrollProgress = Math.min(Math.max(currentScrollY / maxScroll, 0), 1);
      
      // En móviles, cargamos el emblema inmediatamente si está en el viewport
      if (currentScrollY > 10 || window.innerWidth < 768) {
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

    window.addEventListener('load', measureSections, { once: true, passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX / width;
      targetMouseY = e.clientY / height;
      requestTick();
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const rgba = (rgb: [number, number, number], a: number) => 
      `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${a})`;
    let time = 0;

    const getTargetPalette = (scrollY: number, innerH: number): ThemePalette => {
      if (scrollY < 80) return THEMES.cyan;
      if (diagHeaderTop === 0 || servHeaderTop === 0) return THEMES.cyan;
      const scrollBottom = scrollY + innerH;
      const transitionDistance = 380;
      
      if (scrollBottom < diagHeaderTop) return THEMES.cyan;
      if (scrollBottom < diagHeaderTop + transitionDistance) {
        const t = (scrollBottom - diagHeaderTop) / transitionDistance;
        return blendPalettes(THEMES.cyan, THEMES.rose, t);
      }
      if (scrollBottom < servHeaderTop) return THEMES.rose;
      if (scrollBottom < servHeaderTop + transitionDistance) {
        const t = (scrollBottom - servHeaderTop) / transitionDistance;
        return blendPalettes(THEMES.rose, THEMES.emerald, t);
      }
      if (projHeaderTop === 0 || scrollBottom < projHeaderTop) return THEMES.emerald;
      if (scrollBottom < projHeaderTop + transitionDistance) {
        const t = (scrollBottom - projHeaderTop) / transitionDistance;
        return blendPalettes(THEMES.emerald, THEMES.cyan, t);
      }
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
      
      const targetPalette = getTargetPalette(currentScrollY, height);
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
      
      ctx.fillStyle = '#060709';
      ctx.fillRect(0, 0, width, height);
      
      const mouseDx = (mouseX - 0.5) * 100;
      const mouseDy = (mouseY - 0.5) * 80;
      
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
      
      // El emblema empieza a aparecer apenas bajas 50px y se ve al 100% al bajar 300px
      const emblemFade = Math.min(Math.max((currentScrollY - 50) / 250, 0), 1);
      if (emblemLoaded && emblemImg && emblemFade > 0 && tintCtx) {
        ctx.save();
        // Ajustamos la posición en móviles para que quede visible
        const isMobile = width < 768;
        const brandX = isMobile ? width * 0.5 : width * 0.52 + mouseDx * 0.35;
        const brandY = isMobile ? height * 0.6 : height * 0.48 + mouseDy * 0.35;
        const brandSize = Math.min(width, height) * (isMobile ? 0.85 : 0.68);
        
        ctx.translate(brandX, brandY);
        const breathe = 1 + Math.sin(time * 0.8) * 0.025;
        ctx.rotate(Math.sin(time * 0.3) * 0.025 + (scrollProgress - 0.5) * 0.12);
        const drawSize = brandSize * breathe;
        
        tintCtx.clearRect(0, 0, 512, 512);
        tintCtx.drawImage(emblemImg, 0, 0, 512, 512);
        tintCtx.globalCompositeOperation = 'source-in';
        tintCtx.fillStyle = rgba(c1, 0.85);
        tintCtx.fillRect(0, 0, 512, 512);
        tintCtx.globalCompositeOperation = 'source-over';
        
        const ringGrad = ctx.createRadialGradient(0, 0, drawSize * 0.12, 0, 0, drawSize * 0.50);
        ringGrad.addColorStop(0, rgba(c1, 0.20 * emblemFade));
        ringGrad.addColorStop(0.5, rgba(c2, 0.08 * emblemFade));
        ringGrad.addColorStop(1, 'rgba(6, 7, 9, 0)');
        ctx.fillStyle = ringGrad;
        ctx.beginPath();
        ctx.arc(0, 0, drawSize * 0.50, 0, Math.PI * 2);
        ctx.fill();
        
        try { if ('filter' in ctx) ctx.filter = 'blur(22px)'; } catch (_) {}
        ctx.globalAlpha = 0.38 * emblemFade;
        ctx.drawImage(emblemImg, -drawSize * 0.5, -drawSize * 0.5, drawSize, drawSize);
        ctx.globalAlpha = 0.30 * emblemFade;
        ctx.drawImage(tintCanvas, -drawSize * 0.5, -drawSize * 0.5, drawSize, drawSize);
        
        try { if ('filter' in ctx) ctx.filter = 'none'; } catch (_) {}
        ctx.restore();
      }
      
      const centerMask = ctx.createRadialGradient(
        width * 0.4, height * 0.5, width * 0.1,
        width * 0.4, height * 0.5, width * 0.8
      );
      centerMask.addColorStop(0, 'rgba(6, 7, 9, 0.40)');
      centerMask.addColorStop(0.6, 'rgba(6, 7, 9, 0.15)');
      centerMask.addColorStop(1, 'rgba(6, 7, 9, 0.60)');
      ctx.fillStyle = centerMask;
      ctx.fillRect(0, 0, width, height);
      
      const scrollDelta = Math.abs(scrollProgress - targetScrollProgress);
      const mouseDelta = Math.abs(mouseX - targetMouseX) + Math.abs(mouseY - targetMouseY);
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

    resize();
    setTimeout(() => {
      measureSections();
    }, 120);
    // Forzamos la carga del icono si estamos en móvil para asegurar que se muestre
    if (window.innerWidth < 768) loadEmblem(); 
    handleScroll();
    requestTick();

    const onVisibilityChange = () => {
      if (!document.hidden) requestTick();
    };

    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (measureRAFId !== null) cancelAnimationFrame(measureRAFId);
      window.removeEventListener('load', measureSections);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
