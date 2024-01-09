/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["docs/content/**/*.md"],
  theme: {
    extend: {
      colors: {
        primarycolor: "#FFC333",
        secondarycolor: "#FFF",
      },
      backgroundImage: {
        background1: "url('~/assets/images/Background.png')",
        background2: "url('~/assets/images/Website-background1.jpg')",
        backgroundSlider1: "url('~/assets/images/Section 2/bg-1.png')",
        commentShape:
          "url('~/assets/images/Screenshots for sections 1/comment-shape.svg')",
      },
    },
    fontFamily: {
      extrabold: ["GothamBold"],
      thin: ["GothamThin"],
      bold: ["GothamBold"],
    },
  },
  plugins: [],
};
