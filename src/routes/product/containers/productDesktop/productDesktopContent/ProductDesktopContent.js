import React from "react";

// Import components
import ProductDesktopContentName from "./ProductDesktopContentName";
import ProductDesktopContentBtn from "./ProductDesktopContentBtn";
import ProductDesktopContentDisabledBtn from "./ProductDesktopContentDisabledBtn";

// Import styles
import "./styles.scss";

const ProductDesktopContent = ({ totalQuantity, toggleOptionsModal }) => (
  <div className="product-desktop__content">
    {/* Product name */}
    <ProductDesktopContentName />

    {/* Product buy button */}
    {totalQuantity ? (
      <ProductDesktopContentBtn toggleOptionsModal={toggleOptionsModal} />
    ) : (
      <ProductDesktopContentDisabledBtn />
    )}
  </div>
);

export default ProductDesktopContent;
