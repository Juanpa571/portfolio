import React from 'react';

export const UiUxArtwork: React.FC = () => {
  return (
    <div className="w-28 h-20 sm:w-36 sm:h-24 shrink-0 flex items-center justify-center relative select-none">
      <svg
        viewBox="0 0 130 86"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Orbital Trajectory Behind (Dashed curve with orbiting bead) */}
        <g className="transition-transform duration-700 ease-out group-hover:scale-[1.03] origin-[84px_50px]">
          <path
            d="M 88 22 C 108 30, 112 52, 102 64 C 96 71, 90 71, 84 70"
            stroke="currentColor"
            className="text-black/25"
            strokeWidth="1.2"
            strokeDasharray="2.5 3"
            strokeLinecap="round"
          />
          {/* Solid Orbital Bead on Card Corner */}
          <circle
            cx="84"
            cy="70"
            r="3.5"
            className="fill-black transition-transform duration-500 ease-out group-hover:scale-125 origin-[84px_70px]"
          />
        </g>

        {/* Back Wireframe Card (Layer 1 - Depth) */}
        <rect
          x="44"
          y="12"
          width="58"
          height="42"
          rx="7"
          className="stroke-black/25 fill-white/80 transition-all duration-500 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:stroke-black/40"
          strokeWidth="1.2"
        />

        {/* Front Wireframe Card (Layer 2 - High Fidelity) */}
        <g className="transition-transform duration-500 ease-out group-hover:translate-x-[-1px] group-hover:translate-y-[-1px]">
          {/* Card Base */}
          <rect
            x="20"
            y="24"
            width="64"
            height="46"
            rx="7"
            className="stroke-black/85 fill-white shadow-xs"
            strokeWidth="1.2"
          />

          {/* Image Placeholder Frame (Mountain & Sun silhouette) */}
          <g className="transition-opacity duration-300">
            <rect
              x="28"
              y="32"
              width="24"
              height="20"
              rx="3"
              className="fill-black/[0.03] stroke-black/10"
              strokeWidth="0.8"
            />
            {/* Soft Sun */}
            <circle cx="34" cy="37" r="1.8" className="fill-black/20" />
            {/* Mountain 1 */}
            <path
              d="M 30 49 L 37 39 L 45 49 Z"
              className="fill-black/15"
            />
            {/* Mountain 2 */}
            <path
              d="M 40 49 L 46 42 L 50 49 Z"
              className="fill-black/25"
            />
          </g>

          {/* Wireframe Content Bars */}
          <g className="transition-all duration-300 group-hover:opacity-100">
            <line
              x1="58"
              y1="38"
              x2="76"
              y2="38"
              stroke="currentColor"
              className="text-black/80"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <line
              x1="58"
              y1="46"
              x2="70"
              y2="46"
              stroke="currentColor"
              className="text-black/80"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
