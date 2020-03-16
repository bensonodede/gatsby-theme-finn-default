import React from "react";
import { Formik, Form, Field } from "formik";
import { navigate } from "@reach/router";

// Import components
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
  /\d/
];

const PhoneNumForm = ({ humanId, price, id }) => {
  return (
    <Formik
      initialValues={{ phoneNum: "" }}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={values => {
        // Remove empty spaces from phone number and prepend country code
        let phoneNum = "254" + values.phoneNum.replace(/\D+/g, "");

        navigate(`/product/${humanId}/checkout/confirm`, {
          state: { phoneNum, id, price }
        });
      }}
    >
      {formikProps => (
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
        </Form>
      )}
    </Formik>
  );
};

export default PhoneNumForm;
