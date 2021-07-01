import { useState, useEffect, useMemo, SetStateAction, Dispatch } from "react";
import { CartDataType } from "../types/index";

export default function useCartState(): [CartDataType, Dispatch<SetStateAction<CartDataType>>] {
  function initialize() {
    return JSON.parse(localStorage.getItem("cart")!) || [];
  }

  const [cartState, setCartState] = useState<CartDataType>(initialize());

  const channel = useMemo(() => new BroadcastChannel("cart_data"), []);

  useEffect(() => {
    channel.onmessage = (message) => setCartState(message.data);
    localStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState, channel]);

  return [cartState, setCartState];
}
