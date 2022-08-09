/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.ts',
  ],
  theme: {
    screens: {
      '2xs': '415px',
      'xs': '769px',
      's': '851px',
      'md': '1025px',
      'lg': '1281px',
      'xlg': '1441px',
      '2xlg': '1824px',
    },
    
    extend: {
      colors: {
        canaty: '#FFF500',
        black: '#000000',
        white: '#ffffff',
        red: '#ff0000',
        porcelain: '#F2F2F2',
        border: '#EDEDED',
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
      height: {
        'inherit': 'inherit',
      },
    },
  },
  plugins: [],
}
