/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'orbit-purple': '#4B0082',
        'orbit-dark': '#0F0A1F',
        'orbit-gold': '#D4AF37',
        'fintora-accent': '#6B46C1',
      }
    },
  },
  plugins: [],
}