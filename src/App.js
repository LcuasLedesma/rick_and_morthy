import React, { useState, useEffect} from "react";
import "./index.css";
import Nav from "./components/nav";
import axios from "axios";
import Cards from './components/cards'
import About from "./components/about";
import Detail from "./components/Detail";
import {Routes,Route,useLocation,useNavigate} from 'react-router-dom'
import Form from "./components/Form"


function App() {
  const location = useLocation();
  
  const [characters, setCharacters] = useState([]);
  
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = 'probando1';
  
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  function login (userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
}

  function onSearch(id) {
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

  const onClose = (id) =>{
    setCharacters(characters.filter(character => character.id !== id))
  }

  return (
      <div className="">
        {location.pathname !== "/" && <Nav onSearch={onSearch} setAccess={setAccess} access={access}/>}
        <Routes>
          <Route path="/" element={<Form login={login}/>} />
          <Route path="/Home" element={<Cards characters={characters} onClose={onClose} />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
  );
}

export default App;
