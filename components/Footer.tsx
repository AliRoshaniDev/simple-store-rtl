import { ReactSVG } from "react-svg";

export default function Footer() {
  return (
    <footer className="w-full">
      <section className="flex justify-center items-center relative top-24 bg-white bg-opacity-70 z-10 w-max text-xl rounded-lg border-2 border-mycolor-dark font-bold py-1 px-3 mx-auto">
        <div className="w-10">
          <ReactSVG src="/images/icons/code.svg" className="w-8 text-mycolor-dark fill-current" />
        </div>
        <div>
          <span>by</span>
          <a href="https://github.com/alimoallem27" className="px-2 text-mycolor-dark underline">
            Ali Moallem
          </a>
          <span>at</span>
        </div>

        <div className="h-8 ml-2">
          <ReactSVG src="/images/icons/night.svg" className="w-7 text-mycolor-dark fill-current" />
        </div>
      </section>
      <section className="w-full">
        <div className="w-full h-28 bg-gradient-to-t from-mycolor-dark opacity-40"></div>
      </section>
    </footer>
  );
}
