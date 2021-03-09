import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import FilterItems from "./FilterItems";

import filterIco from "../assets/images/svg/filter.svg";

function Filter() {
  const [iconClick, setIconClick] = useState(false);

  const handleShowItems = () => {
    setIconClick((pre) => !pre);
  };

  return (
    <div className="relative">
      <div onClick={handleShowItems} className={`flex p-2 rounded-lg bg-transparent hover:bg-cupcake-light ${iconClick && "bg-cupcake-light"} cursor-pointer transition duration-300 ease-in-out`}>
        <ReactSVG src={filterIco} />
        <spna className="ml-2">فیلتر</spna>
      </div>
      {iconClick && <FilterItems />}
    </div>
  );
}

export default Filter;
