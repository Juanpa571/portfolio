import React, { useId } from 'react';

export const SupportArtwork: React.FC = () => {
  const clipId = useId();

  return (
    <div className="w-32 h-24 sm:w-40 sm:h-28 shrink-0 flex items-center justify-center relative select-none">
      <svg
        viewBox="0 0 144 96"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id={clipId}>
            <circle cx="68" cy="45" r="18.4" />
          </clipPath>
        </defs>

        {/* Inclined Celestial Orbit Group (-16deg orbital inclination) */}
        <g transform="rotate(-16 68 45)">
          {/* Inclined Dashed Orbit Track */}
          <ellipse
            cx="68"
            cy="45"
            rx="33"
            ry="29"
            stroke="currentColor"
            className="text-black/25 transition-colors duration-500 group-hover:text-black/50"
            strokeWidth="1.2"
            strokeDasharray="2.5 3.5"
          />

          {/* Revolving Satellite Bead along inclined orbit */}
          <g>
            <circle
              cx="85"
              cy="20.5"
              r="3.5"
              className="fill-black shadow-xs transition-transform duration-300 group-hover:scale-125"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 68 45"
              to="360 68 45"
              dur="16s"
              repeatCount="indefinite"
            />
          </g>
        </g>

        {/* Central User / Support Avatar (Organic poise) */}
        <g className="transition-transform duration-500 ease-out group-hover:scale-[1.04] origin-[68px_45px]">
          {/* Avatar Enclosing Circle */}
          <circle
            cx="68"
            cy="45"
            r="19"
            stroke="currentColor"
            className="text-black/85 transition-colors duration-300 group-hover:text-black shadow-xs"
            strokeWidth="1.2"
            fill="white"
          />

          {/* Avatar Head */}
          <circle
            cx="68"
            cy="39"
            r="5.8"
            stroke="currentColor"
            className="text-black/85 transition-colors duration-300 group-hover:text-black"
            strokeWidth="1.2"
            fill="white"
          />

          {/* Avatar Shoulders / Torso with clean circular mask */}
          <path
            d="M 50 59.5 C 54 50.5, 61 48.5, 68 48.5 C 75 48.5, 82 50.5, 86 59.5"
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
