import React from "react";

// Import styles
import "./styles.scss";

const LogoLoader = () => (
  <div className="logo-loader">
    <h5 className="title is-size-7 has-text-centered logo-loader__title">
      {process.env.GATSBY_STORE_NAME}
    </h5>
  </div>
);

export default LogoLoader;
