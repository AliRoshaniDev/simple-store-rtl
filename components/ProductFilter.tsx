import React, { LegacyRef } from "react";
import { ReactSVG } from "react-svg";
import DropMenu from "./DropMenu";
import ProductMenuCheck from "./ProductMenuCheck";
import Badge from "./Badge";
import useFocusElement from "../hooks/useFocusElement";
import useQueryContext from "../hooks/useQueryContext";

export default function ProductFilter() {
  const [parentElement, childElement, itemIsFocus] = useFocusElement();
  const { applyOneFilter, queryObject } = useQueryContext();

  function handleClickFilter() {
    if (applyOneFilter) {
      if (queryObject["_start"] !== 0) applyOneFilter("_start", 0);
      applyOneFilter("instock", true);
    }
  }

  return (
    <div className="relative h-10 mr-2">
      <div ref={parentElement as LegacyRef<HTMLDivElement>} className={`flex flex-row-reverse items-center p-2 h-10 rounded-lg bg-white bg-transparent border-2 border-gray-300 ${itemIsFocus ? "border-mycolor-dark" : ""} hover:border-mycolor-dark hover:bg-mycolor-light ${itemIsFocus && "bg-mycolor-light"} cursor-pointer transition duration-200 ease-in-out`}>
        {queryObject["instock"] && <Badge size="small" />}
        <ReactSVG src="/images/icons/filter.svg" />
        <span className="mr-2 ml-1">فیلتر</span>
      </div>
      <div ref={childElement as LegacyRef<HTMLDivElement>}>
        <DropMenu hidden={!itemIsFocus} xAdjustment="top-10 -right-3" widthAdjustment="w-max">
          <ProductMenuCheck text="کالاهای موجود" checked={queryObject["instock"] as boolean} onChange={() => handleClickFilter()} />
        </DropMenu>
      </div>
    </div>
  );
}
