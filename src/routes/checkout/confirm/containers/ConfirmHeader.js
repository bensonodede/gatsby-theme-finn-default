import React from "react";

// Import components
import { useCheckout } from "components/useHooks";

const ConfirmHeader = () => {
  // Get phone number from checkout state
  let {
    checkout: { phoneNum },
  } = useCheckout();

  // Format phone number for readability
  const phoneNumMasked = phoneNum.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{3})$/g,
    "+$1 ($2) $3 $4"
  );

  return (
    <>
      <h1 className="title is-size-3">You're almost there.</h1>
      <p>
        Once you press confirm, M-pesa will prompt your phone on{" "}
        <span className="title is-size-6">{phoneNumMasked}. </span>
        Enter your pin to complete the transaction.
      </p>
    </>
  );
};

export default ConfirmHeader;
