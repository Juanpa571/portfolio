import React from 'react';

// Oxygen Cylinder with O₂
export const OxygenIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6 text-[#0e382b]' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {/* Cap / valve */}
    <rect x="10" y="2" width="4" height="2.5" rx="0.5" />
    {/* Main cylinder body */}
    <rect x="7" y="4.5" width="10" height="17" rx="3.5" />
    {/* O2 text / symbol */}
    <text x="12" y="14.5" textAnchor="middle" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold" fill="currentColor" stroke="none">
      O₂
    </text>
  </svg>
);

// Medical Cross
export const MedicalCrossIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6 text-[#0e382b]' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 9 3 L 15 3 L 15 9 L 21 9 L 21 15 L 15 15 L 15 21 L 9 21 L 9 15 L 3 15 L 3 9 L 9 9 Z" />
  </svg>
);

// Surgical Scalpel
export const ScalpelIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6 text-white' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {/* Handle */}
    <line x1="4" y1="20" x2="13" y2="11" />
    {/* Blade */}
    <path d="M 13 11 L 18 6 C 20 4, 21 4.5, 20.5 7 L 17 11.5 Z" fill="currentColor" fillOpacity="0.2" />
    {/* Grip notch */}
    <line x1="8" y1="17.5" x2="9" y2="15" strokeOpacity="0.6" />
  </svg>
);

// Telemetry Monitor
export const MonitorIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6 text-white' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M 6 11 L 8.5 11 L 10 8 L 12 14 L 13.5 10 L 15 11 L 18 11" />
    <line x1="9" y1="20" x2="15" y2="20" />
    <line x1="12" y1="17" x2="12" y2="20" />
  </svg>
);

// Imaging / Ultrasound Waves
export const UltrasoundIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6 text-[#0e382b]' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="18" r="1.5" fill="currentColor" />
    <path d="M 8.5 15.5 C 10.5 14, 13.5 14, 15.5 15.5" />
    <path d="M 6 12.5 C 9.5 10, 14.5 10, 18 12.5" />
    <path d="M 4 9.5 C 8.5 6.5, 15.5 6.5, 20 9.5" />
  </svg>
);

// Laboratory Test Tube
export const TestTubeIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6 text-[#0e382b]' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {/* Tube Rim */}
    <line x1="8" y1="3" x2="16" y2="3" />
    {/* Tube Body */}
    <path d="M 9.5 3 L 9.5 17 C 9.5 19.5, 14.5 19.5, 14.5 17 L 14.5 3" />
    {/* Liquid Line */}
    <line x1="9.5" y1="12" x2="14.5" y2="12" strokeDasharray="1 1.5" />
    {/* Small liquid fill */}
    <path d="M 9.5 12 L 9.5 17 C 9.5 19.5, 14.5 19.5, 14.5 17 L 14.5 12 Z" fill="currentColor" fillOpacity="0.15" stroke="none" />
  </svg>
);
