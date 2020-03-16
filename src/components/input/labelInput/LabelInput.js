import React, { useState } from "react";
import MaskedInput from "react-text-mask";

// Import styles
import "./styles.scss";

const LabelInput = ({
  mask,
  label,
  placeholder,
  name,
  value,
  setFieldValue,
  setFieldTouched,
  errors,
  validateField
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <div
        className={
          "label-input " +
          (focused ? "label-input--focus " : "") +
          (errors[name] && !focused ? "label-input--error" : "")
        }
      >
        <p className="label-input__inline-label">{label}</p>

        {/* Input phone number entry */}
        <MaskedInput
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          onChange={async event => {
            // Get input value
            let val = event.target.value;

            // Set value to field
            await setFieldValue(name, val);

            // Set field to touched
            await setFieldTouched(name, true);

            // Run field validation
            validateField(name);
          }}
          value={value}
          placeholder={placeholder}
          className="label-input__entry"
          mask={mask}
          guide={false}
        />
      </div>
    </div>
  );
};

export default LabelInput;
