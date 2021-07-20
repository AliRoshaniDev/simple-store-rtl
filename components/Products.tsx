import ProductsItems from "./ProductsItems";
import QueryParamsProvider from "../providers/QueryParamsProvider";

import ProductsHeader from "./ProductsHeader";

export default function Products() {
  return (
    <main className="w-full mb-16">
      <div className="container mx-auto">
        <QueryParamsProvider>
          <ProductsHeader />
          <ProductsItems />
        </QueryParamsProvider>
      </div>
    </main>
  );
}
