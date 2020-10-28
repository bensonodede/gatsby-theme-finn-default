import React, { useRef } from "react";

// Import components
import { Icon } from "react-icons-kit";
import { bag } from "react-icons-kit/ionicons/bag";
import { useBag } from "components/useHooks";
import Tooltip from "components/tooltip";

const BagIcon = ({ toggleModal }) => {
  // Bag icon ref
  const bagIconRef = useRef();

  // Get number of items in bag
  const { bag: bagItems } = useBag();

  // Global total items variable
  let totalItems = 0;

  // Get sum of bag items
  if (bagItems[0]) {
    // Assign to totalItems
    totalItems = bagItems
      .map((item) => item.selectedQuantity)
      .reduce((prev, next) => prev + next);
  }

  return (
    <>
      <button
        ref={bagIconRef}
        type={"button"}
        onClick={toggleModal}
        className="bag-icon__wrapper"
      >
        {/* Number of items in the bag */}
        {bagItems.length > 0 && (
          <div className="bag-icon__dot">
            <h5 className="is-marginless">{totalItems}</h5>
          </div>
        )}

        {/* Bag icon */}
        <Icon icon={bag} size={"100%"} className="bag-icon" />
      </button>

      {/* Bag tooltip */}
      <Tooltip text={"Bag"} ref={bagIconRef} />
    </>
  );
};

export default BagIcon;
