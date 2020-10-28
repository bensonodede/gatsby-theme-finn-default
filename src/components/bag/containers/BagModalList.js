import React, { useEffect, useState } from "react";
import { forceCheck } from "react-lazyload";

// Import components
import { ErrorToast } from "components/toast";
import BagModalItem from "./bagModalItem";
import BagModalFooter from "./BagModalFooter";
import BagModalTally from "./BagModalTally";

const BagModalList = ({ bagItems }) => {
  useEffect(() => {
    // Load images on mount
    setTimeout(() => {
      forceCheck();
    }, 1000);

    // Prevent body scroll
    document.body.style.overflow = "hidden";

    // Enable body scroll on unmount
    return () => (document.body.style.overflow = "unset");
  }, []);

  //
  const [showRemovedToast, setShowRemovedToast] = useState(false);

  return (
    <div className="bag-modal__list">
      {/* Title */}
      <h1 className="title is-size-4-mobile is-size-4-tablet is-size-3-desktop bag-modal__title has-text-centered">
        Your bag
      </h1>

      {/* Bag items */}
      <div className="bag-modal__list-items">
        {bagItems.map((item) => (
          <BagModalItem
            setShowRemovedToast={setShowRemovedToast}
            key={`${item.productId}${item.selectedVariant.id}`}
            item={item}
          />
        ))}
      </div>

      {/* Tally */}
      <BagModalTally bagItems={bagItems} />

      {/* Footer */}
      <BagModalFooter />

      {/* Removed toast */}
      {showRemovedToast && (
        <ErrorToast
          text={"Item removed"}
          emoji={"✌"}
          onClose={() => setShowRemovedToast(false)}
        />
      )}
    </div>
  );
};

export default BagModalList;
