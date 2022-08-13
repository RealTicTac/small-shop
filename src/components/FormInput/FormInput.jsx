import React from "react";

import { Group, Label, Input } from "./FormInput.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && <Label shrink={otherProps.value.length}>{label}</Label>}
    </Group>
  );
};

export default FormInput;
