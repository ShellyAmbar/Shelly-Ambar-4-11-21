const axios = require("axios");
export const getWeeklyWeatherCall = (
  apikey,
  locationKey,
  language,
  detailes,
  metric
) => {
  let url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apikey}&language=${language}&details=${detailes}&metric=${metric}`;
  return axios.get(url);
};
