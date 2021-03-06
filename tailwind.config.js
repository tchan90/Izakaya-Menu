module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.jsx', './modals/**/*.jsx'], //remove unused files in production
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [],
};
