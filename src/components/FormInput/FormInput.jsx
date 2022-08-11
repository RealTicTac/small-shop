import React from "react";

import { Group, StyledFormLabel, StyledFormInput } from "./FormInput.styles";

const FormInput = (label, ...otherProps) => {
  return (
    <Group>
      {label && <StyledFormLabel>{label}</StyledFormLabel>}
      <StyledFormInput {...otherProps} />
    </Group>
  );
};

export default FormInput;
