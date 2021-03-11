import React from "react";
import { ReactSVG } from "react-svg";

import useSetCartData from "../hooks/useSetCartData";

import addIco from "../assets/images/svg/add.svg";

function Card({ name, price, number, picture, id }) {
  const setCartData = useSetCartData();

  const handleAddCart = () => {
    setCartData({ name, price, numberAdded: 1, picture, id });
  };

  return (
    <article className="rounded-xl shadow-lg w-10/12 md:w-full h-72">
      <header className="w-full h-3/4">
        <figure className="h-full">
          <img className="object-cover h-full w-full rounded-t-xl" src={picture} alt={name} />
        </figure>
      </header>
      <footer className="w-full px-3 pt-2 flex flex-col relative h-1/4">
        <div onClick={handleAddCart} className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-cupcake-light flex items-center justify-center cursor-pointer">
          <div className="w-5 h-5">
            <ReactSVG src={addIco} />
          </div>
        </div>
        <h3 className="text-gray-700 mb-2">{name}</h3>
        <div className="flex justify-between">
          <span className="text-gray-400" dir="rtl">
            {price} ريال
          </span>
          <span className="text-gray-400">{number} عدد مانده</span>
        </div>
      </footer>
    </article>
  );
}

export default Card;
