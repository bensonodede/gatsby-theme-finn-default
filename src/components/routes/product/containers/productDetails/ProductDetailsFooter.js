import React from "react";

// Import components
import { Btn } from "../../../button";

const ProductDetailsFooter = () => (
  <div className="is-hidden-mobile">
    <Btn
      isFullWidth
      onClick={() => {
        navigate(`/product/${humanId}/checkout/phone-number`, {
          state: { id, price }
        });
      }}
    >
      Buy now
    </Btn>
  </div>
);

export default ProductDetailsFooter;
