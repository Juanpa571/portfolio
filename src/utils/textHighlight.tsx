import React from 'react';

/**
 * Highlights key emphasis keywords in titles and headings:
 * - Pure typographic hierarchy: Bolder (font-semibold) and darker (text-black / text-[#111111]).
 * - Zero colored noise (no green, blue, or amber), matching the bespoke editorial
 *   typography benchmark established in the Intro statement.
 */
export const highlightBrandKeywords = (
  text: string | undefined | null,
  options?: {
    highlightClass?: string;
    isDark?: boolean;
  }
): React.ReactNode => {
  if (!text || typeof text !== 'string') return text;
  const isDark = options?.isDark ?? false;
  const defaultHighlight = isDark ? 'text-white font-semibold' : 'text-black font-semibold';
  const highlightClass = options?.highlightClass || defaultHighlight;

  // Specific key phrases and words to emphasize (longer phrases first to match greedily)
  const patterns = [
    'Google Maps',
    'Google',
    'ventas directas por WhatsApp',
    'ventas directas',
    'vender más',
    'vender',
    'ventas',
    'venta',
    'venden',
    'vendes',
    'vendiendo',
    'vendan',
    'vendedor',
    'vendedora',
    'vendedores',
    'páginas web en Cali',
    'páginas web',
    'página web',
    'diseño web',
    'desarrollo web',
    'sitios web',
    'sitio web',
    'web design',
    'websites',
    'website',
    'sell',
    'sales',
    'selling',
  ];

  // Escape special regex characters in phrases
  const escapedPatterns = patterns.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escapedPatterns.join('|')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, idx) => {
    const lower = part.toLowerCase();
    const isMatch = patterns.some((p) => p.toLowerCase() === lower);

    if (isMatch) {
      return (
        <span key={idx} className={`${highlightClass} font-inherit transition-colors duration-200`}>
          {part}
        </span>
      );
    }
    return part;
  });
};

export default highlightBrandKeywords;
