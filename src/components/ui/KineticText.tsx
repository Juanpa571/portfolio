import React, { useRef, useEffect, useState, useCallback } from 'react';

interface KineticTextProps {
  text: string;
  className?: string;
  letterClassName?: string;
  maxDisplacement?: number; // max pixels to lift on Y axis
  radius?: number;          // influence radius in pixels
  as?: 'h1' | 'h2' | 'h3' | 'div' | 'p';
}

interface CharState {
  el: HTMLSpanElement;
  cx: number;
  cy: number;
  currX: number;
  currY: number;
  currRot: number;
  currScale: number;
  targetX: number;
  targetY: number;
  targetRot: number;
  targetScale: number;
}

export const KineticText: React.FC<KineticTextProps> = ({
  text,
  className = '',
  letterClassName = '',
  maxDisplacement = 36,
  radius = 220,
  as: Component = 'h2',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const charsRef = useRef<CharState[]>([]);
  const animFrameId = useRef<number | null>(null);
  const isHovered = useRef(false);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsFinePointer(window.matchMedia('(pointer: fine)').matches);
    }
  }, []);

  // Cache character center coordinates relative to viewport
  const updateCharPositions = useCallback(() => {
    if (!containerRef.current) return;
    const spans = containerRef.current.querySelectorAll<HTMLSpanElement>('.kinetic-char');
    charsRef.current = Array.from(spans).map((span) => {
      const rect = span.getBoundingClientRect();
      return {
        el: span,
        cx: rect.left + rect.width / 2,
        cy: rect.top + rect.height / 2,
        currX: 0,
        currY: 0,
        currRot: 0,
        currScale: 1,
        targetX: 0,
        targetY: 0,
        targetRot: 0,
        targetScale: 1,
      };
    });
  }, []);

  // Update positions on resize and scroll
  useEffect(() => {
    updateCharPositions();
    window.addEventListener('resize', updateCharPositions, { passive: true });
    window.addEventListener('scroll', updateCharPositions, { passive: true });
    return () => {
      window.removeEventListener('resize', updateCharPositions);
      window.removeEventListener('scroll', updateCharPositions);
    };
  }, [updateCharPositions]);

  // Main physics loop
  const tick = useCallback(() => {
    let hasMotion = false;
    const mx = mousePos.current.x;
    const my = mousePos.current.y;
    const hovering = isHovered.current;

    for (let i = 0; i < charsRef.current.length; i++) {
      const char = charsRef.current[i];

      if (hovering) {
        const dx = mx - char.cx;
        const dy = my - char.cy;
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          // Smooth cosine falloff for organic wave response
          const factor = Math.cos((dist / radius) * (Math.PI / 2));
          char.targetY = -factor * maxDisplacement;
          char.targetX = -(dx / radius) * factor * 12;
          char.targetRot = -(dx / radius) * factor * 15;
          char.targetScale = 1 + factor * 0.12;
        } else {
          char.targetX = 0;
          char.targetY = 0;
          char.targetRot = 0;
          char.targetScale = 1;
        }
      } else {
        char.targetX = 0;
        char.targetY = 0;
        char.targetRot = 0;
        char.targetScale = 1;
      }

      // Spring damping interpolation (0.16 for snappy organic elasticity)
      const diffX = char.targetX - char.currX;
      const diffY = char.targetY - char.currY;
      const diffRot = char.targetRot - char.currRot;
      const diffScale = char.targetScale - char.currScale;

      if (
        Math.abs(diffX) > 0.05 ||
        Math.abs(diffY) > 0.05 ||
        Math.abs(diffRot) > 0.05 ||
        Math.abs(diffScale) > 0.005
      ) {
        char.currX += diffX * 0.16;
        char.currY += diffY * 0.16;
        char.currRot += diffRot * 0.16;
        char.currScale += diffScale * 0.16;
        hasMotion = true;

        char.el.style.transform = `translate3d(${char.currX.toFixed(2)}px, ${char.currY.toFixed(
          2
        )}px, 0) rotate(${char.currRot.toFixed(2)}deg) scale(${char.currScale.toFixed(3)})`;
      } else if (char.currX !== 0 || char.currY !== 0) {
        char.currX = 0;
        char.currY = 0;
        char.currRot = 0;
        char.currScale = 1;
        char.el.style.transform = 'translate3d(0, 0, 0) rotate(0deg) scale(1)';
      }
    }

    if (hasMotion || hovering) {
      animFrameId.current = requestAnimationFrame(tick);
    } else {
      animFrameId.current = null;
    }
  }, [radius, maxDisplacement]);

  const startLoop = useCallback(() => {
    if (!animFrameId.current) {
      animFrameId.current = requestAnimationFrame(tick);
    }
  }, [tick]);

  const handlePointerEnter = (e: React.PointerEvent) => {
    if (!isFinePointer) return;
    isHovered.current = true;
    updateCharPositions();
    mousePos.current = { x: e.clientX, y: e.clientY };
    startLoop();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isFinePointer) return;
    mousePos.current = { x: e.clientX, y: e.clientY };
    if (!animFrameId.current) {
      startLoop();
    }
  };

  const handlePointerLeave = () => {
    isHovered.current = false;
    mousePos.current = { x: -1000, y: -1000 };
    // Let the loop run to smoothly animate back to rest
    startLoop();
  };

  const words = text.split(' ');

  return (
    <div
      ref={containerRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`select-none cursor-default py-1 ${className}`}
    >
      <Component className="inline leading-tight">
        {words.map((word, wIdx) => (
          <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
            {Array.from(word).map((char, cIdx) => (
              <span
                key={cIdx}
                className={`kinetic-char inline-block will-change-transform ${letterClassName}`}
                style={{
                  transformOrigin: '50% 85%',
                }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </Component>
    </div>
  );
};
