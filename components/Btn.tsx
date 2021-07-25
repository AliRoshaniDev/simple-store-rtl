import { BtnProps } from "../types/index";
import { ReactSVG } from "react-svg";

export default function Btn(props: BtnProps) {
  const { onClick, text, icon, type, width, height, noBorder, buttonStyle, iconStyle } = props;

  return (
    <button onClick={onClick} className={`${width} ${height ? height : "h-10"} ${buttonStyle} ${type === "primary" && "text-mycolor-light bg-mycolor-dark"} ${type === "secondary" && `text-mycolor-dark bg-mycolor-light ${!noBorder && "border-2 border-mycolor-dark"} hover:text-mycolor-light hover:bg-mycolor-dark`} ${type === "warning" && "text-white bg-red-600"} rounded-lg group transition duration-200 ease-in-out flex justify-center items-center`}>
      {icon ? <ReactSVG src={icon} className={`w-full h-full p-2 fill-current ${iconStyle} ${type === "primary" && "text-mycolor-light"} ${type === "secondary" && "text-mycolor-dark group-hover:text-mycolor-light"} ${type === "warning" && "text-white"} transition duration-200 ease-in-out`} /> : text}
    </button>
  );
}
