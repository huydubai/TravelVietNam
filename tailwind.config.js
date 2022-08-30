/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // font-family
      fontFamily: {
        expletus: ['Expletus Sans', 'cursive'],
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}