import React, { useContext, useState } from "react";
import SwiperCore, { Scrollbar, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import product data context
import ProductDataContext from "../../../ProductDataContext";

// Import components
import { ImgLoader } from "components/loader";
import { useModal } from "components/modal";
import ProductMobileImageModal from "./ProductMobileImageModal";

// Import styles
import "./styles.scss";

const ProductMobileImage = () => {
  // Install Swiper components
  SwiperCore.use([Scrollbar, Lazy]);

  // Destructure data
  const { name, imgUrls } = useContext(ProductDataContext);

  // Track current slide index
  const [currentImgSlide, setCurrentImgSlide] = useState(0);
  const [isOpen, toggleModal] = useModal(false);

  return (
    <div className="column is-10-mobile is-paddingless product-mobile__img-slider-wrapper">
      {/* Swiper slider */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={({ activeIndex }) => setCurrentImgSlide(activeIndex)}
        lazy={{ loadPrevNext: true }}
        scrollbar={{ draggable: true }}
      >
        {imgUrls.map((imgUrl) => (
          <SwiperSlide key={imgUrl}>
            {({ isActive }) => (
              <div
                // prettier-ignore
                className={`product-mobile__img-container${isActive ? " product-mobile__img-container--active" : ""}`}
                onClick={() => toggleModal()}
              >
                <ImgLoader
                  src={imgUrl}
                  alt={name}
                  className={`product-mobile__img`}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Image modal */}
      <ProductMobileImageModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        currentImgSlide={currentImgSlide}
        imgUrls={imgUrls}
        name={name}
      />
    </div>
  );
};

export default ProductMobileImage;
