import React from "react";
import numeral from "numeral";
import { Link } from "@reach/router";

// Import components
import { ImgLoader } from "../../../loader";

const HomeItem = ({ item: { imgUrl, name, price, humanId } }) => (
  <Link to={`product/${humanId}`}>
    <div className="home-item">
      {/* Item image */}
      <div className="home-item__img-container">
        <ImgLoader
          transform={"c_fill,h_1000,w_1000"}
          src={imgUrl}
          alt={name}
          className={"home-item__img"}
        />
      </div>

      {/* Item details */}
      <div className="content home-item__details">
        <h6 className="title is-marginless">{name}</h6>
        <p className="is-marginless is-size-6">
          {numeral(price).format("0,0")}{" "}
          <span className="home-item__currency">KES</span>
        </p>
      </div>
    </div>
  </Link>
);

export default HomeItem;
