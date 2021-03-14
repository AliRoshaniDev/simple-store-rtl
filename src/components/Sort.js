import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import DropMenu from "./DropMenu";
import CustomizeItem from "./CustomizeItem";
import useSetProducts from "../hooks/useSetProducts";

import sortIco from "../assets/images/svg/sort.svg";

function Sort() {
  const [sortIsHover, setSortIsHover] = useState(false);

  const setProducts = useSetProducts();

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setSortIsHover(true);
      }}
      onMouseLeave={() => {
        setSortIsHover(false);
      }}
    >
      <div className={`flex flex-row-reverse items-center p-2 rounded-lg bg-transparent sm:hover:bg-mycolor-light ${sortIsHover && "bg-mycolor-light"} cursor-pointer transition duration-300 ease-in-out`}>
        <ReactSVG src={sortIco} className="w-4" />
        <span className="mr-2 ml-1">مرتب سازی</span>
      </div>
      {sortIsHover && (
        <DropMenu type="FILTER">
          <CustomizeItem text="بر اساس قیمت" onClick={() => setProducts("priceSort", true)} />
          <CustomizeItem text="بر اساس موجودی" onClick={() => setProducts("numberSort", true)} />
        </DropMenu>
      )}
    </div>
  );
}

export default Sort;
