import React from 'react';

export const DiagnosticsArtwork: React.FC = () => {
  return (
    <div className="w-28 h-20 sm:w-32 sm:h-20 shrink-0 flex items-center justify-end relative select-none">
      <svg
        viewBox="0 0 100 80"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          @keyframes sonarArc {
            0%, 100% {
              opacity: 0.35;
              stroke-width: 1.2px;
            }
            50% {
              opacity: 1;
              stroke-width: 1.8px;
            }
          }
          @keyframes dotPing {
            0%, 100% {
              transform: scale(1);
              opacity: 0.9;
            }
            50% {
              transform: scale(1.3);
              opacity: 1;
            }
          }
          @keyframes ringPing {
            0% {
              r: 3.5px;
              opacity: 0.8;
            }
            100% {
              r: 8px;
              opacity: 0;
            }
          }
          .arc-1 { animation: sonarArc 2.4s ease-in-out infinite 0.0s; }
          .arc-2 { animation: sonarArc 2.4s ease-in-out infinite 0.4s; }
          .arc-3 { animation: sonarArc 2.4s ease-in-out infinite 0.8s; }
          .arc-4 { animation: sonarArc 2.4s ease-in-out infinite 1.2s; }
          .diagnostic-dot {
            transform-origin: 67px 28px;
            animation: dotPing 2.4s ease-in-out infinite 1.2s;
          }
          .diagnostic-ring {
            animation: ringPing 2.4s ease-out infinite 1.2s;
          }
        `}</style>

        {/* 4 Corner Framing Crosshairs ┌ ┐ └ ┘ */}
        <g stroke="#0e382b" strokeOpacity="0.3" strokeWidth="1.2" strokeLinecap="round">
          {/* Top Left ┌ */}
          <path d="M 18 20 L 18 12 L 26 12" />
          {/* Top Right ┐ */}
          <path d="M 74 12 L 82 12 L 82 20" />
          {/* Bottom Left └ */}
          <path d="M 18 60 L 18 68 L 26 68" />
          {/* Bottom Right ┘ */}
          <path d="M 74 68 L 82 68 L 82 60" />
        </g>

        {/* Concentric Ultrasound Acoustic Waves (Radiating from left to right) */}
        <g stroke="#0e382b" strokeLinecap="round">
          {/* Arc 1 */}
          <path
            d="M 38 30 A 13 13 0 0 1 38 50"
            className="arc-1"
          />
          {/* Arc 2 */}
          <path
            d="M 46 24 A 21 21 0 0 1 46 56"
            className="arc-2"
          />
          {/* Arc 3 */}
          <path
            d="M 54 18 A 29 29 0 0 1 54 62"
            className="arc-3"
          />
          {/* Arc 4 */}
          <path
            d="M 62 12 A 37 37 0 0 1 62 68"
            className="arc-4"
          />
        </g>

        {/* Diagnostic Marker Ping Ring */}
        <circle
          cx="67"
          cy="28"
          r="3.5"
          stroke="#0e382b"
          strokeWidth="1"
          fill="none"
          className="diagnostic-ring"
        />

        {/* Solid Dark Green Diagnostic Target Point */}
        <circle
          cx="67"
          cy="28"
          r="3.5"
          fill="#0e382b"
          className="diagnostic-dot"
        />
      </svg>
    </div>
  );
};
