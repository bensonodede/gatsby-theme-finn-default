import React from "react";

// Import components
import { ImgLoader } from "components/loader";

const ProductDesktopImagePhoto = ({
  index,
  setCurrentSlide,
  toggleModal,
  src,
  name,
}) => (
  <div className={"product-desktop__img-container"}>
    {/* Image overlay */}
    <div
      onClick={async () => {
        // Set current slide
        await setCurrentSlide(index + 1);

        // Toggle image modal
        await toggleModal();
      }}
      className={"product-desktop__img-overlay"}
    />

    {/* Image lazy loader */}
    <ImgLoader
      src={src}
      alt={name}
      className={"product-desktop__img"}
      overflow={true}
    />
  </div>
);

export default ProductDesktopImagePhoto;
