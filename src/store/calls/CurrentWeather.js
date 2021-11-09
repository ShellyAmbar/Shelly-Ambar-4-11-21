const axios = require("axios");
export const getCurrentWeatherCall = (
  apikey,
  locationKey,
  detailes,
  language
) => {
  let url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apikey}&language=${language}&details=${detailes}`;
  return axios.get(url);
};
