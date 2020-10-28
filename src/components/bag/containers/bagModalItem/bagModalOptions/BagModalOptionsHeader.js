import React, { useEffect } from "react";
import { forceCheck } from "react-lazyload";

// Import components
import { ImgLoader } from "components/loader";

const BagModalOptionsHeader = ({ imgUrl, name, selectedVariant }) => {
  // Load image on mount
  useEffect(() => {
    setTimeout(() => {
      forceCheck();
    }, 1000);
  }, []);

  return (
    <div className="bag-modal-options__header">
      {/* Item image */}
      <div className="bag-modal__item-img-wrapper">
        <ImgLoader
          transform={"c_thumb,g_center,r_8,w_48,h_48"}
          src={imgUrl}
          alt={name}
          className="bag-modal__item-img"
        />
      </div>

      {/* Item title */}
      <div className="bag-modal-options__title">
        <h5 className="is-size-6 bag-modal__item-description">{name}</h5>
        <h5 className="bag-modal__item-description bag-modal__item-description--variant">
          {selectedVariant.label}
        </h5>
      </div>
    </div>
  );
};

export default BagModalOptionsHeader;
