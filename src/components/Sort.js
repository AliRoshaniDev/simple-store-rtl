import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import DropDown from "./DropDown";
import DropDownTextItem from "./DropDownTextItem";

import sortIco from "../assets/images/svg/sort.svg";

function Sort() {
  const [showSorts, setShowSorts] = useState(false);

  const handleShowSorts = () => {
    setShowSorts((pre) => !pre);
  };

  return (
    <div className="relative">
      <div onClick={handleShowSorts} className={`flex flex-row-reverse items-center p-2 rounded-lg bg-transparent sm:hover:bg-cupcake-light ${showSorts && "bg-cupcake-light"} cursor-pointer transition duration-300 ease-in-out`}>
        <ReactSVG src={sortIco} className="w-4" />
        <span className="mr-2 ml-1">مرتب سازی</span>
      </div>
      {showSorts && (
        <DropDown type="FILTER">
          <DropDownTextItem
            text="بر اساس قیمت"
            onClick={() => {
              console.log("Clicked");
            }}
          />
          <DropDownTextItem
            text="بر اساس موجودی"
            onClick={() => {
              console.log("Clicked");
            }}
          />
        </DropDown>
      )}
    </div>
  );
}

export default Sort;
