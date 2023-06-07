/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./*.{html,js}"],
  theme: {
    fontFamily:{
manrope:['Manrope','sans-serif'],
frauces:['Fraunces','sans-serif'],
    },
    extend: {
      colors:{
        'darkPurp':'#24053E',
        'neonGreen':'#44FFA1',
        'brownish':"#584D62",
        'offWhite':'#FCF8FF',
        'white':'#FFFFFF',
      },
      backgroundImage:{
        'mobile': 'url(../images/bg-pattern-1.svg)',
        // 'tablet':'images/bg-pattern-2.svg',
        // 'desktop':'images/bg-pattern-3.svg',
      },
    },
  },
  plugins: [],
}

