import React, { memo } from "react";
import { EditableSpanStyle } from "../lib/checkbox-style";
 

interface CheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = memo(
  ({ checked, onChange }) => {
    const { CheckboxContainer, HiddenCheckbox, StyledCheckbox } =
      EditableSpanStyle;
    return (
      <CheckboxContainer>
        <HiddenCheckbox type="checkbox" checked={checked} onChange={onChange} />
        <StyledCheckbox checked={checked} />
      </CheckboxContainer>
    );
  }
);
