
require('dotenv').config();

const STATUS_OK = 200;
const STATUS_ERROR = 500;

let favorites = [];

function postFav (req , res){
  const { id, name, gender, species, image, } = req.body;
  
  try {
    if (!id || !name || !species || !image || !gender) {
      res.status(STATUS_ERROR).json({message: 'Missing data'});
    }
    const character = {
      id, name, species, image, gender
    }
    
    favorites.push(character);
    res.status(STATUS_OK).json(character);
  } catch (error) {
    res.status(STATUS_ERROR).json({message: error});
  }
}


function deleteFav (req , res){
  const {id} = req.params;
  try {
    if (!id) {
      res.status(STATUS_ERROR).json({message: 'id not found'});
      return;
    }

    const character = favorites.find((character) => character.id === Number(id));
    res.status(STATUS_OK).json(character);
  } catch (error) {
    res.status(STATUS_ERROR).json({message: error});
  }
}



module.exports = {
  postFav,
  deleteFav,
}

// Crea una función llamada postFav que reciba por parámetro los objetos req y res.

// Agrega en tu arreglo de favoritos el personaje que estarás recibiendo por Body.

// Finalmente devuelve tu arreglo de favoritos en formato JSON.

// Crea una función llamada deleteFav que reciba por parámetro los objetos req y res.

// Filtra a tus personajes favoritos de manera que elimines aquel que tiene el mismo id que recibes por Params.

// Finalmente devuelve tu arreglo de favoritos en formato JSON.

// Exporta ambas funciones.