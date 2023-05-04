/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: false,
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        primary: {},
        secondary: {},
      },
    },
  },
  plugins: [],
};
