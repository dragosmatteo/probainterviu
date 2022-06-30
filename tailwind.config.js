// const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      screens: {
         sm: "450px",
         ms: "550px",
         md: "768px",
         lg: "1024px",
         dm: "1175px",
         xl: "1280px",
         "2xl": "1700px",
      },
      extend: {
         color: {
            orange: "#F89A76",
            text: "#2E324D",
            gray: "#707070",
         },
         fontFamily: {
            raleway: ["Raleway", "sans-serif"],
         },
      },
   },
   plugins: [],
};
