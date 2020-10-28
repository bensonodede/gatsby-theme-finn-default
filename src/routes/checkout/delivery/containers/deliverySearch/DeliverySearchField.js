import React from "react";
import { Field } from "formik";

// Import components
import { SearchInput } from "components/input";

const DeliverySearchField = ({ isSearchOpen, setIsSearchOpen }) => {
  return (
    <>
      {/*  Delivery search field row*/}
      <div className="delivery-search__field-row">
        {/* Delivery search field */}
        <Field name="search" validate={null}>
          {({ field, form }) => (
            <div
              onClick={() => setIsSearchOpen(true)}
              className={`delivery-search__field ${
                isSearchOpen ? "delivery-search__field--open" : ""
              }`}
            >
              {/* Delivery search input */}
              <SearchInput
                {...field}
                {...form}
                placeholder={"Where do we deliver?"}
                inputClassName={`${
                  isSearchOpen ? "" : "delivery-search__input"
                }`}
              />
            </div>
          )}
        </Field>

        {/* Delivery search cancel button */}
        {isSearchOpen && (
          <h5
            onClick={() => setIsSearchOpen(false)}
            className="is-size-6 delivery-search__field-cancel"
          >
            Cancel
          </h5>
        )}
      </div>
    </>
  );
};
export default DeliverySearchField;
