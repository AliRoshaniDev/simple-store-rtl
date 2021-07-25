import { ReactSVG } from "react-svg";
import { LegacyRef } from "react";

import Badge from "./Badge";
import useCartData from "../hooks/useCartData";
import useFocusElement from "../hooks/useFocusElement";
import DropMenu from "./DropMenu";
import MenuEmptyCart from "./MenuEmptyCart";
import MenuFillCart from "./MenuFillCart";

export default function NavBarCart() {
  const [parentElement, childElement, cartIsFocus] = useFocusElement();
  const cartData = useCartData();

  return (
    <div ref={parentElement as LegacyRef<HTMLDivElement>} className="justify-self-start h-full cursor-pointer py-2 xl:py-3 relative">
      <div className={`flex items-center relative h-full bg-transparent hover:bg-mycolor-light border-2 border-gray-300 hover:border-mycolor-dark ${cartIsFocus && "bg-mycolor-light border-2 border-mycolor-dark"} rounded-lg transition duration-100 ease-in-out px-3`}>
        {cartData && <Badge number={cartData.length} size="big" />}
        <span className="mr-2 hidden lg:inline">سبد خرید</span>
        <ReactSVG src="/images/icons/cart.svg" />
      </div>
      <div ref={childElement as LegacyRef<HTMLDivElement>}>
        <DropMenu hidden={!cartIsFocus} xAdjustment="top-13 -left-2" widthAdjustment="w-72 sm:w-80">
          {cartData ? <MenuFillCart /> : <MenuEmptyCart />}
        </DropMenu>
      </div>
    </div>
  );
}
