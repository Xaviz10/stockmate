/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        primary: { DEFAULT: "#0F60FF" },
        secondary: { DEFAULT: "0FB7FF" },
      },
    },
  },
  plugins: [],
};
