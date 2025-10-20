/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', 'Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: '#0071E3',
        'accent-dark': '#2997FF',
      },
    },
  },
  plugins: [],
}
