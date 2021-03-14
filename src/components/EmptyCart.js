import React from "react";

import sadIco from "../assets/images/png/sad.png";

function EmptyCart() {
  return (
    <div className="h-auto text-right w-full whitespace-no-wrap rounded-lg text-sm md:text-base text-gray-600 hover:text-gray-800">
      <div className="flex flex-col px-2 py-2 h-full">
        <div className="flex flex-col items-center">
          <div className="w-24 my-6">
            <img src={sadIco} alt="Sad emoji" />
          </div>
          <span>سبد خرید شما خالیست !</span>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
