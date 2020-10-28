import React, { useContext, useState, useEffect } from "react";
import { useCountUp } from "react-countup";

// Import components
import ProductOptionsModalFormFormik from "./ProductOptionsModalFormFormik";
import ProductOptionsModalFormContent from "./ProductOptionsModalFormContent";

// Import data context
import ProductDataContext from "../../../ProductDataContext";

// Import functions
import { onVariantSelect } from "../../utils";

const ProductOptionsModalForm = ({ toggleModal, setToastOpen }) => {
  // Destructure data
  const { price, variants } = useContext(ProductDataContext);

  // Manage state
  const [emptyOptions, setEmptyOptions] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [isErrorToastOpen, setIsErrorToastOpen] = useState(false);

  // Number price counter
  const { countUp, update } = useCountUp({
    end: price,
    delay: 0,
    duration: 1,
    separator: ",",
  });

  return (
    <ProductOptionsModalFormFormik
      selectedVariant={selectedVariant}
      currentPrice={countUp}
      toggleModal={toggleModal}
      setEmptyOptions={setEmptyOptions}
      setToastOpen={setToastOpen}
      setIsErrorToastOpen={setIsErrorToastOpen}
    >
      {(formikProps) => {
        // Handle variant selection
        useEffect(() => {
          onVariantSelect(formikProps, variants, update, setSelectedVariant);
        }, [formikProps.values]);

        /* Form content */
        return (
          <ProductOptionsModalFormContent
            formikProps={formikProps}
            currentPrice={countUp}
            isErrorToastOpen={isErrorToastOpen}
            setIsErrorToastOpen={setIsErrorToastOpen}
            emptyOptions={emptyOptions}
          />
        );
      }}
    </ProductOptionsModalFormFormik>
  );
};

export default ProductOptionsModalForm;
