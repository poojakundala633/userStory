import React, { FC } from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import styled from "@emotion/styled";

const StyledButton = styled(MuiButton)`
  text-traansform: none;
  border-radius: 50px;
`;
const Button: FC<ButtonProps> = ({
  children,
  color,
  variant,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton color={color} variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
export default Button;
