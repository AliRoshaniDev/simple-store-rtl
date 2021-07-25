import ProductsItems from "./ProductsItems";
import QueryParamsProvider from "../providers/QueryParamsProvider";
import ProductsHeader from "./ProductsHeader";
import ProductsPageBtns from "./ProductsPageBtns";

export default function Products() {
  return (
    <main className="w-full mb-10">
      <div className="container mx-auto">
        <QueryParamsProvider>
          <ProductsHeader />
          <ProductsItems />
          <ProductsPageBtns />
        </QueryParamsProvider>
      </div>
    </main>
  );
}
