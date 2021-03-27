import { useState, useEffect, useMemo } from "react";

function useCartState() {
  function initialize() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }

  const [cartData, setCartData] = useState(initialize());

  const channel = useMemo(() => new BroadcastChannel("cart_data"), []);

  useEffect(() => {
    channel.onmessage = (message) => setCartData(message.data);
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData, channel]);

  return [cartData, setCartData];
}

export default useCartState;
