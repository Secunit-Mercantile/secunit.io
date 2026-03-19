# Logo Concept Spec: secunit, llc

**Concept 1 — Dark-Mode-First, Blue-LED Palette**  
**Personality:** Modern-tech · Security-trust · Minimal timeless

---

## 1. Icon Concept Geometry

### Primary Mark
- **Shape:** Abstract shield or lock silhouette, reduced to 3–5 geometric segments
- **Construction:** Built on a 24×24 base grid; strokes align to 2px increments
- **Proportions:** Width:height ≈ 1:1.1 (slightly taller than wide for stability)
- **Corners:** Rounded corners at 2–4px radius; no sharp 90° corners
- **Negative space:** Use a single clear “cut” or aperture (e.g., keyhole, aperture, or notch) to suggest security/access without literal lock imagery
- **Stroke weight:** 2–2.5px for primary strokes; consistent weight throughout
- **Grid alignment:** All anchor points on grid; optically centered

### Geometric Principles
- Symmetry on vertical axis
- Optical balance over strict mathematical symmetry
- No more than 5 distinct shapes; avoid decorative detail
- Works at 16px and 512px without re-drawing

---

## 2. Wordmark Style Guidance

### Typography
- **Style:** Sans-serif, geometric, low contrast
- **Weight:** Medium (500) or Semi-bold (600); avoid thin or black
- **Case:** All lowercase — `secunit`
- **Letterforms:** Slightly condensed; tight but readable tracking
- **Character:** Clean, technical, no serifs or decorative flourishes
- **Recommended families:** Inter, Geist, IBM Plex Sans, or similar

### Spacing
- **Icon-to-wordmark gap:** 0.5–0.75× cap height
- **Letter spacing:** Slightly tight (−2% to −5% of default)
- **Line height:** 1.0–1.1 for single-line wordmark

### Legal Entity
- **Treatment:** `llc` in smaller size (≈60–70% of primary wordmark), lighter weight (400), same typeface
- **Placement:** Below `secunit` or inline with reduced emphasis; never compete with primary wordmark

---

## 3. Lockup Rules

### Horizontal Lockup (Primary)
```
[Icon] secunit
       llc
```
- Icon left-aligned with wordmark baseline
- Icon optically centered to cap height of `secunit`
- `secunit` and `llc` share left edge; `llc` indented or centered under `secunit`
- Minimum clear space: 0.5× icon height on all sides
- **Use:** Headers, nav, business cards, email signatures

### Stacked Lockup (Secondary)
```
    [Icon]
   secunit
      llc
```
- Icon centered above wordmark
- Vertical spacing: 0.25–0.5× icon height between icon and wordmark
- `secunit` and `llc` centered as a block
- **Use:** Social avatars, app icons, square formats, footer

### Minimum Sizes
- Horizontal: 120px width minimum for digital; 0.5" for print
- Stacked: 80px height minimum for digital

---

## 4. Monochrome Fallback Rules

### Light-on-Dark (Primary)
- Icon and wordmark: `--secunit-white` (#ffffff)
- Use on dark backgrounds (primary use case)

### Dark-on-Light
- Icon and wordmark: `--secunit-ink` (#0a0a0f)
- Use on light backgrounds (docs, print, light mode)

### Single-Color Rules
- No gradients in monochrome
- No outline-only; use solid fills
- Icon must read at 100% and 50% opacity
- Wordmark: 100% opacity only; never fade for hierarchy (use size/weight instead)

---

## 5. Favicon Simplification

### Requirements
- **Size:** 16×16, 32×32, 48×48
- **Content:** Icon only; no wordmark
- **Simplification:**
  - Reduce to 2–3 core shapes
  - Remove fine details (e.g., inner aperture if it doesn’t scale)
  - Use 1px strokes where possible; avoid 0.5px
  - Preserve silhouette and recognizable shape
  - Test at 16px: must still read as “secunit” mark

### Favicon-Specific
- Slightly heavier stroke than primary icon for legibility at small sizes
- Consider square crop of icon center if full icon is too complex

---

## 6. Usage on Dark Backgrounds

### Primary Context
- **Background:** `--secunit-bg-dark` (#0d1117) or darker
- **Logo:** `--secunit-white` (#ffffff) or `--secunit-blue-primary`
- **Accent:** Optional blue glow or subtle halo for hero/feature use only

### Rules
- Never place logo on busy imagery without sufficient contrast
- Minimum contrast: 4.5:1 (WCAG AA) for body text; 3:1 for large logos
- Avoid placing on pure black (#000000); use off-black for softer contrast
- Blue-LED glow: use sparingly; never as default state

### Clear Space
- Minimum padding: 1× icon height from edges and other graphics
- No text, imagery, or UI elements inside clear space

---

## 7. Color Tokens (CSS-Like)

```css
/* Primary palette — Blue-LED */
--secunit-blue-primary:    #3b82f6;   /* Primary brand blue */
--secunit-blue-bright:     #60a5fa;   /* Hover, accent, glow */
--secunit-blue-dim:        #2563eb;   /* Pressed, darker variant */
--secunit-blue-muted:      #1e40af;   /* Secondary elements */

/* Neutrals — Dark-mode-first */
--secunit-bg-dark:         #0d1117;   /* Primary background */
--secunit-bg-darker:       #010409;   /* Deeper background */
--secunit-surface:         #161b22;   /* Cards, panels */
--secunit-border:          #30363d;   /* Borders, dividers */

/* Foreground */
--secunit-white:           #ffffff;   /* Primary logo on dark */
--secunit-ink:             #0a0a0f;   /* Primary logo on light */
--secunit-gray-mid:        #8b949e;   /* Secondary text */
--secunit-gray-dim:        #484f58;   /* Tertiary, disabled */

/* Semantic (optional) */
--secunit-success:         #3fb950;   /* Positive states */
--secunit-warning:         #d29922;   /* Caution */
--secunit-error:           #f85149;   /* Error, critical */
```

---

## 8. Rationale (3 Bullets)

1. **Blue-LED + dark-first** — Aligns with security/ops tools and developer expectations; blue conveys trust and technology without feeling consumer or playful; dark backgrounds reduce eye strain and feel professional.

2. **Geometric icon + lowercase wordmark** — Minimal geometry ages well and scales across contexts; lowercase `secunit` feels approachable and modern without losing authority; the combination supports both enterprise and product use.

3. **Strict monochrome and clear-space rules** — Ensures legibility in print, low-contrast, and single-color contexts; clear space prevents logo dilution and maintains recognition across touchpoints.

---

**Document:** Logo Concept Spec v1  
**Concept:** Dark-mode-first, Blue-LED  
**Status:** Ready for design execution
