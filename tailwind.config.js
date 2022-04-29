module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'wagon': "url('src/components/imgs/sportwagon.png')",
    },
    fontFamily: {
      'roboto': ['"Roboto"', 'sans-serif'],
      'bebas': ['"Bebas Neue"', 'cursive'],
      'raleway': ['"Raleway"', 'sans-serif'],
    }
  },
  plugins: [],
}