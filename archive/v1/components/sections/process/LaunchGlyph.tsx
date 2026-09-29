import React from 'react';

export const LaunchGlyph: React.FC = () => {
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black/[0.03] border border-black/[0.08] flex items-center justify-center shrink-0 text-black/60 group-hover:text-black group-hover:bg-white group-hover:border-black/20 group-hover:shadow-sm transition-all duration-500 relative overflow-hidden select-none">
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 sm:w-8 sm:h-8 overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Orbit Halo (Edge Delivery Network) */}
        <circle
          cx="16"
          cy="16"
          r="11"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeDasharray="3 2.5"
          className="transition-transform duration-700 ease-out group-hover:rotate-90 origin-[16px_16px]"
        />

        {/* Global Edge Connecting Axes */}
        <line x1="16" y1="5" x2="16" y2="27" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
        <line x1="5" y1="16" x2="27" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round" />

        {/* Orbital Satellite Node (Rotating on hover) */}
        <g className="transition-transform duration-700 ease-out group-hover:rotate-[120deg] origin-[16px_16px]">
          <circle
            cx="24.5"
            cy="10"
            r="1.75"
            className="fill-emerald-500"
          />
        </g>

        {/* Inner Master Vault Core */}
        <circle
          cx="16"
          cy="16"
          r="5.5"
          stroke="currentColor"
          strokeWidth="1.25"
          className="fill-white"
        />

        {/* Keyhole / Launch Signal Spark */}
        <circle
          cx="16"
          cy="14.75"
          r="1.5"
          className="fill-black"
        />
        <path
          d="M 15 15.5 L 17 15.5 L 16.5 18.5 L 15.5 18.5 Z"
          className="fill-black"
        />
      </svg>
    </div>
  );
};
