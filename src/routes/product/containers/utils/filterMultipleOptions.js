const filterMultipleOptions = (
  variants,
  options,
  formikValues,
  initDisabledTags,
  setDisabledTags
) => {
  // Get array of selected options from formik state e.g ["Small", "White", ""]
  let selectedOptions = options.map((option) => formikValues[option.title]);

  // Get length of selected options e.g ["Small", "White",""] = 2
  let selectedOptionsCount = selectedOptions.filter(
    (selectedOption) => !!selectedOption
  ).length;

  // Remove tags that are initially disabled on the first mount
  let removedInitVariantTags = variants.filter(
    (variant) =>
      !variant.combinations.some((combination) =>
        initDisabledTags.includes(combination)
      )
  );

  // Get variants that match selected options
  let variantsMatch = removedInitVariantTags.filter((variant) => {
    // Get length of combinations that intersect with selected tags
    let count = variant.combinations.filter((combination) =>
      selectedOptions.includes(combination)
    ).length;

    // If length of selected tags equals length of options
    if (selectedOptionsCount === options.length) {
      // Return variants whose intersection "count" is one less than length of selected tags
      return count === selectedOptionsCount - 1;
    } else {
      // Returns variants whose intersection "count" equals length of selected tags
      return count === selectedOptionsCount;
    }
  });

  // Filter for items that are not published or have quantity of less than 1
  let unpublishedVariants = variantsMatch
    .filter((val) => !val.publish || val.quantity < 1)
    .map((val) => val.combinations)
    .flat();

  // Remove duplicates
  let uniqUnpublishedVariants = [...new Set(unpublishedVariants)];

  // Filter for Published combinations
  let publishedVariants = variantsMatch
    .filter((val) => val.publish && val.quantity > 0)
    .map((val) => val.combinations)
    .flat();

  // Remove duplicates
  let uniqPublishedVariants = [...new Set(publishedVariants)];

  // Get difference
  // Delete published variants from unpublished variants
  let diffVariants = uniqUnpublishedVariants.filter(
    (item) => !uniqPublishedVariants.includes(item)
  );

  // Remove currently selected tags
  let removedSelected = diffVariants.filter(
    (item) => !selectedOptions.includes(item)
  );

  // Set tags to state
  setDisabledTags(removedSelected);
};

export default filterMultipleOptions;
