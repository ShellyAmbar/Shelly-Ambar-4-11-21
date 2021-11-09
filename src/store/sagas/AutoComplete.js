import {
  getAutocompleteFailure,
  getAutocompleteSuccess,
} from "../actions/AutoComplete";
import { call, put } from "redux-saga/effects";
import { getAutoCompleteCall } from "../calls/AutoComplete";

export function* getAutoComplete(data) {
  // console.log("getAutoComplete called", data.payload);
  const language = "en-us";
  const apikey = "Zr7Qv2nIfyzbJagXChLwzsEZnZw06b00";
  const stringToSearch = data.payload;
  try {
    const response = yield call(
      getAutoCompleteCall,
      apikey,
      stringToSearch,
      language
    );
    if (response && response.data) {
      console.log("response - autocomplete", response.data);
      yield put(getAutocompleteSuccess(response.data));
    } else {
      yield put(getAutocompleteFailure("No response"));
    }
  } catch {
    yield put(getAutocompleteFailure("Failed with error"));
  }
}
