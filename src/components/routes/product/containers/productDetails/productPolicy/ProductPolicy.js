import React from "react";
import { useQuery } from "@apollo/react-hooks";

// Import graphql operation
import { STORE_POLICY_QUERY } from "components/graphql/query";

// Import components
import { Loader } from "components/loader";
import { ErrorToast } from "components/toast";
import ProductPolicyItem from "./ProductPolicyItem";

// Policy accordion header

const ProductPolicy = () => {
  // policy query
  const { loading, error, data } = useQuery(STORE_POLICY_QUERY, {
    variables: {
      storeUsername: process.env.GATSBY_STORE_USERNAME
    }
  });

  // Loader state
  if (loading) {
    return <Loader />;
  }

  // Error state
  if (error) {
    return <ErrorToast text={"No internet connection"} emoji={"💩"} />;
  }

  let { policyDelivery, policyReturns } = data.store;

  return (
    <>
      {/* Delivery policy item */}
      <ProductPolicyItem
        title={"Delivery/Pickup"}
        emoji={"🚚"}
        policy={policyDelivery}
      />
      {/* Cancellation policy item */}
      <ProductPolicyItem
        title={"Refunds and returns"}
        emoji={"🚫"}
        policy={policyReturns}
      />
    </>
  );
};

export default ProductPolicy;
