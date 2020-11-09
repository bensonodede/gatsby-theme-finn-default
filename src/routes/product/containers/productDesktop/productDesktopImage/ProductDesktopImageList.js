import React from "react";

// Import components
import ProductDesktopImagePhoto from "./ProductDesktopImagePhoto";

const ProductDesktopImageList = ({
  name,
  imgUrls,
  toggleModal,
  setCurrentImgSlide,
}) => (
  <div className={"product-desktop__img-list"}>
    {imgUrls.map((imgUrl, index) => (
      <ProductDesktopImagePhoto
        key={imgUrl}
        index={index}
        setCurrentImgSlide={setCurrentImgSlide}
        toggleModal={toggleModal}
        src={imgUrl}
        name={name}
      />
    ))}
  </div>
);

export default ProductDesktopImageList;
