/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fill: {
        "logo-light": "#4D4D4D",
        "logo-dark": "#BFBFBF",
      },
      colors: {
        "toggle-light": "#4D4D4D",
        "toggle-dark": "#BFBFBF",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
