/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // use class to toggle dark/light
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPrimary: '#05060A', // your dark background
        lightPrimary: '#F9FAFB', // light background
      },
    },
  },
  plugins: [],
};