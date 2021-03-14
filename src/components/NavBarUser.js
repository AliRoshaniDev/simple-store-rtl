import React from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

import personIco from "../assets/images/svg/person.svg";

function NavBarUser() {
  return (
    <Link to="/login" className="justify-self-end h-full cursor-pointer py-2 xl:py-3">
      <div href="https://google.com" className="flex items-center h-full bg-transparent hover:bg-mycolor-light rounded-lg transition duration-300 ease-in-out px-3">
        <span className="mr-2 hidden lg:inline">ورود</span>
        <ReactSVG src={personIco} />
      </div>
    </Link>
  );
}

export default NavBarUser;
