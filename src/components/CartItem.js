import React from "react";
import { ReactSVG } from "react-svg";

import useSetCartData from "../hooks/useSetCartData";

import closeIco from "../assets/images/svg/close.svg";

function CartItem({ name, price, numberAdded, picture, id }) {
  const { deleteOne } = useSetCartData();

  const handleDeleteItem = () => {
    deleteOne(id);
  };

  return (
    <div className="h-24 mb-1 text-right w-full whitespace-no-wrap rounded-lg text-base text-gray-600 hover:text-gray-800 hover:bg-mycolor-light transition duration-200 ease-in-out">
      <div className="flex items-center px-2 h-full">
        <figure className="h-20 w-20">
          <img className="object-cover h-20 w-full rounded-lg" src={picture} alt={name} />
        </figure>
        <div className="w-cartItemText flex flex-col pr-2">
          <span className="whitespace-nowrap text-gray-700 overflow-hidden font-vazir-latin">{name}</span>
          <span className="text-gray-400">{price} ريال</span>
          <span className="text-gray-400">{`${numberAdded} عدد`}</span>
        </div>
        <div onClick={handleDeleteItem} className="w-8 h-8 p-2 bg-transparent hover:bg-mycolor-dark group rounded-lg transition duration-200 ease-in-out">
          <ReactSVG src={closeIco} className="w-4 h-4 fill-current group-hover:text-mycolor-light transition duration-200 ease-in-out" />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
