import React, { useContext, useState } from "react";
import { navigate } from "@reach/router";

// Import components
import { useCheckout } from "components/useHooks";
import DeliveryContext from "../../DeliveryContext";
import Button from "components/button";
import { ErrorToast } from "components/toast";

// Import styles
import "./styles.scss";

const DeliverySubmit = () => {
  // Get delivery location context
  const { deliveryLocation } = useContext(DeliveryContext);

  // Error toast state
  const [showToast, setShowToast] = useState(false);

  // Destructure checkout state
  const { setCheckout } = useCheckout();

  return (
    <>
      <div className="delivery-submit">
        {/* Card title */}
        <div className="delivery-submit__title">
          <h5 className="title is-size-6 is-marginless has-text-centered">
            Set delivery location
          </h5>
        </div>

        {/* Card description */}
        <div className="delivery-submit__description">
          <p className="is-size-6 has-text-grey-light delivery-submit__description-text">
            Place the pin exactly where you want us to drop off your stuff.
          </p>
          <h1 className="is-marginless is-size-3">🚚</h1>
        </div>

        {/* Submit button */}
        <Button
          className="delivery-submit__btn"
          isFullWidth
          type={"button"}
          onClick={async () => {
            if (deliveryLocation) {
              // Set location to checkout local storage
              await setCheckout((prevState) => {
                return {
                  ...prevState,
                  deliveryLocation,
                };
              });

              // Navigate to next checkout page
              navigate(`/checkout/order`);
            } else {
              // Show error toast
              setShowToast(true);
            }
          }}
        >
          Continue
        </Button>
      </div>

      {/* Error toast */}
      {showToast && (
        <ErrorToast
          text={"Please set a location"}
          emoji={"🌵"}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default DeliverySubmit;
