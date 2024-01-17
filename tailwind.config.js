/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
        center: true,
        padding: '16px',
    },
    extend: {
      colors :{
        primary: '#083344'
      },
      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}

