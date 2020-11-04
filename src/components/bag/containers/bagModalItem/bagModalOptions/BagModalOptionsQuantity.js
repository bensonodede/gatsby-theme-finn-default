import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";

// Import components

import { useBag } from "components/useHooks";
import { CounterInput } from "components/input";

const BagModalOptionsQuantity = ({ item }) =>{
  // Destructure bag hook
  let { changeQuantity } = useBag();

  return(
    <div>
    <Formik
      initialValues={{ quantity: item.selectedQuantity }}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={null}
    >
      {(formikProps) => {
        // Change quantity on value change
        useEffect(() => {
          changeQuantity(item, parseInt(formikProps.values.quantity));
        }, [formikProps.values]);

        return (
          <Form>
            <Field name="quantity" validate={null}>
              {({ field, form }) => (
                <div className="">
                  <CounterInput
                    {...field}
                    {...form}
                    placeholder={"0"}
                    label={"Quantity"}
                    allowNegative={false}
                  />
                </div>
              )}
            </Field>
          </Form>
        );
      }}
    </Formik>
  </div>
)
} 

export default BagModalOptionsQuantity;
