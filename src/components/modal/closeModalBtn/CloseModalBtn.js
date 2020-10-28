import React from "react";
import { Breakpoint } from "react-socks";

// Import components
import { CloseModalBtnMobile, CloseModalBtnDesktop } from "./containers";

// Import styles
import "./styles.scss";

const CloseModalBtn = ({ toggleModal }) => (
  <>
    {/* Mobile close button */}
    <Breakpoint mobile only>
      <CloseModalBtnMobile toggleModal={toggleModal} />
    </Breakpoint>

    {/* Desktop close button */}
    <Breakpoint tablet up>
      <CloseModalBtnDesktop toggleModal={toggleModal} />
    </Breakpoint>
  </>
);

export default CloseModalBtn;
