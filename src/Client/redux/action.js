export const addFavorite = (id) => ({
  type: "ADD_FAV",
  payload: id,
});

export const removeFavorite = (id) => ({
  type: "REMOVE_FAV",
  payload: id,
});

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