import { favoritesTypes } from "./ActionsTypes";
//GET
export const getFavorites = (payload) => {
  return {
    type: favoritesTypes.GET_FAVORITES,
    payload,
  };
};

//UPDATE

export const addFavorite = (payload) => {
  return {
    type: favoritesTypes.ADD_FAVORITE,
    payload,
  };
};

//DELETE
export const deleteFavorite = (payload) => {
  return {
    type: favoritesTypes.DELETE_FAVORITE,
    payload,
  };
};
