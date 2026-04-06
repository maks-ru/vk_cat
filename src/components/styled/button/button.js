import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
`;

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button;
