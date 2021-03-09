import React from "react";
// import { ReactSVG } from "react-svg";

// import triangleIco from "../assets/images/svg/triangle.svg";

function FilterItems() {
  return (
    <ul class="absolute top-10 right-2 p-2 rounded-lg shadow-lg bg-white z-10 group-hover:block">
      {/* <ReactSVG src={triangleIco} className="relative bottom-2 left-16" /> */}
      <li class="p-1 whitespace-no-wrap rounded-lg text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-cupcake-light">
        <a class="px-2 py-1" href="http://www.italiansubs.local:8081/forum/profile/">
          <span class="">Sommario</span>
        </a>
      </li>
      <li class="p-1 whitespace-no-wrap rounded-lg text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-cupcake-light">
        <a class="px-2 py-1" href="http://www.italiansubs.local:8081/forum/profile/?area=account">
          <span class="">Impostazioni account</span>
        </a>
      </li>
      <li class="p-1 whitespace-no-wrap rounded-lg text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-cupcake-light">
        <a class="px-2 py-1" href="http://www.italiansubs.local:8081/forum/profile/?area=forumprofile">
          <span class="">Profilo forum</span>
        </a>
      </li>
      <li class="p-1 whitespace-no-wrap rounded-lg text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-cupcake-light">
        <a class="px-2 py-1" href="http://www.italiansubs.local:8081/forum/profile/?area=mentions">
          <span class="">Tag</span>
        </a>
      </li>
    </ul>
  );
}

export default FilterItems;
