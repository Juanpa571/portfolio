import React, { useId } from 'react';

export const SupportArtwork: React.FC = () => {
  const clipId = useId();

  return (
    <div className="w-28 h-20 sm:w-36 sm:h-24 shrink-0 flex items-center justify-center relative select-none">
      <svg
        viewBox="0 0 130 86"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id={clipId}>
            <circle cx="65" cy="43" r="17.4" />
          </clipPath>
        </defs>

        {/* Concentric Outer Dashed Orbit Track */}
        <circle
          cx="65"
          cy="43"
          r="28"
          stroke="currentColor"
          className="text-black/25 transition-colors duration-500 group-hover:text-black/50"
          strokeWidth="1.2"
          strokeDasharray="2.5 3"
        />

        {/* Orbiting Satellite Bead (Constant, mathematically perfect circular orbit) */}
        <g>
          <circle
            cx="79"
            cy="18.75"
            r="3.2"
            className="fill-black shadow-xs transition-transform duration-300 group-hover:scale-125"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 65 43"
            to="360 65 43"
            dur="16s"
            repeatCount="indefinite"
          />
        </g>

        {/* Central User / Support Avatar */}
        <g className="transition-transform duration-500 ease-out group-hover:scale-[1.04] origin-[65px_43px]">
          {/* Avatar Enclosing Circle */}
          <circle
            cx="65"
            cy="43"
            r="18"
            stroke="currentColor"
            className="text-black/85 transition-colors duration-300 group-hover:text-black"
            strokeWidth="1.2"
            fill="white"
          />

          {/* Avatar Head */}
          <circle
            cx="65"
            cy="37.5"
            r="5.5"
            stroke="currentColor"
            className="text-black/85 transition-colors duration-300 group-hover:text-black"
            strokeWidth="1.2"
            fill="white"
          />

          {/* Avatar Shoulders / Torso with clean circular mask */}
          <path
            d="M 48 57 C 52 48.5, 58 46.5, 65 46.5 C 72 46.5, 78 48.5, 82 57"
            stroke="currentColor"
            className="text-black/85 transition-colors duration-300 group-hover:text-black"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            clipPath={`url(#${clipId})`}
          />
        </g>
      </svg>
    </div>
  );
};
