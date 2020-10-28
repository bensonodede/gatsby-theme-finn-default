import React from "react";
import { Formik, Form, Field } from "formik";
import { navigate } from "@reach/router";

// Import components
import { FormikPersist } from "components/form";
import { useCheckout } from "components/useHooks";
import { LabelInput } from "components/input";
import { validatePhoneNum } from "components/validation";
import PhoneNumFooter from "./PhoneNumFooter";

// Number mask input definition
const phoneNumMask = [
  /[1-9]/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
];

const PhoneNumForm = () => {
  // Destructure checkout state
  let { setCheckout } = useCheckout();

  return (
    <Formik
      initialValues={{ phoneNum: "" }}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={async (values) => {
        // Remove empty spaces from phone number and prepend country code
        let phoneNum = "254" + values.phoneNum.replace(/\D+/g, "");

        // Set phone number to checkout local storage
        await setCheckout((prevState) => {
          return {
            ...prevState,
            phoneNum,
          };
        });

        // Navigate to confirmation page
        navigate(`/checkout/confirm`);
      }}
    >
      {(formikProps) => (
        <Form>
          <Field name="phoneNum" validate={validatePhoneNum}>
            {({ field, form }) => (
              <div className="phone-num-field">
                <LabelInput
                  {...field}
                  {...form}
                  mask={phoneNumMask}
                  label={"+254"}
                  placeholder={"712 000 000"}
                />
              </div>
            )}
          </Field>

          {/* Phone num footer */}
          <PhoneNumFooter {...formikProps} />

          {/* Persist to local storage */}
          <FormikPersist name="phoneNumForm" />
        </Form>
      )}
    </Formik>
  );
};

export default PhoneNumForm;
