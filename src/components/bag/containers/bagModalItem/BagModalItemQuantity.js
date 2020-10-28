import React from "react";

const BagModalItemQuantity = ({ selectedQuantity }) => (
  <h5 className="is-marginless is-size-6">
    {selectedQuantity}
    {"  "}×{"  "}
  </h5>
);

export default BagModalItemQuantity;
