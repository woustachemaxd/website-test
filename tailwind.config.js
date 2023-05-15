/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        offBitDotBold: ["offBit-dot-bold"],
        offBitDotNormal: ["offBit-dot-normal"],
      },
    },
  },
  plugins: [],
};
