import Button from "components/button";
import React from "react";
import { navigate } from "@reach/router";

const BagModalFooter = () => (
  <div className="bag-modal__footer">
    <Button
      type={"button"}
      onClick={() => navigate(`/checkout/delivery`)}
      className="bag-modal__footer-btn"
    >
      Checkout
    </Button>
  </div>
);

export default BagModalFooter;
