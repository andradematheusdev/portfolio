/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      "open-sans": ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        "header-icon-bg": "rgba(255,255,255, .3)",
        "header-icon-bg-hover": "rgba(126, 34, 206, .3)",
        "nav-bg": "rgba(0,0,0,.6)",
        "section-bg-mask": "rgba(0,0,0,.1)",
      },
    },
  },
  plugins: [],
}
