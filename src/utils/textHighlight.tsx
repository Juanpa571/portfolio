import React from 'react';

/**
 * Highlights words related to "vender" / "ventas" / "venta" / "venden" / "sell" / "sales"
 * with JP Studios brand green (#00a854), and "Google" with the hero page blue (#174ea6).
 */
export const highlightBrandKeywords = (
  text: string | undefined | null,
  options?: { highlightGoogle?: boolean; greenClass?: string; googleClass?: string }
): React.ReactNode => {
  if (!text || typeof text !== 'string') return text;
  const greenClass = options?.greenClass || 'text-[#00a854]';
  const highlightGoogle = options?.highlightGoogle ?? true;
  const googleClass = options?.googleClass || 'text-[#174ea6]';

  // Regex matches "Google" and forms of "vender" / "venta" / "ventas" / "venden" / "sell" / "sales"
  const regex = highlightGoogle
    ? /\b(Google|vender|ventas|venta|venden|vendes|vendiendo|vendan|vendedor|vendedora|vendedores|sell|sales|selling)\b/gi
    : /\b(vender|ventas|venta|venden|vendes|vendiendo|vendan|vendedor|vendedora|vendedores|sell|sales|selling)\b/gi;

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
