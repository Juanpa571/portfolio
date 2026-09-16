import React from 'react';

export const CraftGlyph: React.FC = () => {
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black/[0.03] border border-black/[0.08] flex items-center justify-center shrink-0 text-black/60 group-hover:text-black group-hover:bg-white group-hover:border-black/20 group-hover:shadow-sm transition-all duration-500 relative overflow-hidden select-none">
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 sm:w-8 sm:h-8 overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rear Wireframe Blueprint Layer (Subtle depth tilt) */}
        <g className="transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 origin-[14px_14px]">
          <rect
            x="5"
            y="5"
            width="17"
            height="21"
            rx="3.5"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 2"
            className="opacity-40"
          />
        </g>

        {/* Foreground Responsive Mobile Screen (Tactile slide) */}
        <g className="transition-transform duration-500 ease-out group-hover:-translate-x-0.5 group-hover:translate-y-0.5 origin-[16px_16px]">
          {/* Main Device Bezel */}
          <rect
            x="10"
            y="6"
            width="16"
            height="21"
            rx="3.5"
            stroke="currentColor"
            strokeWidth="1.25"
            className="fill-white"
          />
          {/* Screen Top Speaker / Notch */}
          <line
            x1="16"
            y1="9"
            x2="20"
            y2="9"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Interactive Screen Layout Lines */}
          <line x1="13" y1="13" x2="23" y2="13" stroke="currentColor" strokeWidth="0.9" opacity="0.5" strokeLinecap="round" />
          <line x1="13" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="0.9" opacity="0.35" strokeLinecap="round" />

          {/* Tactile Interaction Touch Node (Emerald pulse) */}
          <circle
            cx="20.5"
            cy="20.5"
            r="2"
            className="fill-emerald-500 transition-all duration-300 group-hover:scale-125 origin-[20.5px_20.5px]"
          />
          <circle
            cx="20.5"
            cy="20.5"
            r="3.5"
            stroke="#10b981"
            strokeWidth="0.75"
            className="opacity-0 group-hover:opacity-60 transition-opacity duration-300"
          />
        </g>
      </svg>
    </div>
  );
};
