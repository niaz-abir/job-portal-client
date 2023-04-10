/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-400": "#d45d93",
        "dark-400": "#221c38",
        "dark-300": "#1f1932",
        "dark-mid": "#38334c",
      },
    },
  },
  plugins: [require("daisyui")],
};
