import React from "react";

// Import components
import Accordion from "components/accordion";
import ProductDesktopPolicyAccordionHeader from "./ProductDesktopPolicyAccordionHeader";

const ProductDesktopPolicyItem = ({ title, emoji, policy }) => (
  <Accordion
    header={<ProductDesktopPolicyAccordionHeader emoji={emoji} title={title} />}
  >
    <p className="product-desktop__policy-item-description is-size-6 has-text-grey-light">
      {policy}
    </p>
  </Accordion>
);

export default ProductDesktopPolicyItem;
