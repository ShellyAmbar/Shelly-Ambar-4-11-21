import { weeklyWeatherTypes } from "../actions/ActionsTypes";

const initialState = {
  weeklyWeather: [],
  message: "",
};

const WeeklyWeather = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case weeklyWeatherTypes.GET_WEEKLY_WEATHER_SUCCESS: {
      return { ...state, weeklyWeather: payload, message: "" };
    }
    case weeklyWeatherTypes.GET_WEEKLY_WEATHER_FAILURE: {
      return { ...state, message: payload };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default WeeklyWeather;
