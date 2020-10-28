import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { androidClose } from "react-icons-kit/ionicons/androidClose";

const CloseModalBtnMobile = ({ toggleModal }) => (
  <button
    type={"button"}
    onClick={toggleModal}
    className="close-modal-btn__mobile"
  >
    {/* Close icon */}
    <Icon
      className="close-modal-btn__mobile-icon"
      icon={androidClose}
      size={"100%"}
    />
  </button>
);

export default CloseModalBtnMobile;
