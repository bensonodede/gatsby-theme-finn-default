import React, { useState, useEffect, useRef, useCallback } from "react";
import SwiperCore, { Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import components
import { ImageModal } from "components/modal";
import { ImgLoader } from "components/loader";
import { Icon } from "react-icons-kit";
import { chevronLeft } from "react-icons-kit/ionicons/chevronLeft";
import { chevronRight } from "react-icons-kit/ionicons/chevronRight";

const ProductDesktopImageModal = ({
  toggleModal,
  isOpen,
  currentImgSlide,
  imgUrls,
  name,
}) => {
  const swiperRef = useRef(null);

  // Install Swiper components
  SwiperCore.use([Lazy]);

  // Track current slide index state
  const [currentModalSlide, setCurrentModalSlide] = useState(currentImgSlide);

  // Set current slide on modal open
  useEffect(() => {
    setCurrentModalSlide(currentImgSlide);
  }, [currentImgSlide]);

  // Go to previous slide function
  const goPrevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  // Go to next slide function
  const goNextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);

  // Show slide buttons
  const showPrevButton = imgUrls.length > 1 && currentModalSlide !== 0;
  const showNextButton =
    imgUrls.length > 1 && currentModalSlide !== imgUrls.length - 1;

  // Prev slide button Component
  const PrevSlideBtn = () => (
    <>
      {isOpen && showPrevButton && (
        <button
          onClick={goPrevSlide}
          type={"button"}
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
    </>
  );

  // Next slide button Component
  const NextSlideBtn = () => (
    <>
      {isOpen && showNextButton && (
        <button
          onClick={goNextSlide}
          type={"button"}
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
    </>
  );

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
            {currentModalSlide + 1} / {imgUrls.length}
          </h5>
        </div>
      )}

      {/* Image modal */}
      <ImageModal isOpen={isOpen} toggleModal={null}>
        {/* Image modal slider */}
        <Swiper
          ref={swiperRef}
          initialSlide={currentModalSlide}
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={({ activeIndex }) => setCurrentModalSlide(activeIndex)}
          lazy={{ loadPrevNext: true }}
        >
          {/* Render images */}
          {imgUrls.map((imgUrl) => (
            <SwiperSlide key={imgUrl}>
              <div className={"product-desktop__img-modal-container"}>
                <ImgLoader
                  src={imgUrl}
                  alt={name}
                  className={"product-desktop__img-modal"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Prev slide btn*/}
        <PrevSlideBtn />

        {/* Next slide btn */}
        <NextSlideBtn />
      </ImageModal>
    </>
  );
};

export default ProductDesktopImageModal;
