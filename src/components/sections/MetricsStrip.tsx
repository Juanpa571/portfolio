import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const MetricsStrip: React.FC = () => {
  const { t, language } = useLanguage();

  const getColPadding = (index: number) => {
    if (index === 0) return 'lg:pr-8 xl:pr-10';
    if (index === 4) return 'lg:pl-8 xl:pl-10';
    return 'lg:px-8 xl:px-10';
  };

  return (
    <section
      aria-label={language === 'en' ? 'Audited Performance Standards' : 'Estándares de Rendimiento Auditados'}
      className="w-full bg-[#fafaf8] border-b border-black/[0.08] relative z-20 pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20"
    >
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
        
        {/* Editorial Subheader Row Matching Screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-8 sm:pb-12 select-none">
          <span className="text-[11px] sm:text-xs font-sans font-medium text-neutral-500 tracking-[0.2em] uppercase">
            {language === 'en' ? 'AUDITED PERFORMANCE STANDARDS' : 'ESTÁNDARES DE RENDIMIENTO AUDITADOS'}
          </span>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10b981] shrink-0" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-sans font-medium text-neutral-500 tracking-[0.2em] uppercase">
              {language === 'en' ? 'REAL TELEMETRY ON MOBILE 4G NETWORKS' : 'TELEMETRÍA REAL EN REDES MÓVILES 4G'}
            </span>
          </div>
        </div>

        {/* 5 Open Columns with Hairline Vertical Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 sm:gap-y-12 lg:gap-y-0 lg:divide-x divide-neutral-200/80">
          {t.metrics.items.map((item, index) => {
            return (
              <div
                key={item.title}
                className={`flex flex-col justify-start ${getColPadding(index)} ${
                  index !== 0 ? 'sm:border-t-0' : ''
                } ${
                  index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Big Metric Value */}
                <div className="text-4xl sm:text-5xl lg:text-[44px] xl:text-[48px] font-normal tracking-tight text-neutral-950 leading-none">
                  {item.value}
                </div>

                {/* Status Row with Vibrant Green Dot */}
                <div className="flex items-center gap-2 mt-4 sm:mt-5 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-[15px] font-medium text-neutral-900 tracking-tight">
                    {item.title}
                  </span>
                </div>

                {/* Description Text */}
                <p className="text-xs sm:text-[13px] text-neutral-600 font-normal leading-relaxed m-0 max-w-[240px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MetricsStrip;
