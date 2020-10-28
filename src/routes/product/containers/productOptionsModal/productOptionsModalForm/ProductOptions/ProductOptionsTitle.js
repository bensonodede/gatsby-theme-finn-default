import React, { useContext } from "react";

// Import data context
import ProductDataContext from "../../../../ProductDataContext";

const ProductOptionsTitle = () => {
  // Destructure data context
  const { options } = useContext(ProductDataContext);

  return (
    <h1 className="title is-size-4-mobile is-size-4-tablet is-size-3-desktop has-text-centered product-options__title">
      {options.length > 1 ? "Choose options" : "Choose an option"}
    </h1>
  );
};

export default ProductOptionsTitle;
