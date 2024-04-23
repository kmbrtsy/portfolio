/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPink: '#FF369B',
        customGray: '#302F2F',
        pinkShade: '#F551A3',
        lightPink: '#FFB2D9'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        radley: ['Radley', 'sans-serif'],
      },
      fontSize: {
        '10xl':'100px',
      }
    },
  },
  plugins: [],
};