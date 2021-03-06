import { ChildrenType, DropMenuProps } from "../types/index";

export default function DropMenu(props: ChildrenType & DropMenuProps) {
  const { children, hidden, xAdjustment, widthAdjustment } = props;

  return (
    <div dir="rtl" hidden={hidden} className={`absolute ${xAdjustment} ${widthAdjustment} p-2 rounded-lg shadow-lg bg-white z-10 cursor-auto`}>
      {children}
    </div>
  );
}
