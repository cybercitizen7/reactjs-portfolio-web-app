module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      lg:
        '0 3px 10px 0px rgba(255, 255, 255, 0.1), 0 3px 10px -2px rgba(255, 255, 255, 0.05)',
      'lg-card': '2px 4px 6px -2px rgba(0, 0, 0, 0.1)',
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#1a237e',
      secondary: '#ffed4a',
      danger: '#e3342f',
    }),
    height: {
      'h-10': 'height: 10%',
    },
    extend: {
      gridTemplateColumns: {
        3: 'repeat(3, minmax(200px, 1fr))',
      },
      gridTemplateRows: {
        test: 'repeat(1, minmax(0, 1fr))',
      },
      gridAutoRows: {
        '2fr': 'minmax(0, 2fr)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
