import isEqual from "react-fast-compare";

const findMatchIndex = ({ bag, item }) => {
  // Check if object matches an object in array and return it's index
  return bag.findIndex(
    (bagItem) =>
      isEqual(bagItem.productId, item.productId) &&
      isEqual(bagItem.selectedVariant.id, item.selectedVariant.id)
  );
};

export default findMatchIndex;
