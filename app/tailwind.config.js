/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/main.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hylia: ["Hylia Serif", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
