import React, { useContext } from "react";

// Import data context
import ProductDataContext from "../../../ProductDataContext";

const ProductDesktopContentName = () => {
  // Destructure product data
  const { name } = useContext(ProductDataContext);

  return (
    <div className="product-desktop__content-name">
      <h1 className="title is-size-3-desktop is-size-4-tablet product-desktop__name-title">
        {name}
      </h1>
    </div>
  );
};

export default ProductDesktopContentName;
