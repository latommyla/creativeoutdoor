module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'retro': "url('/src/components/backgroundimg/retro-wave.png')",
    },
    fontFamily: {
      'roboto': ['"Roboto"', 'sans-serif'],
      'bebas': ['"Bebas Neue"', 'cursive'],
      'raleway': ['"Raleway"', 'sans-serif'],
    }
  },
  plugins: [],
}