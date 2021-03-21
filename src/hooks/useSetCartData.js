import { useContext, useMemo } from "react";
import { SetCartContext } from "../providers/CartProvider";

function useSetCartData() {
  const setCartData = useContext(SetCartContext);
  const channel = useMemo(() => new BroadcastChannel("cart_data"), []);

  function setCart(inputValue, actionType = "ADD") {
    let cartData;

    if (actionType === "DELETE") {
      if (inputValue === "ALL")
        setCartData(() => {
          cartData = [];
          channel.postMessage(cartData);
          return cartData;
        });

      setCartData((preCart) => {
        cartData = preCart.filter((item) => item.id !== inputValue);
        channel.postMessage(cartData);
        return cartData;
      });
    }

    if (actionType === "ADD") {
      setCartData((preCart) => {
        let itemWasBefore = false;
        for (const addedProduct of preCart) {
          if (addedProduct.id === inputValue.id) {
            addedProduct.numberAdded += 1;
            addedProduct.price += inputValue.price;
            itemWasBefore = true;
          }
        }
        cartData = itemWasBefore ? [...preCart] : [...preCart, inputValue];
        channel.postMessage(cartData);
        return cartData;
      });
    }
  }
  return setCart;
}

export default useSetCartData;
