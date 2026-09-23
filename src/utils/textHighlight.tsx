import React from 'react';

/**
 * Highlights brand keywords in titles:
 * - Green (#00a854): "vender", "ventas", "venta", etc. (JP Studios conversion & sales)
 * - Blue (#174ea6): "Google", "Google Maps" (Search engine authority)
 * - Warm Amber (#d97706): "Cali" (Local territory & presence)
 */
export const highlightBrandKeywords = (
  text: string | undefined | null,
  options?: {
    highlightGoogle?: boolean;
    highlightCali?: boolean;
    greenClass?: string;
    googleClass?: string;
    caliClass?: string;
  }
): React.ReactNode => {
  if (!text || typeof text !== 'string') return text;
  const greenClass = options?.greenClass || 'text-[#00a854]';
  const highlightGoogle = options?.highlightGoogle ?? true;
  const googleClass = options?.googleClass || 'text-[#174ea6]';
  const highlightCali = options?.highlightCali ?? true;
  const caliClass = options?.caliClass || 'text-[#d97706]';

  // Build regex matching Google, Cali, and forms of vender/ventas/sales
  const patterns: string[] = [];
  if (highlightGoogle) patterns.push('Google');
  if (highlightCali) patterns.push('Cali');
  patterns.push('vender', 'ventas', 'venta', 'venden', 'vendes', 'vendiendo', 'vendan', 'vendedor', 'vendedora', 'vendedores', 'sell', 'sales', 'selling');

  const regex = new RegExp(`\\b(${patterns.join('|')})\\b`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, idx) => {
    const lower = part.toLowerCase();
    if (highlightGoogle && lower === 'google') {
      return (
        <span key={idx} className={`${googleClass} transition-colors duration-300 font-inherit`}>
          {part}
        </span>
      );
    }
    if (highlightCali && lower === 'cali') {
      return (
        <span key={idx} className={`${caliClass} transition-colors duration-300 font-inherit`}>
          {part}
        </span>
      );
    }
    if (['vender', 'ventas', 'venta', 'venden', 'vendes', 'vendiendo', 'vendan', 'vendedor', 'vendedora', 'vendedores', 'sell', 'sales', 'selling'].includes(lower)) {
      return (
        <span key={idx} className={`${greenClass} transition-colors duration-300 font-inherit`}>
          {part}
        </span>
      );
    }
    return part;
  });
};

export default highlightBrandKeywords;
