require('dotenv').config();
const enablePurge = process.env.ENABLE_PURGE || false;
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: enablePurge === true || enablePurge === 'true',
    content: [
      './src/**/*.html',
      './src/**/*.ts',
      './src/**/*.scss'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
