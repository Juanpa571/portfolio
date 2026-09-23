import React from 'react';

export const FullStackArtwork: React.FC = () => {
  return (
    <div className="w-32 h-24 sm:w-40 sm:h-28 shrink-0 flex items-center justify-center relative select-none">
      <svg
        viewBox="0 0 144 96"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Organic Spline API Pipeline */}
        <g>
          {/* Base dashed spline pipeline */}
          <path
            d="M 72 43.5 C 94 43.5, 102 38, 102 18.5"
            stroke="currentColor"
            className="text-black/35 group-hover:text-black/70 transition-colors duration-300"
            strokeWidth="1.2"
            strokeDasharray="2.5 3"
            strokeLinecap="round"
          />

          {/* Flowing Data Packet Stream (CSS animated dashoffset only active on hover) */}
          <path
            d="M 72 43.5 C 94 43.5, 102 38, 102 18.5"
            stroke="currentColor"
            className="text-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:[animation:dashFlow_1.1s_linear_infinite]"
            strokeWidth="1.4"
            strokeDasharray="4 8"
            strokeDashoffset="24"
            strokeLinecap="round"
          />

          {/* API Endpoint Terminal Node (Top Right with dynamic pulse) */}
          <g className="transition-transform duration-300 ease-out group-hover:scale-115 origin-[102px_14px]">
            {/* Outer Node Ring */}
            <circle
              cx="102"
              cy="14"
              r="4.5"
              stroke="currentColor"
              className="text-black/85 group-hover:text-black transition-colors"
              strokeWidth="1.2"
              fill="white"
            />
            {/* Inner Core Dot */}
            <circle
              cx="102"
              cy="14"
              r="1.8"
              className="fill-black transition-transform duration-300 group-hover:scale-125"
            />
          </g>
        </g>

        {/* 3-Tier Database Server Stack with Asymmetric Stepped Silhouettes */}
        <g className="transition-transform duration-500 ease-out group-hover:translate-x-[-1px]">
          {/* Server Unit 1 (Top - Standard) */}
          <g>
            <rect
              x="22"
              y="20"
              width="44"
              height="13"
              rx="4"
              className="stroke-black/85 fill-white transition-all duration-300 group-hover:stroke-black shadow-2xs"
              strokeWidth="1.2"
            />
            {/* Server 1 LEDs (2 dots) */}
            <circle cx="29" cy="26.5" r="1.2" className="fill-black/80" />
            <circle cx="33" cy="26.5" r="1.2" className="fill-black/80" />
          </g>

          {/* Server Unit 2 (Middle - Asymmetrically extended to 48px to anchor pipeline) */}
          <g>
            <rect
              x="22"
              y="37"
              width="48"
              height="13"
              rx="4"
              className="stroke-black/85 fill-white transition-all duration-300 group-hover:stroke-black shadow-2xs"
              strokeWidth="1.2"
            />
            {/* Server 2 LEDs (3 dots) */}
            <circle cx="29" cy="43.5" r="1.2" className="fill-black/80" />
            <circle cx="33" cy="43.5" r="1.2" className="fill-black/80" />
            <circle cx="37" cy="43.5" r="1.2" className="fill-black/80" />
          </g>

          {/* Server Unit 3 (Bottom - Subtly recessed 42px) */}
          <g>
            <rect
              x="25"
              y="54"
              width="42"
              height="13"
              rx="4"
              className="stroke-black/85 fill-white transition-all duration-300 group-hover:stroke-black shadow-2xs"
              strokeWidth="1.2"
            />
            {/* Server 3 LEDs (1 dot) */}
            <circle cx="32" cy="60.5" r="1.2" className="fill-black/80" />
          </g>
        </g>
      </svg>
    </div>
  );
};
