/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgMain: "#020617",   // dark navy
        bgSoft: "#081a3a",   // lighter navy
        accent: "#22d3ee",   // cyan
        textMain: "#e5e7eb", // light gray
        textSoft: "#9ca3af", // muted gray
      },
    },
  },
  plugins: [],
};
