const getProductTotal = (bag) => {
  // Global total price
  let productTally = 0;

  if (bag[0]) {
    // Sum total price and multiply by selected quantity and assign variable
    productTally = bag.reduce((a, b) => +a + b.price * b.selectedQuantity, 0);
  }

  return productTally;
};

export default getProductTotal;
