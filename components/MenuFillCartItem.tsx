import useSetCartData from "../hooks/useSetCartData";
import Image from "next/image";
import { CartItemType } from "../types/index";
import Btn from "./Btn";
import { BASE_URL } from "../constants/index";

export default function MenuFillCartItem(props: CartItemType) {
  const { name, price, addedNumber, instock, picture, id } = props;
  const { deleteOne } = useSetCartData();

  console.log(props);

  return (
    <div className="h-24 mb-1 text-right w-full whitespace-no-wrap rounded-lg text-base text-gray-600 hover:text-gray-800 hover:bg-mycolor-light transition duration-200 ease-in-out">
      <div className="flex items-center px-2 h-full">
        <figure className="h-20 w-20 relative">
          <Image className="rounded-lg" layout="fill" objectFit="cover" src={BASE_URL + picture[0].url} alt={name} />
        </figure>
        <div className="w-cartItemText flex flex-col pr-2">
          <span className="whitespace-nowrap text-gray-700 overflow-hidden font-vazir-latin">{name}</span>
          <span className="text-gray-400">{price} ريال</span>
          <span className="text-gray-400">{`${addedNumber} عدد`}</span>
        </div>
        <Btn type="secondary" width="w-8" height="h-8" icon="/images/icons/close.svg" onClick={() => deleteOne(id)} />
      </div>
    </div>
  );
}
