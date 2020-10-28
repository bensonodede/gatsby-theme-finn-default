import React, { useState, useEffect } from "react";

// Import components
import { useBag, useCheckout } from "components/useHooks";
import OrderTallyRow from "./OrderTallyRow";

// Import functions
import { getProductTotal, getDistance, getDeliveryFee } from "./functions";

// Import styles
import "./styles.scss";

const OrderTally = ({
  queryData: { storeLocation, costPerKm, minDeliveryFee },
}) => {
  // Destructure checkout details
  const {
    setCheckout,
    checkout: { deliveryLocation },
  } = useCheckout();

  // Get bag items
  const { bag } = useBag();

  // Distance state
  const [distance, setDistance] = useState(1);

  // Get product total price
  const productTotal = getProductTotal(bag);

  // Get distance between origin and destination (Result will be set to state)
  getDistance({ storeLocation, deliveryLocation, setDistance });

  // Get delivery fee
  let deliveryFee = getDeliveryFee({ distance, costPerKm, minDeliveryFee });

  useEffect(() => {
    // Set details to checkout
    setCheckout((prevState) => {
      return {
        ...prevState,
        productTotal,
        deliveryFee,
      };
    });
  }, []);

  return (
    <div className="order-tally">
      {/* Sub title */}
      <h5 className="title is-size-7 order__sub-title">COST BREAKDOWN</h5>

      {/* Product sub-total */}
      <OrderTallyRow label={"Sub-total"} price={productTotal} isTotal={false} />

      {/* Delivery fee */}
      <OrderTallyRow
        label={"Delivery fee"}
        price={deliveryFee}
        isTotal={false}
      />

      {/* Price total */}
      <OrderTallyRow
        label={"Total"}
        price={deliveryFee + productTotal}
        isTotal={true}
      />
    </div>
  );
};

export default OrderTally;
