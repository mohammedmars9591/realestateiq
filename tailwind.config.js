/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C6A75E',
        secondary: '#3A3125',
        accent: '#F4DFA0',
      }
    },
  },
  plugins: [],
}