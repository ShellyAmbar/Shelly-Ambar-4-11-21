import { weeklyWeatherTypes } from "./ActionsTypes";

export const getWeeklyWeater = (payload) => {
  return {
    type: weeklyWeatherTypes.GET_WEEKLY_WEATHER,
    payload,
  };
};

export const getWeeklyWeaterSuccess = (payload) => {
  return {
    type: weeklyWeatherTypes.GET_WEEKLY_WEATHER_SUCCESS,
    payload,
  };
};
export const getWeeklyWeaterFailure = (payload) => {
  return {
    type: weeklyWeatherTypes.GET_WEEKLY_WEATHER_FAILURE,
    payload,
  };
};
