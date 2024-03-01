/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sf: ["SF Pro Display Regular", "sans-serif"],
      }
    },
  },
  plugins: [],
};

