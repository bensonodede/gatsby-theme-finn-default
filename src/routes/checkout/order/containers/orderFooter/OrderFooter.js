import React from "react";
import { navigate } from "@reach/router";

// Import components
import Button from "components/button";

// Import styles
import "./styles.scss";

const OrderFooter = () => (
  <div className="order-footer">
    <Button
      onClick={() => navigate(`/checkout/phone-number`)}
      type={"button"}
      isFullWidth
      className="order-footer__button"
    >
      Pay now
    </Button>
  </div>
);

export default OrderFooter;
