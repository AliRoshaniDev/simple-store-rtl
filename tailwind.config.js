module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:  {
        "cupcake-light": "#FFF5C1",
        "cupcake-brown": "#C27628",
        "cupcake-pink": "#FCB6D8",


        "mycolor-light": "#edffea",
        "mycolor-lesslight": "#ece242",
        "mycolor-dark": "#216353",
      },
      height: {
        "88": "22rem",
        "92": "23rem"
      },
      width: {
        "cartItemText": "calc(100% - 7rem)",
      },
      fontFamily: {
        "vazir-latin": "Vazir",
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))'
      },
      maxHeight: {
        '112': '28rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
