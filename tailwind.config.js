/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: {
    content: ["./src/ui/**/**/*.{ html, js, jsx, ts, tsx }"],
  },
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
