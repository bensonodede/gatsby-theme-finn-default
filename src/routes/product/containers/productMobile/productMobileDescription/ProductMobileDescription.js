import React, { useContext } from "react";

// Import product data context
import ProductDataContext from "../../../ProductDataContext";

const ProductMobileDescription = () => {
  // Destructure product data
  const { name, description } = useContext(ProductDataContext);

  return (
    <>
      <h1 className="title is-size-4 is-marginless">{name}</h1>
      <p className="has-text-grey-light">{description}</p>
    </>
  );
};

export default ProductMobileDescription;
