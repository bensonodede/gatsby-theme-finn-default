import React from "react";

// Import components
import { ImgLoader } from "components/loader";

const BagModalItemImage = ({ imgUrl }) => (
  <div className="bag-modal__item-img-wrapper">
    <ImgLoader
      transform={"c_thumb,g_center,r_8,w_48,h_48"}
      src={imgUrl}
      alt={name}
      className="bag-modal__item-img"
    />
  </div>
);

export default BagModalItemImage;
