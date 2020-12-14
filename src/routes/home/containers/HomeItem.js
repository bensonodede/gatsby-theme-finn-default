import React from "react";
import numeral from "numeral";
import slug from "slug";
import { Link } from "@reach/router";
import ScrollAnimation from "react-animate-on-scroll";

// Import components
import { ImgLoader } from "components/loader";

const HomeItem = ({ item: { id, imgUrls, name, price } }) => (
  <ScrollAnimation
    delay={1}
    duration={0.45}
    offset={0}
    animateIn={"home-item__animateIn"}
    animateOut={"home-item__animateOut"}
  >
    <Link className="home-item" to={`/product/${slug(name)}-${id}`}>
      {/* Item image */}
      <ImgLoader
        height={300}
        src={imgUrls[0]}
        alt={name}
        loadingClassName={"home-item__img home-item__img-loading"}
        className={"home-item__img"}
      />

      {/* Item details */}
      <div className="home-item__details">
        <h5 className="title home-item__title has-text-grey-darker">{name}</h5>
        <h5 className="title home-item__price is-marginless">
          {numeral(price).format("0,0")}{" "}
          <span className="home-item__currency">KES</span>
        </h5>
      </div>
    </Link>
  </ScrollAnimation>
);

export default HomeItem;
