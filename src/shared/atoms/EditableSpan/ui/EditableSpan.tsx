import { ChangeEvent, memo, useState } from "react";
import { Input } from "../../Input/ui/Input";
import { EditIcon } from "./Edit";
import { EditableSpanStyle } from "../lib/editable-span-style";

type EditableSpanPropsType = {
  value: string;
  onChange: (newValue: string) => void;
  labelInfo?: string;
};

export const EditableSpan = memo(
  ({ value, onChange, labelInfo }: EditableSpanPropsType) => {
    let [editMode, setEditMode] = useState(false);
    let [valueInput, setValueInput] = useState(value);
    const { Edit } = EditableSpanStyle;
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
      <Input
        labelInfo={labelInfo || ""}
        value={valueInput}
        onChange={changeValue}
        autoFocus
        onBlur={activateViewMode}
      />
    ) : (
      <>
        <span>{value || "..."}</span>
        <Edit onClick={activateEditMode}>
          <EditIcon />
        </Edit>
      </>
    );
  }
);
