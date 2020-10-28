import React from "react";
import numeral from "numeral";

const BagModalItemPrice = ({ price, selectedQuantity }) => (
  <h5 className="is-marginless bag-modal__item-price">
    {numeral(price * selectedQuantity).format("0,0")}
    <span className="bag-modal__item-currency"> KES</span>
  </h5>
);

export default BagModalItemPrice;
