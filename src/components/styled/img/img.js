import styled from "styled-components";
import React from "react";

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;

const Img = ({ children, ...props }) => (
  <StyledImg {...props}>{children}</StyledImg>
);

export default Img;
