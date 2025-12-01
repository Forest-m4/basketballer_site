/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-none": {
          /* Для Firefox */
          "scrollbar-width": "none",
          /* Для IE и Edge */
          "-ms-overflow-style": "none",
        },
        ".scrollbar-none::-webkit-scrollbar": {
          /* Для Chrome, Safari и Opera */
          display: "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
