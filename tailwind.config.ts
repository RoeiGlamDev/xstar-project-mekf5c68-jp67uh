import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Paths to all of your template files
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#FFC0CB', // Light pink for accents
          DEFAULT: '#FF69B4', // Main pink color
          dark: '#FF1493', // Darker pink for hover states
        },
        white: '#FFFFFF', // White for backgrounds and text
      },
      fontFamily: {
        serif: ['Georgia', 'serif'], // Elegant serif font for headings
        sans: ['Helvetica', 'Arial', 'sans-serif'], // Clean sans-serif for body text
      },
    },
  },
  plugins: [],
});