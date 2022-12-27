/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme.js")
module.exports = {
  content: ["./src/**/*.{vue,js,ts,css,html}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@headlessui/tailwindcss"),
  ],
}
