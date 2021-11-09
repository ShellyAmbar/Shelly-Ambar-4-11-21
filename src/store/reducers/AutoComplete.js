import { autcompleteTypes } from "../actions/ActionsTypes";

const initialState = {
  cities: [],
  message: "",
};

const AutoComplete = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case autcompleteTypes.GET_AUTOCOMPLETE_SUCCESS: {
      return { ...state, cities: payload, message: "" };
    }
    case autcompleteTypes.GET_AUTOCOMPLETE_FAILURE: {
      return { ...state, cities: [], message: payload };
    }
    case autcompleteTypes.CLEARE_AUTOCOMPLETE: {
      return { ...state, cities: payload, message: "" };
    }
    default: {
      return {
        ...state,
      };
    }
  }
  return state;
};

export default AutoComplete;
