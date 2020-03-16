import React from "react";

const ProductPolicyAccordionHeader = ({ emoji, title }) => (
  <h5 className="is-marginless has-text-grey-darker is-size-6">
    <span role="img" aria-label="emoji" className="product-policy-item__emoji">
      {emoji}
    </span>{" "}
    {title}
  </h5>
);

export default ProductPolicyAccordionHeader;
