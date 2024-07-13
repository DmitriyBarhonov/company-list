import { DetailedHTMLProps, InputHTMLAttributes } from "react";
export type InputPropsModel = InputCustomProps & InputProps;

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export type InputCustomProps = {
  name?: string;
  type?: string;
  labelInfo?: string;
};
