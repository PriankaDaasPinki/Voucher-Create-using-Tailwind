/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "../*.html",
    "*.html",
    "./src/**/*.{html,js}", // adjust the path according to your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
