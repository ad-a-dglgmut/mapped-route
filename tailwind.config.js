/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brightRed: "hsl(12,88%,59%)",
        brightRedLight: "hsl(12,88%,69%)",
        brightRedSupLight: "hsl(12,88%,95%)",
        darkBlue: "hsl(228,39%,23%)",
        darkGrayishBlue: "hsl(227,12%,61%)",
        veryDarkBlue: "hsl(223,12%,13%)",
        veryPaledRed: "hsl(13,100%,96%)",
        veryLightGray: "hsl(0,0%,98%)",
        d1d1d1: "#d1d1d1",
        a1a1a1: "#a1a1a1",
        c1c1c1: "#c1c1c1",
        fafafa: "#fafafa",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },
  plugins: [require("daisyui")],
}
