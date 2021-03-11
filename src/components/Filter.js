import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import DropDown from "./DropDown";
import DropDownTextItem from "./DropDownTextItem";

import filterIco from "../assets/images/svg/filter.svg";

function Filter() {
  const [showFilters, setShowFilters] = useState(false);

  const handleShowFilters = () => {
    setShowFilters((pre) => !pre);
  };

  return (
    <div className="relative">
      <div onClick={handleShowFilters} className={`flex flex-row-reverse items-center mr-2 p-2 rounded-lg bg-transparent sm:hover:bg-cupcake-light ${showFilters && "bg-cupcake-light"} cursor-pointer transition duration-300 ease-in-out`}>
        <ReactSVG src={filterIco} />
        <span className="mr-2 ml-1">فیلتر</span>
      </div>
      {showFilters && (
        <DropDown type="FILTER">
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

export default Filter;
