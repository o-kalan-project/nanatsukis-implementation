/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      colors: {
        theme: {
          50: "#fef2f5",
          100: "#fce7eb",
          200: "#f9d2dd",
          300: "#f6baca",
          400: "#ed7f9f",
          500: "#e2517f",
          600: "#ce306a",
          700: "#ad2359",
          800: "#91204f",
          900: "#7d1e49",
          950: "#450c24",
          base: "#ed7f9f",
        },
      },
    },
  },
  plugins: [],
};
