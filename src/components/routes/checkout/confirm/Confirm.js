import React, { useEffect } from "react";
import { navigate } from "@reach/router";

// Import components
import { ConfirmHeader, ConfirmImage, ConfirmFooter } from "./containers";

// Import styles
import "./styles.scss";

const Confirm = ({ humanId, location }) => {
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

  // Destructure phone number from navigation state
  let { phoneNum, id, price } = location.state;

  // Format phone number for readability
  const phoneNumMasked = phoneNum.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{3})$/g,
    "+$1 ($2) $3 $4"
  );

  return (
    <div className="confirm">
      <div className="container">
        <div className="columns is-mobile is-multiline is-centered">
          <div className="column is-10-mobile is-10-tablet is-7-desktop">
            <div className="columns is-mobile is-multiline is-centered">
              {/* Confirm header */}
              <ConfirmHeader phoneNum={phoneNumMasked} />

              {/* Confirm footer */}
              <ConfirmFooter
                humanId={humanId}
                productId={id}
                price={price}
                buyerNum={phoneNum}
                storeUsername={process.env.GATSBY_STORE_USERNAME}
              />
            </div>
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
