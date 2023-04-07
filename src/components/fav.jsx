import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/action";
import Card from "./card";

function Fav() {
  const favorites = useSelector((state) => state.favorites);
  return (
    <div className="container">
      {favorites.map((fav) => (
        <Card 
        name={fav.name}
        species={fav.species}
        gender={fav.gender}
        image={fav.image}
        id = {fav.id}
      />
      ))}
    </div>
  );
}

export default Fav;
