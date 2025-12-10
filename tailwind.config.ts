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
        'warm-cream': '#FAF7F2',
        'soft-terracotta': '#C17854',
        'deep-burgundy': '#8B4049',
        'sage-green': '#A8B5A0',
        'warm-sand': '#F5F1E8',
        'pale-gold': '#E8D5B5',
        'charcoal': '#3A3A3A',
        'soft-gray': '#6B6B6B',
      },
      fontFamily: {
        heading: ['var(--font-inter)', 'sans-serif'],
        body: ['var(--font-crimson)', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'h1': '3.5rem',
        'h2': '2.5rem',
        'h3': '1.875rem',
        'h4': '1.5rem',
        'body': '1.125rem',
        'small': '0.875rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(139, 64, 73, 0.08)',
        'card': '0 4px 12px rgba(139, 64, 73, 0.12)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;

