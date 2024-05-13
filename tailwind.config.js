/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'barlow': ['Barlow', 'sans-serif'],
      'bellefair': ['Bellefair', 'serif'],
      'barlowCondensed': ['Barlow Condensed', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

