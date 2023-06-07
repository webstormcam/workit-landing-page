/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./*.{html,js}"],
  theme: {
    fontFamily:{
      manrope:['Manrope','sans-serif'],
      fraunces:['Fraunces','sans-serif']
    },
    borderRadius:{
      'header-round':'80% 15%'
    },
    extend: {
      colors:{
        'darkPurp':'#24053E',
        'neonGreen':'#44FFA1',
        'brownish':"#584D62",
        'offWhite':'#FCF8FF',
        'white':'#FFFFFF',
      },
     width:{
      '536':'536px',
     }
    },
  },
  plugins: [],
}

