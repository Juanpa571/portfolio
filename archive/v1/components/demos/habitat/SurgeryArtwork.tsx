import React from 'react';

interface SurgeryArtworkProps {
  isDark?: boolean;
}

export const SurgeryArtwork: React.FC<SurgeryArtworkProps> = ({ isDark = true }) => {
  const color = isDark ? 'white' : '#0e382b';

  return (
    <div className="w-28 h-20 sm:w-32 sm:h-20 shrink-0 flex items-center justify-end relative select-none">
      <svg
        viewBox="0 0 100 80"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          @keyframes targetSpin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes focusPulse {
            0%, 100% {
              transform: translate(50px, 40px) scale(1);
            }
            50% {
              transform: translate(50px, 40px) scale(1.1);
            }
          }
          .surgery-target-ring {
            transform-origin: 50px 40px;
            animation: targetSpin 20s linear infinite;
          }
          .surgery-paw {
            transform-origin: center;
            animation: focusPulse 3s ease-in-out infinite;
          }
        `}</style>

        {/* Rotating Outer Calibrated Target Ring */}
        <g className="surgery-target-ring">
          <circle
            cx="50"
            cy="40"
            r="30"
            stroke={color}
            strokeOpacity="0.25"
            strokeWidth="1"
            strokeDasharray="2.5 3.5"
          />
          {/* Calibrated perimeter notch markers */}
          <line x1="50" y1="8" x2="50" y2="12" stroke={color} strokeOpacity="0.4" strokeWidth="1" />
          <line x1="50" y1="68" x2="50" y2="72" stroke={color} strokeOpacity="0.4" strokeWidth="1" />
          <line x1="18" y1="40" x2="22" y2="40" stroke={color} strokeOpacity="0.4" strokeWidth="1" />
          <line x1="78" y1="40" x2="82" y2="40" stroke={color} strokeOpacity="0.4" strokeWidth="1" />
        </g>

        {/* Stable Fixed Intermediate Ring */}
        <circle
          cx="50"
          cy="40"
          r="21"
          stroke={color}
          strokeOpacity="0.35"
          strokeWidth="1"
        />

        {/* Fixed Inner Enclosing Ring */}
        <circle
          cx="50"
          cy="40"
          r="14"
          stroke={color}
          strokeOpacity="0.75"
          strokeWidth="1.2"
        />

        {/* Sterile Surgical Crosshairs */}
        <line x1="14" y1="40" x2="36" y2="40" stroke={color} strokeOpacity="0.5" strokeWidth="1.2" />
        <line x1="64" y1="40" x2="86" y2="40" stroke={color} strokeOpacity="0.5" strokeWidth="1.2" />
        <line x1="50" y1="4" x2="50" y2="26" stroke={color} strokeOpacity="0.5" strokeWidth="1.2" />
        <line x1="50" y1="54" x2="50" y2="76" stroke={color} strokeOpacity="0.5" strokeWidth="1.2" />

        {/* Paw Print Locked in the Exact Dead-Center (50, 40) */}
        <g className="surgery-paw">
          {/* Main Pad */}
          <path
            d="M 0 -0.5 C -3.8 -0.5, -5.5 1.5, -5.5 4 C -5.5 6.5, -2.5 8.5, 0 8.5 C 2.5 8.5, 5.5 6.5, 5.5 4 C 5.5 1.5, 3.8 -0.5, 0 -0.5 Z"
            fill={color}
          />
          {/* 4 Toe Pads */}
          <ellipse cx="-5" cy="-3.5" rx="1.4" ry="2" transform="rotate(-26 -5 -3.5)" fill={color} />
          <ellipse cx="-1.8" cy="-5.5" rx="1.4" ry="2.1" transform="rotate(-8 -1.8 -5.5)" fill={color} />
          <ellipse cx="1.8" cy="-5.5" rx="1.4" ry="2.1" transform="rotate(8 1.8 -5.5)" fill={color} />
          <ellipse cx="5" cy="-3.5" rx="1.4" ry="2" transform="rotate(26 5 -3.5)" fill={color} />
        </g>
      </svg>
    </div>
  );
};
