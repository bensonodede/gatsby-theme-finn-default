import isEqual from "react-fast-compare";

const onVariantSelect = (formikProps, variants, update, setSelectedVariant) => {
  // Set values from selected options object into one array
  let selectedOptionsArr = Object.keys(formikProps.values).map((key) => {
    return formikProps.values[key];
  });

  // Get variant where variant combinations match selected options array
  let filteredVariant = variants.filter((variant) =>
    isEqual(variant.combinations, selectedOptionsArr)
  );

  // If variant is selected, set it's price to state
  if (filteredVariant[0]) {
    // Update price
    update(filteredVariant[0].price);

    // Set selected variant ID
    setSelectedVariant(filteredVariant[0]);
  }
};

export default onVariantSelect;
