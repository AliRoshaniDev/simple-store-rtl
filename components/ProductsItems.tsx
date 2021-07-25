import useQueryContext from "../hooks/useQueryContext";
// import useExternalData from "../hooks/useExternalData";
import FillProductCard from "./FillProductCard";
import LoadingProductCard from "./LoadingProductCard";

export default function ProductsItems() {
  const { queryString, productsData } = useQueryContext();

  // const productsData = useExternalData(`/.netlify/functions/products?${queryString}`);

  return (
    <section dir="rtl" className="grid justify-items-center mb-10 gap-y-8 md:gap-14 xl:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {productsData && productsData.map((item, index) => <FillProductCard {...item} key={index} />)}
      {!productsData && new Array(8).fill(null).map((_, index) => <LoadingProductCard key={index} />)}
    </section>
  );
}
