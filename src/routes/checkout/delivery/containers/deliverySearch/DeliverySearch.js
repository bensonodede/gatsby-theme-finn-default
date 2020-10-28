import React, { useState } from "react";

// Import components
import DeliverySearchFormik from "./DeliverySearchFormik";
import DeliverySearchForm from "./DeliverySearchForm";

// Import styles
import "./styles.scss";

const DeliverySearch = () => {
  // Search modal open state
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <DeliverySearchFormik>
      <DeliverySearchForm
        setIsSearchOpen={setIsSearchOpen}
        isSearchOpen={isSearchOpen}
      />
    </DeliverySearchFormik>
  );
};

export default DeliverySearch;
