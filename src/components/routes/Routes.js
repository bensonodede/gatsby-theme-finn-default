import React from "react";
import { Router } from "@reach/router";

// Import components
import Home from "./home";
import Product from "./product";
import Checkout from "./checkout";

const Routes = () => (
  <Router>
    <Home path="/" />
    <Product path="/product/:humanId" />
    <Checkout path="/product/:humanId/checkout/*" />
  </Router>
);

export default Routes;
