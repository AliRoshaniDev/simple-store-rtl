import React from "react";
import { ReactSVG } from "react-svg";

import Cart from "./Cart";

import basketIco from "../assets/images/svg/basket.svg";
import personIco from "../assets/images/svg/person.svg";

function NavBar() {
  return (
    <nav className="w-full mb-6">
      <div className="container mx-auto shadow-lg bg-white grid grid-cols-3 rounded-xl h-16 px-2 xl:px-3">
        <Cart />

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
