/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
});
