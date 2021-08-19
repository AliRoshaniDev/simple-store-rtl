import useQueryContext from "../hooks/useQueryContext";
import Btn from "./Btn";
import { NUMBER_POST_IN_PAGE } from "../constants/index";

export default function ProductsPageBtns() {
  const { queryObject, applyOneFilter, allNumber } = useQueryContext();

  const postsPerPage = allNumber && Math.ceil(allNumber / NUMBER_POST_IN_PAGE);
  const Btns = new Array(postsPerPage).fill(0).map((_, index) => index + 1);

  function handleBtnClick(pageNumber: number) {
    if (!applyOneFilter || !queryObject) return;

    if (queryObject["page"] !== pageNumber) {
      applyOneFilter("page", pageNumber);
    }
  }

  return (
    <footer className="flex justify-center">
      <div className="flex">
        {Btns.map((pageNumber) => (
          <Btn type={queryObject && queryObject["page"] === pageNumber ? "primary" : "secondary"} onClick={() => handleBtnClick(pageNumber)} buttonStyle="mr-2 text-lg" width="w-10" text={`${pageNumber}`} key={pageNumber} />
        ))}
      </div>
    </footer>
  );
}
