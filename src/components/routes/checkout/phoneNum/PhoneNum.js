import React, { useEffect } from "react";
import { navigate } from "@reach/router";

// Import components
import { PhoneNumHeader, PhoneNumForm } from "./containers";

// Import styles
import "./styles.scss";

const PhoneNum = ({ humanId, location }) => {
  // Redirect if navigation state is missing
  useEffect(() => {
    if (!location.state) {
      navigate(`/product/${humanId}`, { replace: true });
    }
  }, [humanId, location.state]);

  // If navigation state is missing return null
  if (!location.state) {
    return null;
  }

  let { id, price } = location.state;

  return (
    <div className="phone-num">
      <div className="container">
        <div className="columns is-mobile is-centered">
          <div className="column is-10-mobile is-6-tablet is-4-desktop">
            {/* Phone number header */}
            <PhoneNumHeader />

            {/* Phone number form */}
            <PhoneNumForm humanId={humanId} id={id} price={price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneNum;
