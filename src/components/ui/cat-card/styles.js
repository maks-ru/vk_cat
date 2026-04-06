import styled from "styled-components";
import Img from "../../styled/img/img";

export const StyledImg = styled(Img)`
    max-width: 225px;
    max-height: 225px;
    height: 100%;
    object-fit: cover;
`;

export const StyledLikeWrapper = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    max-height: 94px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 58.85%);
    padding: 23px 24px;
    box-sizing: border-box;
    justify-content: flex-end;
`;

export const StyledDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:hover,
    &:focus {
        background: #FFFFFF;
        box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18);
    }

    &:hover ${StyledLikeWrapper} {
        display: flex;
    }
`;
