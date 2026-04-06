import React from "react";
import Cats from "../blocks/cats/cats";

function Favourites({catsData, addToFavorite, removeFromFavorite}) {
    return (
        <>
            <Cats catsData={catsData} addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite}/>
        </>
    );
}

export default Favourites;