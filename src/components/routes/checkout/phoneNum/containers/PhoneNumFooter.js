import React from "react";

// Import components
import Button from "components/button";

const PhoneNumFooter = ({ touched, isValid }) => (
  <div className="phone-num-footer">
    <Button
      type={"submit"}
      isFullWidth={false}
      isDisabled={!(touched.phoneNum && isValid)}
    >
      Next
    </Button>
  </div>
);

export default PhoneNumFooter;
