import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
          display: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        },
        colors: {
          gold: {
            400: '#D4AF37',
            500: '#C5A028',
            600: '#B08D1E',
            700: '#8F7318',
          },
          dark: {
            900: '#0D0A06',
            800: '#1A1610',
            700: '#2A2518',
            600: '#3A3528',
          },
          surface: {
            dark: '#16120E',
            card: '#1E1A14',
            hover: '#2A251C',
          },
        },
      },
    },
    plugins: [],
  }

export default config