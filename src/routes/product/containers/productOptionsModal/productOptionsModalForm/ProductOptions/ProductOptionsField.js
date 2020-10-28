import React from "react";
import { Field } from "formik";

// Import components
import { RadioInput } from "components/input";

const ProductOptionsField = ({ option, initDisabledTags, disabledTags }) => (
  <Field name={option.title}>
    {({ field, form }) => (
      <div className="product-options__field">
        {option.tags.map((tag, index) => (
          /* Input radio button */
          <RadioInput
            {...field}
            {...form}
            key={`${tag}-${index}`}
            label={tag}
            group={option.title}
            // Disable tags that are initially disabled or included in disabled tags list
            disabled={
              initDisabledTags.includes(tag) || disabledTags.includes(tag)
            }
          />
        ))}
      </div>
    )}
  </Field>
);

export default ProductOptionsField;
