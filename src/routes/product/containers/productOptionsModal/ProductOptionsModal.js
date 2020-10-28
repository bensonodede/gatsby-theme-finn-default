import React from "react";

// Import components
import { BottomModal, CloseModalBtn } from "components/modal";
import ProductOptionsModalForm from "./productOptionsModalForm";

// Import styles
import "./styles.scss";

const ProductOptionsModal = ({ isOpen, toggleModal, setToastOpen }) => (
  <BottomModal
    cardClassName={"product-options__modal-card"}
    isOpen={isOpen}
    toggleModal={toggleModal}
  >
    {/* Close modal */}
    <CloseModalBtn toggleModal={toggleModal} />

    {/* Options modal form */}
    <ProductOptionsModalForm
      toggleModal={toggleModal}
      setToastOpen={setToastOpen}
    />
  </BottomModal>
);

export default ProductOptionsModal;
