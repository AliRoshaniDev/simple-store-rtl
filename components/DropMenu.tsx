import { ChildrenType } from "../types/index";

export default function DropMenu(props: ChildrenType & { type: "cart" | "filter" | "user" }) {
  const { children, type } = props;

  let xAdjustment;
  let widthAdjustment;

  switch (type) {
    case "filter":
      xAdjustment = "top-10 -right-3";
      widthAdjustment = "w-max";
      break;
    case "cart":
      xAdjustment = "top-13 -left-2";
      widthAdjustment = "w-72 sm:w-80";
      break;
    case "user":
      xAdjustment = "top-13 -right-2";
      widthAdjustment = "w-72 sm:w-80";
      break;
  }
  return (
    <div dir="rtl" className={`absolute ${xAdjustment} ${widthAdjustment} p-2 rounded-lg shadow-lg bg-white z-10`}>
      {children}
    </div>
  );
}
