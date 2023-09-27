import React, { useContext, useState } from "react";
import "./style.css";
import DailyForecast from "../DailyForecast";
import HourlyForecast from "../HourlyForecast";
import { useSelector } from "react-redux";
import { QueryContext } from "../../App";

const getWeather = (indexOfWeek, list) => {
  if (indexOfWeek === 0) {
    return list.slice(2, 10);
  }
  if (indexOfWeek === 1) {
    return list.slice(10, 18);
  }
  if (indexOfWeek === 2) {
    return list.slice(18, 26);
  }
  if (indexOfWeek === 3) {
    return list.slice(26, 34);
  }
  if (indexOfWeek === 4) {
    return list.slice(34);
  }
};

const Temprature = () => {
  const { list } = useSelector((state) => state.weatherReducer);
  const { indexOfWeek, setIndexOfWeek } = useContext(QueryContext);
  return (
    <div>
      <DailyForecast
        indexOfWeek={indexOfWeek}
        setIndexOfWeek={setIndexOfWeek}
      />
      <HourlyForecast weather={getWeather(indexOfWeek, list)} />
    </div>
  );
};

export default Temprature;
