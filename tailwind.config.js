/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "text-gradient": "text 3s linear infinite",
      },
      keyframes: {
        text: {
          to: {
            backgroundPosition: "200% center",
          },
        },
      },
    },
  },
  plugins: [],
};
