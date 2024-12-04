/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Busca clases en archivos React
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#FBBF24",
        accent: "#10B981",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      spacing: {
        16: "1rem",
        24: "1.5rem",
        32: "2rem",
      },
    },
  },
  plugins: [],
};
