import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { daysOfWeek } from "./service.js";
import cloudIcon from "../../assits/icons8-cloud-50.png";

const DailyForecast = ({ indexOfWeek, setIndexOfWeek }) => {
  const { list } = useSelector((state) => state.weatherReducer);

  const timestamp = list[0].dt;
  const date = new Date(timestamp);
  const dayOfWeek = date.getDay();

  let currentDays = [
    ...daysOfWeek.slice(dayOfWeek + 1, daysOfWeek.length),
    ...daysOfWeek.slice(0, dayOfWeek - 1),
  ];

  return (
    <div>
      <div className="forecast">
        <p className="forecast-title">Days</p>
      </div>
      <hr className="forecast__line" />

      <div className="forecast__content">
        {currentDays.map((item, index) => (
          <div
            key={item}
            className={
              indexOfWeek === index ? "content__info active" : "content__info"
            }
            onClick={() => setIndexOfWeek(index)}
          >
            <p className="content__text">{item}</p>
            <img className="content__img" src={cloudIcon} alt="clound" />
            <p className="content__info-degree"></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
