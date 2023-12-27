/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily: {
      'inter': ["'Inter'", 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#111315',
        'secondary': '#2d2d2d',
        'text': '#ffffff',
        'breakfast': '#cfdddb',
        'soup': '#e4cded',
        'pasta': '#c2dbe9',
        'sushi': '#c9caef',
        'main': '#fac1d9',
        'progress': '#79b375'
      },
    },
  },
  plugins: [],
}

