import { useEffect } from "react";
import axios from "axios";
import useQueryContext from "../hooks/useQueryContext";
import FillProductCard from "./FillProductCard";
import LoadingProductCard from "./LoadingProductCard";
import { POSTS_PER_PAGE } from "../constants/index";

export default function ProductsItems() {
  const { productsData, queryString, setProductsData } = useQueryContext();

  // useEffect(() => {
  //   // setProductsData(null);
  //   axios.get("/products?" + queryString, {baseURL: process.env.NEXT_PUBLIC_BASE_URL})
  //     .then((res) => setProductsData(res.data));
  // }, [queryString]);

  return (
    <section dir="rtl" className="grid justify-items-center mb-10 gap-y-8 md:gap-14 xl:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {productsData && productsData.map((item) => <FillProductCard {...item} key={item.id} />)}
      {!productsData && new Array(POSTS_PER_PAGE).fill(null).map((_, index) => <LoadingProductCard key={index} />)}
    </section>
  );
}
