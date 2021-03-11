import React from "react";
// import { ReactSVG } from "react-svg";

// import triangleIco from "../assets/images/svg/triangle.svg";

function DropDown({ children, type }) {
  const xAdjustment = (type === "FILTER" && "top-10 -right-3") || (type === "CART" && "top-16 left-0");
  const widthAdjustment = type === "CART" ? "w-72 sm:w-80" : "w-max";

  return (
    <ul dir="rtl" className={`absolute ${xAdjustment} ${widthAdjustment} p-2 rounded-lg shadow-lg bg-white z-10 group-hover:block`}>
      {children}
    </ul>
  );
}

export default DropDown;
