import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";

export default function useCartData() {
  const cartData = useContext(CartContext);
  return cartData;
}
