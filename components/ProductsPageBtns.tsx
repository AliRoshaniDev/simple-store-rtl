import useQueryContext from "../hooks/useQueryContext";
import Btn from "./Btn";
import usePageBtn from "../hooks/usePageBtn";

export default function ProductsPageBtns() {
  const { queryObject, applyOneFilter } = useQueryContext();

  const _start = parseInt(queryObject!["_start"] as string);
  const Btns = usePageBtn(_start);

  function handleBtnClick(pageStart: number) {
    if (queryObject["_start"] !== pageStart) {
      applyOneFilter("_start", pageStart);
    }
  }

  return (
    <footer className="flex justify-center">
      <div className="flex">
        {Btns.map((btn, index) => (
          <Btn type={queryObject["_start"] === btn.address ? "primary" : "secondary"} onClick={() => handleBtnClick(btn.address)} buttonStyle="mr-2 text-lg px-3" width="fit-content" text={btn.title} key={index} />
        ))}
      </div>
    </footer>
  );
}
