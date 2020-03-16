import React from "react";
import { navigate } from "@reach/router";

// Import components
import Button from "components/button";

// Import styles
import "./styles.scss";

const Success = () => (
  <div className="success">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-10-mobile is-6-tablet is-5-desktop">
          {/* Emoji */}
          <span role="img" aria-label="party emoji" className="title is-size-3">
            🎉
          </span>

          {/* Title */}
          <h1 className="title is-size-3">Success!</h1>

          {/* Description */}
          <p className="is-size-6">
            Your payment was confirmed. We've sent you an{" "}
            <span className="title is-size-6">SMS</span> with your purchase
            receipt and our contact details.{" "}
            <span className="has-text-grey-light">
              ( If you're feeling a little anxious waiting for your order, feel
              free to call us anytime
              <span role="img" aria-label="hugging emoji">
                🤗
              </span>{" "}
              )
            </span>
          </p>

          {/* Success button */}
          <div className="success__button">
            <Button
              onClick={() => {
                navigate("/", { replace: true });
              }}
            >
              Go back to store
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Success;
