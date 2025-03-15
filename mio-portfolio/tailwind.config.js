/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#494236", // scuro neutro
        accent: "#F9C449", // giallo brillante
        secondary: "#1D2C2B", // verde petrolio scuro
      },
    },
  },
  plugins: [],
};
