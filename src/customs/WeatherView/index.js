import "./WeatherView.css";
import React from "react";
import GrideView from "../GridView";

const Index = ({
  location,
  currentWeather,
  weeklyWeather,
  handleClickCard,
}) => {
  console.log("currentWeather - view", currentWeather);
  let icon =
    currentWeather.WeatherIcon.toString().length === 1
      ? "0" + currentWeather.WeatherIcon
      : currentWeather.WeatherIcon;
  let date = currentWeather.LocalObservationDateTime.toString();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date(date);
  var dayName = days[d.getDay()];
  var datTime = `${d.getHours()} ${d.getHours() >= 12 ? "PM" : "AM"}`;
  return (
    <div className="weather-container">
      <h2>{`${dayName}, ${datTime}`}</h2>
      <div className="weather-header">
        <div className="header-left">
          <img
            className="weather-icon"
            src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`}
          />
          <div className="description">
            <h2>{`${location.LocalizedName}, ${location.Country.LocalizedName}`}</h2>
            <h2>{`${currentWeather.Temperature.Metric.Value} ${currentWeather.Temperature.Metric.Unit}`}</h2>
          </div>
        </div>
        <div className="header-right">
          <div
            onClick={() => handleClickCard(currentWeather)}
            className="add-favorites"
          >
            <h1>Add to favories</h1>
            <span className="icon-favorites">
              <i class="far fa-heart" />
            </span>
          </div>
        </div>
      </div>
      <div className="weather-body">
        <h1>{currentWeather.WeatherText}</h1>
        <GrideView className="GrideView" data={weeklyWeather} isRow={true} />
      </div>
    </div>
  );
};

export default Index;
