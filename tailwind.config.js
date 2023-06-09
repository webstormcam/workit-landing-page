/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./*.{html,js}"],
  theme: {
    fontFamily:{
      manrope:['Manrope','sans-serif'],
      'fraunces':'fraunces-144'
    },
    borderRadius:{
      'header-round':'80% 15%',
      'full':'9999px',
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
      '767':'767px',
     },
     lineHeight:{
      'light-tight':'1.2',
     },
     maxWidth:{
      'MAX':'1114px',
      'MAXXER':'1300px'
     }
    },
  },
  plugins: [],
}

