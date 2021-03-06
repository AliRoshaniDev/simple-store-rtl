import React from "react";
import useSetCartData from "../hooks/useSetCartData";
import useCartTotal from "../hooks/useCartTotal";
import Btn from "./Btn";

function MenuFillCartTotal() {
  const { deleteAll } = useSetCartData();
  const { totalNumber, totalPrice } = useCartTotal();

  // const handleAddCart = (event: React.MouseEvent<HTMLElement>) => {
  //   event.stopPropagation();
  //   deleteAll();
  // };

  return (
    <div className="h-auto text-right w-full whitespace-no-wrap rounded-lg text-sm md:text-base text-gray-600 hover:text-gray-800">
      <div className="flex flex-col px-2 py-2 h-full border-t-2 border-b-2 border-gray-100">
        <div className="flex justify-between mb-1">
          <span className="font-semibold">جمع قیمت:</span>
          <span className="text-gray-600">{totalPrice} ریال</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">جمع تعداد:</span>
          <span className="text-gray-600">{totalNumber} عدد</span>
        </div>
      </div>
      <div className="pt-2">
        <Btn onClick={() => deleteAll()} text="نهایی کردن خرید" type="secondary" width="w-full" />
      </div>
    </div>
  );
}

export default MenuFillCartTotal;
