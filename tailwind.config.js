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
        "header-icon-bg-hover": "rgba(126, 34, 206, .3)",
        "header-scroll-bg": "rgba(0,0,0,.7)",
        "mobile-nav-bg": "rgba(0,0,0,.8)",
      },
    },
  },
  plugins: [],
}
