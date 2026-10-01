import React, { useEffect, useRef } from 'react';

export interface AuditoriaBackgroundProps {
  variant?: 'cyan' | 'platinum';
}

export const AuditoriaBackground: React.FC<AuditoriaBackgroundProps> = ({ variant = 'cyan' }) => {
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
    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;
    let time = 0;
    let isRunning = false;

    let emblemImg: HTMLImageElement | null = null;
    let emblemLoaded = false;
    let processedEmblemCanvas: HTMLCanvasElement | null = null;

    // Canvas auxiliar para teñir el emblema
    const tintCanvas = document.createElement('canvas');
    tintCanvas.width = 512;
    tintCanvas.height = 512;
    const tintCtx = tintCanvas.getContext('2d');

    const isMobileDevice = window.innerWidth < 768;

    const loadEmblem = () => {
      if (emblemImg) return;
      emblemImg = new Image();

      // En móviles usamos el activo pre-desenfocado físicamente para no castigar el hilo gráfico con ctx.filter
      if (isMobileDevice) {
        emblemImg.src = '/jp-emblem-crystal-blurred.webp';
      } else {
        emblemImg.src = '/jp-emblem-crystal.webp';
      }

      emblemImg.onload = () => {
        if (!emblemImg) return;
        
        // Si la variante es 'platinum', desaturamos el activo una sola vez en un canvas fuera de pantalla
        if (variant === 'platinum') {
          try {
            const off = document.createElement('canvas');
            off.width = emblemImg.naturalWidth || 512;
            off.height = emblemImg.naturalHeight || 512;
            const offCtx = off.getContext('2d');
            if (offCtx) {
              offCtx.drawImage(emblemImg, 0, 0, off.width, off.height);
              const imgData = offCtx.getImageData(0, 0, off.width, off.height);
              const data = imgData.data;
              for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                // Luminancia perceptual precisa (Rec. 709)
                let lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
                // Curva de contraste para brillo de platino / titanio pulido
                lum = lum < 110 ? lum * 0.85 : Math.min(255, lum * 1.15);
                data[i] = lum;
                data[i + 1] = lum;
                data[i + 2] = lum;
              }
              offCtx.putImageData(imgData, 0, 0);
              processedEmblemCanvas = off;
            }
          } catch (_) {
            // Fallback transparente
          }
        }

        emblemLoaded = true;
        requestTick();
      };
    };

    loadEmblem();

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
      requestTick();
    };

    function requestTick() {
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(render);
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX / (width || 1);
      targetMouseY = e.clientY / (height || 1);
      requestTick();
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    function render() {
      if (!ctx) return;
      if (document.hidden) {
        isRunning = false;
        return;
      }

      time += 0.014;
      mouseX = lerp(mouseX, targetMouseX, 0.05);
      mouseY = lerp(mouseY, targetMouseY, 0.05);

      const mouseDx = (mouseX - 0.5) * 80;
      const mouseDy = (mouseY - 0.5) * 60;

      // 1. Fondo base de obsidiana sólida
      ctx.fillStyle = '#060709';
      ctx.fillRect(0, 0, width, height);

      const isPlatinum = variant === 'platinum';

      // 2. Orbe ambiental superior (Cian vibrante o Platino etéreo)
      const orb1X = width * 0.5 + mouseDx * 0.8 + Math.sin(time * 0.8) * 35;
      const orb1Y = height * 0.35 + mouseDy * 0.8 + Math.cos(time * 0.6) * 25;
      const orb1R = Math.max(width * 0.5, 450);
      const grad1 = ctx.createRadialGradient(orb1X, orb1Y, 15, orb1X, orb1Y, orb1R);
      
      if (isPlatinum) {
        grad1.addColorStop(0, 'rgba(241, 245, 249, 0.16)');
        grad1.addColorStop(0.3, 'rgba(148, 163, 184, 0.08)');
        grad1.addColorStop(0.6, 'rgba(56, 189, 248, 0.035)');
        grad1.addColorStop(1, 'rgba(6, 7, 9, 0)');
      } else {
        grad1.addColorStop(0, 'rgba(0, 240, 255, 0.30)');
        grad1.addColorStop(0.35, 'rgba(37, 99, 235, 0.18)');
        grad1.addColorStop(0.7, 'rgba(79, 70, 229, 0.06)');
        grad1.addColorStop(1, 'rgba(6, 7, 9, 0)');
      }
      ctx.fillStyle = grad1;
      ctx.beginPath();
      ctx.arc(orb1X, orb1Y, orb1R, 0, Math.PI * 2);
      ctx.fill();

      // 3. Orbe inferior de contraste (Cobalto o Grafito / Plata profunda)
      const orb2X = width * 0.35 - mouseDx * 0.6 + Math.cos(time * 0.7) * 40;
      const orb2Y = height * 0.75 - mouseDy * 0.6 + Math.sin(time * 0.9) * 30;
      const orb2R = Math.max(width * 0.45, 420);
      const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 15, orb2X, orb2Y, orb2R);

      if (isPlatinum) {
        grad2.addColorStop(0, 'rgba(226, 232, 240, 0.08)');
        grad2.addColorStop(0.4, 'rgba(148, 163, 184, 0.03)');
        grad2.addColorStop(0.8, 'rgba(15, 23, 42, 0.02)');
        grad2.addColorStop(1, 'rgba(6, 7, 9, 0)');
      } else {
        grad2.addColorStop(0, 'rgba(37, 99, 235, 0.22)');
        grad2.addColorStop(0.4, 'rgba(0, 240, 255, 0.10)');
        grad2.addColorStop(0.8, 'rgba(15, 23, 42, 0.04)');
        grad2.addColorStop(1, 'rgba(6, 7, 9, 0)');
      }
      ctx.fillStyle = grad2;
      ctx.beginPath();
      ctx.arc(orb2X, orb2Y, orb2R, 0, Math.PI * 2);
      ctx.fill();

      // 4. Logo 3D emblemático en el fondo (Resplandor central)
      if (emblemLoaded && emblemImg && tintCtx) {
        ctx.save();
        const brandX = isMobileDevice ? width * 0.5 : width * 0.5 + mouseDx * 0.3;
        const brandY = isMobileDevice ? height * 0.38 : height * 0.42 + mouseDy * 0.3;
        const brandSize = Math.min(width, height) * (isMobileDevice ? 0.88 : 0.65);

        ctx.translate(brandX, brandY);
        const breathe = 1 + Math.sin(time * 0.8) * 0.025;
        ctx.rotate(Math.sin(time * 0.3) * 0.02);
        const drawSize = brandSize * breathe;

        const activeSource = (isPlatinum && processedEmblemCanvas) ? processedEmblemCanvas : emblemImg;

        // Tinte dinámico en canvas auxiliar
        tintCtx.clearRect(0, 0, 512, 512);
        tintCtx.drawImage(activeSource, 0, 0, 512, 512);
        tintCtx.globalCompositeOperation = 'source-in';
        tintCtx.fillStyle = isPlatinum ? 'rgba(241, 245, 249, 0.40)' : 'rgba(0, 240, 255, 0.85)';
        tintCtx.fillRect(0, 0, 512, 512);
        tintCtx.globalCompositeOperation = 'source-over';

        // Anillo de luz radial etérea
        const ringGrad = ctx.createRadialGradient(0, 0, drawSize * 0.1, 0, 0, drawSize * 0.5);
        if (isPlatinum) {
          ringGrad.addColorStop(0, 'rgba(248, 250, 252, 0.14)');
          ringGrad.addColorStop(0.35, 'rgba(56, 189, 248, 0.04)');
          ringGrad.addColorStop(0.7, 'rgba(148, 163, 184, 0.02)');
          ringGrad.addColorStop(1, 'rgba(6, 7, 9, 0)');
        } else {
          ringGrad.addColorStop(0, 'rgba(0, 240, 255, 0.18)');
          ringGrad.addColorStop(0.5, 'rgba(37, 99, 235, 0.08)');
          ringGrad.addColorStop(1, 'rgba(6, 7, 9, 0)');
        }
        ctx.fillStyle = ringGrad;
        ctx.beginPath();
        ctx.arc(0, 0, drawSize * 0.5, 0, Math.PI * 2);
        ctx.fill();

        // En PC aplicamos filtro blur por código; en móviles se dibuja la textura ya pre-desenfocada
        try {
          if (!isMobileDevice && 'filter' in ctx) {
            ctx.filter = 'blur(24px)';
          }
        } catch (_) {}

        ctx.globalAlpha = isPlatinum ? 0.36 : 0.42;
        ctx.drawImage(activeSource, -drawSize * 0.5, -drawSize * 0.5, drawSize, drawSize);

        ctx.globalAlpha = isPlatinum ? 0.20 : 0.32;
        ctx.drawImage(tintCanvas, -drawSize * 0.5, -drawSize * 0.5, drawSize, drawSize);

        try {
          if (!isMobileDevice && 'filter' in ctx) {
            ctx.filter = 'none';
          }
        } catch (_) {}

        ctx.restore();
      }

      // 5. Máscara central para garantizar legibilidad del texto en primer plano
      const centerMask = ctx.createRadialGradient(
        width * 0.5, height * 0.45, width * 0.15,
        width * 0.5, height * 0.45, width * 0.85
      );
      centerMask.addColorStop(0, 'rgba(6, 7, 9, 0.48)');
      centerMask.addColorStop(0.65, 'rgba(6, 7, 9, 0.22)');
      centerMask.addColorStop(1, 'rgba(6, 7, 9, 0.70)');
      ctx.fillStyle = centerMask;
      ctx.fillRect(0, 0, width, height);

      // Loop continuo suave para respiración
      animationFrameId = requestAnimationFrame(render);
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const onVisibilityChange = () => {
      if (!document.hidden) requestTick();
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [variant]);

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
