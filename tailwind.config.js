/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'text-primary', 'text-secondary', 'text-accent', 'text-dark',
    'bg-primary', 'bg-secondary', 'bg-accent', 'bg-dark' // add any other widths you may use
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
        'custom-gradient': 'linear-gradient(270deg, #00ADA9 0%, #00807D 100%)',
      },
      dropShadow: {
        'custom': '2px 4px 6px black',
      },
      boxShadow:{
        'double-inset': '-12px -12px 48px 0px #022C2B inset, 16px 16px 24px 0px #00DAD4 inset',
      }
    },
  },
  plugins: [],
};
