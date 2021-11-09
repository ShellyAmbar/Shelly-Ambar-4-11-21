import React from "react";
import "./Card.scss";
const Index = ({ obj }) => {
  let maxDeg = (obj.Temperature.Maximum.Value - 32) / 1.8;
  let minDeg = (obj.Temperature.Minimum.Value - 32) / 1.8;
  let fixMaxDeg = (Math.round(maxDeg * 100) / 100).toFixed(2);
  let fixMinDeg = (Math.round(minDeg * 100) / 100).toFixed(2);
  let iconDayNum =
    obj.Day.Icon.toString().length === 1 ? "0" + obj.Day.Icon : obj.Day.Icon;
  let iconNightNum =
    obj.Night.Icon.toString().length === 1
      ? "0" + obj.Night.Icon
      : obj.Night.Icon;
  let date = obj.Date.toString();
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
    <div className="card-wrapper-slider">
      <div className="card-slider">
        <h1>{`${dayName}, ${datTime}`}</h1>
        <div className="card-image-slider">
          <div className="card-header">
            <div className="card-header-item">
              <h1>{`Day - ${obj.Day.IconPhrase}`}</h1>
              <img
                className="card-weather-img"
                src={`https://developer.accuweather.com/sites/default/files/${iconDayNum}-s.png`}
              />
            </div>
            <div className="card-header-item">
              <h1>{`Night - ${obj.Night.IconPhrase}`}</h1>
              <img
                className="card-weather-img"
                src={`https://developer.accuweather.com/sites/default/files/${iconNightNum}-s.png`}
              />
            </div>
          </div>
          <div className="card-bottom">
            <h1 className="temp">{`Max: ${fixMaxDeg}C`}</h1>
            <h1 className="temp">{`Min: ${fixMinDeg}C`}</h1>
          </div>
        </div>

        <ul className="social-icons-slider">
          <li>
            <button
              className="icon-btn"
              onClick={() => {
                window.open(`${obj.Link}`);
              }}
            >
              <i class="fab fa-staylinked"></i>
            </button>
          </li>
        </ul>

        <div className="details-slider"></div>
      </div>
    </div>
  );
};
export default Index;
