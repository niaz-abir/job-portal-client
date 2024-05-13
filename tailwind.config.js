/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-400": "#d45d93",
        "dark-400": "#221c38",
        "dark-300": "#362b33",
        "dark-mid": "#38334c",
        "dark-new": "#20131c",
        "dark-deep": "#221c38",
      },
    },
  },
  plugins: [require("daisyui")],
};
