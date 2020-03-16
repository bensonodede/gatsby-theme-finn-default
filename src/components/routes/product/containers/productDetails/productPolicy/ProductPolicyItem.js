import React from "react";

// Import components
import Accordion from "components/accordion";
import ProductPolicyAccordionHeader from "./ProductPolicyAccordionHeader";

const ProductPolicyItem = ({ title, emoji, policy }) => (
  <Accordion
    header={<ProductPolicyAccordionHeader emoji={emoji} title={title} />}
  >
    <p className="product-policy-item__description has-text-grey-light">
      {policy}
    </p>
  </Accordion>
);

export default ProductPolicyItem;
