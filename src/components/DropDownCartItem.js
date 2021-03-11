import React from "react";
import { ReactSVG } from "react-svg";

import useSetCartData from "../hooks/useSetCartData";

import closeIco from "../assets/images/svg/close.svg";

function DropDownCartItem({ name, price, numberAdded, picture, id }) {
  const setCartData = useSetCartData();

  const handleDeleteItem = () => {
    setCartData(id, "DELETE");
  };

  return (
    <li className="h-24 mb-1 text-right w-full whitespace-no-wrap rounded-lg text-base text-gray-600 hover:text-gray-800 hover:bg-cupcake-light">
      <div className="flex items-center px-2 h-full">
        <figure className="h-20 w-20">
          <img className="object-cover h-20 w-full rounded-lg" src={picture} alt={name} />
        </figure>
        <div className="w-cartItemText flex flex-col pr-2">
          <span className="whitespace-nowrap overflow-hidden">{name}</span>
          <span className="text-gray-400">{price} ريال</span>
          <span className="text-gray-400">{`${numberAdded} عدد`}</span>
        </div>
        <div className="w-8 h-8 p-2 bg-transparent hover:bg-gray-200 rounded-lg" onClick={handleDeleteItem}>
          <ReactSVG src={closeIco} className="w-4 h-4" />
        </div>
      </div>
    </li>
  );
}

export default DropDownCartItem;

{
  /* <li className="h-24 mb-1 text-right w-full whitespace-no-wrap rounded-lg text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-cupcake-light">
<div className="flex items-center px-2 h-full">
  <figure className="h-20 w-20 ml-3">
    <img className="object-cover h-20 w-full rounded-lg" src={picture} alt={name} />
  </figure>
  <div className="flex flex-col ml-3">
    <span>{name}</span>
    <span className="text-gray-400">{price} ريال</span>
    <span className="text-gray-400">{`${numberAdded} عدد`}</span>
  </div>
  <div className="p-2 mr-auto bg-transparent hover:bg-gray-200 rounded-lg" onClick={handleDeleteItem}>
    <ReactSVG src={closeIco} className="w-4 h-4" />
  </div>
</div>
</li>
);
} */
}
