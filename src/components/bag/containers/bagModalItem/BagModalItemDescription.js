import React from "react";

const BagModalItemDescription = ({ name, selectedVariant }) => (
  <div className="bag-modal__item-description-wrapper">
    {/* Product name */}
    <h5 className="is-size-6 bag-modal__item-description has-text-grey-darker">
      {name}
    </h5>

    {/* Product variant label */}
    <h5 className="bag-modal__item-description bag-modal__item-description--variant">
      {selectedVariant.label}
    </h5>
  </div>
);

export default BagModalItemDescription;
