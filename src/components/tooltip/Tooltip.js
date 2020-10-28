import React, { forwardRef } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

// Import styles
import "./styles.scss";

const Tooltip = forwardRef(({ children, text, placement = "bottom" }, ref) => (
  <Tippy
    reference={ref}
    placement={placement}
    content={text}
    arrow={false}
    animation={"fade"}
    touch={"false"}
    theme={"light-tooltip"}
  >
    {children}
  </Tippy>
));

Tooltip.displayName = "Tooltip";

export default Tooltip;
