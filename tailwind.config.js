module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:  {
        "cupcake-light": "#FFF5C1",
        "cupcake-brown": "#C27628",
        "cupcake-pink": "#FCB6D8",
      },
      height: {
        "88": "22rem"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
