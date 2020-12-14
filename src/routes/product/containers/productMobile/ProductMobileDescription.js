import React, { useContext } from "react";

// Import product data context
import ProductDataContext from "../../ProductDataContext";

const ProductMobileDescription = () => {
  // Destructure product data
  const { description } = useContext(ProductDataContext);

  if (description) {
    return (
      <>
        <h5 className="title is-size-6 is-marginless">Description</h5>
        <p className="has-text-grey-light">{description}</p>
      </>
    );
  } else {
    return null;
  }
};

export default ProductMobileDescription;
