import React from "react";
import numeral from "numeral";
import { navigate } from "@reach/router";

// Import components
import Button from "components/button";

const ProductFooter = ({ price, humanId, id }) => (
  <div className="product-footer">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-10">
          <div className="product-footer__details">
            {/* Product footer price */}
            <h5 className="title is-size-5 has-text-grey-darker is-marginless">
              {numeral(price).format("0,0")}{" "}
              <span className="is-size-7">KES</span>
            </h5>

            {/* Product footer buy button */}
            <Button
              onClick={() => {
                navigate(`/product/${humanId}/checkout/phone-number`, {
                  state: { id, price }
                });
              }}
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductFooter;
