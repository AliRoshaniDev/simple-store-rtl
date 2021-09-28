import React from "react";
import Image from "next/image";
import useSetCartData from "../hooks/useSetCartData";
import Btn from "./Btn";
import { ProductItemType } from "../types/index";

export default function FillProductCard(props: ProductItemType) {
  const { name, price, instock, picture } = props;

  const { addOne } = useSetCartData();

  return (
    <article className="rounded-xl shadow-lg w-10/12 md:w-full h-72 select-none">
      <header className="w-full h-3/4 bg-mycolor-light">
        <figure className="h-full relative">
          <Image layout="fill" objectFit="cover" placeholder="blur" blurDataURL="/images/others/product-loading.png" className="h-full w-full rounded-t-xl" src={process.env.NEXT_PUBLIC_BASE_URL?.includes("localhost") ? process.env.NEXT_PUBLIC_BASE_URL + picture[0].url : picture[0].url} alt={name} />
        </figure>
      </header>
      <footer className="w-full px-3 pt-2 flex flex-col relative h-1/4 bg-white rounded-b-xl">
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
