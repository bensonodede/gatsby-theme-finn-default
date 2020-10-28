import React from "react";
import { Router, useLocation } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Import components
import Home from "./home";
import Product from "./product";
import Checkout from "./checkout";
import Error404 from "./error404"

const Routes = () => {
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
          <Home path="/" />
          <Home path="/page/:pageNumber" />
          <Product path="/product/:slug" />
          <Checkout path="/checkout/*" />
          <Error404 default/>
        </Router>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Routes;
