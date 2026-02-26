import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gen Z + Apple premium: mint/teal primary, coral accent, lavender
        brand: {
          50: "#ecfdf8",
          100: "#d1faf0",
          200: "#a7f3e1",
          300: "#6ee7d4",
          400: "#34d3bf",
          500: "#10b9a8",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        // Warm neutrals - Apple-like soft grays
        earth: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
        accent: {
          coral: "#f9736b",
          "coral-light": "#fecaca",
          lavender: "#a78bfa",
          "lavender-light": "#e9d5ff",
          mint: "#5eead4",
          "mint-light": "#99f6e4",
          teal: "#14b8a6",
          "teal-light": "#99f6e4",
          sky: "#38bdf8",
          "sky-light": "#bae6fd",
          gold: "#fbbf24",
          "gold-light": "#fef3c7",
        },
      },
      fontFamily: {
        display: ["var(--font-outfit)", "system-ui", "-apple-system", "sans-serif"],
        body: ["var(--font-source-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
      },
      spacing: {
        // Fitts Law: min 44px touch targets (WCAG 2.5.5)
        touch: "2.75rem",
        "touch-lg": "3.5rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.06), 0 10px 20px -2px rgba(0, 0, 0, 0.03)",
        elevated: "0 10px 40px -10px rgba(0, 0, 0, 0.12), 0 2px 10px -2px rgba(0, 0, 0, 0.04)",
        glow: "0 0 40px -10px rgba(16, 185, 168, 0.25)",
        "inner-soft": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, var(--tw-gradient-from) 0px, transparent 50%), radial-gradient(at 80% 0%, var(--tw-gradient-to) 0px, transparent 50%), radial-gradient(at 0% 50%, var(--tw-gradient-from) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
