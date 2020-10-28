import React from "react";
import { Router, useLocation } from "@reach/router";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Import components
import Delivery from "./delivery";
import Order from "./order";
import PhoneNum from "./phoneNum";
import Confirm from "./confirm";
import Waiting from "./waiting";
import Success from "./success";

const Checkout = () => {
  // Get route location
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        in={true}
        appear={true}
        mountOnEnter={true}
        unmountOnExit={true}
        key={location.key}
        classNames={"fadeUp"}
        timeout={300}
      >
        <Router>
          <Delivery path="delivery" />
          <Order path="order" />
          <PhoneNum path="phone-number" />
          <Confirm path="confirm" />
          <Waiting path="waiting" />
          <Success path="success" />
        </Router>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Checkout;
