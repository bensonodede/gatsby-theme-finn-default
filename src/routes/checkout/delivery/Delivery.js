import React, { useState } from "react";
import Helmet from "react-helmet";
import { CSSTransition } from "react-transition-group";

// Import components
import { useScript } from "components/useHooks";
import { PageLoader } from "components/loader";
import { ErrorToast } from "components/toast";
import DeliveryContext from "./DeliveryContext";
import { DeliverySearch, DeliveryMap, DeliverySubmit } from "./containers";

// Import styles
import "./styles.scss";

const Delivery = () => {
  // Load Google Maps script
  const scriptStatus = useScript(
    `https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_MAPS_API_KEY}&libraries=places`
  );

  // Selected location coordinates and zoom level --> Pass state to context
  const [deliveryLocation, setDeliveryLocation] = useState(null);
  const [mapZoom, setMapZoom] = useState(null);

  return (
    <div className="delivery">
      {/* Page title */}
      <Helmet
        title={`Delivery · Checkout · ${process.env.GATSBY_STORE_NAME}`}
        defer={false}
      />

      {/* Show loader while script is loading */}
      {scriptStatus === "loading" && <PageLoader />}

      {/* Render map and search once script is fully loaded */}
      {scriptStatus === "ready" && (
        <DeliveryContext.Provider
          value={{
            deliveryLocation,
            setDeliveryLocation,
            mapZoom,
            setMapZoom,
          }}
        >
          <CSSTransition
            in={true}
            appear={true}
            mountOnEnter={true}
            unmountOnExit={true}
            classNames={"fadeUp"}
            timeout={300}
          >
            <>
              {/* Delivery location search */}
              <DeliverySearch />

              {/* Delivery map */}
              <DeliveryMap />

              {/* Delivery submit */}
              <DeliverySubmit />
            </>
          </CSSTransition>
        </DeliveryContext.Provider>
      )}

      {/* Show error toast if script fails to load */}
      {scriptStatus === "error" && (
        <ErrorToast text={"No internet connection"} emoji={"💩"} />
      )}
    </div>
  );
};

export default Delivery;
