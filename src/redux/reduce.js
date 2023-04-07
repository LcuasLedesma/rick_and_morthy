const initialState = {
  characters: [],
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      const newFavorites = [...state.favorites, action.payload];
      console.log(newFavorites);
      return {
        ...state,
        favorites: newFavorites,
      };
      case "REMOVE_FAV":
      const updatedFavorites = state.favorites.filter(
        (fav) => fav.id !== action.payload
      );
      return {
        ...state,
        favorites: updatedFavorites
      };
    case "FETCH_CHARACTERS_SUCCESS":
      return {
        ...state,
        characters: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
