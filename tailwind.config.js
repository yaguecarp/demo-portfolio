/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--font-inter)",
        cinzel: "var(--font-cinzel)",
      },
      colors: {
        winter: {
          100: "#42687C",
          200: "#84A5B8",
          300: "#B3DAF1",
          400: "#CBCBCB",
          500: "#707571",
          600: "#6693aa",
          700: "#113640"
        },
      },
    },
  },
  plugins: [],
};
