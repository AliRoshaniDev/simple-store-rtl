import { useContext, useMemo } from "react";
import { SetCartContext } from "../providers/CartProvider";
import { CartDataType, ProductType } from "../types/index";

function useSetCartData() {
  const setCartData = useContext(SetCartContext);
  const channel = useMemo(() => new BroadcastChannel("cart_data"), []);

  let cartData: CartDataType | [];

  function deleteAll() {
    setCartData!(() => {
      cartData = [];
      channel.postMessage(cartData);
      return cartData;
    });
  }

  function deleteOne(inputValue: number) {
    // this inputValue is "id" of item(product) Which we want to delete
    setCartData!((preCart) => {
      cartData = preCart.filter((item) => item.id !== inputValue);
      channel.postMessage(cartData);
      return cartData;
    });
  }

  function addOne(inputValue: ProductType) {
    // this inputValue is a objcet of item(product) Which we want to add
    setCartData!((preCart) => {
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

  return { deleteAll, deleteOne, addOne };
}

export default useSetCartData;
