import React, { MouseEventHandler } from "react";
import useSetCartData from "../hooks/useSetCartData";
import useCartTotal from "../hooks/useCartTotal";

function CartTotalItem() {
  const { deleteAll } = useSetCartData();
  const calcualteTotal = useCartTotal();

  const handleAddCart = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    deleteAll();
  };

  return (
    <div className="h-auto text-right w-full whitespace-no-wrap rounded-lg text-sm md:text-base text-gray-600 hover:text-gray-800">
      <div className="flex flex-col px-2 py-2 h-full border-t-2 border-b-2 border-gray-100">
        <div className="flex justify-between mb-1">
          <span className="font-semibold">جمع قیمت:</span>
          <span className="text-gray-600">{calcualteTotal("price")} ریال</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">جمع تعداد:</span>
          <span className="text-gray-600">{calcualteTotal("number")} عدد</span>
        </div>
      </div>
      <div className="pt-2">
        <button onClick={handleAddCart} className="w-full h-10 text-mycolor-dark bg-mycolor-light hover:text-mycolor-light hover:bg-mycolor-dark rounded-lg transition duration-200 ease-in-out">
          نهایی کردن خرید
        </button>
      </div>
    </div>
  );
}

export default CartTotalItem;
