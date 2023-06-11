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
    minWidth:{
      '48':'48px',
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
      '439':'439px',
      '514':'514px',
      '536':'536px',
      '767':'767px',
     },
     lineHeight:{
      'light-tight':'1.2',
     },
     maxWidth:{
      '321px':'321px',
      'max573':'573px',
      '689px':'689px',
      'MAX':'1114px',
      'MAXXER':'1300px'
     }
    },
  },
  plugins: [],
}

