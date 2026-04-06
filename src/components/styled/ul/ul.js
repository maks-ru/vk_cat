import styled from "styled-components";
import React from "react";

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Ul = ({ children, ...props }) => (
  <StyledUl {...props}>{children}</StyledUl>
);

export default Ul;
