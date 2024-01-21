/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      colors: {
        primary: "#414f6b",
        secondary: "#4d4d4d",
        mountainGray: "#b0b4be",
        grayBlue: "#63769d",
      },
    },
  },
  plugins: [],
};
