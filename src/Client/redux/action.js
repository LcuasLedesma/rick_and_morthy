import axios from "axios";

export const  addFavorite = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/favorite';
  return async (dispatch) => { 
    try {
      const response = await axios.post(endpoint, character);
      const data = response.data;
      if (data.name) {
        return dispatch({
          type: 'ADD_FAV',
          payload: data,
        });
      }  
    } catch (error) {
      console.log({message: error});
    }
  };
};

export const removeFavorite = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/favorite/' + id;
  return async (dispatch) => {
    try {
      const response = await axios.delete(endpoint);
      const data = response.data;
      if (data.name) {
        return dispatch({
          type: 'REMOVE_FAV',
          payload: data,
        });
      }
    } catch (error) {
      console.log({message: error});
    }
  }
};

export const filterCards = (gender) => ({
  type: "FILTER",
  payload: gender,
});

export const orderCards = (orden) => ({
  type: "ORDER",
  payload: orden,
});

export const showAllCharacters = () => ({
  type: "ShowAllCharacters",
});

export const remove = (id) => ({
  type: "REMOVE",
  payload: id
});