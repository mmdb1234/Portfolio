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
        accent: "#2E8BC0",
        "accent-light": "#4FA8D9",
        "accent-dark": "#1F6D9E",
        navy: {
          darkest: "#0A1628",
          dark: "#0F1E3A",
          DEFAULT: "#1A2D4F",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-inter)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
