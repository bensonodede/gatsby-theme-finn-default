import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { checkmark } from "react-icons-kit/ionicons/checkmark";

// Import styles
import "./styles.scss";

const RadioInput = ({
  label,
  group,
  disabled,
  name,
  value,
  setFieldValue,
  setFieldTouched,
  validateField,
}) => (
  <div className="radio-input">
    <input
      type={"radio"}
      id={label}
      value={label}
      name={group}
      disabled={disabled}
      checked={label === value}
      onChange={async (event) => {
        // Get input value
        let val = event.target.value;

        // Set value to field
        await setFieldValue(name, val);

        // Set field to touched
        await setFieldTouched(name, true);

        // Run field validation
        validateField(name);
      }}
    />
    <label htmlFor={label}>
      {label}
      {label === value && (
        <Icon
          className={"radio-input__checkmark-icon"}
          icon={checkmark}
          size={"100%"}
        />
      )}
    </label>
  </div>
);

export default RadioInput;
