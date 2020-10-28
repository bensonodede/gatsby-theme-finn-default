import createPersistedState from "use-persisted-state";

// Define local storage key
const useCheckoutState = createPersistedState("checkout");

const useCheckout = () => {
  // Define bag items as empty array
  const [checkout, setCheckout] = useCheckoutState({});

  // Export state functions
  return { checkout, setCheckout };
};

export default useCheckout;
