import React from "react";

import { Base, Inverted, GoogleSignIn } from "./Button.styles";

const BUTTON_TYPES = {
  google: GoogleSignIn,
  inverted: Inverted,
  base: Base,
};
const getButton = (buttonType = "base") => {
  return BUTTON_TYPES[buttonType];
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
