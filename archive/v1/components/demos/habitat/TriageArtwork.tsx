import React from 'react';

export const TriageArtwork: React.FC = () => {
  return (
    <div className="w-28 h-20 sm:w-32 sm:h-20 shrink-0 flex items-center justify-end relative select-none">
      <svg
        viewBox="0 0 120 80"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          @keyframes ecgPulse {
            0% {
              stroke-dashoffset: 200;
              opacity: 0;
            }
            15% {
              opacity: 1;
            }
            85% {
              opacity: 1;
            }
            100% {
              stroke-dashoffset: -200;
              opacity: 0;
            }
          }
          @keyframes pawBeat {
            0%, 100% {
              transform: translate(60px, 64px) scale(1);
            }
            14% {
              transform: translate(60px, 64px) scale(1.15);
            }
            28% {
              transform: translate(60px, 64px) scale(1);
            }
            42% {
              transform: translate(60px, 64px) scale(1.1);
            }
            56% {
              transform: translate(60px, 64px) scale(1);
            }
          }
          .ecg-glow-line {
            stroke-dasharray: 60 140;
            stroke-dashoffset: 200;
            animation: ecgPulse 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
          .triage-paw {
            transform-origin: center;
            animation: pawBeat 2.4s ease-in-out infinite;
          }
        `}</style>

        {/* Subtle Metric Grid Lines */}
        <g opacity="0.25">
          <line x1="12" y1="20" x2="108" y2="20" stroke="#0e382b" strokeWidth="0.75" strokeDasharray="1.5 2.5" />
          <line x1="12" y1="40" x2="108" y2="40" stroke="#0e382b" strokeWidth="0.75" strokeDasharray="1.5 2.5" />
          <line x1="12" y1="60" x2="108" y2="60" stroke="#0e382b" strokeWidth="0.75" strokeDasharray="1.5 2.5" />
          
          <line x1="36" y1="12" x2="36" y2="68" stroke="#0e382b" strokeWidth="0.75" strokeDasharray="1.5 2.5" />
          <line x1="60" y1="12" x2="60" y2="68" stroke="#0e382b" strokeWidth="0.75" strokeDasharray="1.5 2.5" />
          <line x1="84" y1="12" x2="84" y2="68" stroke="#0e382b" strokeWidth="0.75" strokeDasharray="1.5 2.5" />
        </g>

        {/* Base ECG Cardiac Waveform */}
        <path
          d="M 10 40 L 40 40 L 44 38 L 47 42 L 53 14 L 60 56 L 65 32 L 70 44 L 74 40 L 110 40"
          stroke="#0e382b"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Flowing Luminous Pulse Over the ECG Trace */}
        <path
          d="M 10 40 L 40 40 L 44 38 L 47 42 L 53 14 L 60 56 L 65 32 L 70 44 L 74 40 L 110 40"
          stroke="#10b981"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ecg-glow-line"
        />

        {/* Green Paw Print Exactly Centered Beneath the Dip at x=60 */}
        <g className="triage-paw">
          {/* Main Central Pad */}
          <path
            d="M 0 -1 C -3.8 -1, -5.5 1.2, -5.5 3.8 C -5.5 6.5, -2.5 8.5, 0 8.5 C 2.5 8.5, 5.5 6.5, 5.5 3.8 C 5.5 1.2, 3.8 -1, 0 -1 Z"
            fill="#0e382b"
          />
          {/* 4 Toe Pads */}
          <ellipse cx="-5.2" cy="-4" rx="1.4" ry="2" transform="rotate(-26 -5.2 -4)" fill="#0e382b" />
          <ellipse cx="-1.8" cy="-6" rx="1.4" ry="2.1" transform="rotate(-8 -1.8 -6)" fill="#0e382b" />
          <ellipse cx="1.8" cy="-6" rx="1.4" ry="2.1" transform="rotate(8 1.8 -6)" fill="#0e382b" />
          <ellipse cx="5.2" cy="-4" rx="1.4" ry="2" transform="rotate(26 5.2 -4)" fill="#0e382b" />
        </g>
      </svg>
    </div>
  );
};
