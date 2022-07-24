/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      "open-sans": ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        "header-icon-bg": "rgba(255,255,255, .3)"
      },
    },
  },
  plugins: [],
}
