import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { forceCheck } from "react-lazyload";

// Import components
import { ImageModal } from "components/modal";
import { ImgLoader } from "components/loader";
import { Icon } from "react-icons-kit";
import { androidClose } from "react-icons-kit/ionicons/androidClose";

const ProductMobileImageModal = ({
  toggleModal,
  isOpen,
  currentIndex,
  imgUrls,
  name,
}) => {
  // Force load images
  useEffect(() => {
    setTimeout(() => {
      forceCheck();
    }, 1000);
  }, []);

  // Track current slide index state
  const [currentModalSlide, setCurrentModalSlide] = useState(currentIndex + 1);

  useEffect(() => {
    setCurrentModalSlide(currentIndex + 1);
  }, [isOpen]);

  // React slick carousel settings
  const slickSettings = {
    lazyLoad: "progressive",
    arrows: false,
    dots: false,
    infinite: false,
    initialSlide: currentIndex,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 10,
    adaptiveHeight: true,
    className: "product-mobile__img-modal-slider",
    beforeChange: (oldIndex, newIndex) => {
      setCurrentModalSlide(newIndex + 1);
    },
  };

  return (
    <>
      {/* Image modal close button */}
      {isOpen && (
        <Icon
          onClick={toggleModal}
          icon={androidClose}
          size={"100%"}
          className={"product-mobile__img-modal-close-icon"}
        />
      )}

      {/* Image modal slide count */}
      {isOpen && (
        <div className="product-mobile__img-modal-slider-counter">
          {currentModalSlide} / {imgUrls.length}
        </div>
      )}

      {/* Image  modal */}
      <ImageModal isOpen={isOpen} toggleModal={null}>
        {/* Image modal slider */}
        <Slider {...slickSettings}>
          {imgUrls.map((imgUrl) => (
            <div key={imgUrl} className={"product-mobile__img-modal-container"}>
              <ImgLoader
                src={imgUrl}
                alt={name}
                className={"product-mobile__img-modal"}
              />
            </div>
          ))}
        </Slider>
      </ImageModal>
    </>
  );
};

export default ProductMobileImageModal;
