import React from "react";
import numeral from "numeral";

const BagModalTally = ({ bagItems }) => {
  // Global total price
  let tallyPrice = 0;

  if (bagItems[0]) {
    // Sum total price and multiply by selected quantity and assign variable
    tallyPrice = bagItems.reduce(
      (a, b) => +a + b.price * b.selectedQuantity,
      0
    );
  }

  return (
    <div className="bag-modal__tally">
      {/* Total title */}
      <h5 className="title is-size-6 is-marginless">Total</h5>

      {/* Total price tally */}
      <h5 className="title is-size-6 is-marginless bag-modal__item-price">
        {numeral(tallyPrice).format("0,0")}
        {/* Currency */}
        <span className="bag-modal__item-currency"> KES</span>
      </h5>
    </div>
  );
};

export default BagModalTally;
