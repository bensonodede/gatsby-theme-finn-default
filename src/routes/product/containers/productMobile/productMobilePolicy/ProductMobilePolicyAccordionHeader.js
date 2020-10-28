import React from "react";

const ProductMobilePolicyAccordionHeader = ({ emoji, title }) => (
  <h5 className="is-marginless has-text-grey-darker is-size-6">
    <span
      role="img"
      aria-label="emoji"
      className="product-mobile__policy-item-emoji"
    >
      {emoji}
    </span>{" "}
    {title}
  </h5>
);

export default ProductMobilePolicyAccordionHeader;
