import React, { memo } from "react";
import { CheckboxProps } from "../model";
import { CheckboxStyle } from "../lib";
 
export const Checkbox: React.FC<CheckboxProps> = memo(
  ({ checked, onChange }) => {
    const { CheckboxContainer, HiddenCheckbox, StyledCheckbox } =
    CheckboxStyle;
    return (
      <CheckboxContainer>
        <HiddenCheckbox type="checkbox" checked={checked} onChange={onChange} />
        <StyledCheckbox checked={checked} />
      </CheckboxContainer>
    );
  }
);
