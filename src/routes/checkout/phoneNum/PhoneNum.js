import React from "react";
import Helmet from "react-helmet";

// Import components
import { PhoneNumHeader, PhoneNumForm } from "./containers";

// Import styles
import "./styles.scss";

const PhoneNum = () => {
  return (
    <div className="phone-num">
      {/* Page title */}
      <Helmet
        title={`Phone number · Checkout · ${process.env.GATSBY_STORE_NAME}`}
        defer={false}
      />

      <div className="container">
        <div className="columns is-mobile is-centered">
          <div className="column is-10-mobile is-6-tablet is-4-desktop">
            {/* Phone number header */}
            <PhoneNumHeader />

            {/* Phone number form */}
            <PhoneNumForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneNum;
