import React from "react";
import { ReactSVG } from "react-svg";

import basketIco from "../assets/images/svg/basket.svg";
import cartIco from "../assets/images/svg/cart.svg";
import personIco from "../assets/images/svg/person.svg";

function NavBar() {
  return (
    <nav className="w-full mb-6">
      <div className="container mx-auto shadow-lg bg-white grid grid-cols-3 rounded-box h-16 px-2 xl:px-3">
        <div className="justify-self-start h-full cursor-pointer py-2 xl:py-3">
          <div className="flex items-center h-full bg-transparent hover:bg-cupcake-light rounded-lg transition duration-300 ease-in-out px-3">
            <span className="mr-2 hidden lg:inline">سبد خرید</span>
            <ReactSVG src={cartIco} />
          </div>
        </div>
        <div className="justify-self-center h-full rounded-lg cursor-pointer">
          <a href="https://google.com" className="flex items-center h-full">
            <span className="md:mr-2">فروشگاه ساده</span>
            <ReactSVG src={basketIco} className="hidden md:inline" />
          </a>
        </div>
        <div className="justify-self-end h-full cursor-pointer py-2 xl:py-3">
          <a href="https://google.com" className="flex items-center h-full bg-transparent hover:bg-cupcake-light rounded-lg transition duration-300 ease-in-out px-3">
            <span className="mr-2 hidden lg:inline">ورود</span>
            <ReactSVG src={personIco} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
