/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#e31b23',
          dark: '#b5151b',
          light: '#ff4444',
        },
      },
      fontFamily: {
        sans: ['"Trebuchet MS"', 'Tahoma', 'Arial', 'sans-serif'],
      },
      transitionDuration: {
        400: '400ms',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
