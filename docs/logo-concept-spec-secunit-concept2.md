# Logo Concept Spec: secunit, llc — Concept 2

**Company:** secunit, llc  
**Concept:** 2 — Dark-mode-first, bright-green LED palette  
**Personality:** Modern-tech + Security-trust + Minimal timeless

---

## 1. Icon Concept Geometry

### Primary Mark
- **Shape:** Abstract shield or lock silhouette fused with a circuit/hexagon motif
- **Construction:** Single-path geometry; no strokes thinner than 1.5pt at 24px
- **Proportions:** 1:1 square canvas; icon occupies ~85% of bounding box with optical balance
- **Key elements:**
  - Central vertical spine (lock body) with subtle notch at top
  - Two symmetrical “wings” or brackets suggesting a shield
  - Optional: small dot or node at center (LED indicator)
- **Style:** Rounded corners (2–4px radius at scale); no sharp 90° corners
- **Negative space:** Clear, readable at 16px; no fine detail that disappears at small sizes

### Geometric Specs (relative units)
```
Icon canvas: 24×24 base unit
Lock body width: 6u (25%)
Shield wings: 3u thickness each
Corner radius: 0.5u
Clear space: 1u minimum around mark
```

---

## 2. Wordmark Style Guidance

### Typography
- **Style:** Sans-serif, geometric, slightly condensed
- **Weight:** Medium (500) for “secunit”; Regular (400) for “, llc”
- **Treatment:** All lowercase; no all-caps or title case
- **Letterforms:** Clean, open counters; avoid decorative serifs or slab features
- **Spacing:** Slightly tight letter-spacing (−2% to −4%) for “secunit”; normal for “, llc”
- **Recommended families:** Inter, Geist, IBM Plex Sans, or similar neutral geometric sans

### Hierarchy
- “secunit” = primary; “, llc” = secondary (slightly lighter weight or opacity)
- Comma and “llc” visually subordinate but legible

---

## 3. Lockup Rules

### Horizontal Lockup
- **Layout:** Icon left, wordmark right
- **Spacing:** 0.5–0.75× icon width between icon and wordmark
- **Alignment:** Icon optically centered with x-height of “secunit”
- **Minimum width:** 120px for legibility
- **Preferred:** Icon + “secunit, llc” on one line when space allows

### Stacked Lockup
- **Layout:** Icon above wordmark, both center-aligned
- **Spacing:** 0.4–0.5× icon height between icon and wordmark
- **Use case:** Square avatars, mobile headers, compact spaces
- **Minimum height:** 64px

### Clear Space
- **Rule:** Minimum clear space = height of “s” in wordmark on all sides
- **Never:** Crop into icon or wordmark; avoid tight framing

---

## 4. Monochrome Fallback Rules

### Light-on-Dark (Primary)
- **Icon:** Solid fill; no outlines
- **Wordmark:** Same treatment as icon
- **Color:** Bright green (see palette below)

### Dark-on-Light
- **Icon:** Solid fill, dark gray or black
- **Wordmark:** Same
- **Use:** Light backgrounds, print, single-color contexts

### Reversed (White/Off-white)
- **Icon:** Solid white or off-white (#F0F0F0)
- **Wordmark:** Same
- **Use:** Dark backgrounds when green is not appropriate (e.g., accessibility, contrast)

### Rules
- No gradients in monochrome; flat fills only
- Ensure 4.5:1 contrast minimum (WCAG AA) for text/icon on background
- Avoid thin strokes that disappear in single-color reproduction

---

## 5. Favicon Simplification

### Requirements
- **Size:** 16×16, 32×32, 48×48 (multi-resolution)
- **Simplification:** Icon only; no wordmark
- **Detail reduction:**
  - Remove any interior detail that doesn’t read at 16px
  - Prefer single solid shape or 2–3 clear regions max
  - Slightly increase stroke/body thickness for legibility
- **Format:** SVG for vector; PNG for legacy; ICO if needed
- **Safe area:** Keep critical shape within 12×12 center of 16×16 canvas

---

## 6. Usage on Dark Backgrounds

### Primary Context
- **Background:** Dark gray to near-black (#0D0D0D to #1A1A1A)
- **Logo color:** Bright green (primary palette)
- **Avoid:** Pure black (#000) unless required; prefer #0D0D0D or #111 for depth

### Contrast & Glow
- **Default:** Flat bright green; no glow
- **Optional accent:** Subtle outer glow (2–4px, 10–20% opacity) for hero/feature use only
- **Never:** Heavy drop shadows or 3D effects that conflict with minimal aesthetic

### Background Compatibility
- **Approved:** Dark gray, charcoal, near-black, dark blue-gray (#0F1419, #161B22)
- **Avoid:** Mid-tone grays where green lacks contrast; test contrast before use

---

## 7. Color Tokens (CSS-like)

```css
/* Primary — Bright Green LED */
--secunit-green-50:  #e6ffe6;
--secunit-green-100: #b3ffb3;
--secunit-green-200: #80ff80;
--secunit-green-300: #4dff4d;
--secunit-green-400: #1aff1a;
--secunit-green-500: #00e600;   /* Primary logo */
--secunit-green-600: #00b300;
--secunit-green-700: #008000;
--secunit-green-800: #004d00;
--secunit-green-900: #001a00;

/* Neutrals — Dark Mode */
--secunit-bg-900:    #0D0D0D;   /* Primary dark bg */
--secunit-bg-800:    #1A1A1A;
--secunit-bg-700:    #262626;
--secunit-bg-600:    #333333;

/* Monochrome Fallbacks */
--secunit-mono-light: #F0F0F0;  /* Reversed on dark */
--secunit-mono-dark:  #1A1A1A;  /* On light */
--secunit-mono-mid:   #6B7280;  /* Secondary/de-emphasized */
```

---

## 8. Rationale (3 Bullets)

1. **Bright green on dark** evokes security dashboards, status indicators, and trusted systems—reinforcing “secunit” as a security-focused brand while feeling contemporary and tech-native.

2. **Geometric icon + lowercase wordmark** keeps the mark minimal and timeless, avoiding trends that date quickly; the shield/lock motif communicates trust without literal lock imagery.

3. **Dark-mode-first** aligns with developer and security audiences who typically work in dark UIs, and ensures the logo reads strongly in the contexts where secunit will most often appear.

---

**Document version:** 1.0  
**Date:** 2025-03-19
