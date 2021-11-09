import { takeLatest, all } from "redux-saga/effects";

//Action types
import {
  autcompleteTypes,
  currentWeatherTypes,
  weeklyWeatherTypes,
} from "../actions/ActionsTypes";
import { getAutoComplete } from "./AutoComplete";
import { getCurrentWeather } from "./CurrentWeather";
import { getWeeklyWeather } from "./WeeklyWeather";

//Sagas
export default function* root() {
  yield all([
    yield takeLatest(autcompleteTypes.GET_AUTOCOMPLETE, getAutoComplete),
    yield takeLatest(
      currentWeatherTypes.GET_CURRENT_WEATHER,
      getCurrentWeather
    ),
    yield takeLatest(weeklyWeatherTypes.GET_WEEKLY_WEATHER, getWeeklyWeather),
  ]);
}
