import React from "react";

// Import components
import ProductMobileFooterButton from "./ProductMobileFooterButton";

// Import styles
import "./styles.scss";

const ProductMobileFooter = ({ totalQuantity, toggleOptionsModal }) => (
  <div className="product-mobile__footer">
    {/* Product footer buy button */}
    <ProductMobileFooterButton
      totalQuantity={totalQuantity}
      toggleOptionsModal={toggleOptionsModal}
    />
  </div>
);

export default ProductMobileFooter;
