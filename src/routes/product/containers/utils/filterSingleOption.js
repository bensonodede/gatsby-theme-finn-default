const filterSingleOption = (options, variants, setInitDisabledTags) => {
  // Loop over all options
  options.forEach((option) => {
    // Loop over all tags for each option
    option.tags.forEach((tag) => {
      // Filter variants by variant combinations that include currently looped over tag
      let filteredVals = variants.filter((variant) =>
        variant.combinations.some((combination) => combination.includes(tag))
      );

      // Get variants that are not published or quantity is less than 1
      let unPublishedVariants = filteredVals.every(
        (variant) => !variant.publish || variant.quantity < 1
      );

      // If unpublished variants are present, add tag to initially disabled tags
      if (unPublishedVariants) {
        setInitDisabledTags((prevArr) => [...prevArr, tag]);
      }
    });
  });
};

export default filterSingleOption;
