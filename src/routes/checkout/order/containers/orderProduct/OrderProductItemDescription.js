import React from "react";

const OrderProductItemDescription = ({ name, selectedVariant }) => (
  <div className="order-product__description-wrapper">
    {/* Product name */}
    <h5 className="is-size-6 order-product__description has-text-grey-darker">
      {name}
    </h5>

    {/* Product variant label */}
    {selectedVariant && (
      <h5 className="order-product__description order-product__description--variant">
        {selectedVariant.label}
      </h5>
    )}
  </div>
);

export default OrderProductItemDescription;
