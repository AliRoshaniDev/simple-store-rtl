import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import DropMenu from "./DropMenu";
import CustomizeItem from "./CustomizeItem";
import useSetProducts from "../hooks/useSetProducts";
import Badge from "./Badge";

import sortIco from "../assets/images/svg/sort.svg";

function Sort() {
  const [sortIsHover, setSortIsHover] = useState(false);
  const [sortIsActive, setSortIsActive] = useState({ price: false, number: false });

  const setProducts = useSetProducts();

  const handlePriceSort = () => {
    if (!sortIsActive.number) {
      setProducts("priceSort", !sortIsActive.price);
      setSortIsActive((pre) => ({ ...pre, price: !pre.price }));
    }
  };

  const handleNumberSort = () => {
    if (!sortIsActive.price) {
      setProducts("numberSort", !sortIsActive.number);
      setSortIsActive((pre) => ({ ...pre, number: !pre.number }));
    }
  };

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
      <div className={`flex flex-row-reverse items-center ml-2 p-2 rounded-lg bg-transparent sm:hover:bg-mycolor-light ${sortIsHover && "bg-mycolor-light"} cursor-pointer transition duration-300 ease-in-out`}>
        {(sortIsActive.number || sortIsActive.price) && <Badge size="SMALL" />}
        <ReactSVG src={sortIco} className="w-4" />
        <span className="mr-2 ml-1">مرتب سازی</span>
      </div>
      {sortIsHover && (
        <DropMenu type="FILTER">
          <CustomizeItem text="بر اساس قیمت" onClick={handlePriceSort} active={sortIsActive.price} />
          <CustomizeItem text="بر اساس موجودی" onClick={handleNumberSort} active={sortIsActive.number} />
        </DropMenu>
      )}
    </div>
  );
}

export default Sort;
