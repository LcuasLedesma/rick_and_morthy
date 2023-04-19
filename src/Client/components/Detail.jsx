import React from "react";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import '../css/Detail.css';

export default function Detail(){
  const [character, setCharacter] = useState({})
  const { id } = useParams();
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
  }, [id]);

  

  return (
    <div className="detail-container">

      <div className="left-column">
        <h1 className="name">{character.name}</h1>
        <h2 className="property">Status: {character.status}</h2>
        <h2 className="property">Gender: {character.gender}</h2>
        <h2 className="property">Species: {character.species}</h2>
        <h2 className="property">Origin: {character.origin?.name}</h2>
      </div>

      <div className="right-column">
        <img className="character-image" src={character.image} alt={character.name} />
      </div>
      
    </div>
  );
  
}
