/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      "open-sans": ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        "header-icon-bg": "rgba(255,255,255, .3)",
        "header-scroll-bg": "rgba(0,0,0,.7)"
      },
    },
  },
  plugins: [],
}
