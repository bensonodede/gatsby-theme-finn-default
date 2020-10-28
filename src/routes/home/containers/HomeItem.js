import React from "react";
import numeral from "numeral";
import { Link } from "@reach/router";
import slug from "slug";

// Import components
import { ImgLoader } from "components/loader";

const HomeItem = ({ item: { id, imgUrls, name, price } }) => (
  <Link to={`/product/${slug(name)}-${id}`}>
    <div className="home-item">
      {/* Item image */}
      <div className="home-item__img-container">
        <ImgLoader
          transform={"c_fill,h_1000,w_1000"}
          src={imgUrls[0]}
          alt={name}
          className={"home-item__img"}
        />
      </div>

      {/* Item details */}
      <div className="home-item__details">
        <h5 className="title home-item__title">{name}</h5>
        <p className="home-item__price is-marginless">
          {numeral(price).format("0,0")}{" "}
          <span className="home-item__currency">KES</span>
        </p>
      </div>
    </div>
  </Link>
);

export default HomeItem;
