module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: '#181e29', // Main dark background
        secondary: '#232b3a', // Card background
        accent: '#2d3748', // Sidebar/Widget background
        running: '#22c55e', // Green for Running
        stopped: '#eab308', // Yellow for Stopped
        unhealthy: '#ef4444', // Red for Unhealthy
        muted: '#94a3b8', // Muted text
        border: '#334155', // Border color
        ...require('tailwindcss/colors'),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};