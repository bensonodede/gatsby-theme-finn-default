const loadMoreProducts = param => {
  // Destructure params
  let { storeUsername, fetchMore, data, setHasMore, setIsLoadingMore } = param;

  setIsLoadingMore(true);
  // Run fetch more query
  fetchMore({
    variables: {
      storeUsername,
      first: 8,
      skip: data.productsByStore.length,
      orderBy: "updatedAt_DESC"
    },

    // Update query data object
    updateQuery: (prev, { fetchMoreResult }) => {
      // Stop loading
      setIsLoadingMore(false);

      // If there are more items to load
      setHasMore(true);

      // If there are NO more items to load
      if (!fetchMoreResult || fetchMoreResult.productsByStore.length === 0) {
        setHasMore(false);
        return prev;
      }

      // Add new items to previously fetched array
      return Object.assign({}, prev, {
        productsByStore: [
          ...prev.productsByStore,
          ...fetchMoreResult.productsByStore
        ]
      });
    }
  });
};

export default loadMoreProducts;
