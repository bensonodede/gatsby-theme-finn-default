import React from "react";

// Import components
import { ImgLoader } from "components/loader";

const ProductDetailsImage = ({ name, imgUrl }) => (
  <div className="column is-full-mobile is-4-tablet is-4-desktop">
    <div className="product__img-container">
      <ImgLoader
        transform={""}
        src={imgUrl}
        alt={name}
        className={"product__img"}
      />
    </div>
  </div>
);

export default ProductDetailsImage;
