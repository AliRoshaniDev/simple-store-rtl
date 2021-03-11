import React from "react";
import useCartData from "../hooks/useCartData";
import useSetCartData from "../hooks/useSetCartData";

function DropDownCartTotal() {
  const cartData = useCartData();

  const setCartData = useSetCartData();

  const handleAddCart = (event) => {
    event.stopPropagation();
    setCartData("ALL", "DELETE");
  };

  function calcualteTotal(requestedData) {
    let total = 0;
    for (let i = 0; i < cartData.length; i++) {
      // const element = array[i];
      if (requestedData === "NUMBER") total += cartData[i].numberAdded;
      if (requestedData === "PRICE") total += cartData[i].price;
    }
    return total;
  }

  return (
    <li className="h-auto text-right w-full whitespace-no-wrap rounded-lg text-sm md:text-base text-gray-600 hover:text-gray-800">
      <div className="flex flex-col px-2 py-2 h-full border-t-2 border-b-2 border-gray-100">
        <div className="flex justify-between mb-1">
          <span className="font-semibold">جمع قیمت:</span>
          <span className="text-gray-600">{calcualteTotal("PRICE")} ریال</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">جمع تعداد:</span>
          <span className="text-gray-600">{calcualteTotal("NUMBER")} عدد</span>
        </div>
      </div>
      <div className="pt-2">
        <button onClick={handleAddCart} className="w-full h-10 bg-cupcake-light hover:bg-cupcake-pink rounded-lg text-black">
          نهایی کردن خرید
        </button>
      </div>
    </li>
  );
}

export default DropDownCartTotal;
