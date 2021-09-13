import useQueryContext from "../hooks/useQueryContext";
import useExternalData from "../hooks/useExternalData";
import qs from "qs";
import { dissoc } from "ramda";
import { BASE_URL, POSTS_PER_PAGE } from "../constants/index";
import { useRouter } from "next/router";

export default function usePageBtn(_start: number): { title: string; address: number }[] {
  const router = useRouter();

  const { queryObject } = useQueryContext();

  if (_start % POSTS_PER_PAGE !== 0 || (queryObject!["_limit"] as number) % POSTS_PER_PAGE !== 0) router.push("/404");

  const newQueryObject = dissoc("_start", dissoc("_limit", queryObject!));

  const url = BASE_URL + "/products/count?" + qs.stringify(newQueryObject);

  const [productsNumber] = useExternalData<number>(url);

  const pageCounter = productsNumber ? Math.ceil(productsNumber / POSTS_PER_PAGE) : 1;

  const Btns = new Array(pageCounter).fill(null).map((_, index) => ({ title: `${index + 1}`, address: index * POSTS_PER_PAGE }));

  const filterdBtns = Btns.filter((btn) => btn.address === _start || btn.address === _start + POSTS_PER_PAGE || btn.address === _start - POSTS_PER_PAGE);

  const finalBtns = [...filterdBtns];

  if (finalBtns[0] && finalBtns[0].address === _start - POSTS_PER_PAGE && finalBtns[0].address !== 0) {
    finalBtns.unshift({ title: "اولین", address: 0 });
  }

  if (finalBtns[finalBtns.length - 1] && finalBtns[finalBtns.length - 1].address === _start + POSTS_PER_PAGE && finalBtns[finalBtns.length - 1].address !== POSTS_PER_PAGE * 2) {
    finalBtns.push({ title: "آخرین", address: (pageCounter! - 1) * POSTS_PER_PAGE });
  }

  return finalBtns;
}
