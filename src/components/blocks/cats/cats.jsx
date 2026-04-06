import React from "react";
import CatCard from "../../ui/cat-card/cat-card";
import { StyledUl, StyledSection, StyledLi } from "./styles";

function Cats({addToFavorite, removeFromFavorite, catsData}) {

    return (
        <StyledSection>
            {catsData && catsData.length ? (
                <StyledUl>
                    {catsData.map( (catData) => (
                        <StyledLi key={catData.id}>
                            <CatCard {...catData} addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} id={catData.id} card={catData}/>
                        </StyledLi>
                    ))}
                </StyledUl>
            ) : null }
        </StyledSection>
    );
}

export default Cats;