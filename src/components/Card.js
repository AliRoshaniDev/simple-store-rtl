import React, { useState } from "react";
import { ReactSVG } from "react-svg";

import addIco from "../assets/images/svg/add.svg";
import tickIco from "../assets/images/svg/tick.svg";

function Card() {
  const [isAdd, setIsAdd] = useState(false);

  const handleAddCart = () => {
    setIsAdd((pre) => !pre);
  };

  return (
    <article className="rounded-box shadow-lg w-10/12 md:w-full h-72">
      <header className="w-full h-3/4">
        <figure className="h-full">
          <img className="object-cover h-full w-full rounded-t-box" src="https://images.unsplash.com/photo-1444881421460-d838c3b98f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" alt="test" />
        </figure>
      </header>
      <footer className="w-full px-3 pt-2 flex flex-col relative h-1/4">
        <div onClick={handleAddCart} className={`absolute -top-5 left-6 w-10 h-10 rounded-full ${isAdd ? "bg-cupcake-pink" : "bg-cupcake-light"} flex items-center justify-center cursor-pointer`}>
          <div className="w-5 h-5">
            <ReactSVG src={isAdd ? tickIco : addIco} />
          </div>
        </div>
        <h3 className="text-gray-700 mb-2">ساعت مشتی</h3>
        <span className="text-gray-400" dir="rtl">
          100 ريال
        </span>
      </footer>
    </article>
  );
}

export default Card;
