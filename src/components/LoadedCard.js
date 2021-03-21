import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";

import useSetCartData from "../hooks/useSetCartData";

import addIco from "../assets/images/svg/add.svg";
import soldOutIco from "../assets/images/png/soldout.png";

function LoadedCard({ name, price, number, picture, id }) {
  const [playAnimation, setPlayAnimation] = useState(false);
  const setCartData = useSetCartData();

  const handleAddCart = () => {
    if (number > 0) {
      setCartData({ name, price, numberAdded: 1, picture, id });
      setPlayAnimation(true);
      setTimeout(() => {
        setPlayAnimation(false);
      }, 400);
    }
  };

  useEffect(() => {}, [number]);

  return (
    <article className="rounded-xl shadow-lg w-10/12 md:w-full h-72 select-none">
      <header className="w-full h-3/4">
        <figure className="h-full">
          <img className="object-cover h-full w-full rounded-t-xl" src={picture} alt={name} />
        </figure>
      </header>
      <footer className="w-full px-3 pt-2 flex flex-col relative h-1/4">
        <div onClick={handleAddCart} className="absolute -top-5 left-5 w-15 h-15 rounded-full flex items-center justify-center cursor-pointer">
          <span className="flex h-9 w-9">
            <span className={`${playAnimation ? "animate-ping" : "animate-none"} absolute inline-flex h-full w-full rounded-full bg-mycolor-dark opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-9 w-9 ${number === 0 ? "bg-red-500" : "bg-mycolor-dark"} items-center justify-center`}>
              <div className="w-5 h-5 flex items-center justify-center">{number === 0 ? <img src={soldOutIco} alt="Sold out" /> : <ReactSVG src={addIco} className="w-full h-full fill-current text-mycolor-light" />}</div>
            </span>
          </span>
        </div>
        <h3 className="text-gray-700 mb-2  font-vazir-latin select-none">{name}</h3>
        <div className="flex justify-between">
          <span className="text-gray-400 select-none" dir="rtl">
            {price} ريال
          </span>
          {number === 0 && <span className="text-red-500 select-none">تمام شد !</span>}
        </div>
      </footer>
    </article>
  );
}

export default LoadedCard;
