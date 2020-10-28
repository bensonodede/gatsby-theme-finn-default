import React from "react";
import GoogleMapReact from "google-map-react";

// Import functions
import { createMapOptions, renderPolyline, getAddress } from "./functions";

const OrderMapWrapper = ({
  children,
  deliveryLocation,
  storeLocation,
  setAddress,
}) => (
  <div className="order-map">
    <GoogleMapReact
      options={createMapOptions}
      defaultCenter={deliveryLocation}
      defaultZoom={16}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => {
        // Render polyline
        renderPolyline(map, maps, storeLocation, deliveryLocation);

        // Get delivery location address
        getAddress(maps, deliveryLocation).then((result) => setAddress(result));
      }}
    >
      {children}
    </GoogleMapReact>
  </div>
);

export default OrderMapWrapper;
