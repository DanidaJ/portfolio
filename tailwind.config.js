/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],


  theme: {
    extend: {
      colors: {
        darkBlue: "#0a192f",
        purpleGlow: "#6a0dad",
        neonBlue: "#3b82f6",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to right, #0a192f, #240046)",
      },
    },


  },
  plugins: [],

};
