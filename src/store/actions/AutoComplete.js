import { autcompleteTypes } from "./ActionsTypes";
export const getAutocomplete = (payload) => {
  return {
    type: autcompleteTypes.GET_AUTOCOMPLETE,
    payload,
  };
};

export const cleareAutocomplete = (payload) => {
  return {
    type: autcompleteTypes.CLEARE_AUTOCOMPLETE,
    payload,
  };
};

export const getAutocompleteSuccess = (payload) => {
  return {
    type: autcompleteTypes.GET_AUTOCOMPLETE_SUCCESS,
    payload,
  };
};

export const getAutocompleteFailure = (payload) => {
  return {
    type: autcompleteTypes.GET_AUTOCOMPLETE_FAILURE,
    payload,
  };
};
