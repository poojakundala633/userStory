import React from "react";
import { TextField } from "@mui/material";

interface TextFieldProps {
  children?: React.ReactNode | string;
  variant?: "standard" | "outlined" | "filled";
  placeholder?: string;
  sx?: object;
  label?: string;
  style?: React.CSSProperties;
  inputProps?: object;
  InputProps?: object;
  width?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
  default?: string;
  size?: "medium" | "small";
  type?: string;
  error?: boolean;
  value?: number | string;
  name?: string;
  multiline?: boolean;
}
const CustomTextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  return <TextField {...props} />;
};

export default CustomTextField;
