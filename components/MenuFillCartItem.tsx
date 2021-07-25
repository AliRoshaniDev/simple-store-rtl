import useSetCartData from "../hooks/useSetCartData";
import Image from "next/image";
import { CartItemType } from "../types/index";
import Btn from "./Btn";

export default function MenuFillCartItem(props: CartItemType) {
  const { name, price, addedNumber, instock, picture, id } = props;
  const { deleteOne } = useSetCartData();

  return (
    <div className="h-24 mb-1 text-right w-full whitespace-no-wrap rounded-lg text-base text-gray-600 hover:text-gray-800 hover:bg-mycolor-light transition duration-200 ease-in-out">
      <div className="flex items-center px-2 h-full">
        <figure className="h-20 w-20">
          <Image className="object-cover h-20 w-full rounded-lg" src={picture} width={80} height={80} alt={name} />
        </figure>
        <div className="w-cartItemText flex flex-col pr-2">
          <span className="whitespace-nowrap text-gray-700 overflow-hidden font-vazir-latin">{name}</span>
          <span className="text-gray-400">{price} ريال</span>
          <span className="text-gray-400">{`${addedNumber} عدد`}</span>
        </div>
        <Btn type="secondary" width="w-8" height="h-8" icon="/images/icons/close.svg" onClick={() => deleteOne(id)} />
        {/* <div onClick={handleDeleteItem} className="w-8 h-8 p-2 bg-transparent hover:bg-mycolor-dark group rounded-lg transition duration-200 ease-in-out">
          <ReactSVG src="/images/icons/close.svg" className="w-4 h-4 fill-current group-hover:text-mycolor-light transition duration-200 ease-in-out" />
        </div> */}
      </div>
    </div>
  );
}
