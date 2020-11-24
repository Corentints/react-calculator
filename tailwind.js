module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    animation: false,
  },
  purge: {
    enabled: true,
    content: ['./src/**/*.js'],
  },
};
