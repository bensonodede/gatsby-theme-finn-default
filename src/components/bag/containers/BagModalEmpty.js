import React from "react";
import Button from "components/button";
import { CSSTransition } from "react-transition-group";

const BagModalEmpty = ({ toggleModal }) => (
  <CSSTransition
    in={true}
    appear={true}
    mountOnEnter={true}
    unmountOnExit={true}
    classNames={"fadeUp"}
    timeout={300}
  >
    <div className="bag-modal__empty">
      {/* Emoji */}
      <h1 className="title is-size-3-mobile is-size-4-tablet is-size-3-desktop has-text-centered">
        🌵
      </h1>

      {/* Title */}
      <h1 className="title is-size-4-mobile is-size-4-tablet is-size-3-desktop has-text-centered is-marginless">
        Your bag is empty
      </h1>

      {/* Description */}
      <p className="bag-modal__empty-description has-text-grey-light is-size-6-mobile is-size-6-tablet is-size-5-desktop">
        Let's get some stuff in here.
      </p>

      {/* Button */}
      <Button onClick={toggleModal} className="bag-modal__empty-btn" isOutline>
        Keep browsing
      </Button>
    </div>
  </CSSTransition>
);

export default BagModalEmpty;
