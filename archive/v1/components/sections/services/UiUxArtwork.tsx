import React from 'react';

export const UiUxArtwork: React.FC = () => {
  return (
    <div className="w-32 h-24 sm:w-40 sm:h-28 shrink-0 flex items-center justify-center relative select-none">
      <svg
        viewBox="0 0 144 96"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Orbital Trajectory Behind (Asymmetric elliptical arc) */}
        <g className="transition-transform duration-700 ease-out group-hover:scale-[1.04] origin-[92px_54px]">
          <path
            d="M 92 18 C 118 26, 126 52, 114 68 C 106 78, 96 79, 88 77"
            stroke="currentColor"
            className="text-black/25 transition-colors duration-300 group-hover:text-black/45"
            strokeWidth="1.2"
            strokeDasharray="2.5 3.5"
            strokeLinecap="round"
          />
          {/* Solid Orbital Bead on Card Corner */}
          <circle
            cx="88"
            cy="77"
            r="3.5"
            className="fill-black transition-all duration-500 ease-out group-hover:scale-125 origin-[88px_77px]"
          />
        </g>

        {/* Back Wireframe Card (Layer 1 - Asymmetric Fanned Rotation +3.5deg) */}
        <g
          className="transition-transform duration-500 ease-out group-hover:rotate-[6.5deg] group-hover:translate-x-2 group-hover:-translate-y-2 origin-[48px_16px]"
          style={{ transform: 'rotate(3.5deg)', transformOrigin: '48px 16px' }}
        >
          <rect
            x="46"
            y="14"
            width="60"
            height="44"
            rx="7"
            className="stroke-black/20 fill-white/85 shadow-xs transition-colors duration-300 group-hover:stroke-black/35"
            strokeWidth="1.2"
          />
          {/* Subtle Wireframe Header in back card */}
          <line x1="54" y1="23" x2="74" y2="23" stroke="currentColor" className="text-black/15" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="54" y1="29" x2="88" y2="29" stroke="currentColor" className="text-black/15" strokeWidth="1.4" strokeLinecap="round" />
        </g>

        {/* Front Wireframe Card (Layer 2 - Asymmetric Counter-Rotation -1.5deg) */}
        <g
          className="transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:translate-x-[-2px] group-hover:translate-y-[-1px] origin-[22px_26px]"
          style={{ transform: 'rotate(-1.5deg)', transformOrigin: '22px 26px' }}
        >
          {/* Card Base with crisp shadow */}
          <rect
            x="20"
            y="26"
            width="68"
            height="48"
            rx="8"
            className="stroke-black/85 fill-white shadow-md transition-shadow duration-300 group-hover:shadow-lg"
            strokeWidth="1.2"
          />

          {/* Image Placeholder Frame (Mountain & Sun silhouette) */}
          <g className="transition-opacity duration-300">
            <rect
              x="28"
              y="34"
              width="26"
              height="22"
              rx="4"
              className="fill-black/[0.03] stroke-black/10"
              strokeWidth="0.8"
            />
            {/* Soft Sun */}
            <circle cx="34" cy="39" r="2" className="fill-black/25" />
            {/* Mountain 1 */}
            <path
              d="M 30 52 L 38 41 L 47 52 Z"
              className="fill-black/15"
            />
            {/* Mountain 2 */}
            <path
              d="M 42 52 L 48 44 L 52 52 Z"
              className="fill-black/25"
            />
          </g>

          {/* Wireframe Content Bars */}
          <g className="transition-all duration-300">
            <line
              x1="60"
              y1="40"
              x2="80"
              y2="40"
              stroke="currentColor"
              className="text-black/80"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <line
              x1="60"
              y1="48"
              x2="72"
              y2="48"
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
