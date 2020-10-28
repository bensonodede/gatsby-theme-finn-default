import React from "react";

const OrderMapTitle = ({ address }) => (
  <div className="order-map__content">
    <h5 className="is-size-7 title order__sub-title">DELIVERY LOCATION</h5>
    <h5 className="is-size-6 is-marginless">{address}</h5>
  </div>
);

export default OrderMapTitle;
