import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";

function useCartData() {
  const cartData = useContext(CartContext);
  return cartData;
}

export default useCartData;
