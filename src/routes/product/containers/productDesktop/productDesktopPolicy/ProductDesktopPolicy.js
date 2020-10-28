import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { CSSTransition } from "react-transition-group";

// Import graphql operation
import { STORE_POLICY_QUERY } from "components/graphql/query";

// Import components
import { Loader } from "components/loader";
import { ErrorToast } from "components/toast";
import ProductDesktopPolicyItem from "./ProductDesktopPolicyItem";

// Import styles
import "./styles.scss";

const ProductDesktopPolicy = () => {
  // policy query
  const { loading, error, data } = useQuery(STORE_POLICY_QUERY, {
    variables: {
      storeUsername: process.env.GATSBY_STORE_USERNAME,
    },
  });

  // Loader state
  if (loading) {
    return <Loader />;
  }

  // Error state
  if (error) {
    return <ErrorToast text={"No internet connection"} emoji={"💩"} />;
  }

  // Destructure store data
  let { policyDelivery, policyReturns } = data.store;

  return (
    <CSSTransition
      in={true}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
      classNames={"fadeUp"}
      timeout={300}
    >
      <div className="product-desktop__policy">
        {/* Delivery policy item */}
        <ProductDesktopPolicyItem
          title={"Delivery/Pickup"}
          emoji={"🚚"}
          policy={policyDelivery}
        />

        {/* Cancellation policy item */}
        <ProductDesktopPolicyItem
          title={"Refunds and returns"}
          emoji={"🚫"}
          policy={policyReturns}
        />
      </div>
    </CSSTransition>
  );
};

export default ProductDesktopPolicy;
