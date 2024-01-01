/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "mobile-aside": "url('/src/assets/bg-sidebar-mobile.svg')",
      },
      colors: {
        "light-blue": "	#bfe2fd",
        "marine-blue": "#02295a",
        "pastel-blue": "#adbeff",
        magnolia: "#f0f6ff",
        alabaster: "#fafbff",
      },
    },
  },
  plugins: [],
};
