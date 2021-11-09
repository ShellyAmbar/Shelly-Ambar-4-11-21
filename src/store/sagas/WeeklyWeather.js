import {
  getWeeklyWeaterSuccess,
  getWeeklyWeaterFailure,
} from "../actions/WeeklyWeather";
import { getWeeklyWeatherCall } from "../calls/WeeklyWeather";
import { call, put } from "redux-saga/effects";
export function* getWeeklyWeather(data) {
  // console.log("getWeeklyWeather called", data.payload);
  const detailes = false;
  const metric = false;
  const language = "en-us";
  const apikey = "Zr7Qv2nIfyzbJagXChLwzsEZnZw06b00";
  const locationKey = data.payload;

  try {
    const response = yield call(
      getWeeklyWeatherCall,
      apikey,
      locationKey,
      language,
      detailes,
      metric
    );
    if (response) {
      //  console.log(response);
      yield put(getWeeklyWeaterSuccess(response));
    } else {
      yield put(getWeeklyWeaterFailure("No response"));
    }
  } catch {
    yield put(getWeeklyWeaterFailure("Failed with error"));
  }
}
