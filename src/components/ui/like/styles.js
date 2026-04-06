import styled from 'styled-components';
import Button from "../../styled/button/button";
import likeImage from "../../../assets/favorite_border.svg";
import likeImageActive from "../../../assets/favorite.svg";

export const LikeButton = styled(Button)`
    width: 48px;
    height: 48px;
    background-image: ${props => props.isLiked === true ? `url(${likeImageActive})` : `url(${likeImage})`};

    &:hover,
    &:focus {
        background-image: url(${likeImageActive});
    }
`;
