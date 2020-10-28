import React, { useContext, useState } from "react";
import numeral from "numeral";

// Import data and bag context
import ProductDataContext from "../../../ProductDataContext";
import { useBag } from "components/useHooks";

// Import components
import Button from "components/button";
import { SuccessToast } from "components/toast";

const ProductMobileFooterButton = ({ totalQuantity, toggleOptionsModal }) => {
  // Toast state
  const [toastOpen, setToastOpen] = useState(false);

  // Destructure product data and bag context
  const { id, name, price, imgUrls, options } = useContext(ProductDataContext);
  const { addToBag } = useBag();

  return (
    <>
      {totalQuantity ? (
        <Button
          isFullWidth
          type={"button"}
          className="product-mobile__content-button"
          onClick={() => {
            if (options[0]) {
              // If there are options to choose, open options modal
              toggleOptionsModal();
            } else {
              // Add item to bag
              addToBag({
                name,
                price,
                productId: id,
                imgUrl: imgUrls[0],
                selectedVariant: {},
                selectedQuantity: 1,
              });

              // Set product added toast open
              setToastOpen(true);
            }
          }}
        >
          Add to bag
          {/* Product price */}
          <span className="product-mobile__content-price">
            {numeral(price).format("0,0")}
            <span className="product-mobile__content-currency">KES</span>
          </span>
        </Button>
      ) : (
        <Button
          type={"button"}
          isDisabled={true}
          className="product-mobile__content-button"
          isFullWidth
        >
          Sold out
          {/* Product price */}
          <span className="product-mobile__content-price">
            {numeral(price).format("0,0")}
            <span className="product-mobile__content-currency">KES</span>
          </span>
        </Button>
      )}

      {/* Product added toast */}
      {toastOpen && (
        <SuccessToast
          text={"Item added to bag"}
          emoji={"✨"}
          onClose={() => setToastOpen(false)}
        />
      )}
    </>
  );
};

export default ProductMobileFooterButton;
