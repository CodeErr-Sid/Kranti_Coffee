/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tanAegan: ['"TAN AEGAN"', 'sans-serif'],  // Register the custom font
        quickSand: ["Quicksand", 'sans-serif'],
        monteserrat: ["Monteserrat", 'sans-serif']
      },
      colors: {
        primary: "#114030", // Greenish tone (your primary color)
        secondary: "#FFFFFF", // White
        accent: "#402716", // Dark brown (used in buttons)
        dark: "#000000", // Black
        background: "#FFFFFF", // White for the background
      },
      backgroundImage: {
        'gradient-to-right': "linear-gradient(90deg, #572300 0%, #402716 100%)",
      },
    },
  },
  plugins: [],
};
