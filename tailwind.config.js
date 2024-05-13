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
    animation:{
      ping: 'ping 2s infinite',
    },
    extend: {},
  },
  plugins: [],
}

