/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xxs': '0px',
      'xs': '384px',
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 1024px) { ... }

      'lg': '992px',
      // => @media (min-width: 1280px) { ... }
      'xl': '1280px',

    },

  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "white",
          secondary: "#7286D3",

          accent: "#999999",
          neutral: "#3d4451",
          basic: "#5b5b5b",
          
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}