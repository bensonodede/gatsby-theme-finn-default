import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { useQuery } from "@apollo/react-hooks";

// Import components
import { PageLoader } from "../../../loader";

// Import graphql operations
import { PAYMENT_POLL_QUERY } from "../../../graphql/query";

const Waiting = ({ location, humanId }) => {
  // Redirect if Order ID is missing
  useEffect(() => {
    if (!location.state) {
      navigate(`/product/${humanId}`, { replace: true });
    }
  }, [humanId, location.state]);

  // Destructure order ID from state
  let { orderId } = location.state;

  // Run query to polling for order-payment status
  const { error, data } = useQuery(PAYMENT_POLL_QUERY, {
    variables: { id: orderId },
    pollInterval: 1000
  });

  // If order ID is missing from navigation state
  if (!location.state) {
    return null;
  }

  // Error state
  if (error) {
    navigate(`/product/${humanId}`, { replace: true });
  }

  if (data) {
    let { paymentPoll } = data;

    // Successful payment
    if (paymentPoll) {
      if (paymentPoll.paymentStatus) {
        navigate(
          "success",
          { state: { order: data.paymentPoll } },
          { replace: true }
        );
      }
    }

    // Cancelled payment
    else {
      navigate(`/product/${humanId}`, { replace: true });
    }
  }

  return (
    <>
      <PageLoader text={"Waiting for payment"} />
    </>
  );
};

export default Waiting;
