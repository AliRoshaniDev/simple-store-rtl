import React from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

import basketIco from "../assets/images/svg/basket.svg";

function NavBarLogo() {
  return (
    <Link to="/" className="justify-self-center h-full rounded-lg cursor-pointer">
      <div href="https://google.com" className="flex items-center h-full">
        <span className="md:mr-2">فروشگاه ساده</span>
        <ReactSVG src={basketIco} className="hidden md:inline" />
      </div>
    </Link>
  );
}

export default NavBarLogo;
