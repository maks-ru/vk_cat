import styled from 'styled-components';
import { NavLink } from "react-router-dom";


export const StyledNav = styled.nav`
    width: 100%;
    background: #2196F3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);
`;

export const StyledNavWrapper = styled.div`
    max-width: 1316px;
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.25px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    padding: 0 23px;
    min-height: 64px;
    display: flex;
    align-items: center;

    &:hover,
    &:focus {
        background: #42A5F5;
        color: rgba(255, 255, 255, 0.7);
    }

    &.active {
        background: #1E88E5;
        color: #ffffff;
    }
`;