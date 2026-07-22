module.exports = {
  content: ["./views/**/*.ejs", "./src/**/*.css"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#E1141C',
          dark: '#B10E14',
          darker: '#8A0A0F',
          tint: '#FDECEC'
        },
        ink: '#0B1524',
        cta: {
          DEFAULT: '#FED700',
          dark: '#EAC600'
        },
        slate: {
          soft: '#4B5563'
        }
      },
      fontFamily: {
        sans: ['"Open Sans"', '"Segoe UI"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif']
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(11, 21, 36, 0.18)',
        soft: '0 4px 20px -8px rgba(11, 21, 36, 0.15)'
      },
      keyframes: {
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'scale(1.8)', opacity: '0' }
        }
      },
      animation: {
        pulseRing: 'pulseRing 2s cubic-bezier(0.4,0,0.6,1) infinite'
      }
    }
  },
  plugins: []
};
