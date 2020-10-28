import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { forceCheck } from "react-lazyload";

// Import components
import { ImageModal } from "components/modal";
import { ImgLoader } from "components/loader";
import { Icon } from "react-icons-kit";
import { chevronLeft } from "react-icons-kit/ionicons/chevronLeft";
import { chevronRight } from "react-icons-kit/ionicons/chevronRight";

const ProductDesktopImageModal = ({
  toggleModal,
  isOpen,
  currentIndex,
  imgUrls,
  name,
}) => {
  // Track current slide index state
  const [currentModalSlide, setCurrentModalSlide] = useState(currentIndex + 1);

  // Force load images on mount
  useEffect(() => {
    setTimeout(() => {
      forceCheck();
    }, 1000);
  }, []);

  // Set current slide on modal open
  useEffect(() => {
    setCurrentModalSlide(currentIndex + 1);
  }, [isOpen]);

  // Slider ref
  const sliderRef = useRef(null);

  // React slick carousel settings
  const slickSettings = {
    lazyLoad: "ondemand",
    arrows: false,
    dots: false,
    infinite: false,
    draggable: false,
    initialSlide: currentIndex,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 10,
    adaptiveHeight: true,
    className: "product-desktop__img-modal-slider",
    beforeChange: (oldIndex, newIndex) => {
      setCurrentModalSlide(newIndex + 1);
    },
  };

  // Show slide buttons
  const showPrevButton = imgUrls.length > 1 && currentModalSlide !== 1;
  const nextPrevButton =
    imgUrls.length > 1 && currentModalSlide !== imgUrls.length;

  return (
    <>
      {/* Image modal close button */}
      {isOpen && (
        <button
          type={"button"}
          onClick={toggleModal}
          className="product-desktop__img-modal-close"
        >
          <h5 className="is-marginless">Close</h5>
        </button>
      )}

      {/* Image modal slide count */}
      {isOpen && (
        <div className="product-desktop__img-modal-slider-counter">
          <h5 className={"is-marginless"}>
            {currentModalSlide} / {imgUrls.length}
          </h5>
        </div>
      )}

      {/* Prev slide button */}
      {isOpen && showPrevButton && (
        <button
          type={"button"}
          onClick={() => sliderRef.current.slickPrev()}
          className={
            "product-desktop__img-modal-btn  product-desktop__img-modal-btn--prev"
          }
        >
          <Icon
            size={"100%"}
            icon={chevronLeft}
            className={"product-desktop__img-modal-btn-icon"}
          />
        </button>
      )}

      {/* Next slide button */}
      {isOpen && nextPrevButton && (
        <button
          type={"button"}
          onClick={() => sliderRef.current.slickNext()}
          className={
            "product-desktop__img-modal-btn product-desktop__img-modal-btn--next"
          }
        >
          <Icon
            size={"100%"}
            icon={chevronRight}
            className={"product-desktop__img-modal-btn-icon"}
          />
        </button>
      )}

      {/* Image modal */}
      <ImageModal isOpen={isOpen} toggleModal={null}>
        {/* Image modal slider */}
        <Slider ref={sliderRef} {...slickSettings}>
          {imgUrls.map((imgUrl) => (
            <div
              key={imgUrl}
              className={"product-desktop__img-modal-container"}
            >
              <ImgLoader
                src={imgUrl}
                alt={name}
                className={"product-desktop__img-modal"}
              />
            </div>
          ))}
        </Slider>
      </ImageModal>
    </>
  );
};

export default ProductDesktopImageModal;
