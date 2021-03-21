module.exports = {
  purge: [
    "./src/components/Badge.js",
    "./src/components/Card.js",
    "./src/components/CartContainer.js",
    "./src/components/CartItem.js",
    "./src/components/CartTotalItem.js",
    "./src/components/CustomizeItem.js",
    "./src/components/DropMenu.js",
    "./src/components/EmptyCart.js",
    "./src/components/Filter.js",
    "./src/components/FullCart.js",
    "./src/components/LoadedCart.js",
    "./src/components/LoadingCard.js",
    "./src/components/NavBar.js",
    "./src/components/NavBarCart.js",
    "./src/components/NavBarLogo.js",
    "./src/components/NavBarUser.js",
    "./src/components/Pagination.js",
    "./src/components/PaginationItem.js",
    "./src/components/Products.js",
    "./src/components/ProductsContainer.js",
    "./src/components/ProductsHeader.js",
    "./src/components/ProductsMain.js",
    "./src/components/Search.js",
    "./src/components/SlideShow.js",
    "./src/components/Sort.js",
  ],
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
