import React from 'react';

export const FullStackArtwork: React.FC = () => {
  return (
    <div className="w-28 h-20 sm:w-36 sm:h-24 shrink-0 flex items-center justify-center relative select-none">
      <svg
        viewBox="0 0 130 86"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Orthogonal Dashed API Pipeline */}
        <g>
          {/* Base dashed pipeline */}
          <path
            d="M 68 43.5 L 88 43.5 C 94 43.5 98 39.5 98 33.5 L 98 18.5"
            stroke="currentColor"
            className="text-black/35 group-hover:text-black/70 transition-colors duration-300"
            strokeWidth="1.2"
            strokeDasharray="2.5 3"
            strokeLinecap="round"
          />

          {/* Flowing Data Stream Indicator (CSS animated stroke-dashoffset) */}
          <path
            d="M 68 43.5 L 88 43.5 C 94 43.5 98 39.5 98 33.5 L 98 18.5"
            stroke="currentColor"
            className="text-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            strokeWidth="1.4"
            strokeDasharray="4 8"
            strokeDashoffset="24"
            strokeLinecap="round"
            style={{
              animation: 'dashFlow 1.2s linear infinite',
            }}
          />

          {/* API Endpoint Terminal Node (Top Right) */}
          <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-[98px_14px]">
            {/* Outer Node Ring */}
            <circle
              cx="98"
              cy="14"
              r="4.5"
              stroke="currentColor"
              className="text-black/80 group-hover:text-black transition-colors"
              strokeWidth="1.2"
              fill="white"
            />
            {/* Inner Core Dot */}
            <circle
              cx="98"
              cy="14"
              r="1.8"
              className="fill-black"
            />
          </g>
        </g>

        {/* 3-Tier Database Server Stack */}
        <g className="transition-transform duration-500 ease-out group-hover:translate-x-[-1px]">
          {/* Server Unit 1 (Top) */}
          <g className="group/unit">
            <rect
              x="24"
              y="20"
              width="44"
              height="13"
              rx="4"
              className="stroke-black/85 fill-white transition-all duration-300 group-hover:stroke-black"
              strokeWidth="1.2"
            />
            {/* Server 1 LEDs (2 dots) */}
            <circle cx="31" cy="26.5" r="1.2" className="fill-black/80 transition-opacity duration-300 group-hover:opacity-100" />
            <circle cx="35" cy="26.5" r="1.2" className="fill-black/80 transition-opacity duration-300 group-hover:opacity-100" />
          </g>

          {/* Server Unit 2 (Middle - Connected to API line) */}
          <g className="group/unit">
            <rect
              x="24"
              y="37"
              width="44"
              height="13"
              rx="4"
              className="stroke-black/85 fill-white transition-all duration-300 group-hover:stroke-black"
              strokeWidth="1.2"
            />
            {/* Server 2 LEDs (3 dots) */}
            <circle cx="31" cy="43.5" r="1.2" className="fill-black/80" />
            <circle cx="35" cy="43.5" r="1.2" className="fill-black/80" />
            <circle cx="39" cy="43.5" r="1.2" className="fill-black/80" />
          </g>

          {/* Server Unit 3 (Bottom) */}
          <g className="group/unit">
            <rect
              x="24"
              y="54"
              width="44"
              height="13"
              rx="4"
              className="stroke-black/85 fill-white transition-all duration-300 group-hover:stroke-black"
              strokeWidth="1.2"
            />
            {/* Server 3 LEDs (1 dot) */}
            <circle cx="31" cy="60.5" r="1.2" className="fill-black/80" />
          </g>
        </g>
      </svg>
    </div>
  );
};
