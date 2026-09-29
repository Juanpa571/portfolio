import React from 'react';

export const StrategyGlyph: React.FC = () => {
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black/[0.03] border border-black/[0.08] flex items-center justify-center shrink-0 text-black/60 group-hover:text-black group-hover:bg-white group-hover:border-black/20 group-hover:shadow-sm transition-all duration-500 relative overflow-hidden select-none">
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 sm:w-8 sm:h-8 overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cardinal Coordinate Ticks */}
        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="16" y1="26" x2="16" y2="30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="2" y1="16" x2="6" y2="16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="26" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        {/* Outer Circular Reticle with Smooth Hover Rotation */}
        <circle
          cx="16"
          cy="16"
          r="10"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="2.5 3"
          className="transition-transform duration-700 ease-out group-hover:rotate-45 origin-[16px_16px]"
        />

        {/* Inner Diamond Orientation Frame */}
        <rect
          x="10.5"
          y="10.5"
          width="11"
          height="11"
          stroke="currentColor"
          strokeWidth="1"
          className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[-15deg] origin-[16px_16px]"
        />

        {/* Strategic Focal Point with Accent Pulse */}
        <circle
          cx="16"
          cy="16"
          r="2.5"
          className="fill-black transition-all duration-300 group-hover:scale-125 origin-[16px_16px]"
        />
        <circle
          cx="16"
          cy="16"
          r="1"
          className="fill-white"
        />
      </svg>
    </div>
  );
};
