import { currentWeatherTypes } from "../actions/ActionsTypes";

const initialState = {
  currentWeather: {},
  message: "",
};

const CurrentWeather = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case currentWeatherTypes.GET_CURRENT_WEATHER_SUCCESS: {
      return { ...state, currentWeather: payload, message: "" };
    }
    case currentWeatherTypes.GET_CURRENT_WEATHER_FAILURE: {
      return { ...state, message: payload };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default CurrentWeather;
