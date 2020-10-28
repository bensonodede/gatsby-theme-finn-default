import React from "react";
import Helmet from "react-helmet";
import { navigate } from "@reach/router";

// Import components
import Button from "components/button";
import SuccessItem from "./SuccessItem";

// Import styles
import "./styles.scss";

const Success = () => (
  <div className="success">
    {/* Page title */}
    <Helmet
      title={`Success · ${process.env.GATSBY_STORE_NAME}`}
      defer={false}
    />

    <div className="container">
      <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-10-mobile is-6-tablet is-4-desktop">
          {/* Header */}
          <div className="success__header">
            {/* Emoji */}
            <h1 className="is-size-1">
              <span role="img" aria-label="party emoji">
                🎉
              </span>
            </h1>
            <h1 className="title is-size-3 is-marginless">
              Thanks!
              <br />
              Your payment was confirmed.
            </h1>
            <p className="is-size-6 has-text-grey-light success__sub-title">
              Here are some things to keep in mind.
            </p>
          </div>

          <SuccessItem
            emoji={"💬"}
            title={"Your order receipt"}
            description={
              "We've sent your receipt via SMS. It has all the important order details so you can use it as your proof of purchase."
            }
          />

          <SuccessItem
            emoji={"🚚"}
            title={"When do I get my stuff?"}
            description={
              "We'll reach out to arrange a convenient time to deliver to you."
            }
          />

          <SuccessItem
            emoji={"🙋🏾"}
            title={"Do you have any questions?"}
            description={
              "We've included our phone number in the SMS. Feel free to call us anytime."
            }
          />

          {/* Success button */}
          <div className="success__button">
            <Button
              isFullWidth
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
