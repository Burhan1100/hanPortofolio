/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
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

