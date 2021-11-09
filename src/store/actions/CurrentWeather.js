import { currentWeatherTypes } from "./ActionsTypes";

export const getCurrentWeater = (payload) => {
  return {
    type: currentWeatherTypes.GET_CURRENT_WEATHER,
    payload,
  };
};

export const getCurrentWeaterSuccess = (payload) => {
  return {
    type: currentWeatherTypes.GET_CURRENT_WEATHER_SUCCESS,
    payload,
  };
};
export const getCurrentWeaterFailure = (payload) => {
  return {
    type: currentWeatherTypes.GET_CURRENT_WEATHER_FAILURE,
    payload,
  };
};
