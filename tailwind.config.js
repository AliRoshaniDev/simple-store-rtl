module.exports = {
  purge: [
    ".pages/*.tsx",
    // '.pages/**/*.{tsx}',
    "./components/*.tsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      // Default font is vazir farsi digit
      sans: ["Vazir-FarsiDigit"],
    },
    extend: {
      colors: {
        "mycolor-light": "#edffea",
        "mycolor-dark": "#216353",
      },
      height: {
        88: "22rem",
        92: "23rem",
      },
      width: {
        cartItemText: "calc(100% - 7rem)",
        userItemText: "calc(100% - 3.5rem)",
        "1/2-less": "calc(50% - 0.25rem)",
      },
      fontFamily: {
        "vazir-latin": "Vazir",
      },
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
      },
      maxHeight: {
        112: "28rem",
      },
      minHeight: {
        48: "12rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
