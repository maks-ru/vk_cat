import React from "react";
import { LikeButton } from "./styles";

function Like({onClick, isLiked}) {
    return (
        <LikeButton isLiked={isLiked} type="button" onClick={onClick}></LikeButton>
    )
}

export default Like;
