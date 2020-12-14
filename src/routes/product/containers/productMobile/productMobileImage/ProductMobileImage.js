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
    <div
      className={`column is-11-mobile is-paddingless product-mobile__img-slider-wrapper${
        imgUrls.length === 1
          ? " product-mobile__img-slider-wrapper--single-img"
          : ""
      }`}
    >
      {/* Swiper slider */}
      <Swiper
        spaceBetween={18}
        slidesPerView={1}
        onSlideChange={({ activeIndex }) => setCurrentImgSlide(activeIndex)}
        lazy={{ loadPrevNext: true }}
        scrollbar={{ draggable: true }}
      >
        {imgUrls.map((imgUrl) => (
          <SwiperSlide key={imgUrl}>
            <div
              className={"product-mobile__img-container"}
              onClick={toggleModal}
            >
              <ImgLoader
                src={imgUrl}
                alt={name}
                loadingClassName={"product-mobile__img"}
                className={"product-mobile__img"}
              />
            </div>
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
