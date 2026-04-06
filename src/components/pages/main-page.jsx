import React from "react";
import Cats from "../blocks/cats/cats";

function MainPage({addToFavorite, removeFromFavorite, catsData}) {
    return (
        <>
            <Cats addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} catsData={catsData}/>
        </>
    );
}

export default MainPage;