import React, { useContext } from "react";

// Import product data context
import ProductDataContext from "../../ProductDataContext";

const ProductMobileHeader = () => {
  // Destructure product data
  const { name } = useContext(ProductDataContext);

  return (
    <div className="product-mobile__header">
      <h1 className="title is-size-4 has-text-centered">{name}</h1>
    </div>
  );
};

export default ProductMobileHeader;
