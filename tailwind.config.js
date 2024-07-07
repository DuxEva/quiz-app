/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        purple: {
          1: "#A729F5",
          2: "#F6E7FF",
        },
        white: {
          1: "#FFFFFF",
        },
        dark: {
          1: "#3B4D66",
          2: "#313E51",
          3: "#626C7F",
        },
        gray: {
          1: "#F4F6FA",
        },
        green: {
          1: "#E0FDEF",
        },
        red: {
          1: "#EE5454",
        },
      },
    },
  },
  plugins: [],
};
