/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode with the 'class' strategy
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#121212", // Dark background
        darkSecondary: "#1e1e1e", // Slightly lighter background for containers
        textLight: "#e5e5e5", // Light text color for readability
        textMuted: "#b0b0b0", // Muted text color
        primary: "#6c63ff", // ChatGPT-like accent color
      },
    },
  },
  plugins: [],
}

