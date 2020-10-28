import React, { useContext, useState, useEffect } from "react";

// Import data context
import ProductDataContext from "../../../../ProductDataContext";

// Import components
import ProductOptionsTitle from "./ProductOptionsTitle";
import ProductOptionsTags from "./ProductOptionsTags";
import ProductOptionsBtn from "./ProductOptionsBtn";

// Import functions
import { filterSingleOption, filterMultipleOptions } from "../../../utils";

// Import styles
import "./styles.scss";

const ProductOptions = ({ formikValues, currentPrice }) => {
  // Destructure data
  const { options, variants } = useContext(ProductDataContext);

  // Disabled tags state
  const [initDisabledTags, setInitDisabledTags] = useState([]);
  const [disabledTags, setDisabledTags] = useState([]);

  // On initial mount, filter all tags that are COMPLETELY unpublished
  useEffect(() => {
    // If options exist
    if (options[0]) {
      filterSingleOption(options, variants, setInitDisabledTags);
    }
  }, []);

  // On tag selection, filter tags that are unpublished or have a quantity less than 1
  useEffect(() => {
    // If options are more than 1
    if (options.length > 1) {
      // prettier-ignore
      filterMultipleOptions( variants, options, formikValues, initDisabledTags, setDisabledTags);
    }
  }, [formikValues]);

  return (
    <div className="product-options">
      {/* Title */}
      <ProductOptionsTitle />

      {/* Tags */}
      <ProductOptionsTags
        initDisabledTags={initDisabledTags}
        disabledTags={disabledTags}
      />

      {/* Footer */}
      <ProductOptionsBtn currentPrice={currentPrice} />
    </div>
  );
};

export default ProductOptions;
