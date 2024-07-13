import { inputStyle } from "../lib/input-style";
import { InputPropsModel } from "../model/input-type";

export const Input = ({
  labelInfo,
  type = "text",
  value,
  onChange,
  placeholder,
  ...props
}: InputPropsModel) => {
  const { Input } = inputStyle;
  return (
    <div>
      {labelInfo && <label>{labelInfo}</label>}
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};
