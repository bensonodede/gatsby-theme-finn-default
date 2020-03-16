import React from "react";

const HomeHeader = () => (
  <div className="home-header">
    <div className="container">
      <div className="columns is-multiline is-mobile is-centered">
        <div className="column is-10-touch is-12-desktop ">
          <h1 className="title home-header__title ">
            <span className="home-header__title--very-light">Hey there,</span>
            <br />
            <span className="home-header__title--light">welcome to</span>
            <br />
            <span>{process.env.GATSBY_STORE_NAME}. </span>
            <span role="img" aria-label="waving hand">
              👋🏾
            </span>
          </h1>
        </div>
      </div>
    </div>
  </div>
);

export default HomeHeader;
