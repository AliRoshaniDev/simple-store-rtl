import React, { LegacyRef } from "react";
import { ReactSVG } from "react-svg";
import DropMenu from "./DropMenu";
import ProductMenuCheck from "./ProductMenuCheck";
import Badge from "./Badge";
import useFocusElement from "../hooks/useFocusElement";
import useQueryContext from "../hooks/useQueryContext";

export default function ProductSort() {
  const [parentElement, childElement, itemIsFocus] = useFocusElement();
  const { applyOneFilter, queryObject } = useQueryContext();

  function handleClickSort(sortValue: "price:ASC" | "price:DESC") {
    if (queryObject["_start"] !== 0) applyOneFilter("_start", 0);
    applyOneFilter("_sort", sortValue);
  }

  return (
    <div className="relative h-10">
      <div ref={parentElement as LegacyRef<HTMLDivElement>} className={`flex flex-row-reverse items-center p-2 h-10 rounded-lg bg-white bg-transparent border-2 border-gray-300 ${itemIsFocus ? "border-mycolor-dark" : ""} hover:border-mycolor-dark hover:bg-mycolor-light ${itemIsFocus && "bg-mycolor-light"} cursor-pointer transition duration-200 ease-in-out`}>
        {(queryObject["_sort"] === "price:DESC" || queryObject["_sort"] === "price:ASC") && <Badge size="small" />}
        <ReactSVG src="/images/icons/sort.svg" className="w-4" />
        <span className="mr-2 ml-1">مرتب سازی</span>
      </div>
      <div ref={childElement as LegacyRef<HTMLDivElement>}>
        <DropMenu hidden={!itemIsFocus} xAdjustment="top-10 -right-3" widthAdjustment="w-max">
          <ProductMenuCheck text="از قیمت کم به زیاد" checked={queryObject["_sort"] === "price:ASC"} onChange={() => handleClickSort("price:ASC")} />
          <ProductMenuCheck text="از قیمت زیاد به کم" checked={queryObject["_sort"] === "price:DESC"} onChange={() => handleClickSort("price:DESC")} />
        </DropMenu>
      </div>
    </div>
  );
}
