import { ChangeEvent, memo, useState } from "react";

type EditableSpanPropsType = {
  value: string;
  onChange: (newValue: string) => void;
};

export const EditableSpan = memo(
  ({ value, onChange }: EditableSpanPropsType) => {
    let [editMode, setEditMode] = useState(false);
    let [valueInput, setValueInput] = useState(value);

    const activateEditMode = () => {
      setEditMode(true);
      setValueInput(value);
    };
    const activateViewMode = () => {
      setEditMode(false);
      onChange(valueInput);
    };
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
      setValueInput(e.currentTarget.value);
    };

    return editMode ? (
      <input
        value={valueInput}
        onChange={changeValue}
        autoFocus
        onBlur={activateViewMode}
      />
    ) : (
      <span onDoubleClick={activateEditMode}>{value || "..."}</span>
    );
  }
);
