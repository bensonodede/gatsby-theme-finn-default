import React, { useState } from "react";
import TinyAccordion from "react-tiny-accordion";

// Import components
import { Icon } from "react-icons-kit";
import { androidAdd } from "react-icons-kit/ionicons/androidAdd";

// Import styling
import "./styles.scss";

const Accordion = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TinyAccordion
      transitionDuration={300}
      className="accordion"
      onChange={() => setIsOpen(!isOpen)}
    >
      <div
        data-header={
          <div className="accordion__header">
            {header}

            {/* Accordion icon */}
            <div
              className={`accordion__icon ${isOpen && `accordion__icon--open`}`}
            >
              <Icon icon={androidAdd} size={"100%"} />
            </div>
          </div>
        }
      >
        {children}
      </div>
    </TinyAccordion>
  );
};

export default Accordion;
