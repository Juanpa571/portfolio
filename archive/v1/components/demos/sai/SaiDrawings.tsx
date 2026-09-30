import React from 'react';

// 1. Playas de ensueño: Palm Tree
export const PalmIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Trunk */}
    <path d="M12 21c.5-5 .5-9-1-13" />
    {/* Palm Fronds */}
    <path d="M11 8c-2-3-5-4-8-3 1 2 2 4 4 5" />
    <path d="M11 8c0-3.5 1-6 4-7-.5 2-.5 4 0 6" />
    <path d="M11 8c3-2 6-2 9 0-2 1.5-3 3-4 3.5" />
    <path d="M11 8c2.5 1.5 4 3.5 5 6-2-.5-4-1-6-2" />
    <path d="M11 8c-2.5 1-4.5 3-5.5 5.5 1.5-.5 3.5-.5 5.5-1.5" />
    {/* Base Island Line */}
    <path d="M5 21c4-1 10-1 14 0" />
  </svg>
);

// 2. Arrecifes de coral: Diving Mask & Snorkel
export const SnorkelIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Mask Frame */}
    <rect x="4" y="6" width="13" height="9" rx="3.5" />
    {/* Dual Lenses */}
    <circle cx="8" cy="10.5" r="2.2" />
    <circle cx="13" cy="10.5" r="2.2" />
    {/* Snorkel Tube */}
    <path d="M19 3v10a3 3 0 0 1-3 3h-1.5" />
    {/* Snorkel Top valve */}
    <path d="M19 3h2" />
  </svg>
);

// 3. Vida marina única: Tropical Fish
export const FishIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Body & Tail */}
    <path d="M3.5 12c3-4 8.5-5 13-2l4.5-3.5v11L16.5 14c-4.5 3-10 2-13-2z" />
    {/* Eye */}
    <circle cx="7" cy="11.5" r="1" fill="currentColor" />
    {/* Gill Curve */}
    <path d="M10 9.5c.8 1.5.8 3.5 0 5" />
    {/* Dorsal fin detail */}
    <path d="M13 7c1-1.5 2.5-2 4-1.5" />
  </svg>
);

// 4. Clima todo el año: Radiant Sun
export const SunIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Central Core */}
    <circle cx="12" cy="12" r="4.5" />
    {/* 8 Cardinal & Diagonal Rays */}
    <path d="M12 2.5v2.5" />
    <path d="M12 19v2.5" />
    <path d="M2.5 12h2.5" />
    <path d="M19 12h2.5" />
    <path d="M5.3 5.3l1.8 1.8" />
    <path d="M16.9 16.9l1.8 1.8" />
    <path d="M5.3 18.7l1.8-1.8" />
    <path d="M16.9 7.1l1.8-1.8" />
  </svg>
);

// 5. Cultura isleña: Botanical Leaves & Flora
export const LeavesIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Main Leaf */}
    <path d="M18.5 4.5c-4.5 0-9 2.5-10.5 7.5-1.2 3.5.5 5 2 5 4.5 0 9-5 9-11 0-.8-.4-1.5-.5-1.5z" />
    <path d="M8 17c.5-2 3-5 7.5-8.5" />
    {/* Secondary smaller leaf */}
    <path d="M8.5 12c-2.5 0-5 1.5-6 4.5-.7 2 .3 3 1.2 3 2.5 0 5-3 5-6.5" />
  </svg>
);

// 6. Relájate y desconecta: Sea Shell / Concha marina
export const ShellIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Fan Shell Outline */}
    <path d="M12 21c-5.5 0-9-4-9-9 0-4 4-8.5 9-8.5s9 4.5 9 8.5c0 5-3.5 9-9 9z" />
    {/* Radiating Fan Ribs converging to bottom hinge */}
    <path d="M12 3.5v17.5" />
    <path d="M7 6c1.5 4 3 10 5 15" />
    <path d="M17 6c-1.5 4-3 10-5 15" />
    <path d="M4 11c2.5 2.5 5.5 6.5 8 10" />
    <path d="M20 11c-2.5 2.5-5.5 6.5-8 10" />
  </svg>
);
