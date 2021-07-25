export default function LoadingProductCard() {
  return (
    <article className="animate-pulse rounded-xl shadow-lg w-10/12 md:w-full h-72 select-none">
      <header className="w-full h-3/4">
        <figure className="h-full">
          <div className="h-full w-full rounded-t-xl bg-mycolor-dark bg-opacity-30"></div>
        </figure>
      </header>
      <footer className="w-full px-3 pt-2 flex flex-col relative h-1/4">
        <div className="absolute -top-5 left-5 w-15 h-15 rounded-full flex items-center justify-center">
          <span className="flex h-9 w-9">
            <span className="relative inline-flex rounded-lg h-9 w-9 bg-mycolor-dark items-center justify-center"></span>
          </span>
        </div>
        <div className="mb-2 h-5 w-32 bg-gray-400 rounded-lg"></div>
        <div className="flex justify-between">
          <div className="h-5 w-16 bg-gray-400 rounded-lg"></div>
          <div className="h-5 w-20 bg-gray-400 rounded-lg"></div>
        </div>
      </footer>
    </article>
  );
}
