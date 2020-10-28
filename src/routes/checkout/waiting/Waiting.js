import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { navigate } from "@reach/router";
import { useQuery } from "@apollo/react-hooks";

// Import components
import { PageLoader } from "components/loader";

// Import graphql operations
import { PAYMENT_POLL_QUERY } from "components/graphql/query";

const Waiting = ({ location }) => {
  // Redirect if Order ID is missing
  useEffect(() => {
    if (!location.state) {
      navigate(`/`, { replace: true });
    }
  }, []);

  // Destructure order ID from state
  let { orderId } = location.state;

  // Run query to polling for order-payment status
  const { error, data } = useQuery(PAYMENT_POLL_QUERY, {
    variables: { id: orderId },
    pollInterval: 1000,
  });

  // If order ID is missing from navigation state
  if (!location.state) {
    return null;
  }

  // Error state
  if (error) {
    navigate(`/`, { replace: true });
  }

  if (data) {
    // Destructure data
    let { paymentPoll } = data;

    // Successful payment
    if (paymentPoll) {
      if (paymentPoll.paymentStatus) {
        // Clear bag and checkout state
        localStorage.removeItem("bag");
        localStorage.removeItem("checkout");

        // Navigate to success page
        navigate(
          "success",
          { state: { order: data.paymentPoll } },
          { replace: true }
        );
      }
    }

    // Cancelled payment, navigate to home
    else {
      navigate(`/`, { replace: true });
    }
  }

  return (
    <>
      {/* Page title */}
      <Helmet
        title={`Processing payment · ${process.env.GATSBY_STORE_NAME}`}
        defer={false}
      />

      <PageLoader text={"Processing payment"} />
    </>
  );
};

export default Waiting;
