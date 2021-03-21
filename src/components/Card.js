import React from "react";
import LoadedCard from "./LoadedCard";
import LoadingCard from "./LoadingCard";

function Card(props) {
  console.log(props);
  return props.data === null ? <LoadingCard /> : <LoadedCard {...props} />;
}

export default Card;
