const initialState = {
  characters: [],
  favorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      const newFavorites = [...state.favorites, action.payload];
      console.log(action);
      return {
        ...state,
        favorites: newFavorites,
        allCharacters: newFavorites,
      };

    case "REMOVE_FAV":
      
      const updatedFavorites = state.favorites.filter(
        (fav) => fav.id !== action.payload.id
      );
      return {
        ...state,
        favorites: updatedFavorites,
      };

    case "FILTER":
      const matchesCharacters = state.favorites.filter(
        (character) => character.gender === action.payload
      );

      return {
        ...state,
        allCharacters: matchesCharacters,
      };

    case "ORDER":
      const sortedCharacters = [...state.favorites].sort((a, b) => {
        if (action.payload === "A") {
          return a.id - b.id; // ordenar de menor a mayor
        } else {
          return b.id - a.id; // ordenar de mayor a menor
        }
      });
      return {
        ...state,
        allCharacters: sortedCharacters,
      };

    case "ShowAllCharacters":
      
      return {
        ...state,
        allCharacters: state.favorites,
      };

    case "REMOVE":
      const updatedCharacters = state.allCharacters.filter(
        (ch) => ch.id !== action.payload
      );
      return {
        ...state,
        allCharacters: updatedCharacters,
      }

    default:
      return state;
  }
};

export default reducer;
