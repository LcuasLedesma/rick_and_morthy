import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterCards,
  orderCards,
  showAllCharacters,
} from "../redux/action";
import Card from "./card";
import "../css/index.css";

function Fav() {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    const selectedValue = e.target.value;
    const action = orderCards(selectedValue);
    setAux(true);
    dispatch(action);
  };

  const handleFilter = (e) => {
    const selectedValue = e.target.value;
    const action = filterCards(selectedValue);
    dispatch(action);
    setAux(true);
  };

  const handleShowAllCharacters = () => {
    const action = showAllCharacters();
    setAux(false);
    dispatch(action);
  };

  const favorites = useSelector((state) => state.favorites);
  const allCharacters = useSelector((state) => state.allCharacters);
  const isFavoritesAllCharacters =  aux === false;
  return (
    <main className="main-container">
      <div className="select-container">
        <select onChange={handleOrder}>
          <option value="" selected>
            Seleccione una opción
          </option>
          <option value="A">Ascendant</option>
          <option value="B">descending</option>
        </select>
        <button onClick={handleShowAllCharacters}>Show all Characters</button>
        <select onChange={handleFilter}>
          <option value="" selected>
            Seleccione una opción
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
  
      <div className="container">
        {isFavoritesAllCharacters
          ? favorites.map((fav) => (
              <Card
                key={fav.id}
                name={fav.name}
                species={fav.species}
                gender={fav.gender}
                image={fav.image}
                id={fav.id}
              />
            ))
          : allCharacters.map((fav) => (
              <Card
                key={fav.id}
                name={fav.name}
                species={fav.species}
                gender={fav.gender}
                image={fav.image}
                id={fav.id}
              />
            ))}
      </div>
    </main>
  );
}

export default Fav;
