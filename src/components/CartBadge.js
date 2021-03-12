import React from "react";

function cartBadge({ number }) {
  return <div className="w-5 h-5 absolute top-0 right-0 pt-0.5 bg-green-600 text-xs rounded-full text-white flex items-center justify-center">{number}</div>;
}

export default cartBadge;
