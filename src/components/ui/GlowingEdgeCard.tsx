import React, { useRef } from 'react';

// Singleton: inject GlowingEdgeCard CSS once into <head> on first mount
// Avoids 3× duplicated <style> blocks while keeping CSS non-render-blocking
let glowingCardStylesInjected = false;
function ensureGlowingCardStyles() {
  if (glowingCardStylesInjected || typeof document === 'undefined') return;
  glowingCardStylesInjected = true;
  const style = document.createElement('style');
  style.setAttribute('data-glowing-card', '');
  style.textContent = `
.glowing-card-mesh-border{position:absolute;inset:0;border-radius:inherit;z-index:-1;border:1px solid transparent;background:linear-gradient(var(--card-bg) 0 100%) padding-box,linear-gradient(rgb(255 255 255/0%) 0% 100%) border-box,radial-gradient(at 80% 55%,hsla(268,100%,76%,1) 0px,transparent 50%) border-box,radial-gradient(at 69% 34%,hsla(349,100%,74%,1) 0px,transparent 50%) border-box,radial-gradient(at 8% 6%,hsla(136,100%,78%,1) 0px,transparent 50%) border-box,radial-gradient(at 41% 38%,hsla(192,100%,64%,1) 0px,transparent 50%) border-box,radial-gradient(at 86% 85%,hsla(186,100%,74%,1) 0px,transparent 50%) border-box,radial-gradient(at 82% 18%,hsla(52,100%,65%,1) 0px,transparent 50%) border-box,radial-gradient(at 51% 4%,hsla(12,100%,72%,1) 0px,transparent 50%) border-box,linear-gradient(#06b6d4 0 100%) border-box;opacity:calc((var(--pointer-d) - var(--color-sens))/(100 - var(--color-sens)));mask-image:conic-gradient(from var(--pointer-deg) at center,black 25%,transparent 40%,transparent 60%,black 75%);-webkit-mask-image:conic-gradient(from var(--pointer-deg) at center,black 25%,transparent 40%,transparent 60%,black 75%);transition:opacity .25s ease-out}
.glowing-card-mesh-bg{position:absolute;inset:0;border-radius:inherit;z-index:-1;border:1px solid transparent;background:radial-gradient(at 80% 55%,hsla(268,100%,76%,1) 0px,transparent 50%) padding-box,radial-gradient(at 69% 34%,hsla(349,100%,74%,1) 0px,transparent 50%) padding-box,radial-gradient(at 8% 6%,hsla(136,100%,78%,1) 0px,transparent 50%) padding-box,radial-gradient(at 41% 38%,hsla(192,100%,64%,1) 0px,transparent 50%) padding-box,radial-gradient(at 86% 85%,hsla(186,100%,74%,1) 0px,transparent 50%) padding-box,radial-gradient(at 82% 18%,hsla(52,100%,65%,1) 0px,transparent 50%) padding-box,radial-gradient(at 51% 4%,hsla(12,100%,72%,1) 0px,transparent 50%) padding-box,linear-gradient(#06b6d4 0 100%) padding-box;mask-image:linear-gradient(to bottom,black,black),radial-gradient(ellipse at 50% 50%,black 40%,transparent 65%),radial-gradient(ellipse at 66% 66%,black 5%,transparent 40%),radial-gradient(ellipse at 33% 33%,black 5%,transparent 40%),radial-gradient(ellipse at 66% 33%,black 5%,transparent 40%),radial-gradient(ellipse at 33% 66%,black 5%,transparent 40%),conic-gradient(from var(--pointer-deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);-webkit-mask-image:linear-gradient(to bottom,black,black),radial-gradient(ellipse at 50% 50%,black 40%,transparent 65%),radial-gradient(ellipse at 66% 66%,black 5%,transparent 40%),radial-gradient(ellipse at 33% 33%,black 5%,transparent 40%),radial-gradient(ellipse at 66% 33%,black 5%,transparent 40%),radial-gradient(ellipse at 33% 66%,black 5%,transparent 40%),conic-gradient(from var(--pointer-deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-composite:subtract,add,add,add,add,add,add;-webkit-mask-composite:source-out,destination-over,destination-over,destination-over,destination-over,destination-over,destination-over;opacity:calc((var(--pointer-d) - var(--color-sens))/(100 - var(--color-sens)));mix-blend-mode:var(--blend);transition:opacity .25s ease-out}
.glowing-card-glow{position:absolute;inset:-40px;pointer-events:none;z-index:1;mask-image:conic-gradient(from var(--pointer-deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);-webkit-mask-image:conic-gradient(from var(--pointer-deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);opacity:calc((var(--pointer-d) - var(--glow-sens))/(100 - var(--glow-sens)));mix-blend-mode:var(--glow-blend);transition:opacity .25s ease-out;border-radius:inherit}
.glowing-card-glow::before{content:"";position:absolute;inset:40px;border-radius:inherit;box-shadow:inset 0 0 0 1px hsl(var(--glow-color)/100%),inset 0 0 1px 0 hsl(var(--glow-color)/calc(var(--glow-boost) + 60%)),inset 0 0 3px 0 hsl(var(--glow-color)/calc(var(--glow-boost) + 50%)),inset 0 0 6px 0 hsl(var(--glow-color)/calc(var(--glow-boost) + 40%)),inset 0 0 15px 0 hsl(var(--glow-color)/calc(var(--glow-boost) + 30%)),inset 0 0 25px 2px hsl(var(--glow-color)/calc(var(--glow-boost) + 20%)),inset 0 0 50px 2px hsl(var(--glow-color)/calc(var(--glow-boost) + 10%)),0 0 1px 0 hsl(var(--glow-color)/calc(var(--glow-boost) + 60%)),0 0 3px 0 hsl(var(--glow-color)/calc(var(--glow-boost) + 50%)),0 0 6px 0 hsl(var(--glow-color)/calc(var(--glow-boost) + 40%)),0 0 15px 0 hsl(var(--glow-color)/calc(var(--glow-boost) + 30%)),0 0 25px 2px hsl(var(--glow-color)/calc(var(--glow-boost) + 20%)),0 0 50px 2px hsl(var(--glow-color)/calc(var(--glow-boost) + 10%))}
.group:not(:hover):not(.animating) .glowing-card-mesh-border,.group:not(:hover):not(.animating) .glowing-card-mesh-bg,.group:not(:hover):not(.animating) .glowing-card-glow{opacity:0!important;transition:opacity .75s ease-in-out}`;
  document.head.appendChild(style);
}

export interface GlowingEdgeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: 'dark' | 'light';
  glowColor?: string;
  glowSens?: number;
  interactive?: boolean;
  children?: React.ReactNode;
}

/**
 * GlowingEdgeCard
 * 
 * Tarjeta interactiva de ingeniería visual con bordes coloreados y resplandor dinámico
 * que reacciona a la posición del cursor mediante gradientes cónicos y de malla (mesh).
 * 
 * Optimizaciones de JP Studios:
 * - Cumplimiento estricto de la Regla #12: lecturas de geometría desacopladas en rAF (Cero layout thrashing).
 * - Soporte cross-browser con prefijos `-webkit-mask`.
 * - Compatibilidad fluida con temas oscuros y paletas de marca.
 */
export const GlowingEdgeCard: React.FC<GlowingEdgeCardProps> = ({ 
  mode = 'dark', 
  className = '', 
  glowColor,
  glowSens = 30,
  interactive = true,
  children,
  ...props 
}) => {
  // Inject CSS once (singleton) — not render-blocking, not 3× duplicated
  ensureGlowingCardStyles();

  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const rAFRef = useRef<number | null>(null);

  // Funciones matemáticas de precisión geométrica
  const round = (value: number, precision = 2) => Number(value.toFixed(precision));
  const clamp = (value: number, min = 0, max = 100) => Math.min(Math.max(value, min), max);

  const centerOfElement = (rect: DOMRect) => [rect.width / 2, rect.height / 2];

  const getPointerPosition = (rect: DOMRect, clientX: number, clientY: number) => {
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const px = clamp((100 / rect.width) * x);
    const py = clamp((100 / rect.height) * y);
    return { pixels: [x, y], percent: [px, py] };
  };

  const angleFromPointer = (dx: number, dy: number) => {
    let angleDegrees = 0;
    if (dx !== 0 || dy !== 0) {
      const angleRadians = Math.atan2(dy, dx);
      angleDegrees = angleRadians * (180 / Math.PI) + 90;
      if (angleDegrees < 0) {
        angleDegrees += 360;
      }
    }
    return angleDegrees;
  };

  const closenessToEdge = (rect: DOMRect, x: number, y: number) => {
    const [cx, cy] = centerOfElement(rect);
    const dx = x - cx;
    const dy = y - cy;
    let k_x = Infinity;
    let k_y = Infinity;
    if (dx !== 0) {
      k_x = cx / Math.abs(dx);
    }
    if (dy !== 0) {
      k_y = cy / Math.abs(dy);
    }
    return clamp((1 / Math.min(k_x, k_y)), 0, 1);
  };

  const handlePointerEnter = () => {
    if (!interactive || !cardRef.current) return;
    rectRef.current = cardRef.current.getBoundingClientRect();
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rAFRef.current) return;

    rAFRef.current = requestAnimationFrame(() => {
      rAFRef.current = null;
      if (!cardRef.current) return;

      if (!rectRef.current) {
        rectRef.current = cardRef.current.getBoundingClientRect();
      }

      const rect = rectRef.current;
      const position = getPointerPosition(rect, clientX, clientY);
      const [px, py] = position.pixels;
      const [perx, pery] = position.percent;
      
      const [cx, cy] = centerOfElement(rect);
      const dx = px - cx;
      const dy = py - cy;
      
      const edge = closenessToEdge(rect, px, py);
      const angle = angleFromPointer(dx, dy);

      cardRef.current.style.setProperty('--pointer-x', `${round(perx)}%`);
      cardRef.current.style.setProperty('--pointer-y', `${round(pery)}%`);
      cardRef.current.style.setProperty('--pointer-deg', `${round(angle)}deg`);
      cardRef.current.style.setProperty('--pointer-d', `${round(edge * 100)}`);
    });
  };

  const handlePointerLeave = () => {
    rectRef.current = null;
    if (rAFRef.current) {
      cancelAnimationFrame(rAFRef.current);
      rAFRef.current = null;
    }
    if (cardRef.current) {
      cardRef.current.style.setProperty('--pointer-d', '0');
    }
  };

  const defaultGlowColor = mode === 'light' ? '280deg 90% 95%' : (glowColor || '185deg 100% 70%');

  return (
    <div 
      ref={cardRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`relative flex flex-col rounded-[1.75rem] group transition-colors duration-300 ${
        mode === 'light' ? 'light-mode' : 'dark-mode'
      } ${className}`}
      style={{
        '--glow-sens': `${glowSens}`,
        '--pointer-x': '50%',
        '--pointer-y': '50%',
        '--pointer-deg': '45deg', 
        '--pointer-d': '0',
        '--color-sens': 'calc(var(--glow-sens) + 20)',
        '--card-bg': mode === 'light' 
           ? 'linear-gradient(8deg, color-mix(in hsl, hsl(260, 25%, 95%), #000 2.5%) 75%, hsl(260, 25%, 95%) 75.5%)'
           : 'linear-gradient(8deg, #0e1015 75%, color-mix(in hsl, #0e1015, white 2.5%) 75.5%)',
        '--blend': mode === 'light' ? 'darken' : 'soft-light',
        '--glow-blend': mode === 'light' ? 'luminosity' : 'plus-lighter',
        '--glow-color': defaultGlowColor,
        '--glow-boost': mode === 'light' ? '15%' : '0%',
        '--fg': mode === 'light' ? 'black' : 'white',
      } as React.CSSProperties}
      {...props}
    >


      
      {/* Capas de Fondo Interactivas */}
      <div className="glowing-card-mesh-border" aria-hidden="true" />
      <div className="glowing-card-mesh-bg" aria-hidden="true" />
      <div className="glowing-card-glow" aria-hidden="true" />
      
      {/* Contenedor Interior de Contenido */}
      <div className="relative z-10 w-full h-full overflow-hidden bg-[var(--card-bg)] bg-no-repeat rounded-[inherit] border border-white/10">
        {children}
      </div>
    </div>
  );
};

export default GlowingEdgeCard;
