import { ChildrenType, DropMenuProps } from "../types/index";

export default function DropMenu(props: ChildrenType & DropMenuProps) {
  const { children, xAdjustment, widthAdjustment } = props;

  //   case "filter":
  //     xAdjustment = "top-10 -right-3";
  //     widthAdjustment = "w-max";

  return (
    <div dir="rtl" className={`absolute ${xAdjustment} ${widthAdjustment} p-2 rounded-lg shadow-lg bg-white z-10`}>
      {children}
    </div>
  );
}
