module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:  {
        "cupcake-light": "#FFF5C1",
        "cupcake-brown": "#C27628",
        "cupcake-pink": "#FCB6D8",


        "mycolor-light": "#FFF548",
        "mycolor-lesslight": "#ece242",
        "mycolor-dark": "#3C1A5B",
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
