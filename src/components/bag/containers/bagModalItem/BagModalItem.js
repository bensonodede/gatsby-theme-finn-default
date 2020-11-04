import React, { useEffect } from "react";

// Import components
import { useBag } from "components/useHooks";
import { useModal } from "components/modal";
import BagModalItemImage from "./BagModalItemImage";
import BagModalItemQuantity from "./BagModalItemQuantity";
import BagModalItemDescription from "./BagModalItemDescription";
import BagModalItemPrice from "./BagModalItemPrice";
import BagModalOptions from "./bagModalOptions";

// Import styles
import "./styles.scss";

const BagModalItem = ({ item, setShowRemovedToast }) => {
  // Destructure bag functions
  let { removeFromBag } = useBag();

  // Options modal
  const [isOptionsOpen, toggleOptionsModal] = useModal(false);

  // Destructure item data
  let { imgUrl, selectedQuantity, name, selectedVariant, price } = item;

  // On Options modal close
  useEffect(() => {
    if (selectedQuantity < 1) {
      // Remove item from bag
      removeFromBag(item);

      // Show error toast
      setShowRemovedToast(true);
    }
  }, [!isOptionsOpen]);

  return (
    <div className="bag-modal__item" onClick={toggleOptionsModal}>
      {/* Image */}
      <BagModalItemImage imgUrl={imgUrl} name={name}/>

      <div className="bag-modal__item-content">
        <div className="bag-modal__item-content-description">
          {/* Quantity */}
          <BagModalItemQuantity selectedQuantity={selectedQuantity} />

          {/* Name and Variant label */}
          <BagModalItemDescription
            name={name}
            selectedVariant={selectedVariant}
          />
        </div>

        {/* Price */}
        <BagModalItemPrice price={price} selectedQuantity={selectedQuantity} />

        {/* Options modal */}
        <BagModalOptions
          item={item}
          isOptionsOpen={isOptionsOpen}
          toggleOptionsModal={toggleOptionsModal}
          setShowRemovedToast={setShowRemovedToast}
        />
      </div>
    </div>
  );
};

export default BagModalItem;
