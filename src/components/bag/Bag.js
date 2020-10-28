import React from "react";

// Import components
import { useModal } from "components/modal";
import { BagIcon, BagModal } from "./containers";

// Import styles
import "./styles.scss";

const Bag = () => {
  // Manage modal and quantity state
  const [isOpen, toggleModal] = useModal(false);

  return (
    <div>
      {/* Bag icon button */}
      <BagIcon toggleModal={toggleModal} />

      {/* Bag modal */}
      <BagModal isOpen={isOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default Bag;
