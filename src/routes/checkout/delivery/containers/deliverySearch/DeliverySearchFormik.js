import React from "react";
import { Formik } from "formik";

const DeliverySearchFormik = ({ children }) => (
  <Formik
    validateOnChange={false}
    validateOnBlur={false}
    initialValues={{ search: "" }}
    onSubmit={null}
  >
    {() => <>{children}</>}
  </Formik>
);

export default DeliverySearchFormik;
