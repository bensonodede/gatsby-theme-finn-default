import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { navigate } from "@reach/router";

// Import components
import { SuccessToast, ErrorToast } from "components/toast";
import ConfirmFooterButton from "./ConfirmFooterButton";

// Import graphql operations
import { CREATE_ORDER } from "components/graphql/mutation";

// Import styles
import "./styles.scss";

const ConfirmFooter = () => {
  // Destructure mutation hooks
  const [mutate, { loading, error, data }] = useMutation(CREATE_ORDER);

  if (data) {
    setTimeout(() => {
      navigate(`/checkout/waiting`, {
        state: { orderId: data.createOrder.id },
      });
    }, 2000);
  }

  return (
    <>
      {/* Footer */}
      <ConfirmFooterButton mutate={mutate} loading={loading} />

      {/* Success toast */}
      {data && <SuccessToast text={"M-pesa request successful"} emoji={"👍"} />}

      {/* Error toast */}
      {error && <ErrorToast text={"M-pesa request failed"} emoji={"💩"} />}
    </>
  );
};

export default ConfirmFooter;
