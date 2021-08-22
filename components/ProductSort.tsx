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

  function handleClickSort(sortValue: "price_low_to_high" | "price_high_to_low") {
    if (applyOneFilter) {
      if (queryObject && queryObject["page"] !== 1) applyOneFilter("page", 1);
      applyOneFilter("sort", sortValue);
    }
  }

  function getCheckedValue(status: "price_low_to_high" | "price_high_to_low"): boolean {
    if (queryObject && queryObject["sort"] === status) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="relative h-10">
      <div ref={parentElement as LegacyRef<HTMLDivElement>} className={`flex flex-row-reverse items-center p-2 h-10 rounded-lg bg-white bg-transparent border-2 border-gray-300 ${itemIsFocus ? "border-mycolor-dark" : ""} hover:border-mycolor-dark hover:bg-mycolor-light ${itemIsFocus && "bg-mycolor-light"} cursor-pointer transition duration-200 ease-in-out`}>
        {(getCheckedValue("price_high_to_low") || getCheckedValue("price_low_to_high")) && <Badge size="small" />}
        <ReactSVG src="/images/icons/sort.svg" className="w-4" />
        <span className="mr-2 ml-1">مرتب سازی</span>
      </div>
      <div ref={childElement as LegacyRef<HTMLDivElement>}>
        <DropMenu hidden={!itemIsFocus} xAdjustment="top-10 -right-3" widthAdjustment="w-max">
          <ProductMenuCheck text="از قیمت کم به زیاد" checked={getCheckedValue("price_low_to_high")} onChange={() => handleClickSort("price_low_to_high")} />
          <ProductMenuCheck text="از قیمت زیاد به کم" checked={getCheckedValue("price_high_to_low")} onChange={() => handleClickSort("price_high_to_low")} />
        </DropMenu>
      </div>
    </div>
  );
}
