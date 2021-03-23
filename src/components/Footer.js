import React from "react";

function Footer() {
  return (
    <footer>
      <section className="flex justify-center text-xl font-bold py-5">
        <div className="flex items-center">
          <span>
            <img src="/images/code.png" className="w-6 mr-2" alt="code" />
          </span>
          by
          <a href="https://github.com/alimoallem27" className="px-2 text-mycolor-dark">
            Ali Moallem
          </a>
          at
          <span>
            <img src="/images/night.png" className="w-5 ml-2" alt="night" />
          </span>
        </div>
      </section>
      <section className="w-full flex">
        <div className="w-1/4 bg-mycolor-dark h-3"></div>
        <div className="w-1/4 bg-mycolor-dark h-3 bg-opacity-80"></div>
        <div className="w-1/4 bg-mycolor-dark h-3 bg-opacity-60"></div>
        <div className="w-1/4 bg-mycolor-dark h-3 bg-opacity-40"></div>
      </section>
    </footer>
  );
}

export default Footer;
