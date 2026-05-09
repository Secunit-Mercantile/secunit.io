## Project Brief: secunit.io "Hacker Green" UI Redesign

**Project Title:** secunit.io "Hacker Green" Aesthetic UI Overhaul

**Date:** October 26, 2023

**Author:** Product Manager

**Version:** 1.0 - Initial Brief

---

### 1. Executive Summary

This project aims to completely overhaul the user interface of the `secunit.io` Astro project. The new design will adopt a "Minimalist Technical" aesthetic, inspired by classic hacker terminals. This involves a strict color palette of deep matte black and vibrant "Hacker Green" accents, exclusive use of monospace fonts, and a focus on clean, sharp lines and subtle interactive glows. The goal is to provide a distinct, high-contrast, and technically oriented visual experience.

### 2. Goals & Objectives

*   To redesign the entire `secunit.io` UI to a "Hacker/Terminal" aesthetic.
*   To establish a consistent "Minimalist Technical" design language across all components.
*   To enhance the visual appeal and brand identity of `secunit.io` through a unique and memorable theme.
*   To provide clear instructions and visual references for an AI agent to implement the redesign efficiently and accurately.

### 3. Key Design Principles

The core design principles underpinning this redesign are:

*   **Color Palette:** Deep matte black background (`#0a0a0a`) with vibrant "Hacker Green" (`#00ff41`) as the primary accent.
*   **Typography:** Strict use of monospace fonts (e.g., `JetBrains Mono`, `Space Mono`) for all text elements.
*   **Minimalism:** Removal of gradients, soft shadows, and excessive ornamentation.
*   **Sharpness:** Emphasis on sharp corners (0px or 2px radius max) and thin, low-opacity borders.
*   **Interactivity:** Subtle green glows for interactive elements and headings to provide visual feedback without clutter.
*   **Spaciousness:** Increased global padding and gap to create a clean, organized, and spacious feel.

### 4. Detailed Requirements

#### 4.1. Global Style Definitions (Apply to `src/layouts/BaseLayout.astro` or `Global.css`)

*   **Background:** Set the main background color to `#0a0a0a` (pure matte black).
*   **Primary Accent Color:** Define `#00ff41` (Terminal Green) as the primary accent for interactive elements, borders, and highlights.
*   **Typography:**
    *   Force `JetBrains Mono` or `Space Mono` for ALL text elements, including headings (H1-H6) and body text.
    *   Apply `text-shadow: 0 0 5px rgba(0, 255, 65, 0.5)` to primary headings for a subtle interactive glow.
*   **Borders:** Use thin `1px` borders with a low opacity green: `rgba(0, 255, 65, 0.2)`.
*   **Card Glow:** Apply `box-shadow: 0 0 10px rgba(0, 255, 65, 0.1)` to active cards.
*   **Spacing:** Increase `gap` and `padding` globally to create a "spacious" and "clean" layout.

#### 4.2. Component-Specific Updates

*   **`Card.astro`**:
    *   Remove all existing gradients and soft shadows.
    *   Set background to a solid `#0f0f0f`.
    *   Apply a thin green border (as per global definition).
    *   Ensure sharp corners (0px or 2px radius maximum).
*   **`Button.astro`**:
    *   Style as "Ghost Buttons": transparent background, green border, green text.
    *   On hover, invert colors: green background with black text.
*   **`Header.astro` & `Nav.astro`**:
    *   Simplify to a minimalist top bar design.
    *   Use the monospace font for all navigation links.
    *   Remove any blur effects.
    *   Set background to solid black (`#0a0a0a`) with a bottom green border (as per global definition).
*   **`Input.astro` & `ContactFormCore.astro`**:
    *   Style inputs to resemble a terminal prompt.
    *   Include a `>` prefix before the cursor.
    *   Use the green monospace font for all user input.
*   **Data Visualization (e.g., Security Dashboard charts)**:
    *   Charts should use thin neon green lines for data representation.
    *   Remove all background grids for a cleaner look.

### 5. Implementation Strategy

1.  **Configuration Update:** Update `tailwind.config.mjs` (if present) to include the new color palette and font-family declarations.
2.  **Global Styles Injection:** Modify `BaseLayout.astro` to inject the global CSS variables and base styles.
3.  **Component Refactoring (Atomic):** Iterate through `src/components/ui/` to refactor small, foundational building blocks first (e.g., `Button.astro`, `Card.astro`, `Badge.astro`).
4.  **Page Integration:** Finally, update main pages like `index.astro` and `SecurityDashboard.astro` to integrate the new components and reflect the desired layout density.

### 6. UI/UX References & Assets

The following visual references have been generated to guide the implementation:

*   **Hacker Green UI Kit Reference (Screen ID: 81ffc0d130b9440fac327a7f7006f18f):**
    *   A foundational guide showcasing typography (H1-H6, body text), various button states (Primary, Ghost, Icon), terminal-style input fields with prompts, glowing checkboxes, minimalist textareas, standard system cards, and status badges.
*   **Hacker Green Advanced Components (Screen ID: cb942f4494654475a9e0205d5d658948):**
    *   A detailed reference for more complex elements, including minimalist neon line charts (without grids), terminal-style code blocks with syntax highlighting, thin glowing progress bars, and "System Scanning" spinners. It also illustrates how `PostCard` and `FeatureCard` components would integrate into the layout grid.

These assets serve as the definitive visual source of truth for the redesign.

### 7. Success Criteria

*   All UI components and global styles strictly adhere to the "Hacker/Terminal" aesthetic as defined in this brief and the provided UI asset references.
*   The `secunit.io` project successfully compiles and renders with the new design without introducing functional regressions.
*   Consistency of the new design language is maintained across all redesigned pages and components.

### 8. Open Questions & Future Considerations

*   Should specific CSS code snippets be provided for complex components like the "Terminal Input" or "Code Blocks" to expedite development?
*   Detailed design for "Mobile Navigation" layout within this theme.
*   Design for various "Success/Error" state alert messages.
*   Redesign of specific, larger components not explicitly detailed, such as `PricingTable.astro`.