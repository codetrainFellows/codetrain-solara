const { typography } = require("@material-tailwind/react");
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ash: "#E5E5E5",
        indigo: "#7A3CE3",
        violet: "#1B1049",
        yellow: "#FFBE0C",
        pink: "#FF006E",
        lightBlue: "#49CAE4",
        textColor: "#1b10499b",
      },
      screens: {
        "3xl": "1440px",
      },
    },
  },
  plugins: [],
});
