import React from "react";
import Image from "next/image";
import useSetCartData from "../hooks/useSetCartData";
import Btn from "./Btn";
import { ProductItemType } from "../types/index";

export default function FillProductCard(props: ProductItemType) {
  const { name, price, instock, picture, id } = props;

  // const [playAnimation, setPlayAnimation] = useState(false);
  const { addOne } = useSetCartData();

  // const handleAddCart = () => {
  //   if (instock) {
  //     addOne(props);
  //     setPlayAnimation(true);
  //     setTimeout(() => {
  //       setPlayAnimation(false);
  //     }, 400);
  //   }
  // };

  return (
    <article className="rounded-xl shadow-lg w-10/12 md:w-full h-72 select-none">
      <header className="w-full h-3/4">
        <figure className="h-full relative">
          <Image layout="fill" objectFit="cover" className="h-full w-full rounded-t-xl" src={picture} alt={name} />
        </figure>
      </header>
      <footer className="w-full px-3 pt-2 flex flex-col relative h-1/4">
        {/* <div onClick={handleAddCart} className="absolute -top-5 left-5 w-15 h-15 rounded-full flex items-center justify-center cursor-pointer">
          <span className="flex h-9 w-9">
            <span className={`${playAnimation ? "animate-ping" : "animate-none"} absolute inline-flex h-full w-full rounded-full bg-mycolor-dark opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-9 w-9 ${instock ? "bg-mycolor-dark" : "bg-red-500"} items-center justify-center`}>
              <div className="w-5 h-5 flex items-center justify-center">{instock ? <ReactSVG src="images/icons/add.svg" className="w-full h-full fill-current text-mycolor-light" /> : <img src="/images/icons/soldout.png" alt="Sold out" />}</div>
            </span>
          </span>
        </div> */}
        <Btn type={`${instock ? "primary" : "warning"}`} onClick={() => instock && addOne(props)} icon={`${instock ? "/images/icons/add.svg" : "/images/icons/soldout.svg"}`} buttonStyle={`absolute -top-5 left-5`} width="w-10" height="w-26" />

        <h3 className="text-gray-700 mb-2  font-vazir-latin select-none">{name}</h3>
        <div className="flex justify-between">
          <span className="text-gray-400 select-none" dir="rtl">
            {price} ريال
          </span>
          {!instock && <span className="text-red-500 select-none">تمام شد !</span>}
        </div>
      </footer>
    </article>
  );
}
