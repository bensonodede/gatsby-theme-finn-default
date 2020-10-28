import React from "react";

// Import components
import Button from "components/button";
import { Icon } from "react-icons-kit";
import { locked } from "react-icons-kit/ionicons/locked";
import { useCheckout, useBag } from "components/useHooks";

const ConfirmFooterButton = ({ mutate, loading }) => {
  // Get bag items state
  let { bag } = useBag();

  // Get checkout state
  let { checkout } = useCheckout();

  // Extract values from bag items
  let products = bag.map((item) => {
    let obj = {};
    obj["productId"] = item.productId;
    obj["variantId"] = item.selectedVariant.id;
    obj["selectedQuantity"] = item.selectedQuantity;

    return obj;
  });

  return (
    <div className="confirm-footer">
      <Button
        className="confirm-footer__btn"
        isLoading={loading}
        isFullWidth={true}
        isLight={true}
        onClick={() =>
          mutate({
            variables: {
              ...checkout,
              orderProducts: products,
              storeUsername: process.env.GATSBY_STORE_USERNAME,
            },
          })
        }
      >
        {/* Lock icon */}
        <div className="confirm-footer__icon-wrapper">
          <Icon icon={locked} size={"100%"} className="confirm-footer__icon" />
        </div>

        {/* Confirm text */}
        <span>Confirm and pay</span>
      </Button>
    </div>
  );
};

export default ConfirmFooterButton;
