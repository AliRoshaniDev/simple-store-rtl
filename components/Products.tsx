import ProductsItems from "./ProductsItems";
import ProductProvider from "../providers/ProductProvider";
import ProductsHeader from "./ProductsHeader";
import ProductsPageBtns from "./ProductsPageBtns";

export default function Products() {
  return (
    <main className="w-full mb-10 2xl:px-12">
      <div className="container mx-auto">
        <ProductProvider>
          <ProductsHeader />
          <ProductsItems />
          <ProductsPageBtns />
        </ProductProvider>
      </div>
    </main>
  );
}
