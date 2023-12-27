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
    },
  },
  plugins: [],
};
