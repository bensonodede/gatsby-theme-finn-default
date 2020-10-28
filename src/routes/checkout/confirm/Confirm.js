import React from "react";
import Helmet from "react-helmet";

// Import components
import { ConfirmHeader, ConfirmImage, ConfirmFooter } from "./containers";

// Import styles
import "./styles.scss";

const Confirm = () => {
  return (
    <div className="confirm">
      {/* Page title */}
      <Helmet
        title={`Confirmation · Checkout · ${process.env.GATSBY_STORE_NAME}`}
        defer={false}
      />

      <div className="container">
        <div className="columns is-variable is-mobile is-multiline is-centered is-8-desktop">
          <div className="column is-10-mobile is-6-tablet is-4-desktop">
            {/* Confirm header */}
            <ConfirmHeader />

            {/* Confirm footer */}
            <ConfirmFooter />
          </div>

          {/* Confirm image */}
          <div className="column is-7-mobile is-10-tablet is-3-desktop">
            <div className="columns is-mobile is-multiline is-centered">
              <ConfirmImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
