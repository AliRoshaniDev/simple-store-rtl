import React from "react";

import CartItem from "./CartItem";
import CartTotalItem from "./CartTotalItem";

import useCartData from "../hooks/useCartData";
import useWindowSize from "../hooks/useWindowSize";

function FullCart() {
  const cartData = useCartData();
  const { height } = useWindowSize();
  console.log("cart compo is called ====================");
  return (
    <div>
      <div className={`${height <= 330 ? "max-h-32" : height <= 600 ? "max-h-60" : height <= 820 ? "max-h-96" : "max-h-112"} max-h-60 overflow-auto`}>
        {cartData.map((item) => (
          <CartItem {...item} key={item.id} />
        ))}
      </div>
      <CartTotalItem />
    </div>
  );
}

export default FullCart;
