/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
   fontFamily: {
      "poppins" : "Poppins",
      "lexend" : "Lexend Deca"
   },
   colors:{
    "light-ptext" : "#444",
    "light-stext" : "#A3A6AA",
    "notif-bg" : "#FB525A",
    "light-hover" : "#E2EEF6"
   }
    },
  },
  plugins: [],
}
