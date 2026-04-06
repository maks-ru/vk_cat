import React from "react";
import CatCard from "../../ui/cat-card/cat-card";
import "../../../styles/cats.scss";

function Cats({ addToFavorite, removeFromFavorite, catsData }) {
  return (
    <section className="cats-section">
      {catsData && catsData.length ? (
        <ul className="cats-ul">
          {catsData.map((catData) => (
            <li className="cats-li" key={catData.id}>
              <CatCard
                {...catData}
                addToFavorite={addToFavorite}
                removeFromFavorite={removeFromFavorite}
                id={catData.id}
                card={catData}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export default Cats;
