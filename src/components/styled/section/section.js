import styled from "styled-components";
import React from "react";

const StyledSection = styled.section`
  padding-right: 62px;
  padding-left: 62px;
`;

const Section = ({ children, ...props }) => (
  <StyledSection {...props}>{children}</StyledSection>
);

export default Section;
