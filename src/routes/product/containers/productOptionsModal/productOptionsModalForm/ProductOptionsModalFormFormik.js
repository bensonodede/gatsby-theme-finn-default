import React, { useContext } from "react";
import { Formik } from "formik";

// Import product data context
import ProductDataContext from "../../../ProductDataContext";
import { useBag } from "components/useHooks";

// Import functions
import { onOptionsSubmit } from "../../utils";

const ProductOptionsModalFormFormik = ({
  children,

  // Product props
  selectedVariant,
  currentPrice,

  // State props
  toggleModal,
  setEmptyOptions,
  setToastOpen,
  setIsErrorToastOpen,
}) => {
  // Destructure data
  const productData = useContext(ProductDataContext);

  // Destructure bag context
  const { addToBag } = useBag();

  // Define global initial values object
  let initialValues = {};

  // If options exist
  if (productData.options[0]) {
    // Set initial formik values as the option titles with values as empty strings e.g {Size:"", Color:""}
    productData.options.map((option) => {
      initialValues[option.title] = "";
    });
  }

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
      validateOnBlur={false}
      validateOnMount={false}
      onSubmit={(values) => {
        onOptionsSubmit({
          // Product props
          productData,
          values,
          currentPrice,
          selectedVariant,

          // State management props
          setEmptyOptions,
          setToastOpen,
          toggleModal,
          setIsErrorToastOpen,
          addToBag,
        });
      }}
    >
      {children}
    </Formik>
  );
};

export default ProductOptionsModalFormFormik;
