import React from "react";
import numeral from "numeral";

const OrderProductItemPrice = ({ price, selectedQuantity }) => (
  <h5 className="is-marginless order-product__price">
    {numeral(price * selectedQuantity).format("0,0")}
    <span className="order-product__currency"> KES</span>
  </h5>
);

export default OrderProductItemPrice;
