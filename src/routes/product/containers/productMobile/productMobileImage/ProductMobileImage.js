import React, { useEffect, useContext, useState } from "react";
import Slider from "react-slick";
import { forceCheck } from "react-lazyload";

// Import product data context
import ProductDataContext from "../../../ProductDataContext";

// Import components
import { ImgLoader } from "components/loader";
import { useModal } from "components/modal";
import ProductMobileImageModal from "./ProductMobileImageModal";

// Import styles
import "./styles.scss";

const ProductMobileImage = () => {
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

  // React slick carousel settings
  const slickSettings = {
    lazyLoad: "ondemand",
    arrows: false,
    dots: false,
    infinite: false,
    initialSlide: 0,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 10,
    className: "product-mobile__img-slider",
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex + 1);
    },
  };

  return (
    <div className="column is-full-mobile is-paddingless product-mobile__img-slider-wrapper">
      {/* Image slide count */}
      <div className="product-mobile__img-slider-counter">
        {currentSlide} / {imgUrls.length}
      </div>

      {/* Image slider */}
      <Slider {...slickSettings}>
        {imgUrls.map((imgUrl) => (
          <div
            key={imgUrl}
            className="product-mobile__img-container"
            onClick={() => {
              toggleModal();
            }}
          >
            {/* Image */}
            <ImgLoader
              src={imgUrl}
              alt={name}
              className={"product-mobile__img"}
              height={17}
            />
          </div>
        ))}
      </Slider>

      {/* Image modal */}
      <ProductMobileImageModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        currentIndex={currentSlide - 1}
        imgUrls={imgUrls}
        name={name}
      />
    </div>
  );
};

export default ProductMobileImage;
