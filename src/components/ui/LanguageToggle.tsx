import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface LanguageToggleProps {
  theme?: 'light' | 'dark';
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  theme = 'light',
  className = '',
}) => {
  const { language, setLanguage, t } = useLanguage();

  const isLight = theme === 'light';

  return (
    <div
      role="group"
      aria-label="Language selector"
      title={t.nav.switchLangTooltip}
      className={`relative inline-flex items-center p-0.5 rounded-full transition-colors select-none ${
        isLight
          ? 'bg-black/[0.05] border border-black/[0.08]'
          : 'bg-white/[0.08] border border-white/15'
      } ${className}`}
    >
      {/* EN option */}
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`relative px-2.5 py-0.5 rounded-full text-xs font-sans transition-all duration-300 cursor-pointer ${
          language === 'en'
            ? isLight
              ? 'bg-[#1C1D20] text-white font-medium shadow-xs'
              : 'bg-white text-black font-semibold shadow-xs'
            : isLight
            ? 'text-black/55 hover:text-black'
            : 'text-white/60 hover:text-white'
        }`}
        data-interactive
      >
        EN
      </button>

      {/* Thin divider */}
      <span
        className={`w-px h-2.5 transition-colors ${
          isLight ? 'bg-black/10' : 'bg-white/15'
        }`}
        aria-hidden="true"
      />

      {/* ES option */}
      <button
        type="button"
        onClick={() => setLanguage('es')}
        aria-pressed={language === 'es'}
        className={`relative px-2.5 py-0.5 rounded-full text-xs font-sans transition-all duration-300 cursor-pointer ${
          language === 'es'
            ? isLight
              ? 'bg-[#1C1D20] text-white font-medium shadow-xs'
              : 'bg-white text-black font-semibold shadow-xs'
            : isLight
            ? 'text-black/55 hover:text-black'
            : 'text-white/60 hover:text-white'
        }`}
        data-interactive
      >
        ES
      </button>
    </div>
  );
};
