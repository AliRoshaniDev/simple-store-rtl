import SlideShow from "../components/SlideShow";
import Products from "../components/Products";
import Footer from "../components/Footer";
import axios from "axios";
import { ProductsDataType } from "../types/index";

export default function Home(props: { initialProductData: string }) {
  return (
    <>
      <SlideShow />
      <Products initialProductData={props.initialProductData} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const initialProductData = await axios.get("/products", {
    params: context.query,
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });

  return {
    props: {
      initialProductData: JSON.stringify(initialProductData.data),
    },
  };
}
