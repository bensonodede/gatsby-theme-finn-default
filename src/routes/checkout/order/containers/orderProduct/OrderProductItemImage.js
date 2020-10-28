import React from "react";

// Import components
import { ImgLoader } from "components/loader";

const OrderProductItemImage = ({ imgUrl, name }) => (
  <div className="order-product__img-wrapper">
    <ImgLoader
      transform={"c_thumb,g_center,r_8,w_48,h_48"}
      src={imgUrl}
      alt={name}
      className="order-product__img"
    />
  </div>
);

export default OrderProductItemImage;
