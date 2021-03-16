import React from "react";

function Badge({ number = null, size = "BIG" }) {
  return <div className={`${size === "BIG" ? "w-5 h-5" : "w-3 h-3"} absolute top-0 right-0 pt-0.5 bg-mycolor-dark text-xs rounded-full text-white flex items-center justify-center`}>{number === null ? "" : number}</div>;
}

export default Badge;
