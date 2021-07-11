import { ReactSVG } from "react-svg";

export default function MenuLoading() {
  return (
    <div className="min-h-48 flex flex-col items-center justify-center">
      <ReactSVG src="/images/icons/loading.svg" className="w-12 h-12 fill-current text-mycolor-dark animate-spin" />
      <span className="mt-6 text-sm md:text-base text-gray-600">کمی صبر نمایید ...</span>
    </div>
  );
}
