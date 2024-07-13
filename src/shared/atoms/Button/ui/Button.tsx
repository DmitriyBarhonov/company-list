import React from "react";

import { ButtonProps } from "../model";
import { ButtonStyle } from "../lib";

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
}) => {
  const { Button } = ButtonStyle;
  return (
    <Button type={type} onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  );
};
