import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import autoComplete from "./AutoComplete";
import currentWeather from "./CurrentWeather";
import favoritesWeather from "./Favorites";
import weeklyWeather from "./WeeklyWeather";

const rootPersistConfig = {
  key: "root",
  storage: storage,
};

const appReducer = combineReducers({
  auto: autoComplete,
  current: currentWeather,
  weekly: weeklyWeather,
  favorites: favoritesWeather,
});

export default persistReducer(rootPersistConfig, appReducer);
