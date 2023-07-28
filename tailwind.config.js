module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'tlw-primary': '#2980b9',
        'tlw-dark': '#282c34',
        'tlw-light': '#ecf0f1',
      },
      fontSize: {
        base: 'calc(10px + 2vmin)',
      },
    },
  },
  plugins: [],
};
