import React from "react";
import { forceCheck } from "react-lazyload";

// Import components
import { useBag } from "components/useHooks";
import { BottomModal, CloseModalBtn } from "components/modal";

import BagModalEmpty from "./BagModalEmpty";
import BagModalList from "./BagModalList";

const BagModal = ({ isOpen, toggleModal }) => {
  // Get bag items
  const { bag: bagItems } = useBag();

  return (
    <BottomModal
      cardClassName={"bag-modal__mobile-card"}
      isOpen={isOpen}
      toggleModal={toggleModal}
      onScroll={forceCheck}
    >
      {/* Modal close button */}
      <CloseModalBtn toggleModal={toggleModal} />

      {/* Modal content */}
      <div className="container">
        <div className="columns is-mobile is-multiline is-centered">
          <div className="column is-11-mobile is-7-tablet is-4-desktop">
            {bagItems.length > 0 ? (
              <BagModalList bagItems={bagItems} />
            ) : (
              <BagModalEmpty toggleModal={toggleModal} />
            )}
          </div>
        </div>
      </div>
    </BottomModal>
  );
};

export default BagModal;
