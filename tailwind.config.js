/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily:{
        'Andan':['Caveat'],
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herob.png')",
        circularLight:'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#000 8px,#000 110px);',
        circularLightLg:'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#000 8px,#000 80px);',
        circularLightMd:'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#000 8px,#000 60px);',
        circularLightSm:'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#000 8px,#000 45px);',
      },
      animation:{
        blob:"blob 5s infinite",
      },
      keyframes:{
        blob:{
          "0%":{
            transform:"translate(0px,0px) scale(1)",
          },
          "33%":{
            transform:"translate(-10vw,10vh,150px) scale(1.5)",
          },
          "66%":{
            transform:"translate(6vw,-10vh,30px) scale(0.5)",
          },
          "100%":{
            transform:"translate(0px,0px) scale(1)"
          },
        }
      },
    },
  },
  plugins: [],
};