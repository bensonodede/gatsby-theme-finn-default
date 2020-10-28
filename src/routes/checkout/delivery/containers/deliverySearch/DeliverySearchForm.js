import React, { useEffect, useContext } from "react";
import { useFormikContext, Form } from "formik";
import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";

// Import components

import DeliveryContext from "../../DeliveryContext";
import DeliverySearchField from "./DeliverySearchField";
import DeliverySearchList from "./DeliverySearchList";

const DeliverySearchForm = ({ isSearchOpen, setIsSearchOpen }) => {
  // Use Places Autocomplete hook
  const { suggestions, setValue: setSearchValue } = usePlacesAutocomplete({
    requestOptions: {
      // Options to bias search results
      // Radius from location center (10,000 metres)
      radius: 10000,
      // Location center set to Nairobi
      location: new window.google.maps.LatLng(-1.286389, 36.817223),
    },
    debounce: 300,
  });

  // Destructure context hooks
  const { deliveryLocation } = useContext(DeliveryContext);
  const { setFieldValue } = useFormikContext();

  // Handle map pin movement
  const handleLocationChange = async () => {
    // Destructure latitude and longitude
    let { lat, lng } = deliveryLocation;

    // Run reverse geocoding to get array of addresses from coordinates
    let geoCodeResults = await getGeocode({
      location: new window.google.maps.LatLng(lat, lng),
    });

    // Get formatted address
    let address = geoCodeResults[0].formatted_address;

    // Set selected value to formik search input field
    await setFieldValue("search", address);

    // Set selected value to usePlacesAutocomplete search value
    await setSearchValue(address);
  };

  useEffect(() => {
    // If selected location is not null / empty
    if (deliveryLocation) {
      handleLocationChange();
    }
  }, [deliveryLocation]);

  return (
    <Form onChange={(event) => setSearchValue(event.target.value)}>
      <div
        className={`delivery-search ${
          isSearchOpen ? "delivery-search--open" : ""
        }`}
      >
        {/* Delivery search field */}
        <DeliverySearchField
          setIsSearchOpen={setIsSearchOpen}
          isSearchOpen={isSearchOpen}
        />

        {/* Delivery search list */}
        <DeliverySearchList
          setSearchValue={setSearchValue}
          searchSuggestions={suggestions}
          setIsSearchOpen={setIsSearchOpen}
          isSearchOpen={isSearchOpen}
        />
      </div>
    </Form>
  );
};

export default DeliverySearchForm;
