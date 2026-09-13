import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSuppressed, setIsSuppressed] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only activate on pointer-fine devices
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    let isRunning = false;

    // Smooth lerp loop for cursor trailing (sleeps when stationary)
    const loop = () => {
      const ease = 0.22;
      const dx = mousePos.current.x - currentPos.current.x;
      const dy = mousePos.current.y - currentPos.current.y;

      currentPos.current.x += dx * ease;
      currentPos.current.y += dy * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Continue animating until settled to sub-pixel threshold
      if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05) {
        animFrameId.current = requestAnimationFrame(loop);
      } else {
        isRunning = false;
        animFrameId.current = null;
      }
    };

    const wakeLoop = () => {
      if (!isRunning) {
        isRunning = true;
        animFrameId.current = requestAnimationFrame(loop);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
      wakeLoop();

      const target = e.target as HTMLElement | null;
      const isOverProjects = Boolean(target?.closest('#work'));
      setIsSuppressed(isOverProjects);

      const interactiveEl = target?.closest('a, button, [data-interactive]');

      if (interactiveEl && !isOverProjects) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    wakeLoop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[99999] top-0 left-0 hidden lg:block will-change-transform mix-blend-difference"
      style={{
        transform: `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`,
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isSuppressed
            ? 'opacity-0 scale-0 pointer-events-none'
            : cursorText
            ? 'w-24 h-24 bg-white text-black text-[11px] font-mono font-bold tracking-widest scale-100'
            : isHovered
            ? 'w-14 h-14 bg-white scale-100'
            : 'w-3.5 h-3.5 bg-white scale-100'
        }`}
      >
        {cursorText && !isSuppressed && <span>{cursorText}</span>}
      </div>
    </div>
  );
};
