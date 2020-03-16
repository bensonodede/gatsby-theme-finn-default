import React from "react";

// Import components
import ProductDetailsImage from "./ProductDetailsImage";
import ProductDetailsDescription from "./ProductDetailsDescription";
import ProductPolicy from "./productPolicy";

const ProductDetails = props => (
  <>
    {/* Product image */}
    <ProductDetailsImage {...props} />

    <div className="column is-10-mobile is-6-tablet is-6-desktop">
      <div className="product-details-description">
        {/* Product description */}
        <ProductDetailsDescription {...props} />

        {/* Product Policy */}
        <ProductPolicy />
      </div>
    </div>
  </>
);

export default ProductDetails;
