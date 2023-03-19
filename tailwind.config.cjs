/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        texture: `url("https://www.transparenttextures.com/patterns/cartographer.png");`,
        cross: `url("https://www.transparenttextures.com/patterns/football-no-lines.png");`,
      },
      colors: {
        ng: "#74EE15",
        nb: "#4deeea",
        np: "#f000ff",
      },
    },
  },
  variants: {},
  plugins: [],
};
