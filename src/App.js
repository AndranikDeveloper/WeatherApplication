import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import Temprature from "./components/Temprature";
// import { getCurrentWeather } from "./components/WeatherService/weatherService.ts";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWeather } from "./store/thunk.ts";

export const QueryContext = createContext("Error with Provider");

function App() {
  const [query, setQuery] = useState("yerevan");
  const [indexOfWeek, setIndexOfWeek] = useState(0);

  const [units, setUnits] = useState("metric");
  const dispatch = useDispatch();

  const weather = useSelector((state) => state.weatherReducer.list);

  useEffect(() => {
    dispatch(getCurrentWeather({ units, q: query }));
  }, [query, units]);

  return (
    <div className="app">
      {weather.length && (
        <div>
          <QueryContext.Provider
            value={{
              query,
              units,
              indexOfWeek,
              setIndexOfWeek,
              setUnits,
              setQuery,
            }}
          >
            <Inputs />
            <TimeAndLocation />
            <Temprature />
          </QueryContext.Provider>
        </div>
      )}
    </div>
  );
}

export default App;
