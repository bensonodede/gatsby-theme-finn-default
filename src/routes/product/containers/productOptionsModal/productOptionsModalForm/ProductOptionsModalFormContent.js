import React from "react";
import { Form } from "formik";

// Import components
import ProductOptions from "./ProductOptions";
import { ErrorToast } from "components/toast";

const ProductOptionsModalFormContent = ({
  formikProps,
  currentPrice,
  isErrorToastOpen,
  emptyOptions,
  setIsErrorToastOpen,
}) => (
  <Form>
    <div className="product-mobile__options-modal">
      <div className="container">
        <div className="columns is-mobile is-multiline is-centered">
          <div className="column is-10-mobile is-6-tablet is-4-desktop">
            {/* Product Options */}
            <ProductOptions
              formikValues={formikProps.values}
              currentPrice={currentPrice}
            />

            {/* Error toast */}
            {isErrorToastOpen && (
              <ErrorToast
                text={`Please select a ${emptyOptions[0]}`}
                emoji={"🙏"}
                onClose={() => setIsErrorToastOpen(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  </Form>
);

export default ProductOptionsModalFormContent;
