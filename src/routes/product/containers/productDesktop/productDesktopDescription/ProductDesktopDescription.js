import React, { useRef, useContext } from "react";

// Import product data context
import ProductDataContext from "../../../ProductDataContext";

// Import components
import ProductDesktopDescriptionScrollBtn from "./ProductDesktopDescriptionScrollBtn";

// Import styles
import "./styles.scss";

const ProductDesktopDescription = () => {
  // React description ref
  const descriptionRef = useRef(null);

  // Destructure data
  const { description } = useContext(ProductDataContext);

  return (
    <div className="product-desktop__description">
      {/* Scroll down button */}
      <ProductDesktopDescriptionScrollBtn descriptionRef={descriptionRef} />

      {/* Description title */}
      <h1 ref={descriptionRef} className="title is-size-4 has-text-centered">
        Product Details
      </h1>

      {/* Product description */}
      <p className="has-text-grey-light is-size-5 has-text-centered">
        {description}
      </p>
    </div>
  );
};

export default ProductDesktopDescription;
