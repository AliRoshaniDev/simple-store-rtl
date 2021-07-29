import useQueryContext from "../hooks/useQueryContext";
import FillProductCard from "./FillProductCard";
import LoadingProductCard from "./LoadingProductCard";

export default function ProductsItems() {
  const { products } = useQueryContext();

  return (
    <section dir="rtl" className="grid justify-items-center mb-10 gap-y-8 md:gap-14 xl:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products && products.map((item) => <FillProductCard {...item} key={item.id} />)}
      {!products && new Array(8).fill(null).map((_, index) => <LoadingProductCard key={index} />)}
    </section>
  );
}
