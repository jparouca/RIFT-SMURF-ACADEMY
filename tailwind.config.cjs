/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        green: {
          300: '#63d09f',
          500: '#254f3d',
          700: '#1b382b',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A',
        },
        brown: {
          900: '#1c1917',
          400: '#423b36',
          100: '#685d55',
        },
        pink: {
          700: '#ec4899',
        },
        yellow: {
          700: '#eab308',
        },
      },
    },
  },
  plugins: [],
}
