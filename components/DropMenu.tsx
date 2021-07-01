import { ChildrenType } from "../types/index";

export default function DropMenu(props: ChildrenType & { type: "cart" | "filter" }) {
  const { children, type } = props;
  const xAdjustment = type === "filter" ? "top-10 -right-3" : "cart" && "top-13 -left-2";
  const widthAdjustment = type === "filter" ? "w-max" : "cart" && "w-72 sm:w-80";

  return (
    <div dir="rtl" className={`absolute ${xAdjustment} ${widthAdjustment} p-2 rounded-lg shadow-lg bg-white z-10`}>
      {children}
    </div>
  );
}
