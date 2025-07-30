/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'anymate': {
          // Official Brand Colors from Image
          primary: '#3A86FF',      // Main blue from logo
          secondary: '#7AE582',     // Mint green accent
          accent: '#FF6B6B',        // Red accent for CTAs
          dark: '#2D2D2D',          // Dark blue for text
          light: '#F8F9FA',         // Light background
          white: '#FFFFFF',         // Pure white
          gray: '#6B7280',          // Medium gray
          
          // Logo Colors
          logoBlue: '#3A86FF',      // Light blue robot head
          logoDark: '#2D2D2D',      // Dark blue graduation cap
          logoMint: '#7AE582',      // Mint green accents
          
          // Gradient Colors
          gradient1: '#3A86FF',     // Primary blue
          gradient2: '#7AE582',     // Mint green
          gradient3: '#2D2D2D',     // Dark blue
          gradient4: '#F8F9FA',     // Light background
          
          // Accent Colors
          success: '#7AE582',       // Mint green for success
          warning: '#FFD166',       // Yellow for warnings
          error: '#FF6B6B',         // Red for errors
          info: '#3A86FF',          // Blue for info
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-anymate': 'linear-gradient(135deg, #3A86FF 0%, #7AE582 100%)',
        'gradient-anymate-reverse': 'linear-gradient(135deg, #7AE582 0%, #3A86FF 100%)',
        'gradient-light': 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [],
};
