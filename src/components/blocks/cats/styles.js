import styled from "styled-components";
import Ul from "../../styled/ul/ul";
import Section from "../../styled/section/section";

export const StyledSection = styled(Section)`
    max-width: 1316px;
    margin: 0 auto;
    padding-top: 36px;
`;

export const StyledUl = styled(Ul)`
    display: flex;
    flex-wrap: wrap;
    column-gap: 5px;
    row-gap: 33px;

    @media (max-width: 918px) {
        justify-content: center;
    }
`;

export const StyledLi = styled.li`
    min-height: 256px;
    min-width: 257px;
`;