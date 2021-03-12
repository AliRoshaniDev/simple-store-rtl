import React, { useState } from "react";
import { ReactSVG } from "react-svg";

import DropDown from "./DropDown";
import DropDownCartItem from "./DropDownCartItem";
import DropDownCartTotal from "./DropDownCartTotal";
import CartBadge from "./CartBadge";

import useCartData from "../hooks/useCartData";
import useTotal from "../hooks/useTotal";

import cartIco from "../assets/images/svg/cart.svg";

function Cart() {
  const [showCart, setShowCart] = useState(false);

  const cartData = useCartData();
  const calcualteTotal = useTotal();

  const handleShowFilters = () => {
    setShowCart((pre) => !pre);
  };

  return (
    <div className="justify-self-start h-full cursor-pointer py-2 xl:py-3 relative">
      <div onClick={handleShowFilters} className={`flex items-center relative h-full bg-transparent hover:bg-cupcake-light ${showCart && "bg-cupcake-light"} rounded-lg transition duration-300 ease-in-out px-3`}>
        {cartData.length > 0 && <CartBadge number={calcualteTotal("NUMBER")} />}
        <span className="mr-2 hidden lg:inline">سبد خرید</span>
        <ReactSVG src={cartIco} />
      </div>
      {showCart && cartData.length > 0 && (
        <DropDown type="CART">
          {cartData.map((item) => (
            <DropDownCartItem {...item} key={item.id} />
          ))}
          {showCart && cartData.length > 0 && <DropDownCartTotal />}
        </DropDown>
      )}
    </div>
  );
}

export default Cart;
