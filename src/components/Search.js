import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import useSetProducts from "../hooks/useSetProducts";

import searchIco from "../assets/images/svg/search.svg";

function Search() {
  const [inputFocus, setInputFocus] = useState(false);

  const setProducts = useSetProducts();

  let delayTimer;
  const handleInputChange = (event) => {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(() => {
      setProducts("searchInput", event.target.value);
    }, 500);
  };

  return (
    <div className={`flex sm:mr-2 w-full mb-2 sm:mb-0 sm:w-72 p-2 rounded-lg bg-transparent hover:bg-mycolor-light ${inputFocus && "bg-mycolor-light"} cursor-pointer  transition duration-300 ease-in-out`}>
      <ReactSVG src={searchIco} />
      <input
        type="text"
        onFocus={() => {
          setInputFocus(true);
        }}
        onBlur={() => {
          setInputFocus(false);
        }}
        onChange={handleInputChange}
        className="ml-2 outline-none rounded-md w-full"
        placeholder="جستجو"
        dir="rtl"
      />
    </div>
  );
}

export default Search;
