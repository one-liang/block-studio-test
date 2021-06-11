module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: false,
  theme: {
    extend: {
      borderWidth: {
        '16': '16px',
      }
    },
    fontFamily: {
      'sans': ['Ubuntu', 'sans-serif']
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  variants: {},
  plugins: [],
}
