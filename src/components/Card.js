import React, { useState, useEffect } from "react";
// import { ReactSVG } from "react-svg";
import Lottie from "react-lottie";
import animationData from "../assets/lottie/add.json";

import useSetCartData from "../hooks/useSetCartData";

// import addIco from "../assets/images/svg/add.svg";

function Card({ name, price, number, picture, id }) {
  const [displayNumber, setDisplayNumber] = useState(number);
  const [playAnimation, setPlayAnimation] = useState(true);
  const setCartData = useSetCartData();

  const handleAddCart = () => {
    if (displayNumber > 0) {
      setCartData({ name, price, numberAdded: 1, picture, id });
      setDisplayNumber((pre) => pre - 1);
      setPlayAnimation(false);
      setTimeout(() => {
        setPlayAnimation(true);
      }, 700);
    }
  };

  useEffect(() => {
    setDisplayNumber(number);
  }, [number]);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <article className="rounded-xl shadow-lg w-10/12 md:w-full h-72">
      <header className="w-full h-3/4">
        <figure className="h-full">
          <img className="object-cover h-full w-full rounded-t-xl" src={picture} alt={name} />
        </figure>
      </header>
      <footer className="w-full px-3 pt-2 flex flex-col relative h-1/4">
        <div onClick={handleAddCart} className="absolute -top-9 left-2 w-15 h-15 rounded-full flex items-center justify-center cursor-pointer">
          {/* <ReactSVG src={addIco} /> */}
          <Lottie options={defaultOptions} height={70} width={70} isStopped={playAnimation} />
        </div>
        <h3 className="text-gray-700 mb-2">{name}</h3>
        <div className="flex justify-between">
          <span className="text-gray-400" dir="rtl">
            {price} ريال
          </span>
          <span className="text-gray-400">{displayNumber} عدد مانده</span>
        </div>
      </footer>
    </article>
  );
}

export default Card;
