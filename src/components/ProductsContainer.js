import React from "react";

function ProductsContainer({ children }) {
  return (
    <main className="w-full mb-16">
      <div className="container mx-auto">{children}</div>
    </main>
  );
}

export default ProductsContainer;
