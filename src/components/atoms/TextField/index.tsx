import React from 'react'
import { TextField, styled } from '@mui/material'

interface TextFieldProps {
  children?: React.ReactNode | string
  variant?: 'standard' | 'outlined' | 'filled'
  placeholder?: string
  sx?: object
  label?: string
  style?: React.CSSProperties
  inputProps?: object
  InputProps?: object
  width?: number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  disabled?: boolean
  helperText?: string
  default?: string
  size?: 'medium' | 'small'
  type?: string
  error?: boolean
  value?: number | string
  name?: string
  multiline?: boolean
  maxlength?: number
}
const CustomField = styled(TextField)({
  border: 1,
  borderColor: "#1ac6ff",
  borderRadius: '8px',
  backgroundColor: "#1ac6ff",
  color: "white",
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: "#1ac6ff",
      color: "white",
      borderRadius: '8px',
    },
  },
})

const CustomTextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  return <CustomField {...props} />
}

export default CustomTextField
