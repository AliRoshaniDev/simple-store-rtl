import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import useSetProducts from "../hooks/useSetProducts";

import searchIco from "../assets/images/svg/search.svg";

function Search() {
  const [inputFocus, setInputFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const setProducts = useSetProducts();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setProducts("searchInput", inputValue);
  };

  return (
    <div className={`flex sm:mr-4 w-full mb-2 sm:mb-0 sm:w-72 p-2 rounded-lg bg-transparent hover:bg-mycolor-light ${inputFocus && "bg-mycolor-light"} cursor-pointer  transition duration-300 ease-in-out`}>
      <ReactSVG src={searchIco} />
      <input
        type="text"
        onFocus={() => {
          setInputFocus(true);
        }}
        onBlur={() => {
          setInputFocus(false);
        }}
        value={inputValue}
        onChange={handleInputChange}
        className="ml-2 outline-none rounded-md w-full"
        placeholder="جستجو"
        dir="rtl"
      />
    </div>
  );
}

export default Search;
