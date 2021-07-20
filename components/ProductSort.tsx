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

  function getCheckedValue(status: string): boolean {
    if (queryObject && queryObject["sort"] === status) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="relative h-10">
      <div ref={parentElement as LegacyRef<HTMLDivElement>} className={`flex flex-row-reverse items-center p-2 h-10 rounded-lg bg-transparent border-2 border-gray-300 ${itemIsFocus ? "border-mycolor-dark" : ""} hover:border-mycolor-dark sm:hover:bg-mycolor-light ${itemIsFocus && "bg-mycolor-light"} cursor-pointer transition duration-300 ease-in-out`}>
        {getCheckedValue("Inventory") || (getCheckedValue("price") && <Badge size="small" />)}
        <ReactSVG src="/images/icons/filter.svg" />
        <span className="mr-2 ml-1">مرتب سازی</span>
      </div>
      <div ref={childElement as LegacyRef<HTMLDivElement>}>
        <DropMenu hidden={!itemIsFocus} xAdjustment="top-10 -right-3" widthAdjustment="w-max">
          <ProductMenuCheck text="بر اساس قیمت" checked={getCheckedValue("price")} onChange={() => applyOneFilter && applyOneFilter("sort", "price")} />
          <ProductMenuCheck text="بر اساس موجودی" checked={getCheckedValue("Inventory")} onChange={() => applyOneFilter && applyOneFilter("sort", "Inventory")} />
        </DropMenu>
      </div>
    </div>
  );
}
