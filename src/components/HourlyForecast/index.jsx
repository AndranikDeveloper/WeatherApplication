import React from "react";
import "./style.css";

const HourlyForecast = ({ weather }) => {
  console.log(weather);
  return (
    <div>
      <div className="forecast">
        <p className="forecast-title">Hourly Forecast</p>
      </div>
      <hr className="forecast__line" />

      <div className="forecast__content">
        {weather.map((weatherItem) => (
          <div key={weatherItem.dt} className="content__info">
            <p className="content__text">{weatherItem.dt_txt.split(" ")[1]}</p>
            <img className="content__img" alt="" />
            <p className="content__info-degree">
              {weatherItem.main.temp.toFixed()}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
