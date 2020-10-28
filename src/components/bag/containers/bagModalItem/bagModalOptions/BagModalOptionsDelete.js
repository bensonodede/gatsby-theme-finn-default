import React from "react";

// Import components
import Button from "components/button";
import { useBag } from "components/useHooks";
import { Icon } from "react-icons-kit";
import { ic_delete } from "react-icons-kit/md/ic_delete";

const BagModalOptionsDelete = ({
  item,
  toggleOptionsModal,
  setShowRemovedToast,
}) => {
  // Destructure bag functions
  let { removeFromBag } = useBag();

  return (
    <div>
      {/* Remove button */}
      <Button
        onClick={async () => {
          // Remove item after modal animation
          setTimeout(() => {
            removeFromBag(item);
          }, 450);

          // Close options modal
          await toggleOptionsModal();

          // Show toast
          await setShowRemovedToast(true);
        }}
        type={"button"}
        isFullWidth
        isOutline
        className="bag-modal-options__delete"
      >
        <Icon
          className="bag-modal-options__delete-icon"
          icon={ic_delete}
          size={"100%"}
        />
        <span className="is-marginless">Remove</span>
      </Button>

      {/* Close modal button */}
      <Button
        className={""}
        type={"button"}
        isFullWidth
        isLight
        onClick={() => toggleOptionsModal()}
      >
        Done
      </Button>
    </div>
  );
};

export default BagModalOptionsDelete;
