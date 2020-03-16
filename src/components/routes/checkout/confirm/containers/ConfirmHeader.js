import React from "react";

const ConfirmHeader = ({ phoneNum }) => (
  <div className="column is-10-tablet is-10-desktop">
    <h1 className="title is-size-3-mobile">You're almost there.</h1>
    <p>
      Once you press confirm, M-pesa will prompt your phone on{" "}
      <span className="title is-size-6">{phoneNum}.</span> Enter your pin to
      complete the transaction.
    </p>
  </div>
);

export default ConfirmHeader;
