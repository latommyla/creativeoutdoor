module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'retro': "url('/src/components/backgroundimg/retro-wave.png')",
      'mobile': "url('/src/components/backgroundimg/mobile-bg.jpg')",
    },
    fontFamily: {
      'silkscreen': ['"Silkscreen"', 'cursive'],
    }
  },
  plugins: [],
}