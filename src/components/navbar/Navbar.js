import React from "react";
import { Link } from "@reach/router";

// Import styles
import "./styles.scss";

const Navbar = () => (
  <div className="navbar">
    <Link to={"/"}>
      <h1 className="title navbar__title is-size-7 is-marginless">
        {process.env.GATSBY_STORE_NAME}
      </h1>
    </Link>
  </div>
);

export default Navbar;
