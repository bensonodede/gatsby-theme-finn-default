import React from "react";
import Routes from "../routes";
import { setDefaultBreakpoints, BreakpointProvider } from "react-socks";

// Import styles
import "../fonts/fonts.scss";
import "./index.scss";

// Devices screen breakpoints
setDefaultBreakpoints([
  { mobile: 0 },
  { tablet: 768 },
  { desktop: 1024 },
  { widescreen: 1216 },
  { fullhd: 1408 },
]);

// eslint-disable-next-line react/display-name
export default () => (
  /* Breakpoint provider */
  <BreakpointProvider>
    {/* App Routes */}
    <Routes />
  </BreakpointProvider>
);
