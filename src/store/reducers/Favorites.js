import { favoritesTypes } from "../actions/ActionsTypes";

const initialState = {
  favoritesList: [],
};

const Favorites = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case favoritesTypes.GET_FAVORITES: {
      return { ...state };
    }

    case favoritesTypes.ADD_FAVORITE: {
      console.log("favorites state", state.favoritesList);
      let newObj = { ...payload, idNumber: Date.now() };
      console.log("ADD_FAVORITE", newObj);
      return { ...state, favoritesList: [...state.favoritesList, newObj] };
    }

    case favoritesTypes.DELETE_FAVORITE: {
      let idToRemove = payload.idNumber;
      const newList = state.favoritesList.filter(
        (favorite) => favorite.idNumber !== idToRemove
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
