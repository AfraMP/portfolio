/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#0a0a0c",
        cardBg: "rgba(20, 20, 25, 0.7)",
        accentGlow: "#6366f1",
        accentSecondary: "#06b6d4",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}