
export const addFavorite = (id) => {
  
  return (dispatch) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "ADD_FAV",
          payload: data,
        });
      });
      
  };
};

export const removeFavorite = (id) => ({
  type: "REMOVE_FAV",
  payload: id
});