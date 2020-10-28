import numeral from "numeral";

const onOptionsSubmit = async ({
  // Product info
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
}) => {
  // Destructure product data
  let { id, name, options, imgUrls } = productData;

  // Get options that are not selected/empty
  let emptyOptionsArr = await options
    .filter((option) => values[option.title] === "")
    .map((option) => option.title.toLowerCase());

  // Set unselected/empty options to state
  await setEmptyOptions(emptyOptionsArr);

  // If unselected/empty options exist
  if (emptyOptionsArr[0]) {
    // Set error toast to open
    setIsErrorToastOpen(true);
  } else {
    // Add item to bag
    addToBag({
      name,
      productId: id,
      price: numeral(currentPrice).value(),
      imgUrl: imgUrls[0],
      selectedVariant,
      selectedQuantity: 1,
    });

    // Set product added toast open
    setToastOpen(true);

    // Close modal
    toggleModal();
  }
};

export default onOptionsSubmit;
