import React from "react";

// Import components
import { useBag } from "components/useHooks";
import OrderProductItem from "./OrderProductItem";

const OrderProduct = () => {
  // Destructure bag
  let { bag } = useBag();

  return (
    <div className="order__section">
      {/* Sub title */}
      <h5 className="order__sub-title title is-size-7">PRODUCT DETAILS</h5>

      {/* Order items */}
      {bag.map((item) => (
        <OrderProductItem
          item={item}
          key={`${item.productId}${item.selectedVariant.id}`}
        />
      ))}
    </div>
  );
};

export default OrderProduct;
