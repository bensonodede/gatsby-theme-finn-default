import React from "react";
import numeral from "numeral";

const OrderTallyRow = ({ label, price, isTotal = false }) => (
  <div
    className={`order-tally__row ${isTotal ? "order-tally__row--total" : ""}`}
  >
    {/* Label */}
    <h5 className={`is-size-6 is-marginless ${isTotal ? "title" : ""}`}>
      {label}
    </h5>

    {/* Price */}
    <h5 className={`is-size-6 is-marginless ${isTotal ? "title" : ""}`}>
      {numeral(price).format("0,0")}
      <span className="bag-modal__item-currency"> KES</span>
    </h5>
  </div>
);

export default OrderTallyRow;
