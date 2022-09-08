import React from "react";
import { useController } from "react-hook-form";

import { Group, Label, Input } from "./FormInput.styles";

const FormInput = ({ label, control, defaultValue = "", ...otherProps }) => {
  const {
    field: { onChange, onBlur, name, value, ref },
  } = useController({
    name: otherProps.name,
    control,
    rules: { required: true },
    defaultValue: defaultValue,
  });
  return (
    <Group>
      <Input
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        value={value}
        {...otherProps}
        ref={ref}
      />
      {label && <Label shrink={value?.length ?? false}>{label}</Label>}
    </Group>
  );
};
export default FormInput;
