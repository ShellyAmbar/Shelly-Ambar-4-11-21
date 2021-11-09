import { favoritesTypes } from "../actions/ActionsTypes";

const initialState = {
  favoritesList: [],
};

const Favorites = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case favoritesTypes.GET_FAVORITES: {
      return { ...state };
    }

    case favoritesTypes.ADD_FAVORITE: {
      console.log("ADD_FAVORITE", payload);
      console.log("favorites state", state.favoritesList);
      return { ...state, favoritesList: [...state.favoritesList, payload] };
    }

    case favoritesTypes.DELETE_FAVORITE: {
      let idToRemove = payload.id;
      const newList = state.favoritesList.filter(
        (favorite) => favorite.id !== idToRemove
      );
      return { ...state, favoritesList: [...newList] };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default Favorites;
