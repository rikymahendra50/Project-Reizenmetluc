/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarycolor: "#FFC333",
        secondarycolor: "#FFF",
      },
      backgroundImage: {
        // background: "url('~/assets/images/Background.png')",
        background2: "url('~/assets/images/Website-background1.jpg')",
      },
    },
    fontFamily: {
      // sans: ["GothamMedium", "sans-serif"],
      // display: ["GothamMedium"],
      // body: ["GothamMedium"],
      extrabold: ["GothamBold"],
      thin: ["GothamThin"],
      bold: ["GothamBold"],
    },
  },
  plugins: [],
};
