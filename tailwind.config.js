/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        nitj: {
          blue:     "#1565C0",
          navy:     "#0D2137",
          gold:     "#F5A623",
          goldDark: "#C8860A",
          lightBg:  "#EEF4FF",
          text:     "#1A1A2E",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body:    ["'DM Sans'", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(13,33,55,0.88) 0%, rgba(21,101,192,0.72) 100%)",
      },
    },
  },
  plugins: [],
};