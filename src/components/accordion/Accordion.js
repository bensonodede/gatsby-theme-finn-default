import React, { useState } from "react";
import AnimateHeight from "react-animate-height";

// Import components
import { Icon } from "react-icons-kit";
import { androidAdd } from "react-icons-kit/ionicons/androidAdd";

// Import styling
import "./styles.scss";

const Accordion = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-wrapper">
      {/* Accordion title */}
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {header}

        {/* Accordion icon */}
        <div
          className={`accordion__icon${isOpen ? " accordion__icon--open" : ""}`}
        >
          <Icon icon={androidAdd} size={"100%"} />
        </div>
      </div>

      {/* Accordion content */}
      <div className={`accordion-item${isOpen ? " accordion-item--open" : ""}`}>
        <AnimateHeight duration={450} height={isOpen ? "auto" : 0}>
          {children}
        </AnimateHeight>
      </div>
    </div>
  );
};

export default Accordion;
