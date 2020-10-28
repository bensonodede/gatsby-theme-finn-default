import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Helmet from "react-helmet";
import { CSSTransition } from "react-transition-group";

// Import components
import { useScript } from "components/useHooks";
import { ErrorToast } from "components/toast";
import { LogoLoader } from "components/loader";
import { STORE_DELIVERY_QUERY } from "components/graphql/query";
import { OrderProduct, OrderMap, OrderTally, OrderFooter } from "./containers";

// Import styles
import "./styles.scss";

const Order = () => {
  // Load Google Maps script
  const scriptStatus = useScript(
    `https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_MAPS_API_KEY}&libraries=places`
  );

  // Query store data
  const {
    loading: queryLoading,
    error: queryError,
    data: queryData,
  } = useQuery(STORE_DELIVERY_QUERY, {
    variables: {
      storeUsername: process.env.GATSBY_STORE_USERNAME,
    },
  });

  return (
    <>
      {/* Page title */}
      <Helmet
        title={`Order review · Checkout · ${process.env.GATSBY_STORE_NAME}`}
        defer={false}
      />

      {/* Loading state */}
      {(scriptStatus === "loading" || queryLoading) && <LogoLoader />}

      {/* Success state */}
      {scriptStatus === "ready" && queryData && (
        <CSSTransition
          in={true}
          appear={true}
          mountOnEnter={true}
          unmountOnExit={true}
          classNames={"fadeUp"}
          timeout={300}
        >
          <div className="order">
            <div className="container">
              <div className="columns is-mobile is-centered">
                <div className="column is-10-mobile is-6-tablet is-4-desktop">
                  <>
                    {/* Page title */}
                    <h1 className="title is-size-3 order__title">
                      Looks good, <br />
                      Here's your order.
                    </h1>

                    {/* Order product */}
                    <OrderProduct />

                    {/* Order map */}
                    <OrderMap queryData={queryData.store} />

                    {/* Order tally */}
                    <OrderTally queryData={queryData.store} />

                    {/* Order footer */}
                    <OrderFooter />
                  </>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      )}

      {/* Error state */}
      {(scriptStatus === "error" || queryError) && (
        <ErrorToast text={"No internet connection"} emoji={"💩"} />
      )}
    </>
  );
};

export default Order;
