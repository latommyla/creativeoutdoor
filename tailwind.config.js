module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'retro': "url('/src/components/backgroundimg/retro-wave.png')",
      'mobile': "url('/Users/ecom/creativeoutdoor/src/components/backgroundimg/mobile-bg.png')",
    },
    fontFamily: {
      'silkscreen': ['"Silkscreen"', 'cursive'],
    }
  },
  plugins: [],
}