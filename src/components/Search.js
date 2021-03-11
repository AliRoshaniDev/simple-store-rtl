import React, { useState } from "react";
import { ReactSVG } from "react-svg";

import searchIco from "../assets/images/svg/search.svg";

function Search() {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <div className={`flex sm:mr-4 w-full mb-2 sm:mb-0 sm:w-72 p-2 rounded-lg bg-transparent hover:bg-cupcake-light ${inputFocus && "bg-cupcake-light"} cursor-pointer  transition duration-300 ease-in-out`}>
      <ReactSVG src={searchIco} />
      <input
        type="text"
        onFocus={() => {
          setInputFocus(true);
        }}
        onBlur={() => {
          setInputFocus(false);
        }}
        className="ml-2 outline-none rounded-md w-full"
        placeholder="جستجو"
        dir="rtl"
      />
    </div>
  );
}

export default Search;
