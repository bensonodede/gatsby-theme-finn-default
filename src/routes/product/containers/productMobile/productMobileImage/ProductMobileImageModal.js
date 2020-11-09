import React, { useState, useEffect } from "react";
import SwiperCore, { Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import components
import { ImageModal } from "components/modal";
import { ImgLoader } from "components/loader";
import { Icon } from "react-icons-kit";
import { androidClose } from "react-icons-kit/ionicons/androidClose";

const ProductMobileImageModal = ({
  toggleModal,
  isOpen,
  currentImgSlide,
  imgUrls,
  name,
}) => {
  // Install Swiper components
  SwiperCore.use([Lazy]);

  // Track current slide index state
  const [currentModalSlide, setCurrentModalSlide] = useState(currentImgSlide);

  // Set current slide
  useEffect(() => {
    setCurrentModalSlide(currentImgSlide);
  }, [currentImgSlide]);

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
          {currentModalSlide + 1} / {imgUrls.length}
        </div>
      )}

      {/* Image  modal */}
      <ImageModal isOpen={isOpen} toggleModal={null}>
        <Swiper
          initialSlide={currentModalSlide}
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={({ activeIndex }) => setCurrentModalSlide(activeIndex)}
          lazy={{ loadPrevNext: true }}
        >
          {imgUrls.map((imgUrl) => (
            <SwiperSlide key={imgUrl}>
              <div className={"product-mobile__img-modal-container"}>
                <ImgLoader
                  src={imgUrl}
                  alt={name}
                  className={"product-mobile__img-modal"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ImageModal>
    </>
  );
};

export default ProductMobileImageModal;
