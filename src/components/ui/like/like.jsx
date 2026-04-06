import React from "react";
import "../../../styles/like.scss";

function Like({ onClick, isLiked }) {
  return (
    <button
      className={`like-button${isLiked ? " liked" : ""}`}
      type="button"
      onClick={onClick}
    ></button>
  );
}

export default Like;
