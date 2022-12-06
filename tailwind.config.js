/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      400: { max: "420px" },
      520: { max: "520px" },
    },
    extend: {
      maxWidth: {
        250: "250px",
        200: "200px",
        150: "150px",
        180: "180px",
        100: "100px",
      },
      backgroundColor: {
        "light-black": "rgba(0,0,0,0.5)",
      },
      height: {
        370: "370px",
      },
      letterSpacing: {
        "5px": "5px",
      },
      fontSize:{
        10:"10px"
      }
    },
  },
  plugins: [],
};
