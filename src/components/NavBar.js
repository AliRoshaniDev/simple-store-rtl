import React from "react";

import NavBarCart from "./NavBarCart";
import NavBarUser from "./NavBarUser";
import NavBarLogo from "./NavBarLogo";

function NavBar() {
  return (
    <nav className="w-full mb-6">
      <div className="container mx-auto shadow-lg bg-white grid grid-cols-3 rounded-xl h-16 px-2 xl:px-3">
        <NavBarCart />
        <NavBarLogo />
        <NavBarUser />
      </div>
    </nav>
  );
}

export default NavBar;
