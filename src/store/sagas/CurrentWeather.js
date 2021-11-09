import {
  getCurrentWeaterSuccess,
  getCurrentWeaterFailure,
} from "../actions/CurrentWeather";
import { getCurrentWeatherCall } from "../calls/CurrentWeather";
import { call, put } from "redux-saga/effects";
export function* getCurrentWeather(data) {
 // console.log("getCurrentWeather called", data.payload);
  const language = "en-us";
  const apikey = "Zr7Qv2nIfyzbJagXChLwzsEZnZw06b00";
  const detailes = false;
  const locationKey = data.payload;

  try {
    const response = yield call(
      getCurrentWeatherCall,
      apikey,
      locationKey,
      detailes,
      language
    );
    if (response) {
      // console.log(response);
      yield put(getCurrentWeaterSuccess(response));
    } else {
      yield put(getCurrentWeaterFailure("No response"));
    }
  } catch {
    yield put(getCurrentWeaterFailure("Failed with error"));
  }
}
