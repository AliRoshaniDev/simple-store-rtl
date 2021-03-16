import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import DropMenu from "./DropMenu";
import CustomizeItem from "./CustomizeItem";
import useSetProducts from "../hooks/useSetProducts";
import Badge from "./Badge";

import filterIco from "../assets/images/svg/filter.svg";

function Filter() {
  const [filterIsHover, setFilterIsHover] = useState(false);
  const [filterIsActive, setFilterIsActive] = useState(false);

  const setProducts = useSetProducts();

  const handleShowInstock = () => {
    setProducts("inStockFilter", !filterIsActive);
    setFilterIsActive((pre) => !pre);
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
      <div className={`flex flex-row-reverse items-center p-2 rounded-lg bg-transparent sm:hover:bg-mycolor-light ${filterIsHover && "bg-mycolor-light"} cursor-pointer transition duration-300 ease-in-out`}>
        {filterIsActive && <Badge size="SMALL" />}

        <ReactSVG src={filterIco} />
        <span className="mr-2 ml-1">فیلتر</span>
      </div>
      {filterIsHover && (
        <DropMenu type="FILTER">
          <CustomizeItem text="کالا های موجود" onClick={handleShowInstock} active={filterIsActive} />
        </DropMenu>
      )}
    </div>
  );
}

export default Filter;
