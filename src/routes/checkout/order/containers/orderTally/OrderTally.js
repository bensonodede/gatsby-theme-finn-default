import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

// Import components
import { useBag, useCheckout } from "components/useHooks";
import OrderTallyRow from "./OrderTallyRow";

// Import functions
import { getProductTotal, getDistance, getDeliveryFee } from "./functions";

// Import styles
import "./styles.scss";
import { Loader } from "components/loader";

const OrderTally = ({
  queryData: { storeLocation, costPerKm, minDeliveryFee },
}) => {
  // Destructure checkout details
  const { setCheckout, checkout } = useCheckout();

  // Get bag items
  const { bag } = useBag();

  // Distance state
  const [distanceLoading, setDistanceLoading] = useState(true);

  // Distance matrix callback
  const getDistanceCallback = async (response, status) => {
    if (distanceLoading) {
      if (status === "OK") {
        // Set divide result by 1000 to get km
        let distance =
          (await response.rows[0].elements[0].distance.value) / 1000;

        // Get product total price
        let productTotal = await getProductTotal(bag);

        // Get delivery fee
        let deliveryFee = await getDeliveryFee({
          distance,
          costPerKm,
          minDeliveryFee,
        });

        // Set details to checkout
        await setCheckout((prevState) => {
          return {
            ...prevState,
            productTotal,
            deliveryFee,
          };
        });

        // Set loading to false
        await setDistanceLoading(false);
      }
    }
  };

  // Get distance between origin and destination (Result will be set to state)
  getDistance({
    storeLocation,
    deliveryLocation: checkout.deliveryLocation,
    getDistanceCallback,
  });

  // Loading state
  if (distanceLoading) {
    return (
      <div className="order-tally__loader">
        <Loader />
      </div>
    );
  }

  let { productTotal, deliveryFee } = checkout;

  // Render Tally component
  return (
    <CSSTransition
      in={true}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
      classNames={"fadeUp"}
      timeout={300}
    >
      <div className="order-tally">
        {/* Sub title */}
        <h5 className="title is-size-7 order__sub-title">COST BREAKDOWN</h5>

        {/* Product sub-total */}
        <OrderTallyRow
          label={"Sub-total"}
          price={productTotal}
          isTotal={false}
        />

        {/* Delivery fee */}
        <OrderTallyRow
          label={"Delivery fee"}
          price={deliveryFee}
          isTotal={false}
        />

        {/* Price total */}
        <OrderTallyRow
          label={"Total"}
          price={deliveryFee + productTotal}
          isTotal={true}
        />
      </div>
    </CSSTransition>
  );
};

export default OrderTally;
