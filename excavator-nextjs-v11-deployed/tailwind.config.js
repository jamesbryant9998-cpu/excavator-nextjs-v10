/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        construction: {
          dark: "#111827",
          charcoal: "#1F2937",
          gold: "#F59E0B",
          yellow: "#EAB308",
          light: "#F9FAFB"
        }
      }
    },
  },
  plugins: [],
}
