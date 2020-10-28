import React from "react";

const CloseModalBtnDesktop = ({ toggleModal }) => (
  <button
    type={"button"}
    onClick={toggleModal}
    className="close-modal-btn__desktop"
  >
    <h5 className="is-marginless">Close</h5>
  </button>
);

export default CloseModalBtnDesktop;
