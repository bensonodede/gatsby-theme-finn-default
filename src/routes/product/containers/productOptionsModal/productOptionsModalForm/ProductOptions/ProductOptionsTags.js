import React, { useContext } from "react";

// Import data context
import ProductDataContext from "../../../../ProductDataContext";

// Import components
import ProductOptionsField from "./ProductOptionsField";

const ProductOptionsTags = ({ initDisabledTags, disabledTags }) => {
  // Destructure data context
  const { options } = useContext(ProductDataContext);

  return (
    <>
      {options.map((option) => (
        <div key={option.id} className={"product-options__tag"}>
          {/* Tags field title */}
          <h5 className={"product-options__tag-title title is-size-7"}>
            {option.title.toUpperCase()}
          </h5>

          {/* Option tag input fields */}
          <ProductOptionsField
            option={option}
            initDisabledTags={initDisabledTags}
            disabledTags={disabledTags}
          />
        </div>
      ))}
    </>
  );
};
export default ProductOptionsTags;
