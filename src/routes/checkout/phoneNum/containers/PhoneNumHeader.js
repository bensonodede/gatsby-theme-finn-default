import React from "react";

const PhoneNumHeader = () => (
  <>
    <h1 className="title is-size-3">
      What's your <br />
      phone number?
    </h1>
    <p className="is-marginless bullet-point">
      <span>👉 </span>
      <span>
        Please make sure this number is{" "}
        <span className="title is-size-6">M-pesa </span>
        enabled.
      </span>
    </p>

    <br />

    <p className="is-marginless bullet-point">
      <span>👉 </span>
      <span>
        We'll only use your number for confirming transactions, sending receipts
        and during delivery. We won't spam you or sell your info.❤️
      </span>
    </p>
  </>
);

export default PhoneNumHeader;
