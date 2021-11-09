import React from "react";
import "./SimpleCard.scss";

const index = ({ obj, handleClickCard }) => {
  console.log("obj - favorite card", obj);
  let icon =
    obj.WeatherIcon.toString().length === 1
      ? "0" + obj.WeatherIcon
      : obj.WeatherIcon;
  let date = obj.LocalObservationDateTime.toString();
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
            {/* <h2>{`${location.LocalizedName}, ${location.Country.LocalizedName}`}</h2> */}
            <h2>{`${obj.Temperature.Metric.Value} ${obj.Temperature.Metric.Unit}°`}</h2>
          </div>
        </div>
        <div className="header-right">
          <div
            onClick={() => handleClickCard(obj)}
            className="remove-favorites"
          >
            <h1>remove</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
