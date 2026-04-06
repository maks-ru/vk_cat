import React from "react";
import { StyledImg, StyledDiv, StyledLikeWrapper } from "./styles";
import Like from "../like/like";


function CatCard({url, addToFavorite, removeFromFavorite, card}) {
    return (
        <StyledDiv>
            <StyledImg src={url}/>
            <StyledLikeWrapper>
                <Like isLiked={card.isLiked} onClick={
                    () => {
                        if (card.isLiked === true) {
                            removeFromFavorite(card);
                            card.isLiked = false;
                        } else {
                            addToFavorite(card);
                        }
                    }
                }/>
            </StyledLikeWrapper>
        </StyledDiv>
    );
}

export default CatCard;