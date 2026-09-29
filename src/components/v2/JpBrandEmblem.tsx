import React from 'react';

interface JpBrandEmblemProps {
  className?: string;
  size?: number | string;
  variant?: '2d' | '3d';
}

/**
 * JpBrandEmblem
 * 
 * Sistema de Identidad Oficial JP Studios:
 * - '3d': Emblema monumental en cristal prismático y zafiro luminoso.
 * - '2d': Síntesis vectorial isométrica de alta precisión (para Header, Favicon y UI táctil).
 */
export const JpBrandEmblem: React.FC<JpBrandEmblemProps> = ({
  className = '',
  size = 32,
  variant = '2d'
}) => {
  if (variant === '3d') {
    return (
      <img
        src="/jp-emblem-crystal.webp"
        alt="JP Studios Emblema Oficial"
        width={typeof size === 'number' ? size : undefined}
        height={typeof size === 'number' ? size : undefined}
        className={`object-contain ${className}`}
        style={{
          width: typeof size === 'number' ? `${size}px` : size,
          height: typeof size === 'number' ? `${size}px` : size,
        }}
      />
    );
  }

  // Variante 2D: Geometría Isométrica Vectorial Pura (J + P Fused Ribbon)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="JP Studios Monograma"
    >
      <defs>
        {/* Gradiente Cian Eléctrico Primario */}
        <linearGradient id="jp-cyan-grad" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>

        {/* Gradiente Titanio / Cristal Reflejado */}
        <linearGradient id="jp-titanium-grad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>

        {/* Sombra sutil de profundidad isométrica */}
        <filter id="jp-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#06B6D4" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Trazado 1: El tallo vertical y gancho de la "J" (Columna Izquierda) */}
      <path
        d="M 42 16
           L 51 22
           L 51 78
           L 42 85
           L 24 74
           L 32 68
           L 42 74
           L 42 22
           Z"
        fill="url(#jp-cyan-grad)"
      />

      {/* Bisel superior del tallo J */}
      <path
        d="M 42 16
           L 51 22
           L 42 27
           L 33 21
           Z"
        fill="url(#jp-titanium-grad)"
        opacity="0.9"
      />

      {/* Trazado 2: El loop y cinta isométrica de la "P" (Lóbulo Derecho) */}
      <path
        d="M 54 24
           L 78 40
           L 78 52
           L 62 64
           L 54 58
           L 54 24
           Z"
        fill="url(#jp-cyan-grad)"
      />

      {/* Contorno interior / espacio negativo de la P (Paralelogramo isométrico) */}
      <path
        d="M 61 36
           L 71 44
           L 71 48
           L 61 55
           Z"
        fill="#060709"
      />

      {/* Faceta superior reflectante de la P */}
      <path
        d="M 54 24
           L 78 40
           L 71 44
           L 54 32
           Z"
        fill="url(#jp-titanium-grad)"
        opacity="0.85"
      />

      {/* Gancho exterior de la J en perspectiva 30 grados */}
      <path
        d="M 24 74
           L 32 68
           L 32 54
           L 24 60
           Z"
        fill="url(#jp-cyan-grad)"
        opacity="0.95"
      />
    </svg>
  );
};
