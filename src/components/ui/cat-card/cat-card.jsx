import React from "react";
import "../../../styles/cat-card.scss";
import Like from "../like/like";

function CatCard({ url, addToFavorite, removeFromFavorite, card }) {
  return (
    <div className="cat-card-div">
      <img className="cat-card-img" src={url} alt="cat" />
      <div className="cat-card-like-wrapper">
        <Like
          isLiked={card.isLiked}
          onClick={() => {
            if (card.isLiked === true) {
              removeFromFavorite(card);
              card.isLiked = false;
            } else {
              addToFavorite(card);
            }
          }}
        />
      </div>
    </div>
  );
}

export default CatCard;
