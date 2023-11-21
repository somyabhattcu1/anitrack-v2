/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        darkGrey : '#333333',
        lighGrey : '#777777',
        midGrey : '#555555',
        btnColor : '#1b1b1d'
      }
    },
    fontFamily : {
      display : ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}