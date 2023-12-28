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
        // background: "url('~/assets/images/Background.png')",
        background2: "url('~/assets/images/Website-background.webp.webp')",
      },
    },
  },
  plugins: [],
};
