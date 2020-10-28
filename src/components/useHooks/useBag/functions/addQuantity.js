const addQuantity = ({ setBagState, matchIndex }) => {
  setBagState((prevState) => {
    // Spread items
    let bagItems = [...prevState];

    // Increment quantity on item
    bagItems[matchIndex].selectedQuantity++;

    return bagItems;
  });
};

export default addQuantity;
