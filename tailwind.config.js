/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 3.5s linear infinite",
      },
      keyframes: {
        text: {
          to: {
            backgroundPosition: "200% center",
          },
        },
        gradient: {
          from: {
            backgroundPosition: "200% center",
          },
          to: {
            backgroundPosition: "0% center",
          },
        },
      },
    },
  },
  plugins: [],
};
