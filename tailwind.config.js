// tailwind.config.js

const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      line: " #3F3F3F",
      current: "currentColor",
      black: "rgba(11, 11, 11, 1)",
      white: colors.white,
      darkRed: "rgba(69, 25, 15, 1)",
      lightRed: "rgba(208, 40, 16, 1)",
      orange: "rgba(250, 49, 9, 0.75)",
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.amber,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
