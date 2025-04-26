/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors:{
        "dodgeroll-gold":"#F79F1A",
        "apple-grean": "#046E1B",
        "dire-wolf": "#292727",

      },
    },
    fontFamily:{
      Montserrat: "Montserrat, sans-serif",
    },
    container:{
      centre: true,
      padding:"2rem",
    }
  },
  plugins: [],
}

