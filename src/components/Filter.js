import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import DropMenu from "./DropMenu";
import CustomizeItem from "./CustomizeItem";
import useSetProducts from "../hooks/useSetProducts";

import filterIco from "../assets/images/svg/filter.svg";

function Filter() {
  const [filterIsHover, setFilterIsHover] = useState(false);
  const setProducts = useSetProducts();

  const handleShowInstock = () => {
    setProducts("inStockFilter", true);
  };

  return (
    <div
      onMouseEnter={() => {
        setFilterIsHover(true);
      }}
      onMouseLeave={() => {
        setFilterIsHover(false);
      }}
      className="relative"
    >
      <div className={`flex flex-row-reverse items-center mr-2 p-2 rounded-lg bg-transparent sm:hover:bg-mycolor-light ${filterIsHover && "bg-mycolor-light"} cursor-pointer transition duration-300 ease-in-out`}>
        <ReactSVG src={filterIco} />
        <span className="mr-2 ml-1">فیلتر</span>
      </div>
      {filterIsHover && (
        <DropMenu type="FILTER">
          <CustomizeItem text="کالا های موجود" onClick={handleShowInstock} />
        </DropMenu>
      )}
    </div>
  );
}

export default Filter;
