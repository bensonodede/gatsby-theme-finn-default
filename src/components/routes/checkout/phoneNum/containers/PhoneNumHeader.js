import React from "react";

const PhoneNumHeader = () => (
  <>
    <h1 className="title">What's your phone number?</h1>
    <p className="is-marginless">
      Please make sure this number is{" "}
      <span className="title is-size-6">M-pesa </span>
      enabled.
      <span role="img" aria-label="call-me-emoji">
        🤙🏾
      </span>
    </p>
  </>
);

export default PhoneNumHeader;
