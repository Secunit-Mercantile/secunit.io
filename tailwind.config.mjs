/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // GoWipeMe Refined Theme Colors
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          light: "rgb(var(--color-primary-light) / <alpha-value>)",
        },
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        body: "rgb(var(--color-body) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        dark: "rgb(var(--color-dark) / <alpha-value>)",

        // GoWipeMe specific colors
        accent: {
          primary: "#20E3B2",
          secondary: "#14b89f",
          hover: "#1bffce",
        },
        danger: "#FF6B6B",
        warning: "#FFB020",
        success: "#20E3B2",

        // Background shades
        "bg-primary": "#0a0a0a",
        "bg-secondary": "#121212",
        "bg-tertiary": "#1a1a1a",
        "bg-elevated": "#1e1e1e",

        // Text shades
        "text-primary": "#ffffff",
        "text-secondary": "#a0a0a0",
        "text-tertiary": "#6b6b6b",

        // Legacy dark mode colors
        darkmode: {
          body: "rgb(var(--color-darkmode-body) / <alpha-value>)",
          border: "rgb(var(--color-darkmode-border) / <alpha-value>)",
          primary: "rgb(var(--color-darkmode-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-darkmode-secondary) / <alpha-value>)",
        },
      },
      fontFamily: {
        // Inter for body text, JetBrains Mono for code
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        heading: ["Inter", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      },
      borderRadius: {
        // GoWipeMe uses larger border radii
        'gw-sm': '6px',
        'gw-md': '8px',
        'gw-lg': '12px',
        'gw-xl': '16px',
        'gw-2xl': '20px',
        'gw-3xl': '24px',
      },
      boxShadow: {
        // GoWipeMe glow shadows
        'accent': '0 8px 24px rgba(32, 227, 178, 0.15)',
        'accent-strong': '0 8px 32px rgba(32, 227, 178, 0.25)',
        'glow': '0 0 20px rgba(32, 227, 178, 0.3)',
        'glow-strong': '0 0 40px rgba(32, 227, 178, 0.4)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% center' },
          '50%': { backgroundPosition: '100% center' },
          '100%': { backgroundPosition: '0% center' },
        },
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'gw': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
