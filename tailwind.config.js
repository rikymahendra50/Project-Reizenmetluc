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
        background2: "url('~/assets/images/Website-background.jpg')",
      },
      boxShadow: {
        shadowcard:
          "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
