import React from "react";

// Import components
import OrderProductItemImage from "./OrderProductItemImage";
import OrderProductItemQuantity from "./OrderProductItemQuantity";
import OrderProductItemDescription from "./OrderProductItemDescription";
import OrderProductItemPrice from "./OrderProductItemPrice";

// Import styles
import "./styles.scss";

const OrderProductItem = ({ item }) => {
  // Destructure item data
  let { imgUrl, selectedQuantity, name, selectedVariant, price } = item;

  return (
    <div className="order-product">
      {/* Image */}
      <OrderProductItemImage imgUrl={imgUrl} name={name} />

      <div className="order-product__content">
        <div className="order-product__content-description">
          {/* Quantity */}
          <OrderProductItemQuantity selectedQuantity={selectedQuantity} />

          {/* Name and Variant label */}
          <OrderProductItemDescription
            name={name}
            selectedVariant={selectedVariant}
          />
        </div>

        {/* Price */}
        <OrderProductItemPrice
          price={price}
          selectedQuantity={selectedQuantity}
        />
      </div>
    </div>
  );
};

export default OrderProductItem;
