/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--color-bg) / <alpha-value>)",
        content: "hsl(var(--color-content) / <alpha-value>)",
      },
    },
  },
};
