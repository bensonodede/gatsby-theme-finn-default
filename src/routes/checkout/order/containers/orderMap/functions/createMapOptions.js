// Import map styles
import OrderMapStyle from "../OrderMapStyle.json";

// Map options
const createMapOptions = () => {
  return {
    zoomControl: false,
    fullscreenControl: false,
    gestureHandling: "none",
    styles: OrderMapStyle,
  };
};

export default createMapOptions;
