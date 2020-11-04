import React from "react";

// Import components
import ProductDesktopImagePhoto from "./ProductDesktopImagePhoto";

const ProductDesktopImageList = ({ name, imgUrls, toggleModal, setCurrentSlide }) => (
  <div className={"product-desktop__img-list"}>
    {imgUrls.map((imgUrl, index) => (
      <ProductDesktopImagePhoto
        key={imgUrl}
        index={index}
        setCurrentSlide={setCurrentSlide}
        toggleModal={toggleModal}
        src={imgUrl}
        name={name}
      />
    ))}
  </div>
);

export default ProductDesktopImageList;
