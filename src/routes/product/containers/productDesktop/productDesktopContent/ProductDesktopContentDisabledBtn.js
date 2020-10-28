import React, { useContext } from "react";
import numeral from "numeral";

// Import data context
import ProductDataContext from "../../../ProductDataContext";

// Import components
import Button from "components/button";

const ProductDesktopContentDisabledBtn = () => {
  // Destructure product data
  const { price } = useContext(ProductDataContext);

  return (
    <Button
      type={"button"}
      isDisabled={true}
      className="product-desktop__content-button"
    >
      Sold out
      {/* Format price */}
      <span className="product-desktop__content-price">
        {numeral(price).format("0,0")}
        <span className="product-desktop__content-currency">KSH</span>
      </span>
    </Button>
  );
};

export default ProductDesktopContentDisabledBtn;
