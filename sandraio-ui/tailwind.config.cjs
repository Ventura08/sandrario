/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        175:"700px"
    },
    colors: {
        formBg: "rgba(24, 24, 27, 0.75);",
        logoDarkPurple: "#533B8B",
      }
  },
  plugins: [],
}}
