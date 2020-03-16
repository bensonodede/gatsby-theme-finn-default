import React from "react";

const ProductDetailsDescription = ({ name, description }) => (
  <>
    <h1 className="title is-size-3 is-marginless">{name}</h1>
    <p className="has-text-grey-light">{description}</p>
  </>
);

export default ProductDetailsDescription;
