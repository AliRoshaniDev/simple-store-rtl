import { useContext } from "react";
import { SetCartContext } from "../providers/CartProvider";

function useSetCartData() {
  const setCartData = useContext(SetCartContext);
  function setCart(inputValue, actionType = "ADD") {
    if (inputValue === "ALL" && actionType === "DELETE") setCartData([]);

    if (actionType === "DELETE") setCartData((preCart) => preCart.filter((item) => item.id !== inputValue));

    if (actionType === "ADD")
      setCartData((preCart) => {
        let inputWasBefore = false;
        for (const addedProduct of preCart) {
          if (addedProduct.id === inputValue.id) {
            addedProduct.numberAdded += 1;
            addedProduct.price += inputValue.price;
            inputWasBefore = true;
          }
        }

        return inputWasBefore ? [...preCart] : [...preCart, inputValue];
      });
  }
  return setCart;
}

export default useSetCartData;
