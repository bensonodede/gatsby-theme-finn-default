import React from "react";

// Import components
import Button from "components/button";

const ProductOptionsBtn = ({ currentPrice }) => (
  <div className="product-options__btn-wrapper">
    <Button isFullWidth type={"submit"} className="product-options__btn">
      Continue
      {/* Product price */}
      <span className="product-options__btn-price">
        {currentPrice}
        <span className="product-options__btn-currency">KES</span>
      </span>
    </Button>
  </div>
);

export default ProductOptionsBtn;
