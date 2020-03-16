import React from "react";
import { Router } from "@reach/router";

// Import components
import PhoneNum from "./phoneNum";
import Confirm from "./confirm";
import Waiting from "./waiting";
import Success from "./success";

const Checkout = () => (
  <Router>
    <PhoneNum path="phone-number" />
    <Confirm path="confirm" />
    <Waiting path="waiting" />
    <Success path="success" />
  </Router>
);

export default Checkout;
