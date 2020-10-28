import React from "react";

// Import components
import Accordion from "components/accordion";
import ProductMobilePolicyAccordionHeader from "./ProductMobilePolicyAccordionHeader";

const ProductMobilePolicyItem = ({ title, emoji, policy }) => (
  <Accordion
    header={<ProductMobilePolicyAccordionHeader emoji={emoji} title={title} />}
  >
    <p className="product-mobile__policy-item-description is-size-6 has-text-grey-light">
      {policy}
    </p>
  </Accordion>
);

export default ProductMobilePolicyItem;
