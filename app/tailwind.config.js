/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/main.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hylia: ["HyliaSerif", "sans-serif"],
      },
      backgroundImage: {
        "sheikah-slate": "url('/img/backgroundsheikahslate.jpg')",
        "texture-img": "url('/img/thingy.jpeg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
