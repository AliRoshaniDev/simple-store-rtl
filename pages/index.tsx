import SlideShow from "../components/SlideShow";
import Products from "../components/Products";
import Footer from "../components/Footer";
import axios from "axios";
import { GetServerSideProps } from "next";
import { POSTS_PER_PAGE } from "../constants/index";

export default function Home(props: { initialProductData: string }) {
  return (
    <>
      <SlideShow />
      <Products initialProductData={props.initialProductData} />
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const initialProductData = await axios.get("/products", {
    params: {
      _start: 0,
      _limit: POSTS_PER_PAGE,
      ...context.query,
    },
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });

  return {
    props: {
      initialProductData: JSON.stringify(initialProductData.data),
    },
  };
};
