import React from "react";

function DropMenu({ children, type }) {
  const xAdjustment = (type === "FILTER" && "top-10 -right-3") || (type === "CART" && "top-13 -left-2");
  const widthAdjustment = type === "CART" ? "w-72 sm:w-80" : "w-max";

  return (
    <div dir="rtl" className={`absolute ${xAdjustment} ${widthAdjustment} p-2 rounded-lg shadow-lg bg-white z-10`}>
      {children}
    </div>
  );
}

export default DropMenu;
