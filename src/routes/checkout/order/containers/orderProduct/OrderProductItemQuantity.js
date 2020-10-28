import React from "react";

const OrderProductItemQuantity = ({ selectedQuantity }) => (
  <h5 className="is-marginless is-size-6">
    {selectedQuantity}
    {"  "}×{"  "}
  </h5>
);

export default OrderProductItemQuantity;
