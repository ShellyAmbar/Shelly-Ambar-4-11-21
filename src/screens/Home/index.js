import React, { useCallback, useEffect, useState } from "react";
import "./Home.css";
import SearchBar from "../../customs/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWeater } from "../../store/actions/CurrentWeather";
import { getWeeklyWeater } from "../../store/actions/WeeklyWeather";
import { addFavorite } from "../../store/actions/Favorites";
import WeatherView from "../../customs/WeatherView";
const Index = () => {
  const [location, setLocation] = useState(null);
  const [locationKey, setlocationKey] = useState(0);

  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);
  const { currentWeather } = useSelector((state) => state.current);
  const { weeklyWeather } = useSelector((state) => state.weekly);

  const handleCitySelected = (city) => {
    console.log("handleCitySelected called");
    setlocationKey(city.Key);
    setLocation(city);
  };

  useEffect(() => {
    console.log("useEffect location called");
    if (locationKey != 0) {
      stableDispatch(getCurrentWeater(locationKey));
      stableDispatch(getWeeklyWeater(locationKey));
    }
  }, [locationKey]);

  const handleClickCard = (cardData) => {
    console.log("cardData", cardData);
    dispatch(addFavorite(cardData));
  };
  useEffect(() => {
    //   console.log("currentWeather", currentWeather);
    //   console.log("weeklyWeather", weeklyWeather);
  }, [currentWeather]);
  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className="page-container"
    >
      <SearchBar onSearchClicked={handleCitySelected} />
      <div className="WeatherView">
        {location &&
          currentWeather &&
          currentWeather.data &&
          weeklyWeather &&
          weeklyWeather.data && (
            <WeatherView
              currentWeather={currentWeather.data[0]}
              weeklyWeather={weeklyWeather.data.DailyForecasts}
              handleClickCard={handleClickCard}
              location={location}
            />
          )}
      </div>
    </div>
  );
};

export default Index;
