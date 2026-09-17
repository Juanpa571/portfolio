---
name: JP Studios
description: Juan Pablo Chacón — Creative Web Designer & Producer. High-craft web experiences, fluid motion, and turnkey launch.
colors:
  surface: "#fafaf8"
  obsidian: "#1C1D20"
  ink: "#1a1a1e"
  accent-emerald: "#00C988"
  border-hairline: "rgba(0, 0, 0, 0.08)"
  border-card: "rgba(0, 0, 0, 0.10)"
  text-primary: "#1a1a1e"
  text-secondary: "rgba(0, 0, 0, 0.65)"
  text-tertiary: "rgba(0, 0, 0, 0.40)"
typography:
  display-monumental:
    fontFamily: "'Neue Montreal', 'Geist', sans-serif"
    fontSize: "5.5rem"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  display:
    fontFamily: "'Neue Montreal', 'Geist', sans-serif"
    fontSize: "clamp(3.5rem, 7.2vw, 8.5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Neue Montreal', 'Geist', sans-serif"
    fontSize: "clamp(2.5rem, 5.5vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Neue Montreal', 'Geist', sans-serif"
    fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Neue Montreal', 'Geist', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  mono:
    fontFamily: "'Geist Mono', monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
  telemetry-micro:
    fontFamily: "'Geist Mono', monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.05em"
  technical-dim:
    fontFamily: "'Geist Mono', monospace"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.05em"
rounded:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"
  3xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
    padding: "16px 36px"
  button-primary-hover:
    backgroundColor: "{colors.obsidian}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "14px 32px"
  input-text:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "16px 28px"
---

# Design System: JP Studios

## Overview

**Creative North Star: "The High-Craft Architectural Monolith"**

JP Studios embodies the discipline of Dennis Snellenberg, Locomotive, and Pentagram: high-density editorial craft where typography, white space, and interaction physics lead the experience. The interface does not decorate; it builds structural confidence. Monolithic scale contrast anchors the visual identity, allowing monumental display type to command the viewport while restrained telemetry anchors orientation.

Every interaction carries authentic physical weight. Rather than relying on gratuitous decorative flourishes, surfaces respond through continuous inertia (Lenis virtual scroll), 3D perspective tilt on hover, and elastic magnetic pull on primary controls. The canvas stays pure, silky, and crisp—free of synthetic noise textures or muddy gradient backdrops.

**Key Characteristics:**
- **Monumental Slender Typography:** High-scale display typography set in slender weights (`font-light` and `font-normal`) with subtle negative tracking (`-0.01em`).
- **Asymmetric Spatial Rhythm:** Non-uniform grids, deliberate diagonal indentation shifts, and generous architectural breathing room.
- **Physical Inertia & Tactile Feedback:** Zero-latency Lenis smooth scroll, interactive 3D card tilt, and hardware-accelerated cursor trailing.
- **Dignified Telemetry:** Precision monospaced metadata and live status indicators without patronizing hand-holding or visual clutter.

## Colors

A deliberate, silky monochromatic system built on warm stone `#fafaf8` and graphite charcoal `#1C1D20`, punctuated exclusively by an active emerald pulse indicator.

### Primary
- **Surface Canvas** (`#fafaf8`): The warm architectural stone canvas across all primary viewports. Provides an organic, paper-like tactile feel without stark clinical glare.
- **Deep Obsidian / Ink** (`#1C1D20` / `#1a1a1e`): The primary typographic and framing ink. Solid, rich, and silky; never artificially noisy.

### Accent
- **Telemetry Emerald** (`#00C988` / `#10b981`): Used strictly for live telemetry status ("Available for Q2/Q3 Projects", active location pulse).

### Neutral
- **Hairline Border** (`rgba(0, 0, 0, 0.08)`): Used for structural section dividers and structural framing.
- **Interactive Border** (`rgba(0, 0, 0, 0.12)`): Active card borders and elevated state demarcations.
- **High-Contrast Text** (`rgba(0, 0, 0, 0.90)`): Primary headings and monumental display text.
- **Secondary Telemetry** (`rgba(0, 0, 0, 0.65)`): Subtitles, role descriptions, and navigation links (WCAG AA compliant ≥ 5.5:1).
- **Muted Metadata** (`rgba(0, 0, 0, 0.40)`): Timestamps, indices, and secondary technical labels.

### Named Rules
**The Singular Accent Rule.** Emerald is never used for decorative typography, cards, or hero backgrounds. It is reserved exclusively for living telemetry signals (the status beacon).

## Typography

**Display Font:** Neue Montreal (with Geist as fallback)  
**Body Font:** Neue Montreal (with system sans-serif fallback)  
**Label/Mono Font:** Geist Mono (with monospace fallback)  

**Character:** Slender, architectural, and authoritative. Neue Montreal brings mid-century Swiss elegance and high optical clarity, paired with the engineering precision of Geist Mono for data telemetry.

### Hierarchy
- **Display** (`font-normal` 400 or `font-light` 300, `clamp(3.5rem, 7.2vw, 8.5rem)`, leading `1.08`, tracking `-0.01em`): Monumental hero statements and section titles.
- **Headline** (`font-normal` 400, `clamp(2.5rem, 5.5vw, 6rem)`, leading `1.12`, tracking `-0.01em`): Section anchors and major discipline statements.
- **Title** (`font-normal` 400, `clamp(1.5rem, 2.5vw, 2.5rem)`, leading `1.2`, tracking `-0.01em`): Project titles and service block titles.
- **Body** (`font-normal` 400, `1.125rem` / `18px`, leading `1.6`): Narrative descriptions, case study summaries, and service details. Measure strictly bounded to 65–75ch.
- **Label / Telemetry** (`font-medium` 500, `0.6875rem`–`0.75rem`, tracking `0.05em`, tabular numbers): Location coordinates, timestamps, service tags, and status data.

### Named Rules
**The Anti-All-Caps Rule.** Headings, titles, buttons, and display copy must always default to natural Title Case or Sentence case. Forcing headlines or navigation into ALL CAPS is strictly forbidden.  
**The Anti-Heavy-Bold Rule.** Large display headlines must never use heavy bold weights (`font-bold` 700/800/900). Monumental display text must remain slender (`font-light` 300 or `font-normal` 400) to maintain high-craft sophistication.

## Layout

Spatial architecture is anchored around a maximum container width of `1400px` (`max-w-[1400px]`), balanced with responsive horizontal padding (`px-6 sm:px-12`).

- **Asymmetric Offsets:** Sections embrace diagonal tension rather than repetitive symmetric centering. Project rows step dynamically across the horizontal plane (`pl-0`, `pl-36`, `pl-12`, `pl-44`), encouraging organic ocular exploration.
- **Generous Vertical Rhythm:** Major sections breathe with monumental vertical spacing (`py-24` to `py-36` / 96px to 144px), giving every block of thought physical weight.
- **Responsive Stacking:** On mobile viewports (< 768px), asymmetric indents collapse gracefully into a clean linear stack without compromising typography hierarchy or interaction targets.

## Elevation & Depth

JP Studios rejects artificial drop shadows and blurred colorful backdrops. Depth is authored physically:

- **Flat Silky Surfaces:** Surfaces are flat at rest, distinguished through tonal contrast and 1px crisp hairlines (`border-black/[0.08]`).
- **Kinetic 3D Perspective Tilt:** Interactive service cards utilize hardware-accelerated 3D transform matrices (`perspective(1000px) rotateX(...) rotateY(...) scale3d(1.02, 1.02, 1.02)`) driven by real-time mouse vectors.
- **Inversion Interaction:** The custom cursor utilizes `mix-blend-difference` on fine pointer devices, dynamically inverting typography and graphic surfaces as it traverses the canvas.
- **Inertial Kinetic Scroll:** Scroll physics are synchronized between Lenis and GSAP ScrollTrigger, providing weight and friction that feels native to high-end digital publishing.

## Shapes

- **Squircles & Continuous Fillets:** Corner radii use rounded squircles (`rounded-2xl` 16px to `rounded-3xl` 24px) for cards, dialogs, and interactive previews.
- **Capsule / Pill Geometry:** Buttons, status badges, and interactive pill triggers use full fillets (`rounded-full`).
- **Framing Hairlines:** Structural borders use subtle 1px strokes (`border-black/10` or `border-white/10`) with zero heavy border weights.

## Components

### Buttons
- **Shape:** Pill silhouette (`rounded-full`).
- **Primary:** Dark graphite background (`bg-[#1a1a1e]`), crisp white text (`text-white`), padded generously (`px-8 py-4`).
- **Hover / Focus:** Wrapped inside the `<Magnetic>` wrapper for spring-loaded elastic cursor attraction, accompanied by subtle scale-up (`scale-[1.02]`) and accessible 2px focus ring (`:focus-visible`).

### Cards (`TiltCard`)
- **Corner Style:** Rounded squircle (`rounded-3xl` / 24px).
- **Background:** Crisp off-white (`bg-white/70 backdrop-blur-xs`) with dark theme inversion in drawer/footer (`bg-[#141517]`).
- **Border:** 1px hairline (`border border-black/[0.08]`).
- **Interaction:** Spring-damper mouse vector tilt up to 8 degrees, with specular light sheen tracking cursor coordinates.

### Kinetic Ticker (`VelocityTicker`)
- **Structure:** Dual opposing continuous horizontal typographic marquees.
- **Performance:** Bounded by ScrollTrigger; automatically halts when out of viewport. Honors `prefers-reduced-motion`.
- **Interaction:** Inertial velocity multiplier reacts dynamically to user scroll acceleration.

### Floating Project Preview (`ProjectList`)
- **Behavior:** Responsive preview card that floats dynamically alongside the cursor on fine pointer devices (`translate3d(x + 35px, y - 140px, 0)`).
- **Optimization:** Pure reactive sleep state; rAF loop activates only upon hover over project list items and halts at 0% idle CPU.

### Language Switcher (`LanguageToggle`)
- **Geometry:** Micro-pill capsule (`rounded-full`) with dual selector `[ EN | ES ]`.
- **Theming:**
  - `Light`: Semi-transparent dark track (`bg-black/[0.05] border border-black/[0.08]`) with solid obsidian active badge (`bg-[#1C1D20] text-white`).
  - `Dark`: Translucent light track (`bg-white/[0.08] border border-white/15`) with crisp white active badge (`bg-white text-black`).
- **Typography:** `font-mono text-[11px] tracking-wider`.
- **State:** Persistent via `localStorage` (`jp_portfolio_lang`) with zero layout shift or hydration flicker.

### Contact Form (`ContactForm`)
- **Grid:** Asymmetric 12-column layout aligning field labels with input containers.
- **Project Selection:** Simplified dual radio pill selector ("New Project" / "General Inquiry") with zero internal jargon.
- **Inputs:** Pill-shaped fields with solid white surface, subtle 1px border (`border-black/10`), active focus ring, and spacious inner padding (`px-7 py-4`).

## Do's and Don'ts

### Do:
- **Do** format monumental headlines in natural Title Case or Sentence case with slender weights (`font-light` 300 or `font-normal` 400).
- **Do** reserve precise containers with fixed `aspect-ratio` for upcoming visual assets.
- **Do** maintain WCAG AA contrast (≥ 4.5:1) for all body copy, telemetry, and secondary navigation labels.
- **Do** verify autonomous build (`npm run build`) before publishing or concluding any implementation task.
- **Do** pause all JavaScript animation loops (rAF, tickers) when off-screen or stationary.

### Don't:
- **Don't** use generic AI templates: no dark purple/blue radial blobs, no sparkle emojis (`✨`), and no white-to-gray gradient text.
- **Don't** apply full-screen SVG noise overlays, fake film grain (`feTurbulence`), or dirty drop shadow smudges.
- **Don't** prepend pseudo-technical micro-labels with slashes (e.g. `// SELECTED CASE STUDIES`, `// 01`). Let headings speak for themselves.
- **Don't** add patronizing scroll instructions (e.g. `Scroll down ↓`, bouncing mouse icons).
- **Don't** hardcode secrets or credentials; always isolate environment variables.
- **Don't** leave unfinished placeholders (`/* TODO */` or `// ... rest remains same`). Every delivered file must be complete and production-ready.
