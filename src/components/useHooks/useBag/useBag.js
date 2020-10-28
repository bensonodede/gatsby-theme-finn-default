import createPersistedState from "use-persisted-state";

// Define local storage key
const useBagState = createPersistedState("bag");

// Import functions
import { addQuantity, findMatchIndex } from "./functions";

const useBag = () => {
  // Define bag items as empty array
  const [bag, setBagState] = useBagState([]);

  /***** Add to bag function *****/

  const addToBag = (item) => {
    // Find index of item already in bag
    let matchIndex = findMatchIndex({ bag, item });

    // If index is -1, It does NOT exist in the bag
    if (matchIndex < 0) {
      // Spread bag array and append new item
      setBagState((prevState) => [...prevState, item]);
    } else {
      // If item exists in bag, increment quantity
      addQuantity({ setBagState, matchIndex });
    }
  };

  /***** Remove from bag function ******/

  const removeFromBag = (item) => {
    // Find index of item already in bag
    let matchIndex = findMatchIndex({ bag, item });

    // Remove item from array by index
    let bagItems = bag.filter((bagItem, index) => index !== matchIndex);

    // Set array as new bag state
    setBagState(bagItems);
  };

  /***** Change quantity function ******/

  const changeQuantity = (item, quantity) => {
    // Find index of item already in bag
    let matchIndex = findMatchIndex({ bag, item });

    setBagState((prevState) => {
      // Spread current items
      let bagItems = [...prevState];

      // Change quantity on item
      bagItems[matchIndex].selectedQuantity = quantity;

      return bagItems;
    });
  };

  // Export state and functions
  return { bag, setBagState, addToBag, removeFromBag, changeQuantity };
};

export default useBag;
