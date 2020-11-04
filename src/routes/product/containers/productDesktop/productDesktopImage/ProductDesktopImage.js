import React, { useEffect, useState, useContext } from "react";
import { forceCheck } from "react-lazyload";

// Import data context
import ProductDataContext from "../../../ProductDataContext";

// Import components
import { useModal } from "components/modal";
import ProductDesktopImageList from "./ProductDesktopImageList";
import ProductDesktopImageModal from "./ProductDesktopImageModal";

// Import styles
import "./styles.scss";

const ProductDesktopImage = () => {
  // Destructure data
  const { name, imgUrls } = useContext(ProductDataContext);

  // Force load images
  useEffect(() => {
    setTimeout(() => {
      forceCheck();
    }, 1000);
  }, []);

  // Track current slide index
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isOpen, toggleModal] = useModal(false);

  return (
    <>
      {/* Image list */}
      <ProductDesktopImageList
        toggleModal={toggleModal}
        setCurrentSlide={setCurrentSlide}
        imgUrls={imgUrls}
        name={name}
      />

      {/* Image modal */}
      <ProductDesktopImageModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        currentIndex={currentSlide - 1}
        imgUrls={imgUrls}
        name={name}
      />
    </>
  );
};

export default ProductDesktopImage;
