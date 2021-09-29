import ProductsItems from "./ProductsItems";
import ProductProvider from "../providers/ProductProvider";
import ProductsHeader from "./ProductsHeader";
import ProductsPageBtns from "./ProductsPageBtns";

export default function Products(props: { initialProductData: string }) {
  return (
    <main className="w-full mb-10 2xl:px-12">
      <div className="container mx-auto">
        <ProductProvider initialProductData={props.initialProductData}>
          <ProductsHeader />
          <ProductsItems />
          <ProductsPageBtns />
        </ProductProvider>
      </div>
    </main>
  );
}
