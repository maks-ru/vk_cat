import React, { useState, useEffect } from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import MainPage from "../pages/main-page";
import Favorites from "../pages/favorites";
import "../../styles/global.scss";
import getCats from "../../api/catsApi";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  const [favoriteCats, setFavoriteCats] = useState(() => {
    const favoriteCats = localStorage.getItem("favoriteCats");
    return favoriteCats ? JSON.parse(favoriteCats) : [];
  });
  const [cats, setCats] = useState();
  const [page] = useState(1);

  const addToFavorite = (card) => {
    if (favoriteCats.every((el) => el.id !== card.id)) {
      card.isLiked = true;
      setFavoriteCats((prevState) => [...prevState, card]);
    }
  };

  const removeFromFavorite = (card) => {
    const newState = favoriteCats.filter((el) => el.id !== card.id);
    setFavoriteCats(newState);
  };

  useEffect(() => {
    localStorage.setItem("favoriteCats", JSON.stringify(favoriteCats));
  }, [favoriteCats]);

  useEffect(() => {
    getCats(page, 15).then((res) => {
      setCats(res);
    });
  }, [page]);

  return (
    <HashRouter>
      <PageWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                catsData={cats}
                addToFavorite={addToFavorite}
                removeFromFavorite={removeFromFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                catsData={favoriteCats}
                addToFavorite={addToFavorite}
                removeFromFavorite={removeFromFavorite}
              />
            }
          />
        </Routes>
      </PageWrapper>
    </HashRouter>
  );
}

export default App;
