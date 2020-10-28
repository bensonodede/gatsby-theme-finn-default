import React from "react";

// Import components
import { Breakpoint } from "react-socks";
import { BottomModal, CenterModal } from "components/modal";
import BagModalOptionsQuantity from "./BagModalOptionsQuantity";
import BagModalOptionsDelete from "./BagModalOptionsDelete";
import BagModalOptionsHeader from "./BagModalOptionsHeader";

// Import styles
import "./styles.scss";

//
const BagModalWrapper = ({ children, isOptionsOpen, toggleOptionsModal }) => (
  <>
    {/* Mobile modal */}
    <Breakpoint mobile only>
      <BottomModal isOpen={isOptionsOpen} toggleModal={toggleOptionsModal}>
        {children}
      </BottomModal>
    </Breakpoint>

    {/* Desktop modal */}
    <Breakpoint tablet up>
      <CenterModal
        cardClassName={"bag-modal-options__desktop-modal"}
        isOpen={isOptionsOpen}
        toggleModal={toggleOptionsModal}
      >
        {children}
      </CenterModal>
    </Breakpoint>
  </>
);

const BagModalOptions = ({
  item,
  isOptionsOpen,
  toggleOptionsModal,
  setShowRemovedToast,
}) => {
  // Destructure data
  let { imgUrl, name, selectedVariant } = item;

  return (
    <BagModalWrapper
      isOptionsOpen={isOptionsOpen}
      toggleOptionsModal={toggleOptionsModal}
    >
      {/* Quantity header */}
      <BagModalOptionsHeader
        imgUrl={imgUrl}
        name={name}
        selectedVariant={selectedVariant}
      />

      <div className="bag-modal-options__body">
        {/* Quanity form */}
        <BagModalOptionsQuantity item={item} />

        {/* Delete Button */}
        <BagModalOptionsDelete
          item={item}
          toggleOptionsModal={toggleOptionsModal}
          setShowRemovedToast={setShowRemovedToast}
        />
      </div>
    </BagModalWrapper>
  );
};

export default BagModalOptions;
