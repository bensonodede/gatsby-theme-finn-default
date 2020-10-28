import React, { useState } from "react";

// Import components
import { useCheckout } from "components/useHooks";
import OrderMapTitle from "./OrderMapTitle";
import OrderMapWrapper from "./OrderMapWrapper";

// Import styles
import "./styles.scss";

// Destination marker component
const DestinationMarker = () => <div className="destination-marker" />;

// Store marker component
const OriginMarker = () => <div className="origin-marker" />;

/********* Order map component**********/

const OrderMap = ({ queryData: { storeLocation } }) => {
  // Destructure checkout details
  const {
    checkout: { deliveryLocation },
  } = useCheckout();

  // Address state
  const [address, setAddress] = useState("");

  return (
    <div className="order__section">
      {/* Delivery location title */}
      <OrderMapTitle address={address} />

      {/* Delivery location map */}
      <OrderMapWrapper
        deliveryLocation={deliveryLocation}
        storeLocation={storeLocation}
        setAddress={setAddress}
      >
        {/* Destination marker */}
        <DestinationMarker
          lat={deliveryLocation.lat}
          lng={deliveryLocation.lng}
        />
        {/* Origin marker */}
        <OriginMarker lat={storeLocation.lat} lng={storeLocation.lng} />
      </OrderMapWrapper>
    </div>
  );
};

export default OrderMap;
