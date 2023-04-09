import React, { useState, useEffect } from "react";
import "./css/index.css";
import Nav from "./components/nav";
import axios from "axios";
import Cards from "./components/cards";
import About from "./components/about";
import Detail from "./components/Detail";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Form from "./components/Form";
import Fav from "./components/fav";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite, remove } from "./redux/action";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "probando11";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  function addRandomCharacter() {
    const randomId = Math.floor(Math.random() * 827) + 1;
    axios(`https://rickandmortyapi.com/api/character/${randomId}`).then(
      ({ data }) => {
        if (data.name) {
          // Verifica si el personaje ya está en la lista
          if (characters.some((character) => character.id === data.id)) {
            window.alert("¡Este personaje ya está en la lista!");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onSearch(id) {
    // Verifica si el personaje ya está en la lista
    if (characters.some((character) => character.id === parseInt(id))) {
      window.alert("¡Este personaje ya está en la lista!");
      return;
    }
  
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  const onClose = (id) => {
    
    setCharacters(characters.filter((character) => character.id !== id));
    dispatch(remove(id));
    dispatch(removeFavorite(id));
  };

  return (
    <div>
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} setAccess={setAccess} access={access} addRandomCharacter={addRandomCharacter}/>
      )}
      <Routes>
        <Route path="/Favorites" element={<Fav />} />
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/Home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
