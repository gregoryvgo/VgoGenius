/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#e2841a",
        dark: "#000000",
      },
      fontFamily: {
        sans: ["Poppins", "Book Antiqua", "Palatino Linotype", "serif"],
      },
    },
  },
  plugins: [],
};
