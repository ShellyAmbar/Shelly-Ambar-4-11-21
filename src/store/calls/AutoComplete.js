const axios = require("axios");
export const getAutoCompleteCall = (apikey, textToSearch, language) => {
  let url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&q=${textToSearch}&language=${language}`;
  console.log(url);
  return axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
