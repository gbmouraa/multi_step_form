/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: "919px",
    },

    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "mobile-aside": "url('/src/assets/bg-sidebar-mobile.svg')",
        "desktop-aside": "url('/src/assets/bg-sidebar-desktop.svg')",
      },
      colors: {
        "light-blue": "	#bfe2fd",
        "marine-blue": "#02295a",
        "pastel-blue": "#adbeff",
        magnolia: "#f0f6ff",
        alabaster: "#fafbff",
        "purple-blue": "	#473dff",
      },
    },
  },
  plugins: [],
};
