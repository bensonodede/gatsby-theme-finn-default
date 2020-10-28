const getTotalQuantity = (variants) => {
  // Get published variants
  let publishVariants = variants.filter((variant) => variant.publish);

  // Get sum of variant quantities
  let quantitySum = publishVariants.reduce(
    (acc, { quantity }) => acc + quantity,
    0
  );

  // Return total quantity
  return quantitySum;
};

export default getTotalQuantity;
